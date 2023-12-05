# VUE EMAIL LIST

#### CONSEGNA DELL'ESERCIZIO 

```
Attraverso l'apposita API di Boolean
https://flynn.boolean.careers/exercises/api/random/mail
generare 10 indirizzi email e stamparli in pagina all'interno di una lista.
Create una pagina "graziosa" senza utilizzare bootstrap.
Bonus
Far comparire gli indirizzi email solamente quando sono stati tutti generati.

```

#### SVOLGIMENTO

- Per prima cosa importiamo la CDN di Axios nel nostro header.
- Predisponiamo una struttura HTML e una stilizzazione CSS della nostra lista di email.
- Dichiriamo una variabile nel nostro data() che sarà un array vuoto chiamato **emails**.
- Dichiariamo anche l'URL dal quale dobbiamo fare la call, in una variabile, per comodità.
- Definiamo una funzione in methods che fa la chiamata tramite axios, e pusha il .data.response nel nostro array vuoto. In questo modo ogni volta che la funzione verrà invocata avremo una nuova email sotto forma di stringa nel nostro array.
- Per ottenere 10 email nella nostra sezione created()(ma possiamo farlo anche nel mounted()), inizializziamo un ciclo for che invoca per 10 volta la funzione, cosicchè avremo 10 email.
- Tramite un v-for nel nostro **li** della **ul**, andiamo a stampare dinamicamente tutte le nostre email.
- Per far comparire gli indirizzi solo quando sono stati ottenuti tutti e 10, dichiariamo una condizione nel v-show della **ul**, che sarà true solo quando emails.length sarà === 10.



