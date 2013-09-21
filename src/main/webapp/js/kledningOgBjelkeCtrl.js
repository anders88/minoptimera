angular.module('minoptimera').controller('KledningOgBjelkeCtrl',
		[ '$scope', function($scope) {
			$scope.kledning_profil = "";
			$scope.kledning_behandlet = "";
			$scope.dekke = "";

            $scope.activeClass = function(model,value) {
                return (value == model) ? "btn-primary active" : "";
            };

            $scope.setProfil = function(value) {
                $scope.kledning_profil = value;
            };
            
            $scope.setBehandlet = function(value) {
            	$scope.kledning_behandlet = value;
            };
            
            $scope.setDekke= function(value) {
            	$scope.dekke = value;
            };
            
            $scope.setBjelketype= function(value) {
            	$scope.bjelketype = value;
            };
			
		} ]);
