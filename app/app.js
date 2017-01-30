console.log("app.js loaded")


var app = angular.module('musicHistoryApp', ['ngRoute'])

app.config(function($routeProvider, $locationProvider){
  $locationProvider.hashPrefix('')

  $routeProvider
    .when('/', {
      controller: 'SongListCtrl',
      templateUrl: 'partials/song-list.html'
    })
    .when('/view-music/:someSong', {
      controller: 'SongDetailCtrl',
      templateUrl: 'partials/song-details.html'
    })
    .when('/view-music', {
      controller: 'SongDetailCtrl',
      templateUrl: 'partials/song-list.html'
    })
    .when('/add-music', {
      controller: '',
      templateUrl: 'partials/addMusic.html'
    })
    .when('/profile', {
      controller: '',
      templateUrl: 'partials/profile.html'
    })
    .otherwise({
      redirectTo: '/'
    })
})
