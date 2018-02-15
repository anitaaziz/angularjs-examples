/**
 * Created by Anita on 1/31/2018.
 */
app.controller('studentsCtrl', function($scope, $http) {
	var BASE_URL = 'https://jsonplaceholder.typicode.com/';

	$http.get(BASE_URL + 'users')
		.then(function(res) {
			$scope.students = res.data;
		}, function(err) {
			$scope.error = err.data;
		})
});
