'use strict';
var isInit = true,
    frameModule = require('ui/frame'),

    service = require('./home-service'),

    // additional requires
    viewModel = require('./home-view-model');

// additional functions
function _removeIOSNavBar() {
    var iosFrame = frameModule.topmost().ios;

    if (iosFrame) {
        iosFrame.navBarVisibility = 'never';
    }
}

function pageLoaded(args) {
    var page = args.object;

    _removeIOSNavBar();
    page.bindingContext = viewModel;

    service.getAllRecords()
        .then(function(result) {
            var itemsList = [];

            result.forEach(function(item) {
                itemsList.push({

                    header: item.Nombre,

                    description: item.Votos,

                });
            });

            viewModel.set('listItems', itemsList);
        });

    // additional pageLoaded

    if (isInit) {
        isInit = false;

        // additional pageInit
    }
}

exports.pageLoaded = pageLoaded;