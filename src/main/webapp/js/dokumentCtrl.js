angular.module('minoptimera')
    .controller('DokumentCtrl', ['$scope', 'choicesService',
        function($scope,choicesService) {
            $scope.documents = choicesService.documents;
            $scope.upload = function() {
                $("#uploadbtn").click();
            };
            $scope.fileSelected = function(element) {
                var filename = $("#uploadbtn").val().match(/[\w_.-]*?(?=\?)|[\w_.-]*$/)[0];
                $scope.documents.uploadedFiles.push(filename);
                $scope.$apply();
            };

            $scope.grunnlag = choicesService.grunnlag;

            $scope.activeClass = function(model,value) {
                return (value == model) ? "btn-primary active" : "";
            };

            $scope.setGrunnlag = function(value) {
                $scope.documents.grunnlag = value;
            };

        }]);
