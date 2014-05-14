'use strict';

angular.module('<%= _.slugify(appname) %>.<%= _.slugify(module) %>').config(['$stateProvider', '$urlRouterProvider',
    function($stateProvider, $urlRouterProvider) {

        // states for <%= _.slugify(module) %> module
        $stateProvider
            .state('<%= _.slugify(module) %>', {
                url: '/<%= _.slugify(module) %>',
                views: {
                    '': { templateUrl: 'templates/<%= _.slugify(module) %>/#{template-name}.html' }
                }
            });
    }
]);
