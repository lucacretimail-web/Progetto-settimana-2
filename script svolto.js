/* VERSIONE INTERMEDIA — Array prodotti */
const prodotti = [
  {
    id: 1,
    nome: "Cuffie",
    descrizione: "Cuffie wireless con cancellazione del rumore",
    categoria: "Elettronica",
    prezzo: 89.99,
    rating: 4.2,
    immagine: "Cuffie",
    disponibile: true
  },
  {
    id: 2,
    nome: "Tablet",
    descrizione: "Tablet 10 pollici 64GB",
    categoria: "Elettronica",
    prezzo: 199,
    rating: 4.7,
    immagine: "Tablet",
    disponibile: true
  },
  {
    id: 3,
    nome: "Libro",
    descrizione: "Il romanzo dell'anno",
    categoria: "Libri",
    prezzo: 14.9,
    rating: 4,
    immagine: "Libro",
    disponibile: true
  },
  {
    id: 4,
    nome: "Zaino",
    descrizione: "Zaino da viaggio 30L impermeabile",
    categoria: "Abbigliamento",
    prezzo: 49.99,
    rating: 4.3,
    immagine: "Zaino",
    disponibile: true
  },
  {
    id: 5,
    nome: "Lampada",
    descrizione: "Lampada LED da scrivania orientabile",
    categoria: "Casa",
    prezzo: 29.5,
    rating: 3.8,
    immagine: "Lampada",
    disponibile: true
  },
  {
    id: 6,
    nome: "Smartwatch",
    descrizione: "Smartwatch fitness con GPS",
    categoria: "Elettronica",
    prezzo: 119,
    rating: 4.4,
    immagine: "Smartwatch",
    disponibile: true
  },
  {
    id: 7,
    nome: "Mouse",
    descrizione: "Mouse ergonomico wireless",
    categoria: "Elettronica",
    prezzo: 24.9,
    rating: 4.1,
    immagine: "Mouse",
    disponibile: true
  },
  {
    id: 8,
    nome: "Caffettiera",
    descrizione: "Caffettiera moka 6 tazze",
    categoria: "Casa",
    prezzo: 22,
    rating: 4.6,
    immagine: "Caffettiera",
    disponibile: true
  }
];

/* VERSIONE INTERMEDIA — formattaPrezzo(prezzo) */
function formattaPrezzo(prezzo) {
  return "€ " + prezzo.toFixed(2).replace(".", ",");
}

/* VERSIONE INTERMEDIA — stelline(rating) */
function stelline(rating) {
  let stellePiene = Math.round(rating);
  let risultato = "";

  for (let i = 0; i < 5; i++) {
    if (i < stellePiene) {
      risultato += "★";
    } else {
      risultato += "☆";
    }
  }

  return risultato;
}

/* VERSIONE INTERMEDIA — Filtro per categoria */
function filtraPerCategoria(categoria) {
  let prodottiFiltrati = prodotti.filter(function (prodotto) {
    return prodotto.categoria === categoria;
  });

  return prodottiFiltrati;
}

/* VERSIONE INTERMEDIA — Filtro disponibilità e rating */
function filtraDisponibiliConBuonRating() {
  let prodottiFiltrati = prodotti.filter(function (prodotto) {
    return prodotto.disponibile === true && prodotto.rating >= 3;
  });

  return prodottiFiltrati;
}

/* VERSIONE AVANZATA — renderProdotti(lista) */
let ordinamento = "";

function renderProdotti(lista) {
  let griglia = document.querySelector(".products-grid");
  let prodottiDaMostrare = lista.slice();

  if (ordinamento === "prezzo-crescente") {
    prodottiDaMostrare.sort(function (prodottoA, prodottoB) {
      return prodottoA.prezzo - prodottoB.prezzo;
    });
  } else if (ordinamento === "prezzo-decrescente") {
    prodottiDaMostrare.sort(function (prodottoA, prodottoB) {
      return prodottoB.prezzo - prodottoA.prezzo;
    });
  } else if (ordinamento === "rating") {
    prodottiDaMostrare.sort(function (prodottoA, prodottoB) {
      return prodottoB.rating - prodottoA.rating;
    });
  }

  griglia.innerHTML = "";

  for (let i = 0; i < prodottiDaMostrare.length; i++) {
    let prodotto = prodottiDaMostrare[i];
    let scheda = document.createElement("div");

    scheda.className = "product-card";
    scheda.innerHTML =
      '<div class="product-image">' + prodotto.immagine + "</div>" +
      "<p>" + prodotto.descrizione + "</p>" +
      '<div class="rating">' + stelline(prodotto.rating) + ' <span>(' + prodotto.rating.toFixed(1) + ')</span></div>' +
      '<span class="price">' + formattaPrezzo(prodotto.prezzo) + "</span>" +
      '<button class="add-cart-btn">Aggiungi al carrello</button>';

    let pulsante = scheda.querySelector(".add-cart-btn");

    if (prodotto.disponibile === false) {
      pulsante.textContent = "Esaurito";
      pulsante.disabled = true;
    } else {
      pulsante.addEventListener("click", aggiungiAlCarrello);
    }

    griglia.appendChild(scheda);
  }
}

/* VERSIONE AVANZATA — Aggiungi al carrello */
function creaContatoreCarrello() {
  let numeroProdotti = 0;

  return function () {
    numeroProdotti++;
    document.querySelector(".cart-link").textContent = "Carrello (" + numeroProdotti + ")";
  };
}

let aggiungiAlCarrello = creaContatoreCarrello();

renderProdotti(prodotti);
