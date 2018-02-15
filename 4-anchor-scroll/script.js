//$snchorscroll service is used to jump to a specified element on the page.
//pass the id of an element which we want to scroll to, to the scrollTo function.
//$location service has got the method hash(),hash method append whatever provided to it to the url using hash symbol.
//we pass the id of the element to the hash method(hash()),
//$anchorScroll method will read what we have in the url.
//if we have #top appended in url,$anchorScroll is going to read that #top and automatically scroll to that element with id='top' on the page.
//yOffset is a property of $anchorScroll service which specifies the vertical scroll offset.
//yOffset simply leave some space vertically betwwen the element(button) and browser.
var app = angular.module('myApp', [])
                 .controller('scrollCtrl', function($scope, $location, $anchorScroll) {
                     $scope.scrollTo = function(scrollLocation) {
                         $location.hash(scrollLocation);
                         $anchorScroll.yOffset = 20;
                         $anchorScroll();
                     }
                 });
