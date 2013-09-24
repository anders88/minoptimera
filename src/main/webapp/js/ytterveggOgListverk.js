angular.module('minoptimera').controller('YtterveggOgListverkCtrl',[ '$scope', 'choicesService','navigatorService',
    function($scope,choicesService,navigatorService) {
            navigatorService.pageLoad("yttervegg");
            $scope.yttervegg = choicesService.yttervegg;

            $scope.activeClass = function(model,value) {
                return (value == model) ? "btn-primary active" : "";
            };

            $scope.setProfil = function(value) {
                $scope.yttervegg.list_profil = value;
            };
            
            $scope.setBehandlet = function(value) {
            	$scope.yttervegg.list_behandlet = value;
            };
            
            $scope.setHoyde = function(value) {
            	$scope.yttervegg.hoyde = value;
            };
            
            $scope.setBredde = function(value) {
            	$scope.yttervegg.bredde = value;
            };

            $scope.isSelected = function(value) {
                if (value) {
                    return "input-choice-box-selected";
                }
                return "";
            };


	}
]);
