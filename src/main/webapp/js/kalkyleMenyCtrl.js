angular.module('minoptimera').controller('KalkyleMenyCtrl',
    [ '$scope', 'choicesService',function($scope,choicesService) {
    $scope.takstolerIcon = choicesService.readIcon('takstoler');
    $scope.toggleTakstolerIcon = function() {
        choicesService.toggle('takstoler');
        $scope.takstolerIcon = choicesService.readIcon('takstoler');
    }

    $scope.vinduIcon = choicesService.readIcon('vindu');
    $scope.toggleVinduIcon = function() {
        choicesService.toggle('vindu');
        $scope.vinduIcon = choicesService.readIcon('vindu');
    };

    $scope.byggesettIcon = choicesService.readIcon('byggesett');
    $scope.toggleByggesettIcon = function() {
        choicesService.toggle('byggesett');
        $scope.byggesettIcon = choicesService.readIcon('byggesett');
    };

    $scope.trelastIcon = choicesService.readIcon('trelast');
    $scope.toggleTrelastIcon = function() {
        choicesService.toggle('trelast');
        $scope.trelastIcon = choicesService.readIcon('trelast');
    };

    $scope.dorUtvendigIcon = choicesService.readIcon('dorUtvendig');
    $scope.toggleDorUtvendigIcon = function() {
        choicesService.toggle('dorUtvendig');
        $scope.dorUtvendigIcon = choicesService.readIcon('dorUtvendig');
    };

    $scope.dorInnvendigIcon = choicesService.readIcon('dorInnvendig');
    $scope.toggleDorInnvendigIcon = function() {
        choicesService.toggle('dorInnvendig');
        $scope.dorInnvendigIcon = choicesService.readIcon('dorInnvendig');
    };

    $scope.ventilasjonsanleggIcon = choicesService.readIcon('ventilasjonsanlegg');
    $scope.toggleVentilasjonsanleggIcon = function() {
        choicesService.toggle('ventilasjonsanlegg');
        $scope.ventilasjonsanleggIcon = choicesService.readIcon('ventilasjonsanlegg');

    };

    $scope.pipeIcon = choicesService.readIcon('pipe');
    $scope.togglePipeIcon = function() {
        choicesService.toggle('pipe');
        $scope.pipeIcon = choicesService.readIcon('pipe');
    };

    $scope.sentralstovesugerIcon = choicesService.readIcon('sentralstovsuger');
    $scope.toggleSentralstovesugerIcon = function() {
        choicesService.toggle('sentralstovsuger');
        $scope.sentralstovesugerIcon = choicesService.readIcon('sentralstovsuger');
    };

} ]);
