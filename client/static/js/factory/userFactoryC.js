app.factory('userFactory',['$http', '$routeParams', function($http, $routeParams){
  // var users = [];
  var factory = {};
  // var one = [];
  var loggeduser = {}
  //
  factory.add = function(user, callback){
    $http.post('/add', user)
    .then(
      function(result){
        callback(result.data)
      });
  }
  factory.showloggeduser = function(cookie, callback){
  $http.get('/loggeduser/'+cookie)
  .then(
    function(result){
      callback(result.data)
    }
  )
}
factory.allusers = function(callback){
  $http.get('/allusers')
  .then(
    function(result){
      callback(result.data)
    }
  )
}



  return factory

}])
