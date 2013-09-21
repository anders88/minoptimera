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

            $scope.grunnlag = "standard";

            $scope.activeClass = function(model,value) {
                return (value == model) ? "btn-primary active" : "";
            };

            $scope.setGrunnlag = function(value) {
                $scope.grunnlag = value;
            };

        }]);
