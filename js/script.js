
//  7-nji sapak
// alert('hello');

// const result = confirm("Are you here?");
// console.log(result);

// const answer = +prompt("yasynyz 18 bamy", "18");
// console.log(answer + 5);

// const answers = [];

// answers[0] = prompt('sizin adynyz name', '');
// answers[1] = prompt('sizin familanyz name', '');
// answers[2] = prompt('sizin yasynyz nace', '');

// console.log(typeof (answers));
// console.log(typeof (null));


// 8-nji sapak
// const category = 'toys';

// console.log(`https://someurl.com/${category}/5`);

// const user = "ivan";

// alert(`salam,${user}`);


// 9-njy sapak

// let incr = 10,
//     decr = 10;

// ++incr;
// --decr;

// console.log(++incr);
// console.log(--decr);

// console.log(5 % 2);

// console.log(2 * 4 === 8);

// &&  И bolyar И bolonda 2si true bolanda dogry 1 true 1 false bolsa yalnys
// ||  Или bolyar Или bolanda haysam bolsa biri

// const isCheceked = false,
//     isClose = false;

// console.log(isCheceked || isClose);


//  13-nji sapak brauzere girende asakdaky soraglar cykyar.
// const numberOfFilms = +prompt('Nace kino gorduniz?', '');

// const personalMovieDB = {
//     count: numberOfFilms,
//     movies: {},
//     actors: {},
//     genres: [],
//     privat: false
// };

// const a = prompt('in sonky goren kinon', ''),
//     b = prompt('nace baha beryaniz?', ''),
//     c = prompt('in sonky goren kinon', ''),
//     d = prompt('nace baha beryaniz?', '');

// personalMovieDB.movies[a] = b;
// personalMovieDB.movies[c] = d;


// console.log(personalMovieDB);

//    17-nji sapak

// for (let i = 0; i < 3; i++) {
//     console.log(i);
//     for (let j = 0; j < 3; j++) {
//         console.log(j);
//     }
// }

// let result = '';
// const length = 7;

// for (let i = 1; i < length; i++) {

//     for (let j = 0; j < i; j++) {
//         result += "*";
//     }

//     result += '\n';
// }

// console.log(result);

// first: for (let i = 0; i < 3; i++) {
//     console.log(`First level: ${i}`);
//     for (let j = 0; j < 3; j++) {
//         console.log(`second level: ${j}`);
//         for (let k = 0; k < 5; k++) {
//             if (k === 2) break first;
//             console.log(`third level: ${k}`);
//         }
//     }
// }

//       18-nji sapak

// const numberOfFilms = +prompt('Nace kino gorduniz?', '');

// const personalMovieDB = {
//     count: numberOfFilms,
//     movies: {},
//     actors: {},
//     genres: [],
//     privat: false
// };


// for (let i = 0; i < 2; i++) {
//     const a = prompt('in sonky goren kinon', ''),
//         b = prompt('nace baha beryaniz?', '');

//     if (a != null && b != null && a != '' && b != '' && a.length < 50) {
//         personalMovieDB.movies[a] = b;
//         console.log('done');
//     } else {
//         console.log('error');
//         i--;
//     }

// }

// if (personalMovieDB.count < 10) {
//     console.log("Az kino seredilen");
// } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
//     console.log("gowy goriji")
// } else if (personalMovieDB.count >= 30) {
//     console.log("sen kinocy");
// } else {
//     console.log("nasazlyk");
// }

// console.log(personalMovieDB);

//     19-njy sapak

// let num = 20;

// function showFirstMessage(text,) {
//     console.log(text);
//     console.log(num);
// }

// showFirstMessage("HELLO WORLD");
// console.log(num);

// function calc(a, b) {
//     return (a + b);
// }

// console.log(calc(4, 3));
// console.log(calc(5, 6));
// console.log(calc(10, 6));

// function ret() {
//     let num = 50;

//     return num;
// }

// const anotherNum = ret();
// console.log(anotherNum);

// const logger = function () {
//     console.log("hello");
// };

// logger();

// const calc = (a, b) => {
//     console.log('1');
//     return a + b;
// };

//    20-nji sapak

// const usdCurr = 28;
// const eurCurr = 32;


// function convert(amount, curr) {
//     console.log(curr * amount);
// }

// convert(500, usdCurr);
// convert(500, eurCurr);

//  21-nji sapak

// const usdCurr = 28;
// const discount = 0.9;

// function convert(amount, curr) {
//     return curr * amount;
// }

// function promotion(result) {
//     console.log(result * discount);
// }

// const res = convert(500, usdCurr);
// promotion(res);

// function test() {
//     for (let i = 0; i < 5; i++) {
//         console.log(i);
//         if (i === 3) return
//     }
//     console.log('Done');
// }

// test();

// function doNothing() { };
// console.log(doNothing() === undefined);

//   22-nji sapak 

"use strict";

const str = "test";
const arr = [1, 2, 4];

console.log(str[2]);
