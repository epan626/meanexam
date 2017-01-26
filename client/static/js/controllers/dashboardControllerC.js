app.controller('dashboardController', ['$scope', '$routeParams', 'userFactory', 'bucketFactory', '$location', '$cookies', function($scope, $routeParams, userFactory, bucketFactory, $location, $cookies){
  $scope.loggeduser = {}
  $scope.users =[]
  $scope.bucketlist = []
  $scope.user
  var cookie = $cookies.get('cookieloggeduser')


var showloggeduser = function () {
      userFactory.showloggeduser(cookie, function(loggeduser){
        $scope.loggeduser = loggeduser

      })
    }
showloggeduser()

var showallusers = function() {
  userFactory.allusers(function(data) {
    $scope.users = data
  })
}
showallusers()


$scope.addlist = function(){
  $scope.bucket.creator = cookie
  console.log($scope.bucket)
  bucketFactory.addlist($scope.bucket, function(data){
    showallbucket();
  })
}

var showallbucket = function() {
  bucketFactory.showallbucket(function(data) {
    $scope.bucketlist = data
    console.log('herehere')
    console.log($scope.bucketlist)
  })
}
showallbucket();

$scope.logout = function() {
  $cookies.remove('cookieloggeduser')
  $location.url('/')
}

$scope.status = function(bucket) {
  bucketFactory.status(bucket, function(result){
  showallbucket();
  })
}


}]);
