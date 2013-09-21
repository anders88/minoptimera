angular.module('minoptimera')
    .controller('DokumentCtrl', ['$scope',
        function($scope) {
            $scope.filenames = [];
            $scope.upload = function() {
                $("#uploadbtn").click();
            };
            $scope.fileSelected = function(element) {
                $scope.filenames.push($("#uploadbtn").val().match(/[\w_.-]*?(?=\?)|[\w_.-]*$/)[0]);
                $scope.$apply();
            };

        }]);
