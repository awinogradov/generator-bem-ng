'use strict';

var <%= _.slugify(appname) %> = angular.module('<%= _.slugify(appname) %>', [
                                'ui.router',
                                '<%= _.slugify(appname) %>.system'
                            ]);

angular.element(document).ready(function() {
    angular.bootstrap(document, ['<%= _.slugify(appname) %>']);
});

angular.module('<%= _.slugify(appname) %>.system', []);
