angular.module('minoptimera')
    .controller('DokumentCtrl', ['$scope',
        function($scope) {
            $scope.filenames = ["nothing"];
            $scope.upload = function() {
                $("#uploadbtn").click();
            };
            $scope.fileSelected = function(element) {
                $scope.filenames.push($("#uploadbtn").val());
                $scope.$apply();
            };

        }]);
