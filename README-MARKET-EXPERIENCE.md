STOCK & FOUND 88 — MARKET EXPERIENCE V1
========================================

This patch changes the experience from "fashion catalog" to "digital market".

FILES
- market.css
- js/market.js
- MARKET-EXPERIENCE.md
- README-MARKET-EXPERIENCE.md

IMPORTANT
market.js loads data/products.json independently, so no change to app.js is required.

Include both files on index.html, shop.html and finder.html:

<link rel="stylesheet" href="market.css?v=89.1">
<script src="js/market.js?v=89.1"></script>

The script can load after js/app.js; it is independent of the existing catalog/cart code.

RECOMMENDED DEPLOYMENT
1. Unzip the patch.
2. Add the bridge line to js/app.js.
3. Add market.css to the head of index/shop/finder.
4. Add market.js after app.js on those pages.
5. Commit and push.
6. Test desktop + mobile.

The layer is deliberately additive so the existing product/cart system remains intact.