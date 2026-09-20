# Logo Background Fix V2

This is a code-only fix.

The existing `assets/stock-found-market-logo.png` is preserved. The header
uses `mix-blend-mode: darken` so the light canvas of the logo visually
disappears into the Stock & Found paper background, while the black logo
artwork and acid-green detail remain visible.

It also removes any wrapper background/box and keeps the footer treatment
dark.

Deploy:

cd ~/storage/downloads/StockAndFound88 && unzip -o STOCK-AND-FOUND-LOGO-BACKGROUND-FIX-V2.zip && for f in index.html shop.html product.html finder.html checkout.html order-confirmation.html; do sed -i 's#</head>#<link rel="stylesheet" href="logo-background-fix-v2.css?v=99.2"></head>#' "$f"; done && git add . && git commit -m "Remove logo background box with brand compositing" && git push origin main
