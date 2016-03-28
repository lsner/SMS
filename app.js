'use strict';

// Declare app level module which depends on views, and components
angular.module('myApp', [
    'ngRoute',
    'ngResource',
    'myApp.login',
    'myApp.member',
    'myApp.admin',
    'myApp.directives',
    'myApp.filters',
    'myApp.data',
    'myApp.services'
]).config(['$routeProvider', function ($routeProvider) {
    $routeProvider.when("/", {
        controller: 'loginCtrl',
        templateUrl: 'login/login.html'
    }).when("/member", {
        controller: 'memberCtrl',
        templateUrl: 'member/member.html'
    }).when("/admin", {
        controller: 'adminCtrl',
        templateUrl: 'admin/admin.html'
    }).otherwise({
        redirectTo: '/'
    });
}])
    .controller('navBarCtrl', function ($scope) {
        $scope.alreadyLogin = false;
    // $scope.bondMarketDataAll = [];
});
