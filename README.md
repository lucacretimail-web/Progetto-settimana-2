# Amazon Homepage — Week Project

Piccola pagina dimostrativa ispirata a una homepage Amazon, realizzata con HTML, CSS e JavaScript.

## HTML

La pagina è divisa in intestazione, contenuto principale e piè di pagina. Le categorie e i prodotti sono organizzati in elementi HTML con classi CSS.

tag semantici come `<header>`, `<main>`, `<section>` e `<footer>` descrivono le parti della pagina. I tag `<a>` creano collegamenti, mentre `<button>` permette di avviare un'azione. Gli attributi `class` associano gli elementi agli stili CSS e permettono di trovarli con JavaScript; `src` collega il file JavaScript alla pagina.

## CSS

Il foglio di stile definisce colori, spaziature e disposizione fissa della pagina. Usa griglie per categorie e prodotti, oltre a effetti hover e stati di selezione.

le variabili personalizzate in `:root` raccolgono i colori e si richiamano con `var(...)`. I selettori, per esempio `.product-card`, scelgono quali elementi stilizzare. `display: grid` dispone le schede in colonne, mentre `display: flex` allinea elementi in una riga o colonna. `:hover` applica uno stile al passaggio del cursore; `::before` mostra un contenuto decorativo prima del contenuto HTML. Le regole `@media` possono adattare gli stili a condizioni specifiche, come la preferenza per il movimento ridotto.

## JavaScript

I prodotti sono salvati in un array di oggetti. La pagina genera le schede prodotto e aggiorna il contatore del carrello quando si preme il pulsante.

`const` dichiara dati che non vengono riassegnati, come l'elenco dei prodotti; `let` dichiara valori che possono cambiare. Ogni prodotto è un oggetto con proprietà, per esempio `prezzo`, `rating` e `disponibile`. Le funzioni, come `formattaPrezzo()` e `stelline()`, raccolgono operazioni riutilizzabili e possono ricevere dati tramite parametri e restituire un risultato con `return`.

Il ciclo `for` ripete un'operazione per ogni prodotto; `if/else` sceglie quale blocco eseguire. `filter()` crea un nuovo elenco che contiene solo gli elementi che rispettano una condizione. Con `document.querySelector()` si trova un elemento HTML; `createElement()`, `innerHTML` e `appendChild()` servono a creare e inserire le schede prodotto. `addEventListener("click", ...)` collega un'azione al clic. Il contatore del carrello usa una funzione interna che conserva il numero degli articoli tra un clic e l'altro.
