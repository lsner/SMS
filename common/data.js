/**
 * Created by Administrator on 2015/9/25.
 */
angular.module("myApp.data", [])

.run(function ($rootScope, $http) {

    $rootScope.baseData = {};

    /**
     * 加载商品信息
     */
    $http.get("data/goodsInfo.json").success(function (data) {
        $rootScope.baseData.goodsInfoData = data;
    });
        /**
         * 加载会员信息
         */
        $http.get("data/memberInfo.json").success(function (data) {
            $rootScope.baseData.memberInfoData = data;
        });


});

