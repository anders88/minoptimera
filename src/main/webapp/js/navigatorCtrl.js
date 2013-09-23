angular.module('minoptimera')
    .controller('NavigatorCtrl', ['$scope', 'navigatorService',
        function($scope,navigatorService) {
            $scope.gotoNext = function() {
                navigatorService.next();
            };
            $scope.gotoPrevious = function() {
                navigatorService.previous();
            };

        }]);
