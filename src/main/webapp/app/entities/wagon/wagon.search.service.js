(function() {
    'use strict';

    angular
        .module('jeanne2App')
        .factory('WagonSearch', WagonSearch);

    WagonSearch.$inject = ['$resource'];

    function WagonSearch($resource) {
        var resourceUrl =  'api/_search/wagons/:id';

        return $resource(resourceUrl, {}, {
            'query': { method: 'GET', isArray: true}
        });
    }
})();
