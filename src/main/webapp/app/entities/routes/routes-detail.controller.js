(function() {
    'use strict';

    angular
        .module('jeanne2App')
        .controller('RoutesDetailController', RoutesDetailController);

    RoutesDetailController.$inject = ['$scope', '$rootScope', '$stateParams', 'previousState', 'entity', 'Routes', 'Itineraire', 'Voyage', 'City'];

    function RoutesDetailController($scope, $rootScope, $stateParams, previousState, entity, Routes, Itineraire, Voyage, City) {
        var vm = this;

        vm.routes = entity;
        vm.previousState = previousState.name;

        var unsubscribe = $rootScope.$on('jeanne2App:routesUpdate', function(event, result) {
            vm.routes = result;
        });
        $scope.$on('$destroy', unsubscribe);
    }
})();