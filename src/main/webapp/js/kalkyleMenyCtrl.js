angular.module('minoptimera').controller('KalkyleMenyCtrl',
		[ '$scope', function($scope) {
			$scope.takstolerTagged = false;
			$scope.takstolerIcon = "img/takstoler.png";

			$scope.trelastTagged = false;
			$scope.trelastIcon = "img/trelast.png";

			$scope.byggesettTagged = false;
			$scope.byggesettIcon = "img/byggesett.png";

			$scope.vinduTagged = false;
			$scope.vinduIcon = "img/dor-utvendig.png";

			$scope.toggleVinduIcon = function() {
				$scope.vinduTagged = !$scope.vinduTagged;
				if ($scope.vinduTagged) {
					$scope.vinduIcon = "img/dor-utvendig-valgt.png";
				} else {
					$scope.vinduIcon = "img/dor-utvendig.png";
				}
			}

			$scope.toggleTakstolerIcon = function() {
				$scope.takstolerTagged = !$scope.takstolerTagged;
				if ($scope.takstolerTagged) {
					$scope.takstolerIcon = "img/dor-utvendig-valgt.png";
				} else {
					$scope.takstolerIcon = "img/takstoler.png";
				}
			}

			$scope.toggleByggesettIcon = function() {
				$scope.byggesettTagged = !$scope.byggesettTagged;
				if ($scope.byggesettTagged) {
					$scope.byggesettIcon = "img/dor-utvendig-valgt.png";
				} else {
					$scope.byggesettIcon = "img/byggesett.png";
				}
			}

			$scope.toggleTrelastIcon = function() {
				$scope.trelastTagged = !$scope.trelastTagged;
				if ($scope.trelastTagged) {
					$scope.trelastIcon = "img/dor-utvendig-valgt.png";
				} else {
					$scope.trelastIcon = "img/trelast.png";
				}
			}
		} ]);
