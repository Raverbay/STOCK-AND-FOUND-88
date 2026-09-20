
# Stock & Found 88 — Market Story V3

This patch redesigns the Market Story section shown on the homepage.

## What changes
- Removes excessive vertical dead space on mobile.
- Establishes a stronger editorial hierarchy.
- Turns the story into a compact LOOK → SPOT → CLAIM interaction.
- Adds a contextual hunt bar.
- Makes story steps clickable.
- Adds subtle reveal motion.
- Keeps the paper / black / acid-green visual language.
- Does not introduce fake scarcity, fake social proof or fake timers.

## Install
From the repo root:

    unzip -o STOCK-AND-FOUND-MARKET-STORY-V3.zip
    for f in *.html; do grep -q 'market-story-v3.css' "$f" || sed -i 's#</head>#<link rel="stylesheet" href="market-story-v3.css?v=100.1"></head>#' "$f"; done
    sed -i 's#</body>#<script src="js/market-story-v3.js?v=100.1"></script></body>#' index.html
    git add .
    git commit -m "V3 redesign Market Story experience"
    git push origin main

## Note
This is a layer on top of the current Market Story implementation. It is intentionally reversible.
