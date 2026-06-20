#!/usr/bin/env python3
"""Fetch a YouTube video's captions and print clean, deduped transcript.

Usage:
    python3 get_transcript.py <youtube_url> [--no-timestamps]

Output (stdout):
    TITLE: <video title>
    CHANNEL: <uploader>
    URL: <canonical url>
    DURATION: <hh:mm:ss>
    ---
    [00:00] line text
    [00:04] line text
    ...

Captions only (no audio download). Restricts to English tracks to avoid the
auto-translate cascade that triggers HTTP 429. Exits non-zero with a clear
message if no captions exist (caller should report this, not invent content).
"""
import json
import os
import re
import subprocess
import sys
import tempfile

LANGS = "en,en-orig,en-US,en-GB"


def run(cmd):
    return subprocess.run(cmd, capture_output=True, text=True)


def get_meta(url):
    r = run(["yt-dlp", "--skip-download", "--dump-single-json", url])
    if r.returncode != 0:
        sys.stderr.write("metadata fetch failed:\n" + r.stderr + "\n")
        sys.exit(2)
    d = json.loads(r.stdout)
    return {
        "title": d.get("title", "Unknown"),
        "channel": d.get("uploader", d.get("channel", "Unknown")),
        "url": d.get("webpage_url", url),
        "duration": fmt_secs(d.get("duration") or 0),
    }


def fmt_secs(s):
    s = int(s)
    h, m, sec = s // 3600, (s % 3600) // 60, s % 60
    return f"{h:02d}:{m:02d}:{sec:02d}" if h else f"{m:02d}:{sec:02d}"


def fetch_vtt(url, tmp):
    out = os.path.join(tmp, "sub")
    # try manual subs first, then auto-captions; English only
    for flag in ("--write-subs", "--write-auto-subs"):
        run([
            "yt-dlp", "--skip-download", flag,
            "--sub-langs", LANGS, "--sub-format", "vtt",
            "-o", out + ".%(ext)s", url,
        ])
        for f in os.listdir(tmp):
            if f.endswith(".vtt"):
                return os.path.join(tmp, f)
    return None


TS = re.compile(r"(\d{2}):(\d{2}):(\d{2})\.\d{3}\s*-->")
TAG = re.compile(r"<[^>]+>")


def parse_vtt(path):
    """Return list of (mm:ss, text), deduped for rolling auto-captions."""
    lines = []
    cur_ts = None
    with open(path, encoding="utf-8") as fh:
        raw = fh.read()
    for blk in raw.split("\n"):
        m = TS.search(blk)
        if m:
            h, mm, s = int(m[1]), int(m[2]), int(m[3])
            total = h * 3600 + mm * 60 + s
            cur_ts = f"{total // 60:02d}:{total % 60:02d}"
            continue
        if blk.strip() in ("", "WEBVTT") or blk.startswith(("Kind:", "Language:")):
            continue
        txt = TAG.sub("", blk).strip()
        if not txt:
            continue
        if lines and lines[-1][1] == txt:  # dedupe repeats
            continue
        lines.append((cur_ts or "00:00", txt))
    # collapse exact consecutive dup text from overlapping cues
    out, seen_last = [], None
    for ts, txt in lines:
        if txt != seen_last:
            out.append((ts, txt))
            seen_last = txt
    return out


def main():
    args = [a for a in sys.argv[1:] if not a.startswith("--")]
    no_ts = "--no-timestamps" in sys.argv
    if not args:
        sys.stderr.write("usage: get_transcript.py <url> [--no-timestamps]\n")
        sys.exit(1)
    url = args[0]
    meta = get_meta(url)
    with tempfile.TemporaryDirectory() as tmp:
        vtt = fetch_vtt(url, tmp)
        if not vtt:
            sys.stderr.write(
                "NO CAPTIONS: video has no English captions. "
                "Report this to the user; do not fabricate a transcript.\n"
            )
            sys.exit(3)
        lines = parse_vtt(vtt)
    print(f"TITLE: {meta['title']}")
    print(f"CHANNEL: {meta['channel']}")
    print(f"URL: {meta['url']}")
    print(f"DURATION: {meta['duration']}")
    print("---")
    for ts, txt in lines:
        print(txt if no_ts else f"[{ts}] {txt}")


if __name__ == "__main__":
    main()
