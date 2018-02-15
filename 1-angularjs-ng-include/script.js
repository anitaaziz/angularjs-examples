var app = angular
    .module('myApp', [])
    .controller('infoCtrl', function($scope) {
        var employees = [
            {name: 'Anita', gender: 'female', salary: 30000},
            {name: 'Asif', gender: 'male', salary: 50000},
            {name: 'Asma', gender: 'female', salary: 80000},
            {name: 'Amjad', gender: 'male', salary: 70000}
        ];

        $scope.employees = employees;
        $scope.employeeView = 'table.html';
    });