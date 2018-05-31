(function() {
    'use strict';

    angular
        .module('jeanne2App')
        .controller('CarDetailController', CarDetailController);

    CarDetailController.$inject = ['$scope', '$rootScope', '$stateParams', 'previousState', 'entity', 'Car', 'Voyage', 'ModelCar', 'Company'];

    function CarDetailController($scope, $rootScope, $stateParams, previousState, entity, Car, Voyage, ModelCar, Company) {
        var vm = this;

        vm.car = entity;
        vm.previousState = previousState.name;

        var unsubscribe = $rootScope.$on('jeanne2App:carUpdate', function(event, result) {
            vm.car = result;
        });
        $scope.$on('$destroy', unsubscribe);
    }
})();