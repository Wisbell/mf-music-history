app.factory('SongFactory', function($http){

  return {
            getSongList: function(){
              return $http.get('https://west-music-history.firebaseio.com/.json')
                .then(function(val){
                  console.log("val", val)
                  return val.data
              })
            }
          }
})
