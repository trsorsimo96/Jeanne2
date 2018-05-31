(function() {
    'use strict';

    angular
        .module('jeanne2App')
        .factory('CompanyClasseSearch', CompanyClasseSearch);

    CompanyClasseSearch.$inject = ['$resource'];

    function CompanyClasseSearch($resource) {
        var resourceUrl =  'api/_search/company-classes/:id';

        return $resource(resourceUrl, {}, {
            'query': { method: 'GET', isArray: true}
        });
    }
})();
