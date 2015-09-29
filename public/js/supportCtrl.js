var app = angular.module('textSupport').controller('supportCtrl', function($scope, fb, $firebaseObject){
$scope.numbers = $firebaseObject(new Firebase(fb.url));


});
