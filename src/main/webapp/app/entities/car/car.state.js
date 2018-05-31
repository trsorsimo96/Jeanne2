(function() {
    'use strict';

    angular
        .module('jeanne2App')
        .config(stateConfig);

    stateConfig.$inject = ['$stateProvider'];

    function stateConfig($stateProvider) {
        $stateProvider
        .state('car', {
            parent: 'entity',
            url: '/car',
            data: {
                authorities: ['ROLE_USER'],
                pageTitle: 'jeanne2App.car.home.title'
            },
            views: {
                'content@': {
                    templateUrl: 'app/entities/car/cars.html',
                    controller: 'CarController',
                    controllerAs: 'vm'
                }
            },
            resolve: {
                translatePartialLoader: ['$translate', '$translatePartialLoader', function ($translate, $translatePartialLoader) {
                    $translatePartialLoader.addPart('car');
                    $translatePartialLoader.addPart('global');
                    return $translate.refresh();
                }]
            }
        })
        .state('car-detail', {
            parent: 'car',
            url: '/car/{id}',
            data: {
                authorities: ['ROLE_USER'],
                pageTitle: 'jeanne2App.car.detail.title'
            },
            views: {
                'content@': {
                    templateUrl: 'app/entities/car/car-detail.html',
                    controller: 'CarDetailController',
                    controllerAs: 'vm'
                }
            },
            resolve: {
                translatePartialLoader: ['$translate', '$translatePartialLoader', function ($translate, $translatePartialLoader) {
                    $translatePartialLoader.addPart('car');
                    return $translate.refresh();
                }],
                entity: ['$stateParams', 'Car', function($stateParams, Car) {
                    return Car.get({id : $stateParams.id}).$promise;
                }],
                previousState: ["$state", function ($state) {
                    var currentStateData = {
                        name: $state.current.name || 'car',
                        params: $state.params,
                        url: $state.href($state.current.name, $state.params)
                    };
                    return currentStateData;
                }]
            }
        })
        .state('car-detail.edit', {
            parent: 'car-detail',
            url: '/detail/edit',
            data: {
                authorities: ['ROLE_USER']
            },
            onEnter: ['$stateParams', '$state', '$uibModal', function($stateParams, $state, $uibModal) {
                $uibModal.open({
                    templateUrl: 'app/entities/car/car-dialog.html',
                    controller: 'CarDialogController',
                    controllerAs: 'vm',
                    backdrop: 'static',
                    size: 'lg',
                    resolve: {
                        entity: ['Car', function(Car) {
                            return Car.get({id : $stateParams.id}).$promise;
                        }]
                    }
                }).result.then(function() {
                    $state.go('^', {}, { reload: false });
                }, function() {
                    $state.go('^');
                });
            }]
        })
        .state('car.new', {
            parent: 'car',
            url: '/new',
            data: {
                authorities: ['ROLE_USER']
            },
            onEnter: ['$stateParams', '$state', '$uibModal', function($stateParams, $state, $uibModal) {
                $uibModal.open({
                    templateUrl: 'app/entities/car/car-dialog.html',
                    controller: 'CarDialogController',
                    controllerAs: 'vm',
                    backdrop: 'static',
                    size: 'lg',
                    resolve: {
                        entity: function () {
                            return {
                                immatriculation: null,
                                place: null,
                                id: null
                            };
                        }
                    }
                }).result.then(function() {
                    $state.go('car', null, { reload: 'car' });
                }, function() {
                    $state.go('car');
                });
            }]
        })
        .state('car.edit', {
            parent: 'car',
            url: '/{id}/edit',
            data: {
                authorities: ['ROLE_USER']
            },
            onEnter: ['$stateParams', '$state', '$uibModal', function($stateParams, $state, $uibModal) {
                $uibModal.open({
                    templateUrl: 'app/entities/car/car-dialog.html',
                    controller: 'CarDialogController',
                    controllerAs: 'vm',
                    backdrop: 'static',
                    size: 'lg',
                    resolve: {
                        entity: ['Car', function(Car) {
                            return Car.get({id : $stateParams.id}).$promise;
                        }]
                    }
                }).result.then(function() {
                    $state.go('car', null, { reload: 'car' });
                }, function() {
                    $state.go('^');
                });
            }]
        })
        .state('car.delete', {
            parent: 'car',
            url: '/{id}/delete',
            data: {
                authorities: ['ROLE_USER']
            },
            onEnter: ['$stateParams', '$state', '$uibModal', function($stateParams, $state, $uibModal) {
                $uibModal.open({
                    templateUrl: 'app/entities/car/car-delete-dialog.html',
                    controller: 'CarDeleteController',
                    controllerAs: 'vm',
                    size: 'md',
                    resolve: {
                        entity: ['Car', function(Car) {
                            return Car.get({id : $stateParams.id}).$promise;
                        }]
                    }
                }).result.then(function() {
                    $state.go('car', null, { reload: 'car' });
                }, function() {
                    $state.go('^');
                });
            }]
        });
    }

})();
