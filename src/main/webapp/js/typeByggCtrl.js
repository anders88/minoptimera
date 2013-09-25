angular.module('minoptimera')
    .controller('TypeByggCtrl', ['$scope','choicesService','navigatorService',

        function($scope,choicesService,navigatorService) {
            navigatorService.pageLoad("typeBygg");


            $scope.eneboligIcon = choicesService.readIcon('enebolig');
            $scope.toggleEneboligIcon = function() {
                choicesService.toggle('enebolig');
                $scope.eneboligIcon = choicesService.readIcon('enebolig');
            };

            $scope.rekkehusIcon = choicesService.readIcon('rekkehus');
            $scope.toggleRekkehusIcon = function() {
                choicesService.toggle('rekkehus');
                $scope.rekkehusIcon = choicesService.readIcon('rekkehus');
            };

            $scope.leilighetsbyggIcon = choicesService.readIcon('leilighetsbygg');
            $scope.toggleLeilighetsbyggIcon = function() {
                choicesService.toggle('leilighetsbygg');
                $scope.leilighetsbyggIcon = choicesService.readIcon('leilighetsbygg');
            };

            $scope.hytteIcon = choicesService.readIcon('hytte');
            $scope.toggleHytteIcon = function() {
                choicesService.toggle('hytte');
                $scope.hytteIcon = choicesService.readIcon('hytte');
            };

            $scope.naringsbyggIcon = choicesService.readIcon('naringsbygg');
            $scope.toggleNaringsbyggIcon = function() {
                choicesService.toggle('naringsbygg');
                $scope.naringsbyggIcon = choicesService.readIcon('naringsbygg');
            };

            $scope.fredetByggIcon = choicesService.readIcon('fredetBygg');
            $scope.toggleFredetByggIcon = function() {
                choicesService.toggle('fredetBygg');
                $scope.fredetByggIcon = choicesService.readIcon('fredetBygg');
            };


        }]);
