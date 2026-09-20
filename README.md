
# STOCK & FOUND MARKET — REAL LOGO IMAGE V1

Questa versione usa realmente l'immagine generata del logo nel sito.

File:
assets/stock-found-market-logo.png

Il logo viene montato:
- nell'header;
- nel footer quando esiste un'area brand compatibile.

La sorgente PNG NON viene modificata.
Il CSS ritaglia solo lo spazio vuoto dell'immagine per adattarla all'header.

Brand:
STOCK & FOUND MARKET
EST. 1988

Installazione:

cd ~/storage/downloads/StockAndFound88
unzip -o STOCK-AND-FOUND-MARKET-LOGO-IMAGE-V1.zip
sed -i 's#</head>#<link rel="stylesheet" href="real-logo.css?v=95.1"></head>#' index.html
sed -i 's#</body>#<script src="js/real-logo.js?v=95.1"></script></body>#' index.html
git add .
git commit -m "Use Stock and Found Market generated logo"
git push origin main
