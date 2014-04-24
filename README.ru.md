# generator-bem [![Build Status](https://secure.travis-ci.org/verybigman/generator-bem.png?branch=master)](https://travis-ci.org/verybigman/generator-bem)

Генератор БЭМ-проектов [Yeoman](http://yeoman.io). Делает bem-проекты немного лучше
для разработки совместно с другими популярными технологиями и автоматической сборкой через Gulp(в ближайшее время).
В ближайшем будущем генератор будет включать тесты, валидацию js/css. Следите за issues, чтобы быть в курсе
ближайших планов и известных багов.

### Технологии для блоков по умолчанию

- bemhtml
- roole
- js
- md

ВЫ можете заменить их на любые другие, используя библиотеку технологий [bem-techs](https://github.com/verybigman/bem-techs)
и [технологии, которые предоставляет bem-tools](https://github.com/bem/bem-tools/tree/support/0.7.x/lib/techs/v2).

### Начало работы

Для установки generator-bem из npm репозитория воспользуйтесь командой:

```
$ npm install -g generator-bem
```

Инициализируйте свой проект в пустой директории:

```
$ yo bem
```

Запустите bem server:

```
$ bem server
```

### Что внутри

Проект содержит [bem-core](https://github.com/bem/bem-core), [bem-components](https://github.com/bem/bem-components),
[bem-pr](https://github.com/bem/bem-pr) - библиотеки, разрабатываемые парнями из [Яндекса](http://yandex.ru) и фреймворк
[bem-protein](https://github.com/verybigman/bem-protein), который вы можете использовать как базу для ваших бэм-проектов.

### [MIT](http://en.wikipedia.org/wiki/MIT_License) Лицензия

#### Think better. Stay BEMed!
