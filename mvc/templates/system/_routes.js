'use strict';

angular.module('<%= _.slugify(appname) %>.system').config(['$stateProvider', '$urlRouterProvider',
    function($stateProvider, $urlRouterProvider) {
        // For unmatched routes:
        $urlRouterProvider.otherwise('/');

        // states for my app
        $stateProvider
            .state('index', {
                url: '/',
                templateUrl: 'public/templates/system/index.html'
            });
    }
]);
