/**
 * Created by Anita on 2/12/2018.
 */
var app = angular
						.module('myApp', [])
						.controller('DepartmentCtrl', function() {
							this.name = 'Computer Science';
						})
						.controller('SubjectCtrl', function() {
							this.name = 'programming';
						})
						.controller('ProgLangCtrl', function() {
							this.names = ['html', 'css', 'js', 'jquery'];
						});



