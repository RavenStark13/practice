/* Задание на урок:

1) Первую часть задания повторить по уроку

2) Создать функцию showMyDB, которая будет проверять свойство privat. Если стоит в позиции
false - выводит в консоль главный объект программы

3) Создать функцию writeYourGenres в которой пользователь будет 3 раза отвечать на вопрос 
"Ваш любимый жанр под номером ${номер по порядку}". Каждый ответ записывается в массив данных
genres

P.S. Функции вызывать не обязательно*/

'use strict';

// Код возьмите из предыдущего домашнего задания
let numberOfFilms;

function start() {
    numberOfFilms = prompt ('Сколько фильмов вы уже посмотрели?', '');

    while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
        numberOfFilms = +prompt ('Сколько фильмов вы уже посмотрели?', '');
    }
}

start();


const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};


function rememberMyFilms () {
    let work=true;
while (work)
{
    const a = prompt('Один из последних просмотренных фильмов?', '').trim();
    if (a == null || a == '' || a.length >50) {
        continue;
    }

    const b = prompt ('На сколько оцените его?', '');
    if (b == null || b == '' || b.length >50) {
        continue;
    }

    const c = prompt('Один из последних просмотренных фильмов?', '').trim();
    if (c == null || c == '' || c.length >50) {
        continue;
    }

    const d = prompt ('На сколько оцените его?', '');
    if (d == null || d == '' || d.length >50) {
        continue;
    }
    personalMovieDB.movies [a] = b;
    personalMovieDB.movies [c] = d;

work = false;
}
}

rememberMyFilms();


function detectPersondlLevel() {
    if (personalMovieDB.count <= 10) {
        alert ('Просмотрено довольно мало фильмов');
    }
    else if (personalMovieDB.count > 10 && numberOfFilms <= 30) {
        alert ('Вы классический зритель');
    }
    else if (personalMovieDB.count > 30) {
        alert ('Вы киноман');
    }
    else {
        alert ('Error');
    }
}

detectPersondlLevel()

function showMyDB (hidden) {
    if (!hidden) {
        console.log(personalMovieDB);
    }
}

showMyDB(personalMovieDB.privat);


function writeYourGenres () {
    for (let i = 1; i <= 3; i++) {
        const genre  = prompt (`Ваш любимый жанр под номером ${i}`);
        personalMovieDB.genres [i - 1] = genre;
    }
}

writeYourGenres();


