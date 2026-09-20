
# STOCK & FOUND 88 — PERSONALITY PATCH

Questa non è una nuova palette o un altro template.
È un layer di art direction per togliere l'aspetto "e-commerce template"
e costruire codici riconoscibili del brand.

Direzione:
- MARKET ARCHIVE
- FOUND / LAST LOOK
- 88 come codice visivo
- acid green come unico accento proprietario
- nero/paper come base
- etichette da mercato
- composizioni volutamente non perfettamente simmetriche
- manifesto invece di stock-photo section

INSTALLAZIONE:

cd ~/storage/downloads/StockAndFound88
unzip -o STOCK-AND-FOUND-88-PERSONALITY-01.zip
sed -i 's#</head>#<link rel="stylesheet" href="personality-01.css?v=91.1"></head>#' index.html
sed -i 's#</body>#<script src="js/personality-01.js?v=91.1"></script></body>#' index.html
git add .
git commit -m "Stock and Found personality art direction"
git push origin main

Nota: questo è volutamente un esperimento di identità.
Se la direzione piace, il passo successivo è incorporare questi codici nel motore pulito
e smettere di stratificare patch.
