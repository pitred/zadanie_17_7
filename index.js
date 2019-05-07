var fs = require("fs");
var StatMode = require("stat-mode");
var colors = require('colors');

fs.stat("./cat.jpg", function (err, stats) {
    var statMode = new StatMode(stats);
    console.log(statMode.toString());
});

// fs.readFile("./text.txt", "utf-8", function (err, data) {
//     console.log('Data before write!'.blue);
//     console.log(data);
//     fs.appendFile('./text.txt', '\nAnd this is how it looks after saving', function (err) {
//         if (err) throw err;
//         console.log('Save!'.blue);
//         fs.readFile('./text.txt', 'utf-8', function (err, data) {
//             console.log('Data after saving'.blue);
//             console.log(data);
//         })
//     });
// });


fs.readdir('../zadanie_17_7', "utf-8", function (err, data) {
    console.log('Data before saving!'.blue);
    console.log(data);
    fs.writeFile('./text.txt', data, "utf-8", function (err) {
        if (err) throw err;
        console.log('Save!'.blue);
        fs.readFile('./text.txt', 'utf-8', function (err, data) {
            console.log('Data after saving'.blue);
            console.log(data);
        })
    });
});