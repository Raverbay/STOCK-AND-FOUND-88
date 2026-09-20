
# STOCK & FOUND MARKET — HEADER BG FIX

Correzione esclusivamente CSS/JS.

Il quadrato visibile dietro il logo generato ha, dallo screenshot,
il colore RGB:

239, 236, 227
#EF ECE3

Il nuovo header usa esattamente #EFECE3, così il fondo del PNG e il
fondo dell'header risultano visivamente continui.

Non viene modificata, rigenerata o ritoccata alcuna immagine.

Installazione:

cd ~/storage/downloads/StockAndFound88
unzip -o STOCK-AND-FOUND-MARKET-HEADER-BG-FIX.zip

for f in index.html shop.html product.html finder.html checkout.html order-confirmation.html; do
  if [ -f "$f" ]; then
    sed -i 's#</head>#<link rel="stylesheet" href="header-bg-fix.css?v=98.1"></head>#' "$f"
    sed -i 's#</body>#<script src="js/header-bg-fix.js?v=98.1"></script></body>#' "$f"
  fi
done

git add .
git commit -m "Match header background to logo artwork"
git push origin main
