#!/data/data/com.termux/files/usr/bin/bash

BASE_DIR="$HOME/Project-2"
PROJECT_MAP_DIR="$BASE_DIR/project-map"
UPDATE_SCRIPT="$PROJECT_MAP_DIR/update-project-map.sh"

cd "$BASE_DIR" || exit 1

# ✅ প্রথমে একবার চালাও
bash "$UPDATE_SCRIPT"

# 🔁 তারপর রিয়েল টাইমে পরিবর্তন মনিটর করো
while inotifywait -r -e modify,create,delete,move .; do
    bash "$UPDATE_SCRIPT"
done
