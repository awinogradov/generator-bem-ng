angular.module('<%= _.slugify(appname) %>.<%= _.slugify(module) %>').config(['$stateProvider', '$urlRouterProvider',
    function($stateProvider, $urlRouterProvider) {

        // states for <%= _.slugify(module) %> module
        $stateProvider
            .state('<%= _.slugify(module) %>', {
                url: '/<%= _.slugify(module) %>',
                controller: '<%= _.capitalize(_.slugify(module)) %>Controller'
            });
    }
]);
