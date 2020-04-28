angular.module('reducequeue').factory('userservice',['$http',function($http){
    var login= function(data){
        var login = $http.post('http://localhost:3000/users', data);
        return login
    }
   return{
       login:login
   }

}])