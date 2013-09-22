angular.module('minoptimera')
    .controller('TakCtrl', ['$scope','choicesService',

        function($scope,choicesService) {
            $scope.tak = choicesService.tak;
            $scope.activeClass = function(model,value) {
                return (value == model) ? "btn-primary active" : "";
            };

            $scope.setType = function(value) {
                $scope.tak.type = value;
            };

        }]);
