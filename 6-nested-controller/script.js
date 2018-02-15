/**
 * Created by Anita on 2/12/2018.
 */
var app = angular
						.module('myApp', [])
						.controller('CountryCtrl', function($scope) {
							$scope.name = 'Pakistan';
						})
						.controller('ProvinceCtrl', function($scope) {
							$scope.name = 'Punjab';
						})
						.controller('CityCtrl', function($scope) {
							$scope.name = 'Lahore';
						});