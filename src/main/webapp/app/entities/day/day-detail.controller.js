(function() {
    'use strict';

    angular
        .module('jeanne2App')
        .controller('DayDetailController', DayDetailController);

    DayDetailController.$inject = ['$scope', '$rootScope', '$stateParams', 'previousState', 'entity', 'Day', 'Itineraire'];

    function DayDetailController($scope, $rootScope, $stateParams, previousState, entity, Day, Itineraire) {
        var vm = this;

        vm.day = entity;
        vm.previousState = previousState.name;

        var unsubscribe = $rootScope.$on('jeanne2App:dayUpdate', function(event, result) {
            vm.day = result;
        });
        $scope.$on('$destroy', unsubscribe);
    }
})();
