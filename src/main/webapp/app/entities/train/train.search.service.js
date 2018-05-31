(function() {
    'use strict';

    angular
        .module('jeanne2App')
        .factory('TrainSearch', TrainSearch);

    TrainSearch.$inject = ['$resource'];

    function TrainSearch($resource) {
        var resourceUrl =  'api/_search/trains/:id';

        return $resource(resourceUrl, {}, {
            'query': { method: 'GET', isArray: true}
        });
    }
})();
