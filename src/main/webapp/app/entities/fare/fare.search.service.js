(function() {
    'use strict';

    angular
        .module('jeanne2App')
        .factory('FareSearch', FareSearch);

    FareSearch.$inject = ['$resource'];

    function FareSearch($resource) {
        var resourceUrl =  'api/_search/fares/:id';

        return $resource(resourceUrl, {}, {
            'query': { method: 'GET', isArray: true}
        });
    }
})();
