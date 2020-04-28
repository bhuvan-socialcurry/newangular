angular.module('reducequeue').controller('homepageController',function($scope,userservice){
    $scope.books=[];
    $scope.getfn= function(){
        console.log("this is not a price")
        userservice.getbooks().then(function(books){
            console.log("this is a books",books)
            $scope.books=books.data
        })
    }
    $scope.getfn()
})
