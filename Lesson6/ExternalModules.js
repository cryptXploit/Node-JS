// External Modules  -- nodemon, random-fruits-name

// To use external modules, you first need to install them using npm (Node Package Manager).
// Open your terminal and run the following commands:
// npm install nodemon
// npm install random-fruits-name
// After installing the modules, you can import and use them in your JavaScript file as shown below:
// Importing the 'nodemon' module


const getRandomFruitsName = require('random-fruits-name');
console.log("Random Fruit Name:", getRandomFruitsName("es"));
console.log("Random Fruit Name:", getRandomFruitsName("fr"));
// const nodemon = require('nodemon');
// console.log("Nodemon Module:", nodemon);


const movieName = require('movies-names');
console.log("Random Movie Name:", movieName.random());











