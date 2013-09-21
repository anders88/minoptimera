angular.module('minoptimera')
    .controller('DokumentCtrl', ['$scope',
        function($scope) {
            $scope.upload = function() {
                $("#uploadbtn").click();
            }
            $scope.fileSelected = function(element) {
                console.log($("#uploadbtn").val());
            }
            $scope.chosenFile = "Ingen";

        }]);
