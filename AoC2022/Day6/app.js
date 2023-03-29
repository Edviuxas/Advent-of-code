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

function isUnique(str) {
    return new Set(str).size == str.length;
  }

function part1() {
    var answer = 0;
    for (let index = 0; index < data[0].length; index++) {
        var substr = data[0].substring(index, index+4);
        // console.log(substr);
        if (isUnique(substr)) {
            answer = index+4;
            break;
        }
    }
    console.log(answer);
}

function part2() {
    var answer = 0;
    for (let index = 0; index < data[0].length; index++) {
        var substr = data[0].substring(index, index+14);
        // console.log(substr);
        if (isUnique(substr)) {
            answer = index+14;
            break;
        }
    }
    console.log(answer);
}

readInput();
// part1();
part2();