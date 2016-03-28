'use strict';

angular.module('myApp.member',['ngRoute'])

    .config(['$routeProvider', function($routeProvider) {
        $routeProvider.when('/member', {
            templateUrl: 'member/member.html',
            controller: 'memberCtrl'
        });
    }])
    .controller('memberCtrl', function ($rootScope,$scope) {
        $rootScope.alreadyLogin = true;

        //商品展示
        $scope.goodsInfoData={
            "goodsId": null,
            "goodsName": "",
            "goodsImage": "",
            "goodsPrice": null,
            "goodsType": ""
        };
        $scope.goodsInfoData=$rootScope.baseData.goodsInfoData;



    });
