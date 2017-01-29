app.factory('DoctorFactory', function($http){

  return {
            getDoctorList: function(){
              return $http.get('https://west-doctors-patients.firebaseio.com/doctors.json')
                .then(function(val){
                  console.log("val", val)
                  return val.data
              })
            }
          }
})
