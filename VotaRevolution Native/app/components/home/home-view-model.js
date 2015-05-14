'use strict';
var ViewModel,
    Observable = require('data/observable').Observable;

ViewModel = new Observable({

    pageTitle: 'Votos',

    listItems: [],

    // additional properties
});

module.exports = ViewModel;