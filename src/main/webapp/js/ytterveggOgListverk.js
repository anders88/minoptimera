angular.module('minoptimera').controller('YtterveggOgListverkCtrl',[ '$scope', 'choicesService',
    function($scope,choicesService) {
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
			
	}
]);
