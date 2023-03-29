/*
A - Rock
B - Paper
C - Scissors

X - Rock = 1
Y - Paper = 2
Z - Scissors = 3

[A, X] = 4
[A, Y] = 8
[A, Z] = 3
[B, X] = 1
[B, Y] = 5
[B, Z] = 9
[C, X] = 7
[C, Y] = 2
[C, Z] = 6



PART2

[A, X] = 3
[A, Y] = 4
[A, Z] = 8
[B, X] = 1
[B, Y] = 5
[B, Z] = 9
[C, X] = 2
[C, Y] = 6
[C, Z] = 7
*/
var data;

function readInput() {
    var fs = require('fs');

    try {  
        var inputData = fs.readFileSync('input.txt', 'utf8');
        // var inputData = fs.readFileSync('testInput.txt', 'utf8');
        data = inputData.split('\r\n');
        // data = inputData.split(os.EOL);
    } catch(e) {
        console.log('Error:', e.stack);
    }
    // console.log(data);
}

function part1() {
    const values = [['B', 'X'], ['C', 'Y'], ['A', 'Z'], ['A', 'X'], ['B', 'Y'], ['C', 'Z'], ['C', 'X'], ['A', 'Y'], ['B', 'Z']];
    var totalScore = 0;
    // console.log(data);
    data.forEach(element => {
        var line = element.split(' ');
        totalScore += getScore(line, values);
    });
    console.log(totalScore);
}

function getScore(line, values) {
    for (let index = 0; index < values.length; index++) {
        const element = values[index];
        if (JSON.stringify(element) === JSON.stringify(line)) {
            return index + 1;
        }
    }
} 

function part2() {
    var totalScore = 0;
    const values = [['B', 'X'], ['C', 'X'], ['A', 'X'], ['A', 'Y'], ['B', 'Y'], ['C', 'Y'], ['C', 'Z'], ['A', 'Z'], ['B', 'Z']];
    data.forEach(element => {
        var line = element.split(' ');
        totalScore += getScore(line, values);
    });
    console.log(totalScore);
}

readInput();
part1();
part2();