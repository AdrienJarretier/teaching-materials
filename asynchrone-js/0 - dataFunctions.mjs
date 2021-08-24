'use strict';

function randInt(a, b) {
    return Math.floor(Math.random() * (b - a) + a);
}

//--------------------------------------------------------
// Fonctions qu'on va appeler pour obtenir et traiter des données
// mais on ne sait pas quand ces données seront dispo
// donc ces fonctions prennent en parametre un callback
// aussi appelé handler, qui tratera les données quand elles seront dispo

const functions = {

    _timedCall(callback) {
        setTimeout(callback, randInt(600, 1700));
    },

    /**
     * @param callback will receive an argument timeElapsed,
     * the time it took for the function to call that callback
     */
    fooData(callback) {

        let start = new Date();
        functions._timedCall(() => {

            let end = new Date();
            callback(end - start);
        });

    },

    /**
     * @param callback will receive an argument value,
     * a random integer between 1 and 10
     */
    fooRandData(callback) {

        functions._timedCall(() => {

            callback(randInt(1, 10));
        });

    },

    // The 2 following functions will de the same things but using promises
    promise_fooData() {

        return new Promise((resolve, reject) => {

            functions.fooData(resolve);

        });

    },
    promise_fooRandData() {

        return new Promise((resolve, reject) => {

            functions.fooRandData(resolve);

        });

    }
};

export default functions;
