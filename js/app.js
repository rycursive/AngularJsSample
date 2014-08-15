var app = angular.module('app', ['ngRoute', 'kendo.directives', 'ngResource'])
.config(function($routeProvider) {
  $routeProvider
    .when('/', {
      controller:'ListCtrl',
      templateUrl:'Template/list.html'
    })
    .when('/detail/:venueId', {
      controller:'DetailCtrl',
      templateUrl: 'Template/detail.html'
    })   
    .otherwise({
      redirectTo:'/'
    });
});