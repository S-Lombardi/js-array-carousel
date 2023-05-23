
1-creo il markup statico: container e un'immagine grande al centro
2-rimuovo tutto il markup statico e inserisco tutte le immagini dinamicamente con un ARRAY fornito e un CICLO for che concatena un template literal.
3-Tutte le immagini saranno nascoste, tranne la prima, che avrà una classe display:block che la renderà visibile.
Al termine di questa fase ci ritroveremo con lo stesso slider stilato nella milestone 1, ma costruito dinamicamente attraverso JavaScript.

Al click dell'utente sulle frecce, il programma cambierà l’immagine attiva, che quindi verrà visualizzata al posto della precedente.

4- Assegno una variabile alla classe alla quale ho dato display:block;

5-Creo due variabili per assegnare i due pulsanti "Avanti" e "indietro";

6-Creo un evento quando clicco sul pulsante "Avanti"
   6.1 SE l'immagine che sto visualizzando è < di immagini.length - 1 ( n-1 = lunghezza dell'array che contiene le immagini) allora --> rimuovo la classe display:block, aumento di 1 l'indice delle immagini e aggiungo la classe display:block

7-Creo un evento quando clicco sul pulsante "Indietro"
   7.1 SE l'immagine che sto visualizzando è >  dell'indice 0  allora --> rimuovo la classe display:block, diminuisco di 1 l'indice delle immagini e aggiungo la classe display:block