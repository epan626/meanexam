app.controller('loginController', ['$scope', '$routeParams', 'userFactory', 'bucketFactory', '$location', '$cookies', function($scope, $routeParams, userFactory, bucketFactory, $location, $cookies){
  $scope.loggeduser = {}
  $scope.user ={}
  var cookie = $cookies.get('cookieloggeduser')
  //
  console.log(cookie)
  // console.log('here1')
  $scope.enter = function() {
    $scope.messages = [];
       $scope.errors = false;
     if($scope.user==undefined){
       $scope.errors = true;
       $scope.messages.push('Your Name is required!')
     } else{
       if($scope.errors == false){
            userFactory.add($scope.user, function(result){
              console.log(result)
                $cookies.put('cookieloggeduser', result._id)
                $location.url('/dashboard')
              })
            }
          }
  }

  var displayuser = function (){
    bucketFactory.displayuser(function(data){
      $scope.user = data
      console.log('down11')
      console.log($scope.user)
      console.log('up11')
      // console.log($scope.user.created[0].creator)
      // console.log($scope.user.tagged)
    })
    }
    displayuser()

    var showloggeduser = function () {
          userFactory.showloggeduser(cookie, function(loggeduser){
            $scope.loggeduser = loggeduser
            console.log($scope.loggeduser)
            console.log('up')
          })
        }
    showloggeduser()

    $scope.status = function(bucket) {
      bucketFactory.status(bucket, function(result){
        displayuser()
      })
    }

}]);
