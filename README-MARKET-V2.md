
# STOCK & FOUND 88 — MARKET EXPERIENCE V2

Questo patch interviene sulla parte bassa della Home con due obiettivi:

1. correggere il responsive mobile;
2. dare al brand una direzione grafica più proprietaria.

## Cosa cambia

- mobile full-width e overflow orizzontale bloccato;
- categorie con gerarchia editoriale;
- Brands trasformato in un piccolo archivio numerato;
- Market Story / Since 1988 trasformato in un vero capitolo narrativo;
- grande tipografia proprietaria;
- codici `FND.088`, `MARKET → ONLINE`, `WE GO LOOKING`;
- closing più forte;
- newsletter integrata nello stesso sistema visivo;
- nessuna modifica al catalogo prodotti.

## Installazione

Il patch va caricato DOPO styles.css e market.css.

Per index.html:

<link rel="stylesheet" href="market-v2.css?v=90.1">

e prima di </body>:

<script src="js/market-v2.js?v=90.1"></script>

## Nota

È volutamente un layer di art-direction sopra l'architettura attuale.
Dopo il test mobile/desktop possiamo trasformare questa direzione nella V8 CLEAN ENGINE,
eliminando progressivamente i vecchi layer V4/V5/V6.
