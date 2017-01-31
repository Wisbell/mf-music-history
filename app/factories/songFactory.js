app.factory('SongFactory', function($http){

  return {
            getSongList: function(){
              return $http.get('https://west-music-history.firebaseio.com/.json')
                .then(function(val){
                  console.log("val", val)
                  return val.data
              })
            },

            addNewSong: function(newSong){
              $http.post('https://west-music-history.firebaseio.com/.json', JSON.stringify(newSong))
            }
          },

            getArtistList: function(){
              return $http.get('https://west-music-history.firebaseio.com/.json')
                .then(function(val){
                  console.log("val", val)
                  return val.data
              })
            },

            getAlbumList: function(){
              return $http.get('https://west-music-history.firebaseio.com/.json')
                .then(function(val){
                  console.log("val", val)
                  return val.data
              })
            }
})
