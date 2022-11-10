[![Actions Status](https://github.com/semenChe/frontend-project-46/workflows/hexlet-check/badge.svg)](https://github.com/semenChe/frontend-project-46/actions)
[![Node CI](https://github.com/semenChe/frontend-project-46/actions/workflows/nodejs.yml/badge.svg?event=push)](https://github.com/semenChe/frontend-project-46/actions/workflows/nodejs.yml)
<a href="https://codeclimate.com/github/semenChe/frontend-project-46/maintainability"><img src="https://api.codeclimate.com/v1/badges/a4f12b1ecabfe4cea78f/maintainability" /></a>
<a href="https://codeclimate.com/github/semenChe/frontend-project-46/test_coverage"><img src="https://api.codeclimate.com/v1/badges/a4f12b1ecabfe4cea78f/test_coverage" /></a>

# ВЫЧИСЛИТЕЛЬ ОТЛИЧИЙ

## Описание
Вычислитель отличий – программа, определяющая разницу между двумя структурами данных. Это популярная задача, для решения которой существует множество онлайн сервисов, например http://www.jsondiff.com/. Подобный механизм используется при выводе тестов или при автоматическом отслеживании изменении в конфигурационных файлах.

## Возможности утилиты:
- Поддержка разных входных форматов: yaml, json
- Генерация отчета в виде plain text, stylish и json

## Установка
### Перед запуском программы выполните следующие действия:
* Проверьте текущие обновления базы данных с доступными пакетами: введите apt update в командной строке.
* Установите пакет Node.js: введите командную строку apt install nodejs
* Обновите Node.js до последней версии: введите командную строку apt upgrade nodejs
* Чтобы вы могли устанавливать модули и пакеты с Node.js, установите пакет npm: введите командную строку apt install npm
* Клонируйте этот репозиторий: https://github.com/semenChe/frontend-project-46.git
* Добавьте и проверьте зависимости: введите командную строку make install

## Пример запуска вычислителя отличий с файлами формата json. Обращение к файлам через относительный и абсолютный путь.
<a href="https://asciinema.org/a/1rzdwuYPq8BdYRvuLXD8UwRLL" target="_blank"><img src="https://asciinema.org/a/1rzdwuYPq8BdYRvuLXD8UwRLL.svg" /></a>

## Пример запуска вычислителя отличий с файлами формата yaml и yml. Обращение к файлам через относительный и абсолютный путь.
<a href="https://asciinema.org/a/GdaQkkFJNnNiaKekiSQM5141e" target="_blank"><img src="https://asciinema.org/a/GdaQkkFJNnNiaKekiSQM5141e.svg" /></a>

## Пример запуска вычислителя для файлов, имеющих вложенные структуры
<a href="https://asciinema.org/a/pJ0xviFqMoxu0WcikASJKZh5l" target="_blank"><img src="https://asciinema.org/a/pJ0xviFqMoxu0WcikASJKZh5l.svg" /></a>

## Пример запуска вычислителя для файлов, имеющих вложенные структуры (вывод в форматах stylish и plain)
<a href="https://asciinema.org/a/Ad9kf75D3SfaN41TPk6splwHb" target="_blank"><img src="https://asciinema.org/a/Ad9kf75D3SfaN41TPk6splwHb.svg" /></a>

## Пример запуска вычислителя для файлов, имеющих вложенные структуры (вывод в форматах stylish, plain и json)
<a href="https://asciinema.org/a/vs0cKEbg7hmXPPrDGu8KOQDQ1" target="_blank"><img src="https://asciinema.org/a/vs0cKEbg7hmXPPrDGu8KOQDQ1.svg" /></a>

## Рекомендуемые минимальные требования к системе:
### Минимальные версии ОС:
* Windows 10
* MacOS 10.14
* Ubuntu 16, либо удобный вам дистрибутив Linux
### Процессор: 
* Intel i3 / AMD Ryzen 3
### Операционная память: 
* от 8GB