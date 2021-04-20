//Анонимные функции:
//В джесе есть короткий вариант записи анонимной функции.
//Простая: function (args) {...}
//Стрелочная: (args) => {...}
//Если один аргумент: args => {...}
//Если нет аргументов: () => {...}
//Если одна операция в функции, то фигурные скобки можно не ставить + она вернёт результат этой операции
//  (args) => 'hello' //вернёт 'hello'
//Самая краткая запись:
//  arg => 'hello' //вернёт 'hello'

//В отличии от пхп (->) тут свойства и методы берутся через точку (.)

//В языке оч много фишек, которые я буду объяснять на месте

//Ещё в джесе нет проблемы с областью видимости переменных и есть локальные функции
//Локальная функция - функция, которая определена внутри другой и с наружи не существует
//В джесе этот интерфейс взаимодействия с внешними переменными называется замыкания
//На деле это очень просто. Внутри локальных функций доступны все внешние переменные.
//Снаружи функции нет внутренних переменных этой функции.
//То есть внутрь входит - наружу не выходит
//Если есть локальная переменная с таким же именем как и внешняя, то эта переменная именно ЛОКАЛЬНАЯ.
//Её изменение не приведёт к изменению внешней переменной.
//То есть локальные переменные затмевают глобальные.

//Определение переменых использует директивы let и const
//Создать переменную: let variable = 5
//Создать константу: const variable = 5
//Если попробуем переопределить значение константы, то получим ошибку

//Есть стандартная функция вывода инфы - alert(сообщение)
//Она выводит всплывающее окно с текстом
//Напр. alert('Hello, World!); //выведет в браузере Hello, World!

//Интерполяция строк.
//В пхп есть разница между двойными и одинарными кавычками.
//В пхп в между двойными кавычками можно писать переменные и тд, а одинарные это просто строка.
//В джесе нет разницы между двойными и одинарными кавычками - и то и то просто строка.
//В отличии от пхп (.) в джесе используют плюс (+) для сложения строк.
//Но часто надо вставить переменные в строку как в пхп с двойными кавычками
//Для этого в джесе сделали специальные КОСЫЕ кавычки (апостроф на русской букве ё) - `текст`
//В такие строки можно вставлять переменные используя специальный синтаксис ${выражение}.
//Сперва вычисляется выражение, а потом от преобразовывается в строку и прибавляется к остальной строке.
//Напр.:
//let name = 'Лиля', myName='Федя';
//alert('Привет, ' + name + '! Меня зовут ' + myName) //Привет, Лиля! Меня зовут Федя
//alert(`Привет, ${name}! Меня зовут ${myName}`) //Привет, Лиля! Меня зовут Федя

//В джесе есть глобальный объект window, который хранит в себе всё
//Например, document, на самом деле window.document
//И глобальные переменные можно создать так:
//window.имя_переменной = значение_переменной

//Только что я показал одну из фишек языка.
//Свойства присваиваются динамически.
//А ещё в джесе все является объектами, даже функции.
//Поэтому мы можем складировать инфу как нам удобно.

//Коротко про объекты.
//Чтобы создать пустой объект используются фигурные скобки при присовении.
//Вот так: let myObject = {};
//Можно определить объекту парочку своств стразу, напр. определю себя как объект:
// const me = {
//     name: 'Федя',
//     surname: 'Никонов',
//     age: 18,
//     //это метод объекта
//     sayHelloTo(somebody) {
//         //this содержит ссылку на сам объект (контекст вызова)
//         alert(`Здравствуй, ${somebody}! Я ${this.name} ${this.surname}.`);
//     }
// };
// alert(me.name); //Федя
// me.name = 'Фёдор'; //потом эти свойства можно изменять
// me.patronimic = 'Андреевич'; //или добавлять новые
// me['patronimic'] = 'Андреевич'; //есть второй вариант - обращение к свойству как к элементу ассоц массива в пхп
// //обращение как к ассоц массиву позволяет использовать переменные для задания свойств объекта
// alert(me.patronimic); //Андреевич
// me.sayHelloTo('Лиля'); //Здравствуй, Лиля! Я Фёдор Никонов.
//Ещё раз скажу, что в джесе всё объекты, даже функции.
//Поэтому функции можно присвоить какие-то свойства и методы, что может дико звучать, но факт :)

//Про ИДшники объектов страницы.
//Если ты устанавливаешь в хтмл объектку какой-то ИД, то в джесе появляется переменная, которая называется также
//Таким образом можно быстро получить доступ к элементам страницы без всяких манипуляций с jQuery

