/**
 * configure RequireJS
 * prefer named modules to long paths, especially for version mgt
 * or 3rd party libraries
 */
require.config({

    paths: {
        'domReady': '../bower_components/requirejs-domready/domReady',
        'angular': '../bower_components/angular/angular.min',
        'uiRouter': '../bower_components/angular-ui-router/release/angular-ui-router.min',
        // 'jquery': '../bower_components/jquery/dist/jquery',
        // 'bootstrap3': '../bower_components/bootstrap/dist/js/bootstrap',

        'launch': '../modules/launch/launch',
        'home': '../modules/home/home',
    },

    /**
     * for libs that either do not support AMD out of the box, or
     * require some fine tuning to dependency mgt'
     */
    shim: {
        'angular': {
            exports: 'angular',
        },
        'uiRouter':{
            deps: ['angular']
        }
    },
    
    deps: [
        // kick start application... see bootstrap.js
        './bootstrap', 
    ]
});
