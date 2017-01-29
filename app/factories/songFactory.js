app.factory('SongFactory', function($http){

  return {
            getSongList: function(){
              return $http.get('https://west-doctors-patients.firebaseio.com/doctors.json')
                .then(function(val){
                  console.log("val", val)
                  return val.data
              })
            }
          }
})
