app.controller('SongListCtrl', function($scope, SongFactory){
  console.log("Song List controller")

  SongFactory
    .getSongList()
    .then(function(songs){
      console.log("song list", songs)
      $scope.songList = songs
    })

})
