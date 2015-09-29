var app = angular.module('textSupport', ['firebase', 'ngRoute'])
.config(function($routeProvider){

  $routeProvider
  .when('/', {
    templateUrl: 'views/contactTemplate.html'
  })
  .when('/support', {
    templateUrl: 'views/support.html',
    controller: 'supportCtrl'

  })


  .otherwise({redirectTo: '/'})

})
.constant('fb', {url:'https://bryanstextsupport.firebaseIO.com/numbers'})
