angular.module('<%= _.slugify(appname) %>.system').config(['$stateProvider', '$urlRouterProvider',
    function($stateProvider, $urlRouterProvider) {
        // Unmatched routes:
        $urlRouterProvider.otherwise('/');

        // states
        $stateProvider
            .state('root', {
                url: '/',
                controller: 'SystemController'
            });
    }
]);
