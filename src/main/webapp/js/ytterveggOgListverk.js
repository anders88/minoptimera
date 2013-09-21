angular.module('minoptimera').controller('YtterveggOgListverkCtrl',
		[ '$scope', function($scope) {
			$scope.list_profil = "";
			$scope.list_behandlet = "";
			
			$scope.hoyde = "48";
			$scope.bredde = "148";

            $scope.activeClass = function(model,value) {
                return (value == model) ? "btn-primary active" : "";
            };

            $scope.setProfil = function(value) {
                $scope.list_profil = value;
            };
            
            $scope.setBehandlet = function(value) {
            	$scope.list_behandlet = value;
            };
            
            $scope.setHoyde = function(value) {
            	$scope.hoyde = value;
            };
            
            $scope.setBredde = function(value) {
            	$scope.bredde = value;
            };
			
		} ]);
