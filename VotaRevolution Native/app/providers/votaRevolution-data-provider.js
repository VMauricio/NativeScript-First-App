var provider,
    TelerikBackendServices = require('../everlive/everlive.all.min');

provider = new TelerikBackendServices({

    offlineStorage: true,

    url: '//platform.telerik.com/bs-api/v1/',

    apiKey: 'oahhIT5rw1KaN7Ta',
    scheme: 'https'
});

module.exports = provider;