var provider,
    TelerikBackendServices = require('../everlive/everlive.all.min');

provider = new TelerikBackendServices({

    offlineStorage: true,

    url: '//platform.telerik.com/bs-api/v1/',

    apiKey: '0B5xy3g9QzFlfMfl',
    scheme: 'https'
});

module.exports = provider;