angular.module('minoptimera')
    .controller('NavigatorCtrl', ['$scope', 'navigatorService',
        function($scope,navigatorService) {
            /*
            $scope.gotoNext = function() {
                navigatorService.next();
                $scope.nextVisible = navigatorService.nextVisible();
                $scope.previousVisible = navigatorService.previousVisible();
            };
            $scope.gotoPrevious = function() {
                navigatorService.previous();
                $scope.nextVisible = navigatorService.nextVisible();
                $scope.previousVisible = navigatorService.previousVisible();
            };*/
            $scope.navservice = navigatorService;

        }]);
