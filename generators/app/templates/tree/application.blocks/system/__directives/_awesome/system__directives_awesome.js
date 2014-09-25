angular.module('<%= _.slugify(appname) %>.system').directive('ngAwesome', [function() {
    return {
        restrict: 'A',
        link: function ($scope, element, attrs) {
            console.log('Hello from Awesome directive. Find it in System module.');
        }
    }
}]);
