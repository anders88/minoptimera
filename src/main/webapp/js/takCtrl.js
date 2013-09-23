angular.module('minoptimera')
    .controller('TakCtrl', ['$scope','choicesService','navigatorService',

        function($scope,choicesService,navigatorService) {
            navigatorService.pageLoad("tak");
            $scope.tak = choicesService.tak;
            $scope.activeClass = function(model,value) {
                return (value == model) ? "btn-primary active" : "";
            };

            $scope.setType = function(value) {
                $scope.tak.type = value;
            };

        }]);
