'use strict';
var _,

    _consts,
    dataService = require('../../providers/votaRevolution-data-provider'),

    // additional requires
    consts;

function Service() {}

function onRequestSuccess(data) {
    return data.result;
}

function onRequestFail(err) {
    alert(JSON.stringify(err));
    return err;
}

Service.prototype.getAllRecords = function(args) {
    var data = dataService.data('Usuarios'),
        expandExp = {};

    return data.expand(expandExp).get()
        .then(onRequestSuccess.bind(this))
        .catch(onRequestFail.bind(this));
};

// additional properties

module.exports = new Service();