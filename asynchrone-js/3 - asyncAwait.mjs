'use strict';

import dataFunctions from './0 - dataFunctions.mjs';

const { promise_fooData, promise_fooRandData } = dataFunctions;

console.log();


//--------------------------------------------------------
//--------------------------------------------------------
// simple asynchrone, une procédure s'exécute

// affichera le temps écoulée entre le début du timeout et l'appel de la fonction
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






// //-------------------------- !!!!!!!!! ------------------------------
// //--------------------------------------------------------
// // Avec un callback anonyme ca donne ca

// promise_fooData()
//     .then((elpasedTime) => {

//         console.log('---------promise_fooData - anonymous---------');
//         console.log('callback anonyme temps :', elpasedTime, 'ms \n');

//     });
// console.log('promise_fooData a appelée avec un callback anonyme \n');

// //--------------------------------------------------------
// //--------------------------------------------------------
// //                      Exercice
// // maintenant on voudrait faire un traitement avec
// // async_fooData ET async_fooRandData
// // par exemple, afficher les 2 et afficher leur produit