//jQuery
//В самом джесе есть функции для управления страницей, но их очень долго писать и немного неудобно
//Поэтому появилась библиотека, которая упрощает это дело
//Она прдеставлена функцией $ (это имя функции если что - один символ, доллар)
//Она может получать разные параметры
//Некоторые варианты:
//1. Элемент страницы. Тогда повесит на него функции библиотеки
//2. CSS селектор. Тогда выберет элементы страницы, которые удовлетворяют селектору и повест на них функции бибилотеки

//Функции библиотеки это методы на самом деле, просто их принято называть так
//Метод - функция в ООП, которая принадлежит какому-то объекту
//Функция - функция, которая сама по себе

//ИТАК

//Сперва подождём пока документ будет готов
//Дело в том, что иногда скрипт выполняется быстрее чем страница загружается
//Этому надо подождать
//Сделать мы это можем использовав функцию ready на документе
//Документ - это встроенная переменная, которая ссылается на саму страницу
//Метод ready принимает первым аргументом функцию, которая будет выполнена после готовности документа
//В общем это просто оболочка, чтобы скрипт работал без ошибок


function generateGetQuery() {
    const getObject = {};
    $('.checkbox').each((i, el) => {
        if (el.querySelector('input').checked) {
            const name = el.getAttribute('name');
            getObject[name] = true;
        }
    });
    $('.radio-button input:checked').each((i, el) => {
        const name = el.getAttribute('name');
        getObject[name] = el.getAttribute('value');
    });
    $('.dropdown').each((i, el) => {
        const name = el.getAttribute('name');
        const valueOption = el.options[el.options.selectedIndex];
        getObject[name] = valueOption.getAttribute('value');
    });
    $('.double-range').each((i, el) => {
        if (window.isSearchChange) return;
        const name = el.getAttribute('name');
        getObject[name + '-from'] = el.fieldFrom.val();
        getObject[name + '-to'] = el.fieldTo.val();
    });
    $('.text-field').each((i, el) => {
        const name = el.getAttribute('name');
        if (el.querySelector('input'))
            getObject[name] = el.querySelector('input').value;
    });
    
    const getString = Object.entries(getObject).map(([key, val]) => {
        if (typeof val == 'boolean')
            return `${key}`;
        else
            return `${key}=${val}`;
    }).join('&');
    
    return getString;
}

function renderGetQuery() {
    const getObject = {};
    const getQuery = new URLSearchParams(location.search);
    $('.checkbox').each((i, el) => {
        const name = el.getAttribute('name');
        getObject[name] = 'checkbox';
    });
    $('.radio-button-group').each((i, el) => {
        const name = el.getAttribute('name');
        getObject[name] = 'radio-button-group';
    });
    $('.dropdown').each((i, el) => {
        const name = el.getAttribute('name');
        getObject[name] = 'dropdown';
    });
    $('.double-range').each((i, el) => {
        const name = el.getAttribute('name');
        getObject[name] = 'double-range';
    });
    $('.text-field').each((i, el) => {
        const name = el.getAttribute('name');
        getObject[name] = 'text-field';
    });
    
    for (const [name, type] of Object.entries(getObject)) {
        if (type == 'checkbox') {
            if (location.search)
                $(`.checkbox[name="${name}"] input`)[0].checked = getQuery.has(name);
        }
        else if (type == 'radio-button-group') {
            const value = getQuery.get(name);
            $(`.radio-button input[value="${value}"]`)[0].checked = true;
        }
        else if (type == 'dropdown') {
            const dropdown = $(`.dropdown[name="${name}"]`)[0], targetValue = getQuery.get(name);
            dropdown.value = targetValue;
        }
        else if (type == 'double-range') {
            const to = getQuery.get(name+'-to'), from = getQuery.get(name+'-from');
            
            if (!to || !from) return; 
            const dr = $(`.double-range[name="${name}"]`)[0];

            dr.thumb1.setValue(from);
            dr.thumb2.setValue(to);

            dr.fieldTo.val(to);
            dr.fieldFrom.val(from);
        }
        else if (type == 'text-field') {
            const value = getQuery.get(name);
            $(`.text-field[name="${name}"] input`).val(value);
        }
    }
}

$('.text-field[name="search"] input').on('change', e => {
    window.isSearchChange = true;
});

$('.filters-block_find-button').on('click', e => {
    const getQuery = generateGetQuery();
    window.location = './?' + getQuery;
});

renderGetQuery();