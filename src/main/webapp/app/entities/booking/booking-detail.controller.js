(function() {
    'use strict';

    angular
        .module('jeanne2App')
        .controller('BookingDetailController', BookingDetailController);

    BookingDetailController.$inject = ['$scope', '$rootScope', '$stateParams', 'previousState', 'entity', 'Booking', 'Passenger', 'Fare', 'Email', 'Segment'];

    function BookingDetailController($scope, $rootScope, $stateParams, previousState, entity, Booking, Passenger, Fare, Email, Segment) {
        var vm = this;

        vm.booking = entity;
        vm.previousState = previousState.name;

        var unsubscribe = $rootScope.$on('jeanne2App:bookingUpdate', function(event, result) {
            vm.booking = result;
        });
        $scope.$on('$destroy', unsubscribe);
    }
})();
