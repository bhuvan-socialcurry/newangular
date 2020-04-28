angular.module('reducequeue').factory('userservice',['$http','$rootScope',function($http,$rootScope){
    
      //$http.defaults.headers.common.Authorization = 'Bearer'+ 
      
    var login= function(data){
        var login = $http.post('http://localhost:3000/users', data);
        return login
    }
    var cachetoken= function(token){
        localStorage.setItem('token',token)
    }
    var getbooks=function(){
        var config = {
        headers: {
          'Authorization': 'Bearer '+ localStorage.getItem('token')
        }
      };
      console.log("this is a real",config)
        var getbooks=$http.get('http://localhost:3000/users/books',config)
        return getbooks
    }
   return{
       login:login,
       getbooks:getbooks,
       cachetoken:cachetoken
   }

}])