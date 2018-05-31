(function() {
    'use strict';

    angular
        .module('jeanne2App')
        .controller('DepositDetailController', DepositDetailController);

    DepositDetailController.$inject = ['$scope', '$rootScope', '$stateParams', 'previousState', 'entity', 'Deposit', 'Agency'];

    function DepositDetailController($scope, $rootScope, $stateParams, previousState, entity, Deposit, Agency) {
        var vm = this;

        vm.deposit = entity;
        vm.previousState = previousState.name;

        var unsubscribe = $rootScope.$on('jeanne2App:depositUpdate', function(event, result) {
            vm.deposit = result;
        });
        $scope.$on('$destroy', unsubscribe);
    }
})();
