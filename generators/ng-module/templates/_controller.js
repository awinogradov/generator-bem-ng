angular.module('<%= _.slugify(appname) %>.<%= _.slugify(module) %>').controller('<%= _.capitalize(_.slugify(module)) %>Controller',
    ['$scope', function ($scope) {

        console.log('Hello from <%= _.slugify(module) %>Controller');

}]);
