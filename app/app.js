console.log("app.js loaded")


var app = angular.module('doctorsApp', ['ngRoute'])

app.config(function($routeProvider, $locationProvider){
  $locationProvider.hashPrefix('')

  $routeProvider
    .when('/', {
      controller: 'SongListCtrl',
      templateUrl: 'partials/song-list.html'
    })
    .when('/song-detail', {
      controller: 'SongDetailCtrl',
      templateUrl: 'partials/song-details.html'
    })
    .otherwise({
      redirectTo: '/'
    })
})
