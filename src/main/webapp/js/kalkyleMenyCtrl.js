angular.module('minoptimera').controller('KalkyleMenyCtrl',
		[ '$scope', function($scope) {
			$scope.takstolerTagged = false;
			$scope.takstolerIcon = "img/takstoler.png";

			$scope.trelastTagged = false;
			$scope.trelastIcon = "img/trelast.png";

			$scope.byggesettTagged = false;
			$scope.byggesettIcon = "img/byggesett.png";

			$scope.vinduTagged = false;
			$scope.vinduIcon = "img/vinduer.png";

			$scope.dorUtvendigTagged = false;
			$scope.dorUtvendigIcon = "img/dor-utvendig.png";

			$scope.dorInnvendigTagged = false;
			$scope.dorInnvendigIcon = "img/dor-innvendig.png";

			$scope.ventilasjonsanleggTagged = false;
			$scope.ventilasjonsanleggIcon = "img/ventilasjonsanlegg.png";

			$scope.pipeTagged = false;
			$scope.pipeIcon = "img/pipe.png";

			$scope.sentralstovesugerTagged = false;
			$scope.sentralstovesugerIcon = "img/sentralstovesuger.png";

			$scope.toggleVinduIcon = function() {
				$scope.vinduTagged = !$scope.vinduTagged;
				if ($scope.vinduTagged) {
					$scope.vinduIcon = "img/ikke-implementert-valg.png";
				} else {
					$scope.vinduIcon = "img/vinduer.png";
				}
			}

			$scope.toggleTakstolerIcon = function() {
				$scope.takstolerTagged = !$scope.takstolerTagged;
				if ($scope.takstolerTagged) {
					$scope.takstolerIcon = "img/ikke-implementert-valg.png";
				} else {
					$scope.takstolerIcon = "img/takstoler.png";
				}
			}

			$scope.toggleByggesettIcon = function() {
				$scope.byggesettTagged = !$scope.byggesettTagged;
				if ($scope.byggesettTagged) {
					$scope.byggesettIcon = "img/ikke-implementert-valg.png";
				} else {
					$scope.byggesettIcon = "img/byggesett.png";
				}
			}

			$scope.toggleTrelastIcon = function() {
				$scope.trelastTagged = !$scope.trelastTagged;
				if ($scope.trelastTagged) {
					$scope.trelastIcon = "img/trelast-valgt.png";
				} else {
					$scope.trelastIcon = "img/trelast.png";
				}
			}

			$scope.toggleDorUtvendigIcon = function() {
				$scope.dorUtvendigTagged = !$scope.dorUtvendigTagged;
				if ($scope.dorUtvendigTagged) {
					$scope.dorUtvendigIcon = "img/dor-utvendig-valgt.png";
				} else {
					$scope.dorUtvendigIcon = "img/dor-utvendig.png";
				}
			}

			$scope.toggleDorInnvendigIcon = function() {
				$scope.dorInnvendigTagged = !$scope.dorInnvendigTagged;
				if ($scope.dorInnvendigTagged) {
					$scope.dorInnvendigIcon = "img/ikke-implementert-valg.png";
				} else {
					$scope.dorInnvendigIcon = "img/dor-innvendig.png";
				}
			}
			
			$scope.toggleVentilasjonsanleggIcon = function() {
				$scope.ventilasjonsanleggTagged = !$scope.ventilasjonsanleggTagged;
				if ($scope.ventilasjonsanleggTagged) {
					$scope.ventilasjonsanleggIcon = "img/ventilasjonsanlegg-valgt.png";
				} else {
					$scope.ventilasjonsanleggIcon = "img/ventilasjonsanlegg.png";
				}
			}
			
			$scope.togglePipeIcon = function() {
				$scope.pipeTagged = !$scope.pipeTagged;
				if ($scope.pipeTagged) {
					$scope.pipeIcon = "img/ikke-implementert-valg.png";
				} else {
					$scope.pipeIcon = "img/pipe.png";
				}
			}
			
			$scope.toggleSentralstovesugerIcon = function() {
				$scope.sentralstovesugerTagged = !$scope.sentralstovesugerTagged;
				if ($scope.sentralstovesugerTagged) {
					$scope.sentralstovesugerIcon = "img/ikke-implementert-valg.png";
				} else {
					$scope.sentralstovesugerIcon = "img/sentralstovesuger.png";
				}
			}
			
		} ]);
