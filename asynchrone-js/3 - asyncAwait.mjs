'use strict';

import dataFunctions from './0 - dataFunctions.mjs';

const { promise_fooData, promise_fooRandData } = dataFunctions;

console.log();


//--------------------------------------------------------
//--------------------------------------------------------
// simple asynchrone, une procédure s'exécute

// affichera le temps écoulée entre le début du timeout et l'appel de la fonction
// et retourne la valeur
//
// On note l'utilisation des mots clés async et await
async function timedOutHandler() {

    console.log('timedOutHandler a été appelée');
    let elapsedTime = await promise_fooData()
    console.log('---------async_fooData - timedOutHandler---------');
    console.log('le temps imparti est écoulé');
    console.log('temps :', elapsedTime, 'ms \n');

    return elapsedTime;
}

// quand promise_fooData fourni les données (on sait pas quand),
// la Promise est résolue avec les données en paramètre
// et la suite de la fonction async s'executera;
timedOutHandler();


//-------------------------- !!!!!!!!! ------------------------------
// Ici timedOutHandler ne retourne pas explicitment une promise
//      (voir 0 - dataFunctions.js / promise_fooData)
// mais async est un sucre syntaxique qui fabrique une Promise
//-------------------------------------------------------------------
// On peut donc utiliser .then

timedOutHandler()
    .then((elapsedTime) => {

        console.log('---------timedOutHandler returned---------');
        console.log('ca marche avec then ! temps :', elapsedTime, 'ms \n');

    });
console.log('timedOutHandler a été appelé avec une syntaxe promise-like \n');

//--------------------------------------------------------
//--------------------------------------------------------
//                      Exercice
// maintenant on voudrait faire un traitement avec
// promise_fooData ET promise_fooRandData
// par exemple, afficher les 2 et afficher leur produit
// avec la syntaxe async / await
