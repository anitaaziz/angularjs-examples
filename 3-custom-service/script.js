//the controller is simple and clean,we injected the custom service (stringService) in our controller.
var app = angular
    .module('myApp', [])
    .controller('serviceCtrl', function($scope, stringService) {
        $scope.transformString = function(input) {
            //calling the processString function on the custom service.
            $scope.output = stringService.processString(input);
        }
    });
    