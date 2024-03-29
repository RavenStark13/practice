/* Задание на урок:

1) Автоматизировать вопросы пользователю про фильмы при помощи цикла

2) Сделать так, чтобы пользователь не мог оставить ответ в виде пустой строки,
отменить ответ или ввести название фильма длинее, чем 50 символов. Если это происходит - 
возвращаем пользователя к вопросам опять

3) При помощи условий проверить  personalMovieDB.count, и если он меньше 10 - вывести сообщение
"Просмотрено довольно мало фильмов", если от 10 до 30 - "Вы классический зритель", а если больше - 
"Вы киноман". А если не подошло ни к одному варианту - "Произошла ошибка"

4) Потренироваться и переписать цикл еще двумя способами*/

'use strict';

// Код возьмите из предыдущего домашнего задания

/* вариант автоматизации цикла вместо while (1 задание)
for (let i = 0; i < 2; i++) {
    const a = prompt('Один из последних просмотренных фильмов?', '');
          b = prompt ('На сколько оцените его?', '');
          
          personalMovieDB.movies [a] = b;
} */

const personalMovieDB = {
    count: 0,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

let work=true;
while (work)
{
    const a = prompt('Один из последних просмотренных фильмов?', '');
    if (a == null || a == '' || a.length >50) {
        continue;
    }

    const b = prompt ('На сколько оцените его?', '');
    if (b == null || b == '' || b.length >50) {
        continue;
    }

    const c = prompt('Один из последних просмотренных фильмов?', '');
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

const numberOfFilms = +prompt ('Сколько фильмов вы уже посмотрели?', '');

if (numberOfFilms <= 10) {
    alert ('Просмотрено довольно мало фильмов');
}
else if (numberOfFilms > 10 && numberOfFilms <= 30) {
    alert ('Вы классический зритель');
}
else if (numberOfFilms > 30) {
    alert ('Вы киноман');
}
else {
    alert ('Error');
}

personalMovieDB.count = numberOfFilms;

console.log(personalMovieDB)





