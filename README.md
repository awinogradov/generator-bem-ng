# generator-bem [![Build Status](https://secure.travis-ci.org/verybigman/generator-bem.png?branch=master)](https://travis-ci.org/verybigman/generator-bem)

This README also available in [russian](https://github.com/verybigman/generator-bem/blob/master/README.ru.md).

A BEM generator for [Yeoman](http://yeoman.io). Make [project-stub](https://github.com/bem/project-stub) pretty
for development with another front-end techs and automatic distribution with Grunt. In the future generator will
be include tests, js/css hinting, image/svg minimization, install frameworks and plugins for jquery. You can watch
issues for know about new features and bugs.

## Getting Started

To install generator-bem from npm, run:

```
$ npm install -g generator-bem
```

Then, initiate the generator in empty project folder:

```
$ yo bem
```

Open *project.json* and setup your application. Think more here. Then:

```
$ yo bem:init
```

And, finely use grunt default task for build dist:

```
$ grunt
```

## Examples

For fully understanding 'bower_components' directory contain [webapp](https://github.com/verybigman/bem-example) built
with bem. Also auto first make project this directory will be contain [bem-core](https://github.com/bem/bem-core)
and [bem-components](https://github.com/bem/bem-components) libs developed by guys from [Yandex](http://yandex.ru).
Wait more examples in the future.

## Troubles

Now they is hidden. Visible is one: auto build distribution for one bundles level only and *yo bem:init* command too.

## Key differences from project-stub

Blocks ordering settings moved from \*.bundles/.bem/level.js to .bem/levels/bundles.js/. For compatibility with other
components, generator-bem use bower_components directory for bem-libs. Customize it here: .bem/make.js, .bem/levels/\*.js.

### [MIT](http://en.wikipedia.org/wiki/MIT_License) License

#### Think better. Stay BEMed!
