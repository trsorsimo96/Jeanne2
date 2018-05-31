(function() {
    'use strict';

    angular
        .module('jeanne2App')
        .controller('CompanyDetailController', CompanyDetailController);

    CompanyDetailController.$inject = ['$scope', '$rootScope', '$stateParams', 'previousState', 'DataUtils', 'entity', 'Company', 'Car', 'Train', 'Itineraire', 'CompanyClasse', 'FeesAgency'];

    function CompanyDetailController($scope, $rootScope, $stateParams, previousState, DataUtils, entity, Company, Car, Train, Itineraire, CompanyClasse, FeesAgency) {
        var vm = this;

        vm.company = entity;
        vm.previousState = previousState.name;
        vm.byteSize = DataUtils.byteSize;
        vm.openFile = DataUtils.openFile;

        var unsubscribe = $rootScope.$on('jeanne2App:companyUpdate', function(event, result) {
            vm.company = result;
        });
        $scope.$on('$destroy', unsubscribe);
    }
})();
