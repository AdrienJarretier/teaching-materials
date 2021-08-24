'use strict';

import dataFunctions from './0 - dataFunctions.mjs';

console.log(dataFunctions)

// {fooData, fooRandData}

console.log();

//--------------------------------------------------------
//--------------------------------------------------------
// simple asynchrone, une procédure s'exécute

// affichera le temps écoulée entre le début du timeout et l'appel de la fonction
function timedOutHandler(elpasedTIme) {

    console.log('le temps imparti est écoulé');
    console.log('temps :', elpasedTIme, 'ms \n');

}

// quand fooData fourni les données (on sait pas quand),
// timedOutHandler est appelée avec les données en parametre
fooData(timedOutHandler);

console.log('fooData a été appelée');
// fooData a recu la fonction de callback
// qu'elle-meme appelera en lui passant le temps écoulé



//--------------------------------------------------------
//--------------------------------------------------------
// Avec un callback anonyme ca donne ca

fooData((elpasedTime) => {

    console.log('callback anonyme temps :', elpasedTime, 'ms \n');

});
console.log('fooData a appelée avec un callback anonyme \n');

//--------------------------------------------------------
//--------------------------------------------------------
//                      Exercice
// maintenant on voudrait faire un traitement avec
// fooData ET fooRandData
// par exemple, afficher les 2 et afficher leur produit
