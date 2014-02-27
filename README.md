# generator-bem [![Build Status](https://secure.travis-ci.org/verybigman/generator-bem.png?branch=master)](https://travis-ci.org/verybigman/generator-bem)

This README also available in [russian](https://github.com/verybigman/generator-bem/blob/master/README.ru.md).

A BEM generator for [Yeoman](http://yeoman.io). Make [project-stub](https://github.com/bem/project-stub) pretty
for development with another front-end techs and automatic distribution with Grunt. In the future generator will
be include tests, js/css hinting, image/svg minimization, install frameworks and plugins for jquery. You can watch
issues for know about new features and bugs.

### Getting Started

To install generator-bem from npm, run:

```
$ npm install -g generator-bem
```

Then, initiate the generator in empty project folder:

```
$ yo bem
```
If you want to customize your project select 'No' in prompt for project structure auto-generating. Then
open *project.json*, setup your application and run:

```
$ yo bem:init
```

Else, you can use auto-generated project structure. Use it, if you don't know what are you do.
Finely use grunt default task for build dist:

```
$ grunt
```

### Examples

In generator prompts you can confirm for installing examples, if you do this 'bower_components' directory
will be contain [webapp](https://github.com/verybigman/bem-example) built with bem. Also auto first make project
this directory will be contain [bem-core](https://github.com/bem/bem-core) and
[bem-components](https://github.com/bem/bem-components) libs developed by guys from [Yandex](http://yandex.ru).
Wait more examples in the future.

### Key differences from project-stub

 - blocks ordering settings moved from \*.bundles/.bem/level.js to .bem/levels/bundles.js/
 - for compatibility with other components, generator-bem use bower_components directory for bem-libs, customize it here: .bem/make.js, .bem/levels/\*.js
 - blocks and bundles build from list in levels/bundles.js

### [MIT](http://en.wikipedia.org/wiki/MIT_License) License

#### Think better. Stay BEMed!
