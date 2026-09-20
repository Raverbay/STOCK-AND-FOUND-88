
# STOCK & FOUND MARKET — HEADER / FOOTER LOGO FIX

OBIETTIVO

Uniformare il logo su:
- Home
- The Hunt / Shop
- Product
- Finder
- Checkout
- Order confirmation
- qualsiasi altra pagina che usa l'header dinamico.

IMPORTANTE

Non viene creata né modificata alcuna immagine.
Viene utilizzato il PNG del logo già presente in:
assets/stock-found-market-logo.png

Il codice:
- elimina il crop enorme visto nello screenshot;
- mantiene il rapporto originale;
- usa l'immagine intera nell'header;
- usa un trattamento CSS per far sparire visivamente il fondo paper sull'header;
- usa lo stesso asset nel footer con trattamento dark;
- impedisce che le vecchie versioni del logo ricompaiano quando app.js ricrea l'header.

INSTALLAZIONE

Copia lo ZIP in Download e poi:

cd ~/storage/downloads/StockAndFound88
unzip -o STOCK-AND-FOUND-MARKET-HEADER-FOOTER-FIX.zip
for f in index.html shop.html product.html finder.html checkout.html order-confirmation.html; do
  if [ -f "$f" ]; then
    sed -i 's#</head>#<link rel="stylesheet" href="header-footer-logo-fix.css?v=97.1"></head>#' "$f"
    sed -i 's#</body>#<script src="js/header-footer-logo-fix.js?v=97.1"></script></body>#' "$f"
  fi
done
git add .
git commit -m "Unify Stock and Found Market logo across site"
git push origin main
