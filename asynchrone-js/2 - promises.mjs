'use strict';

import dataFunctions from './0 - dataFunctions.mjs';

const { promise_fooData, promise_fooRandData } = dataFunctions;

console.log();


//--------------------------------------------------------
//--------------------------------------------------------
// simple asynchrone, une procédure s'exécute

// affichera le temps écoulée entre le début du timeout et l'appel de la fonction
function timedOutHandler(elapsedTime) {

    console.log('---------promise_fooData - timedOutHandler---------');
    console.log('le temps imparti est écoulé');
    console.log('temps :', elapsedTime, 'ms \n');
}

// quand fooData fourni les données (on sait pas quand),
// la Promise est résolue avec les données en paramètre
promise_fooData()
    .then(timedOutHandler);

console.log('promise_fooData a été appelée');

//--------------------------------------------------------
//--------------------------------------------------------
// Avec un callback anonyme ca donne ca

promise_fooData()
    .then((elapsedTime) => {

        console.log('---------promise_fooData - anonymous---------');
        console.log('callback anonyme temps :', elapsedTime, 'ms \n');

    });
console.log('promise_fooData a été appelée avec la syntaxe des promises \n');

//--------------------------------------------------------
//--------------------------------------------------------
//                      Exercice
// maintenant on voudrait faire un traitement avec
// promise_fooData ET promise_fooRandData
// par exemple, afficher les 2 et afficher leur produit
// voir Promise.all()
