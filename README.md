# Проект Hero Academy

Представляет собой веб-приложение для вербовки различных героев. Вдохновлено видеоигрой "Endless Space 2" от Amplitude Studios

![image](https://github.com/stankenA/hero-academy/assets/82235915/e194cf45-452f-47cb-833b-c5b7c890119c)


## Описание

В приложении реализован следующий функционал: 
- загрузка данных о героях с удалённого сервера (mockAPI)
- сортировка героев по следующим параметрам: их показателю влияния и принадлежности к той или иной фракции, в алфавитном порядке, по стоимости
- поиск героев по ключевым словам (запросы отложены с помощью debounce)
- возможность выбирать различные варианты опций при вербовке героя, такие как его уровень и должность
- отображение количества героев в корзине и их общей стоимости
- реализована страница с расширенной корзиной, где можно посмотреть выбранных героев и увеличить/уменьшить их количество, полностью удалить из корзины, очистить всю корзину
- при попытке перейти на несуществующий адрес будет отображена соответствующая страница

### Технологии: 

1. Адаптивная вёрсткая
2. Использование препроцессора Sass/SCSS
3. Использование методологии БЭМ
4. Приложение было собрано с помощью CRA (Create React App)
5. Был использован компонентный подход с использованием технологий React, таких как использование различных хуков, контекста, поднятие стейта
6. Использован React Content Loader для создания скелетонов карточек с героями (заглушка для ожидания ответа от сервера с данными о картах)
7. Была использована библиотека маршрутизации React Router
8. Логика состояний фильтрации (типа сортировки, выбранной фракции, ключевых слов) и логика корзины (добавление/удаление героев, увеличение/уменьшение числа уже выбранных героев, полная очистка корзины) реализованы с помощью стейт-менеджера Redux Toolkit

### Статус разработки: 

- Находится в процессе разработки. Планируется использование стейт менеджера Redux Toolkit, переписание кода на TypeScript, осуществлять запросы с помощью Axios

## Ссылки

**Демо**: https://stankena.github.io/hero-academy