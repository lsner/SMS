'use strict';

/* Services */

angular.module('myApp.services', ['ngResource'])
   /* .factory('add', function($resource) {
        return $resource('http://localhost:8080/springmvc-1/helloworld', {}, {
            getAllData:{method:'POST', params:{goodsId: '1001'}, isArray:true}
        });
    })*/
    .factory('addSocket', function ($rootScope) {
        var socket = io.connect('http://172.16.12.76:5001/quotes');
        return {
            on: function (eventName, callback) {
                socket.on(eventName, function () {
                    var args = arguments;
                    $rootScope.$apply(function () {
                        callback.apply(socket, args);
                    })
                });
            }
        }
    });
