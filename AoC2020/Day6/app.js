var data;

function readInput() {
    var fs = require('fs');
    var os = require('os');

    try {  
        var inputData = fs.readFileSync('input.txt', 'utf8');
        // var inputData = fs.readFileSync('testInput.txt', 'utf8');
        data = inputData.split('\r\n');
        // data = inputData.split(os.EOL);
    } catch(e) {
        console.log('Error:', e.stack);
    }
}

function firstPart() {
    let sum = 0;
    let set = new Set();
    for (let i = 0; i < data.length; i++) {
        const line = data[i];
        if (line !== '') {
            for (let j = 0; j < line.length; j++) {
                const letter = line[j];
                set.add(letter);
            }
        } else {
            sum += set.size;
            set.clear();
        }
    }
    console.log(sum);
}

function secondPart() {
    let map = new Map();
    let count = 0;
    let sum = 0;
    for (let i = 0; i < data.length; i++) {
        const line = data[i];
        if (line !== '') {
            count++;
            for (let j = 0; j < line.length; j++) {
                const letter = line[j];
                if (map.has(letter)) {
                    let letterCount = map.get(letter);
                    map.set(letter, letterCount+1);
                } else {
                    map.set(letter, 1);
                }
            }
        } else {
            map.forEach((value, key) => {
                if (value === count)
                    sum++;
            });
            map.clear();
            count = 0;
        }
    }
    console.log(sum);
}

readInput();
// firstPart();
secondPart();
// console.log(data);