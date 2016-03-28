'use strict';

angular.module('myApp.admin',['ngRoute'])

    .config(['$routeProvider', function($routeProvider) {
        $routeProvider.when('/admin', {
            templateUrl: 'admin/admin.html',
            controller: 'adminCtrl'
        });
    }])
    .controller('adminCtrl', function ($rootScope,$scope,$http) {
        $rootScope.alreadyLogin = true;
        /*
        * 商品管理---------------------------------------------------------------------------*/

         $scope.goodsInfoData={
            "goodsId": null,
            "goodsName": "",
            "goodsImage": "",
            "goodsPrice": null,
            "goodsType": ""
        };
        $scope.goodsInfoData=$rootScope.baseData.goodsInfoData;

        //菜单显示
        $scope.setIndex= function (index) {
            if(index==0){
                $scope.goodsManageShow=true;
                $scope.goodsRecommendShow=false;
                $scope.orderManageShow=false;
                $scope.memberManageShow=false;
                $scope.reportFormShow=false;
                $scope.messageManageShow=false;
            }else if(index==1){
                $scope.goodsManageShow=false;
                $scope.goodsRecommendShow=true;
                $scope.orderManageShow=false;
                $scope.memberManageShow=false;
                $scope.reportFormShow=false;
                $scope.messageManageShow=false;
            }else if(index==2){
                $scope.goodsManageShow=false;
                $scope.goodsRecommendShow=false;
                $scope.orderManageShow=true;
                $scope.memberManageShow=false;
                $scope.reportFormShow=false;
                $scope.messageManageShow=false;
            }else if(index==3){
                $scope.goodsManageShow=false;
                $scope.goodsRecommendShow=false;
                $scope.orderManageShow=false;
                $scope.memberManageShow=true;
                $scope.reportFormShow=false;
                $scope.messageManageShow=false;
            }else if(index==4){
                $scope.goodsManageShow=false;
                $scope.goodsRecommendShow=false;
                $scope.orderManageShow=false;
                $scope.memberManageShow=false;
                $scope.reportFormShow=true;
                $scope.messageManageShow=false;
            }else if(index==5){
                $scope.goodsManageShow=false;
                $scope.goodsRecommendShow=false;
                $scope.orderManageShow=false;
                $scope.memberManageShow=false;
                $scope.reportFormShow=false;
                $scope.messageManageShow=true;
            }
        };

        //编辑商品
        $scope.preSaveInfo={};
        $scope.editGoods= function (obj) {
            $scope.preSaveInfo=obj;
        };

        //保存商品信息
        $scope.saveGoodsInfo= function (obj) {
            angular.forEach($scope.goodsInfoData, function (value,key) {
                if(value.goodsId == obj.goodsId){
                    $scope.goodsInfoData.splice(key,1,obj);
                }
            });
        };

        //删除商品
        $scope.delGoods= function (obj) {
            if(confirm("大人！确定要删除该商品？？！！")){
                angular.forEach($scope.goodsInfoData, function (value,key) {
                    if(value.goodsId == obj.goodsId){
                        $scope.goodsInfoData.splice(key,1);
                    }
                });
            }
        };

        //全选&&取消全选
        //$scope.goodsInfoData.checked=false;

        $scope.selectAll= function (isSelectAll) {
            angular.forEach($scope.goodsInfoData, function (value,key) {
                value.checked=isSelectAll;
            });
        };

        //批量删除
        $scope.preSaveDelete=[];

        $scope.delAll= function () {
            $scope.preSaveDelete = $scope.goodsInfoData.filter(function (obj) {
                return !obj.checked;
            });
            if($scope.preSaveDelete.length < $scope.goodsInfoData.length){
                if(confirm("大人！您确定要删除？？？")){
                    $scope.goodsInfoData= $scope.preSaveDelete;
                }
            }else{
                alert("您还未选择要删除的商品！");
            }
        };

        //添加商品
        $scope.addGoodsInfo={
            "goodsId": null,
            "goodsName": "",
            "goodsImage": "",
            "goodsPrice": null,
            "goodsType": ""
        };
        $scope.addGoods= function () {
            $scope.goodsInfoData.unshift($scope.addGoodsInfo);
            $scope.addGoodsInfo={};
/*
            var config = {params: {goodsId:$scope.addGoodsInfo.goodsId }};
            $http.post('http://localhost:8080/springmvc-1/helloworld', $scope.goodsInfoData, config
            ).success(function(data, status, headers, config) {
                    alert('成功');
                }).error(function(data, status, headers, config) {
                    alert('失败');
                });*/
        };











        /*
         * 会员管理---------------------------------------------------------------------------*/
        $scope.memberInfoData={
            "memberId": null,
            "memberName": "",
            "memberSex": "",
            "memberPhone": null,
            "memberLevel": "1"
        };
        $scope.memberInfoData=$rootScope.baseData.memberInfoData;

        //搜索
        $scope.searchMember= function (searchKey,searchValue) {
            console.log(searchKey);
            console.log(searchValue);
            if(searchKey && searchValue){
                var obj=$scope.memberInfoData;
                searchValue = parseInt(searchValue);
                console.log(obj);
                console.log(obj.searchKey);
                return (obj.searchKey == searchValue) ? obj : {};
            }
        };

        //禁言会员
        $scope.forbidMember = function () {

        };



    });


