
# STOCK & FOUND MARKET — BRAND SYSTEM V1

Questa è la prima vera brandizzazione trasversale del sito.

## BRAND SYSTEM

Nome:
STOCK & FOUND MARKET

Heritage:
EST. 1988

Palette:
BLACK #080808
PAPER #F3F2ED
ACID #D8FF32
RED #FF4A2F (accent secondario, da usare raramente)

Linguaggio:
- market / archive / editorial
- tipografia molto grande
- micro-label mono
- griglie dure
- bordi sottili
- zero rounded cards
- black / paper / acid
- nessun teal legacy
- scarcity solo se reale

## Pagine coperte

- index.html
- shop.html
- product.html
- finder.html
- checkout.html
- order-confirmation.html (se presente)

## Cosa fa

- applica palette e tipografia;
- normalizza bottoni;
- brandizza header;
- usa il logo PNG reale;
- uniforma cards, filtri, product page, finder e checkout;
- uniforma mobile menu, search e cart;
- uniforma footer;
- rimuove i codici 88 isolati;
- conserva EST. 1988;
- neutralizza vecchi blocchi teal.

## INSTALLAZIONE

Aggiungere il CSS a tutte le pagine:

<link rel="stylesheet" href="brand-system.css?v=96.1">

e lo script prima di </body>:

<script src="js/brand-system.js?v=96.1"></script>

L'asset deve stare in:
assets/stock-found-market-logo.png

## NOTA

Questa V1 è una brand layer globale sopra l'engine esistente.
Il passo successivo, dopo verifica visiva, è incorporare definitivamente i token
nel CLEAN ENGINE e rimuovere i vecchi patch layer.
