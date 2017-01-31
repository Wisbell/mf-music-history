app.controller('AddSongCtrl', function($scope, SongFactory){
  console.log("Song List controller")

  $scope.addSong = function () {

    let songInfo = {
        "name": $scope.songName,
        "artist": $scope.artistName,
        "album": $scope.albumName
    }

    SongFactory.addNewSong(songInfo)
  }

})
