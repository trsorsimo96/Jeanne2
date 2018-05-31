(function() {
    'use strict';

    angular
        .module('jeanne2App')
        .controller('TrainDetailController', TrainDetailController);

    TrainDetailController.$inject = ['$scope', '$rootScope', '$stateParams', 'previousState', 'entity', 'Train', 'Wagon', 'Voyage', 'Company'];

    function TrainDetailController($scope, $rootScope, $stateParams, previousState, entity, Train, Wagon, Voyage, Company) {
        var vm = this;

        vm.train = entity;
        vm.previousState = previousState.name;

        var unsubscribe = $rootScope.$on('jeanne2App:trainUpdate', function(event, result) {
            vm.train = result;
        });
        $scope.$on('$destroy', unsubscribe);
    }
})();
