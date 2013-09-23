angular.module('minoptimera')
    .controller('NavigatorCtrl', ['$scope', 'navigatorService',
        function($scope,navigatorService) {
            $scope.navservice = navigatorService;

        }]);
