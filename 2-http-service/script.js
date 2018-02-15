
var app = angular.module('myApp', [])
  /*injection of $http and $log services in controller function.*/
  .controller('httpCtrl', function ($scope, $http, $log) {

    var BASE_URL = 'https://jsonplaceholder.typicode.com/';

    //success call back function >> function which is called when the request completes successfully.
    var successCallback = function (res) {
      $scope.posts = res.data;
      //log res object to console
      $log.info(res);
    };

    //error callback function >> the function which will be called when an error pause the request.
    var errorCallback = function (err) {
      console.log('err function called');
      $scope.error = err.data;
      $log.info(err);
    };

    //$http service is used to make http requests to remote server/is used to made AJAX calls.
    $scope.posts = $http({
      method: 'GET',
      url: BASE_URL + 'posts'
    })
      .then(successCallback, errorCallback);
  });
