'use strict';
var menuItems,
    observable = require('data/observable'),
    navigationViewModel = new observable.Observable();

menuItems = [{
    "title": "Home",
    "modulePath": "components/home/home",
    "icon": "~/images/icons/home.png"
}, {
    "title": "Log In",
    "modulePath": "components/signInView/signInView",
    "icon": "~/images/icons/contacts.png"
}, {
    "title": "Registrate",
    "modulePath": "components/registerView/registerView",
    "icon": "~/images/icons/contacts.png"
}];

navigationViewModel.set('menuItems', menuItems);
navigationViewModel.set('backButtonHidden', true);

module.exports = navigationViewModel;