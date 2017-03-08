define(['./app'], function(app) {
    'use strict';
    return app.config(function($urlRouterProvider, $stateProvider,$controllerProvider, $provide) {

        app.register = {
            controller: $controllerProvider.register,
            factory: $provide.factory
        };

        function resolveController(names) {
            return {
                load: ['$q', '$rootScope', function ($q, $rootScope) {
                    var defer = $q.defer();
                    require(names, function () {
                        defer.resolve();
                        $rootScope.$apply();
                    });
                    return defer.promise;
                }]
            }
        }

        $urlRouterProvider.otherwise('/launch');
        $stateProvider

        .state('launch',{
            url: '/launch',
            views:{
                "main":{
                    templateUrl: "modules/launch/launch.html",
                    controller: "launchCtrl",
                    resolve: resolveController(["launch"])
                }
            }
        })
        .state('main',{
            url: '/',
            views:{
                "header":{
                    templateUrl: "modules/common/header.html",
                },
                "main":{
                    templateUrl: "modules/common/main.html",
                },
                "footer":{
                    templateUrl: "modules/common/footer.html",
                }
            }
        });
        
    })
});