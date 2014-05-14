# generator-bem [![Build Status](https://secure.travis-ci.org/verybigman/generator-bem.png?branch=master)](https://travis-ci.org/verybigman/generator-bem)

This README also available in [russian](https://github.com/verybigman/generator-bem/blob/master/README.ru.md).

Awesome [Yeoman](http://yeoman.io) generator for bem-projects.

### With generator-bem you can:

- make pretty bem-project structure: `yo bem`
- extend you bem-project to AngularJS application: `yo bem:ng-app`
- add new AngularJS modules: `yo bem:ng-module users`
- extend you bem-angular-project to NodeJS application: `yo bem:server`
- distribute project with Gulp: `bem make && gulp`
- get it now: `npm install -g generator-bem`

### Default blocks techs

- bemhtml
- roole
- js
- md

You can override they with [bem-tools techs](https://github.com/bem/bem-tools/tree/support/0.8.x/lib/techs/v2) in
.bem/levels/*.js files and also you can write you custom tech in .bem/levels/techs/*.js.

### Dependencies

Project contain [bem-core](https://github.com/bem/bem-core) lib developed by guys from
[Yandex](http://yandex.ru) and framework [bem-protein](https://github.com/verybigman/bem-protein)
that you use for base of all your bem-projects.

### [MIT](http://en.wikipedia.org/wiki/MIT_License) License

#### Think better. Stay BEMed!
