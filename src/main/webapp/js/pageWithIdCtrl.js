angular.module('minoptimera')
    .controller('PageWithIdCtrl', ['$scope','$routeParams',
        function($scope,$routeParams) {
            $scope.myid = $routeParams.someId;
        }]);

