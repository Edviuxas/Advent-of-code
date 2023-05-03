let data;

function readInput() {
    let fs = require('fs');
    let os = require('os');

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
    for (let i = 0; i < data.length; i++) {
        const element = data[i];
        sum += Math.floor(Number(element) / 3) - 2;
    }
    console.log('part 1 answer: ' + sum);
}

function secondPart() {
    let sum = 0;
    for (let i = 0; i < data.length; i++) {
        let fuel = data[i];
        while (Math.floor(Number(fuel) / 3) - 2 > 0) {
            fuel = Math.floor(Number(fuel) / 3) - 2;
            sum += fuel;
        }
    }
    
    console.log('part 2 answer: ' + sum);
}

readInput();
firstPart();
secondPart();
// console.log(data);