
# STOCK & FOUND MARKET — NO STANDALONE 88

Nuova regola di brand:

- NO standalone "88"
- SI "EST. 1988"
- il nome è STOCK & FOUND MARKET
- 1988 resta come dato storico/origine
- niente "S&F / 88", "FND.088", "ARCHIVE 88", grandi 88 decorativi.

Installazione:

cd ~/storage/downloads/StockAndFound88
unzip -o STOCK-AND-FOUND-MARKET-NO-88.zip
sed -i 's#</head>#<link rel="stylesheet" href="no-88.css?v=93.1"></head>#' index.html
sed -i 's#</body>#<script src="js/no-88.js?v=93.1"></script></body>#' index.html
git add .
git commit -m "Remove standalone 88 brand code"
git push origin main

Nota: il codice non rimuove "1988", quindi "EST. 1988" rimane.
