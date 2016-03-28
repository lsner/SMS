'use strict';

angular.module('myApp.login',['ngRoute'])
    .config(['$routeProvider', function($routeProvider) {
        $routeProvider.when('/login', {
            templateUrl: 'login/login.html',
            controller: 'loginCtrl'
        });
    }])
    .controller('loginCtrl', function ($rootScope,$scope,$location) {

        $scope.loginServer= function () {
            if($scope.name == 'admin'){
                $location.path('/admin');
            }else if($scope.name == 'member'){
                $location.path('/member');
            }else{
                window.alert("用户名输入错误");
            }
        }
    })
