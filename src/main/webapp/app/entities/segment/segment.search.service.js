(function() {
    'use strict';

    angular
        .module('jeanne2App')
        .factory('SegmentSearch', SegmentSearch);

    SegmentSearch.$inject = ['$resource'];

    function SegmentSearch($resource) {
        var resourceUrl =  'api/_search/segments/:id';

        return $resource(resourceUrl, {}, {
            'query': { method: 'GET', isArray: true}
        });
    }
})();
