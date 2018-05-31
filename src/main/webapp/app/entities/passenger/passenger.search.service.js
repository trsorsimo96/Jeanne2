(function() {
    'use strict';

    angular
        .module('jeanne2App')
        .factory('PassengerSearch', PassengerSearch);

    PassengerSearch.$inject = ['$resource'];

    function PassengerSearch($resource) {
        var resourceUrl =  'api/_search/passengers/:id';

        return $resource(resourceUrl, {}, {
            'query': { method: 'GET', isArray: true}
        });
    }
})();
