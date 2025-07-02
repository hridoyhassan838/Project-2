#!/data/data/com.termux/files/usr/bin/bash

# ✅ বাদ তালিকা (space দিয়ে আলাদা করুন)
EXCLUDE_DIRS=".git node_modules project-map .next"

# ✅ প্রোজেক্টের মূল ফোল্ডার ও টার্গেট ফাইল
BASE_DIR="$HOME/Project-2"
PROJECT_MAP_DIR="$BASE_DIR/project-map"
TREE_FILE="$PROJECT_MAP_DIR/all-tree.text"

# 🔁 BASE_DIR এ যাও
cd "$BASE_DIR" || exit 1

# 🔍 exclude pattern বানাও (eg: .git|node_modules|project-map)
EXCLUDE_PATTERN=$(echo "$EXCLUDE_DIRS" | sed 's/ /|/g')

# 📄 tree কমান্ড চালিয়ে all-tree.text ফাইলে লিখে ফেলি
tree -a -I "$EXCLUDE_PATTERN" > "$TREE_FILE"

# ✅ নোটিফিকেশন
echo "✅ Tree updated at $TREE_FILE"
