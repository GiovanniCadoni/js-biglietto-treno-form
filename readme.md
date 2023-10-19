## Esercizio

Il programma dovrà chiedere all'utente il numero di chilometri che vuole percorrere e l'età del passeggero.
Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:
- il prezzo del biglietto è definito in base ai km (0.21 € al km).

Inoltre:
- Bambini:  va applicato uno sconto del 20% per i minorenni
- Anziani:  va applicato uno sconto del 40% per gli over 65.

L'output del prezzo finale va messo fuori in forma umana (con massimo due decimali, per indicare centesimi sul prezzo).

Inizialmente implementiamo il programma senza alcuna estetica: usando esclusivamente due input e un bottone (non stilizzati). La risposta finale (o output) sarà anch’essa da scrivere in console.

Dopo che la prima parte sarà completa e funzionante allora realizzeremo un form in pagina in cui l’utente potrà inserire i dati e visualizzare il calcolo finale con il prezzo.
Il recap dei dati e l'output del prezzo finale, andranno quindi stampati in pagina.

**Dati richiesti:**
1. Numero di chilometri che il cliente ha intenzione di percorrere.
2. Età del cliente, in modo da poter beneficiare dello sconto corretto.

**Procedimento per i vari calcoli:**
1. Andiamo a chiedere al nostro cliente il suo nome.
1. Andiamo a chiedere al nostro cliente quanti chilometri deve percorrere.
2. Andiamo a chiedere al nostro cliente la sua età.
3. Procediamo a calcolare il prezzo totale tramite il prodotto dei km decisi dal cliente per il prezzo per km (x * 0.21).
4. Applichiamo l'eventuale sconto nel caso l'età del cliente rientri nei due intervalli (x<18 || x>65).


**Procedimento per la visualizzazione:**
1. Una volta calcolati i vari prezzi andiamo a visualizzare il resoconto finale nel nostro html.
