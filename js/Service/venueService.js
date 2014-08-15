app.factory('venueService', function ($resource) {

    var requestUri = 'https://api.foursquare.com/v2/venues/:venueId?client_id=WOY3TZFKEN3HJTL0ZY1PBO035SJGZFVDMB3CWWTXBDBMEOBS&client_secret=RGWTUBG0THSZBB3TDEPJNVIA0RU50RC2IS1DHHPJ5JKC0ELB&v=20140806';

    return $resource(requestUri,
        {
            callback: 'JSON_CALLBACK'
        },
        {
            get: { method: 'JSONP' }
        });

});