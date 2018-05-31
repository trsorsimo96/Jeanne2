(function() {
    'use strict';

    angular
        .module('jeanne2App')
        .factory('CitySearch', CitySearch);

    CitySearch.$inject = ['$resource'];

    function CitySearch($resource) {
        var resourceUrl =  'api/_search/cities/:id';

        return $resource(resourceUrl, {}, {
            'query': { method: 'GET', isArray: true}
        });
    }
})();
