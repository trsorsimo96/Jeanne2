(function() {
    'use strict';

    angular
        .module('jeanne2App')
        .controller('FareDetailController', FareDetailController);

    FareDetailController.$inject = ['$scope', '$rootScope', '$stateParams', 'previousState', 'entity', 'Fare', 'Booking'];

    function FareDetailController($scope, $rootScope, $stateParams, previousState, entity, Fare, Booking) {
        var vm = this;

        vm.fare = entity;
        vm.previousState = previousState.name;

        var unsubscribe = $rootScope.$on('jeanne2App:fareUpdate', function(event, result) {
            vm.fare = result;
        });
        $scope.$on('$destroy', unsubscribe);
    }
})();
