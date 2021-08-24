'use strict';

function randInt(a, b) {
    return Math.floor(Math.random() * (b - a) + a);
}

//--------------------------------------------------------
// Fonctions qu'on va appeler pour obtenir et traiter des données
// mais on ne sait pas quand ces données seront dispo
// donc ces fonctions prennent en parametre un callback
// aussi appelé handler, qui tratera les données quand elles seront dispo

export default {
    fooData(callback) {

        let start = new Date();
        setTimeout(() => {

            let end = new Date();
            callback(end - start);
        }, randInt(600, 1500));

    },
    fooRandData(callback) {

        setTimeout(() => {

            callback(randInt(1, 10));
        }, randInt(600, 1500));

    }
};

// ----------------------------------------------------
// --------------------- Promises ---------------------
