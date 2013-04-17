angular.module('Banshee.Controller', [])
    .controller('ObjectsController', function($scope, DataService) {
        $scope.objects = DataService.objects;
    })
    .controller('ObjectController', function($scope, $routeParams, DataService) {
        $scope.objectId = $routeParams['objectId'];
        $scope.objects = DataService.objects;
    });
