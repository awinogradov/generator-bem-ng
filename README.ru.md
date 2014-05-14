# generator-bem [![Build Status](https://secure.travis-ci.org/verybigman/generator-bem.png?branch=master)](https://travis-ci.org/verybigman/generator-bem)

Необыкновенный [Yeoman](http://yeoman.io) генератор для БЭМ-проектов.

### С __generator-bem__ вы сможете:

- создать удобную структуру для БЭМ-проекта: `yo bem`
- расширить ваш БЭМ-проект до AngularJS приложения: `yo bem:ng-app`
- создавать новые модули для AngularJS: `yo bem:ng-module users`
- расширить ваш БЭМ-Angular-проект до NodeJS приложения: `yo bem:server`
- собрать ваш БЭМ-проект с помощью Gulp: `bem make && gulp`
- установить его прямо сейчас: `npm install -g generator-bem`

### Технологии по умолчанию

- bemhtml
- roole
- js
- md

Вы можете перезаписать их, используя [технологии из bem-tools](https://github.com/bem/bem-tools/tree/support/0.8.x/lib/techs/v2) в
файлах, которые находятся тут .bem/levels/*.js и написать любую свою технологию тут .bem/levels/techs/*.js.

### Зависимости

Генератор тащит за собой [bem-core](https://github.com/bem/bem-core), разрабатываемую ребятами из
[Яндекса](http://yandex.ru) и фреймворк [bem-protein](https://github.com/verybigman/bem-protein),
который может статить базой для всех ваших БЭМ-проектов.

### [MIT](http://en.wikipedia.org/wiki/MIT_License) Лицензия

#### Think better. Stay BEMed!
