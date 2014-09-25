# generator-bem [![Build Status](https://secure.travis-ci.org/verybigman/generator-bem.png?branch=master)](https://travis-ci.org/verybigman/generator-bem)

This README also available in [russian](https://github.com/verybigman/generator-bem/blob/master/README.ru.md).

Awesome [Yeoman](http://yeoman.io) generator for your bem-projects.

### You can

- make pretty bem-project structure: `yo bem`
- add new AngularJS module: `yo bem:ng-module users`
- add new AngularJS controller: `yo bem:ng-controller users:main`
- add new AngularJS directive: `yo bem:ng-directive users:awesome-directive`
- add new AngularJS service: `yo bem:ng-service users:awesome-service`
- add new AngularJS factory: `yo bem:ng-factory users:awesome-factory`
- extend you bem-angular-project to NodeJS application: `yo bem:server`
- develop you bem-project with Gulp (take instruction from console): `gulp`
- distribute project with Gulp: `gulp build`
- get it now: `npm install -g generator-bem`

### Paradigm

AngularJS modules is BEM blocks. Controllers, routes, services, directives and etc. is BEM elements. Elements required in modules by \*.deps.js file.
__levels usage__:

- common.blocks - use for override blocks from connected libraries
- service.blocks - use for new blocks on this service
- application.blocks - use for AngularJS modules
- server.blocks - use for NodeJS server modules

### Blocks techs

- bemhtml
- stylus
- browser.js
- node.js
- md

You can override they with [bem-tools techs](https://github.com/bem/bem-tools/tree/support/0.8.x/lib/techs/v2) in
.bem/levels/\*.js files and also you can write you custom tech in .bem/levels/techs/\*.js.

### Dependencies

Project contain [bem-core](https://github.com/bem/bem-core) and [bem-components](https://github.com/bem/bem-components)
libs developed by guys from [Yandex](http://yandex.ru).

### Authors

- Anton Winogradov ([verybigman](https://github.com/verybigman))

### Ideas

Please, talk about your ideas by GitHub [issues](https://github.com/verybigman/generator-bem/issues).

### [MIT](http://en.wikipedia.org/wiki/MIT_License) License

#### Think better. Stay BEMed!
