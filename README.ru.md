# generator-bem [![Build Status](https://secure.travis-ci.org/verybigman/generator-bem.png?branch=master)](https://travis-ci.org/verybigman/generator-bem)

Необыкновенный генератор для [Yeoman](http://yeoman.io), который позволит вам использовать AngularJS в ваших БЭМ-проектах. Wow!

## Навыки

- базовая структура: `yo bem`
- создание AngularJS модулей: `yo bem:ng-module users`
- расширение до NodeJS приложения: `yo bem:server`
- реалтайм разработка с Gulp (инструкции в консоли): `gulp`
- финальная сборка с Gulp: `gulp build`
- установка: `npm install -g generator-bem`

## Парадигмы

AngularJS модули это БЭМ блоки. Контроллеры, сервисы, директивы и т.п. это БЭМ элементы. Элементы объявляются в модулях с помощью файла \*.deps.js.

__Использование уровней:__

- _common.blocks_ - используется для переопределния блоков, подкюченных библиотек
- _service.blocks_ - используется для новых блоков в этом сервисе
- _application.blocks_ - используется только для AngularJS модулей
- _server.blocks_ - используется для модулей сервера NodeJS

__Дизайн и стили:__
- _design/common.blocks_ - переопределние блоков, подкюченных библиотек
- _design/service.blocks_ - стили только для этого сервиса

__Пример AngularJS модуля:__
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

## Технологии

- [BEMHTML](http://bem.info/technology/bemhtml/2.3.0/reference)
- [Stylus](http://learnboost.github.io/stylus)
- [AngularJS](https://angularjs.org)
- [NodeJS](http://nodejs.org)
- [Markdown](https://en.wikipedia.org/wiki/Markdown)

Вы можете использовать любые из [bem-tools techs](https://github.com/bem/bem-tools/tree/support/0.8.x/lib/techs/v2), объявив их в .bem/levels/\*.js файлах, а также вы можете написать свои технологии в .bem/levels/techs/\*.js.

### Зависимости

Генератор тянет за собой [bem-core](https://github.com/bem/bem-core) и [bem-ng](https://github.com/verybigman/bem-ng). [bem-core](https://github.com/bem/bem-core) библиотека, написанная ребятами из [Яндекса](http://yandex.ru).

### Авторы

- Виноградов Антон ([verybigman](https://github.com/verybigman))

### Предложения

Все замечания и предложения пишите в [issue](https://github.com/verybigman/generator-bem/issues) на Github.

### Лицензия [MIT](http://en.wikipedia.org/wiki/MIT_License)

#### Think better. Stay BEMed!
