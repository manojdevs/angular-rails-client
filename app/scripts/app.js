'use strict';
 
/**
 * @ngdoc overview
 * @name fakeLunchHubApp
 * @description
 * # fakeLunchHubApp
 *
 * Main module of the application.
 */
var app = angular.module('fakeLunchHubApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ]);
 
app.config(function ($routeProvider) {
  $routeProvider
    .when('/', {
      templateUrl: 'views/main.html',
      controller: 'MainCtrl'
    })
    .when('/about', {
      templateUrl: 'views/about.html',
      controller: 'AboutCtrl'
    })
    .when('/groups', {
      templateUrl: 'views/groups.html',
      controller: 'GroupsCtrl'
    })
    .when('/contact', {
      templateUrl: 'views/contact.html',
      controller: 'GroupsCtrl'
    })
    .otherwise({
      redirectTo: '/'
    });
});
app.config(['$routeProvider', '$httpProvider', function($routeProvider, $httpProvider) {

$httpProvider.defaults.useXDomain = true;
delete $httpProvider.defaults.headers.common['X-Requested-With'];
}]);

app.factory('Group', ['$resource', function($resource) {
  return $resource('/api/groups/:id.json', null, {
    'update': { method:'PUT' }
  });
}]);
