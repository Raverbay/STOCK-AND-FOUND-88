
# STOCK & FOUND MARKET — LOGO FIX

Corregge i problemi visibili nello screenshot:

1. elimina il vecchio MARKET posizionato sotto EST. 1988;
2. crea un lockup controllato:
   STOCK & FOUND
          MARKET
   EST. 1988
3. sistema il CTA Hero che appariva come un rettangolo enorme;
4. neutralizza il vecchio blocco teal della Home.

Il brand resta:
STOCK & FOUND MARKET
EST. 1988

Installazione:

cd ~/storage/downloads/StockAndFound88
unzip -o STOCK-AND-FOUND-MARKET-LOGO-FIX.zip
sed -i 's#</head>#<link rel="stylesheet" href="logo-fix.css?v=94.1"></head>#' index.html
sed -i 's#</body>#<script src="js/logo-fix.js?v=94.1"></script></body>#' index.html
git add .
git commit -m "Fix Stock and Found Market logo and hero CTA"
git push origin main
