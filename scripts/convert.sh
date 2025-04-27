#!/usr/bin/env bash
set -e
in="$1"; slug="$2"; out="imgs/$slug"; mkdir -p "$out"
gs -dNOPAUSE -sDEVICE=pngalpha -r200 -sOutputFile="$out/page-%03d.png" "$in" -c quit
magick "$out"/page-*.png -quality 82 "$out/page-%03d.webp"
rm "$out"/page-*.png
