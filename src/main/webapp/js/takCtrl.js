angular.module('minoptimera')
    .controller('TakCtrl', ['$scope',
        function($scope) {

            $scope.activeClass = function(model,value) {
                return (value == model) ? "btn-primary active" : "";
            };

            $scope.setType = function(value) {
                $scope.type = value;
            };

        }]);
