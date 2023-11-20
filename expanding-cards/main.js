'use strict'

//const card = document.getElementById('img-one');
//const card = document.getElementsByTagName('img');
// const shrinkedCard = document.getElementsByClassName("card");
// const expandedCard = document.getElementsByClassName("expanded-card");



// function changeCard(){

//     if (card.className === "card"){
//         card.className = "expanded-card"
//     }else {
//         card.className = "card"
//     }

// }

// const card = document.getElementsByTagName('img');
// console.log(card);

//  card.addEventListener('click', function changeCard(){

//     if (card.className === "card"){
//         card.className = "expanded-card"
//     }else {
//         card.className = "card"
//     }
// });

const cards = document.querySelectorAll('.card');

cards.forEach(card => {
  card.addEventListener('click', function () {
    // Restablecer todas las tarjetas a su estado inicial
    cards.forEach(card => {
      card.classList.remove('expanded-card');
    });

    // Expandir la tarjeta que se hizo clic
    this.classList.add('expanded-card');
  });
});

