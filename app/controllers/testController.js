app.controller('DoctorCtrl', function($scope, DoctorFactory){
  console.log("Doctor Page controller")

  DoctorFactory.getDoctorList()
    .then(function(val){
      console.log("doc control promise", val)
      $scope.doctorList = val
    })

})
