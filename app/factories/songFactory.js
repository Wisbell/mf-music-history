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
            },

            getArtistList: function(){
              return $http.get('https://west-music-history.firebaseio.com/.json')
                .then(function(val){
                  console.log("get artist list val", val)


                  // get artist info

                  // add it to an array

                  // ng-repeat it as an option
                  return val.data
              })
              .then(function(val){
                console.log("second then", val)

                 let artistList = [];
                  // go over object list

                  for (key in val.data) {
                    console.log("get artist", key.artist)
                    artistList.push(key.artist)
                  }

                  console.log(artistList)
              })
            },

            getAlbumList: function(){
              return $http.get('https://west-music-history.firebaseio.com/.json')
                .then(function(val){
                  console.log("val", val)
                  return val.data
              })
            }
          }
})
