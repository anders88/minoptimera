angular.module('minoptimera')
    .controller('AnnenInfoCtrl', ['$scope','choicesService','navigatorService',

        function($scope,choicesService,navigatorService) {
            navigatorService.pageLoad("annenInfo");

        }]);
