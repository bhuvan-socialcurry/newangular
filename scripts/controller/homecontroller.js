angular.module('reducequeue').controller('homepageController',function($scope,$rootScope){
    console.log("there are lost",$rootScope)
    $scope.products=[{name:'Ice Cream',img_url:'',price:'Rs 50'},{name:'Ice Cream',img_url:'',price:'Rs 150'},{name:'Burger',img_url:'',price:'Rs 150'},{name:'Chowmein',img_url:'',price:'Rs 100'}];
})