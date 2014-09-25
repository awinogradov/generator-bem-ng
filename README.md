# generator-bem [![Build Status](https://secure.travis-ci.org/verybigman/generator-bem.png?branch=master)](https://travis-ci.org/verybigman/generator-bem)

This README also available in [russian](https://github.com/verybigman/generator-bem/blob/master/README.ru.md).

Awesome [Yeoman](http://yeoman.io) generator for your AngularJS flowered bem-projects. Wow!

## You can

- make pretty bem-project structure: `yo bem`
- create AngularJS modules: `yo bem:ng-module users`
- extend you bem-angular-project to NodeJS application: `yo bem:server`
- develop you bem-project with Gulp (take instruction from console): `gulp`
- distribute project with Gulp: `gulp build`
- get it now: `npm install -g generator-bem`

## Paradigm

AngularJS modules is BEM blocks. Controllers, routes, services, directives and etc. is BEM elements. Elements required in modules by \*.deps.js file.

__Levels usage:__

- _common.blocks_ - use for override blocks from connected libraries
- _service.blocks_ - use for new blocks on this service
- _application.blocks_ - use for AngularJS modules only
- _server.blocks_ - use for NodeJS server modules

__Put all your CSS design to:__
- _design/common.blocks_ - override libraries styles
- _design/service.blocks_ - only this service styles

__ng-module example:__
```
users
    __controllers
        _index
            users__controllers_index.js
            users__controllers_index.en.md
            users__controllers_index.ru.md
        _signin
            users__controllers_singin.js
        _signup
            users__controllers_singup.js    
    __directives
        _awesome
            users__directives_awesome.js
    __factories
    __services
    __routes
        users__routes.js
    users.js
    users.en.md
    users.ru.md
    users.deps.js
```

## Technologies

- [BEMHTML](http://bem.info/technology/bemhtml/2.3.0/reference)
- [Stylus](http://learnboost.github.io/stylus)
- [AngularJS](https://angularjs.org)
- [NodeJS](http://nodejs.org)
- [Markdown](https://en.wikipedia.org/wiki/Markdown)

You can override them with [bem-tools techs](https://github.com/bem/bem-tools/tree/support/0.8.x/lib/techs/v2) in .bem/levels/\*.js files and also you can write you custom tech in .bem/levels/techs/\*.js.

### Dependencies

Project contain [bem-core](https://github.com/bem/bem-core) and [bem-ng](https://github.com/verybigman/bem-ng) libs. [bem-core](https://github.com/bem/bem-core) was developed by guys from [Yandex](http://yandex.ru).

### Authors

- Anton Winogradov ([verybigman](https://github.com/verybigman))

### Ideas

Please, talk about your ideas by GitHub [issues](https://github.com/verybigman/generator-bem/issues).

### [MIT](http://en.wikipedia.org/wiki/MIT_License) License

#### Think better. Stay BEMed!
