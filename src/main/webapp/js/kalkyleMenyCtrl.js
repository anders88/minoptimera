angular.module('minoptimera')
    .controller('KalkyleMenyCtrl', ['$scope',
        function($scope) {
            $scope.vinduTagged = false;
            $scope.vinduicon = "img/dor-utvendig.png";

            $scope.toggleVinduIcon = function() {
                $scope.vinduTagged = !$scope.vinduTagged;
                if ($scope.vinduTagged) {
                    $scope.vinduicon = "img/dor-utvendig-valgt.png";
                } else {
                    $scope.vinduicon = "img/dor-utvendig.png";
                }
            }
        }]);
