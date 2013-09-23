angular.module('minoptimera').controller('KledningOgBjelkeCtrl',[ '$scope', 'choicesService','navigatorService',
        function($scope,choicesService,navigatorService) {
            navigatorService.pageLoad("kledning");
            $scope.kledningBjelke = choicesService.kledningBjelke;
			/*$scope.kledning_profil = "";
			$scope.kledning_behandlet = "";
			$scope.dekke = "";*/

            $scope.activeClass = function(model,value) {
                return (value == model) ? "btn-primary active" : "";
            };

            $scope.setProfil = function(value) {
                $scope.kledningBjelke.kledning_profil = value;
            };
            
            $scope.setBehandlet = function(value) {
            	$scope.kledningBjelke.kledning_behandlet = value;
            };
            
            $scope.setDekke= function(value) {
            	$scope.kledningBjelke.dekke = value;
            };
            
            $scope.setBjelketype= function(value) {
            	$scope.kledningBjelke.bjelketype = value;
            };
			
		} ]);
