angular.module('reducequeue').controller('loginController',function($scope,$rootScope,userservice){
    // console.log("there are lost",$rootScope)
    // $scope.products=[{name:'Ice Cream',img_url:'',price:'Rs 50'},{name:'Ice Cream',img_url:'',price:'Rs 150'},{name:'Burger',img_url:'',price:'Rs 150'},{name:'Chowmein',img_url:'',price:'Rs 100'}];
    $scope.username="";
    $scope.password="";
    $scope.signin = function(){
      var data={};
      data.username=$scope.username;
      data.password=$scope.password;
      userservice.login(data).then(function(res){
          console.log("this is suceess",res)}
          ,function(err){console.log("this is a unique",err)})

    }
})