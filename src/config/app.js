/**
 * loads sub modules and wraps them up into the main module
 * this should be used for top-level module definitions only
 */
define([
    'angular',
    'uiRouter'
    
], function (ng) {
    'use strict';

    return ng.module('app', [
        'ui.router'
    ]);
});
