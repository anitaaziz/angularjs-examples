/**
 * Created by Anita on 1/31/2018.
 */
app.config(function($routeProvider) {
	$routeProvider
		.when('/home', {
			templateUrl: 'templates/home.html',
			controller: 'homeCtrl'
		})
		.when('/courses', {
			templateUrl: 'templates/courses.html',
			controller: 'coursesCtrl'
		})
		.when('/students', {
			templateUrl: 'templates/students.html',
			controller: 'studentsCtrl'
		});
});
