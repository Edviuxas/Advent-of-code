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

function part1() {
    let sum = 0;
    for(let i = 0; i < data.length; i++) {
        let regExp = /Card \d+: /gm;
        let allNumbers = data[i].replace(regExp, '');
        let winningNumbers = allNumbers.split('|')[0].trim();
        let playerNumbers = allNumbers.split('|')[1].trim();
        let winningNumbersSplit = winningNumbers.split(' ')
        winningNumbersSplit = winningNumbersSplit.filter(value => value != '');
        let playerNumbersSplit = playerNumbers.split(' ');
        playerNumbersSplit = playerNumbersSplit.filter(value => value != '');
        let overlappingNumbers = playerNumbersSplit.filter(value => winningNumbersSplit.includes(value))
        if(overlappingNumbers.length > 0) {
            sum += Math.pow(2, overlappingNumbers.length-1);
        }
    }
    console.log(`sum: ${sum}`);
}

function part2() {
    for(let i = 0; i < data.length; i++) {
        const gameNumber = Number(data[i].match(/\d+:/gm)[0].replace(':', ''))
        let regExp = /Card \d+: /gm;
        let allNumbers = data[i].replace(regExp, '');
        let winningNumbers = allNumbers.split('|')[0].trim();
        let playerNumbers = allNumbers.split('|')[1].trim();
        let winningNumbersSplit = winningNumbers.split(' ')
        winningNumbersSplit = winningNumbersSplit.filter(value => value != '');
        let playerNumbersSplit = playerNumbers.split(' ');
        playerNumbersSplit = playerNumbersSplit.filter(value => value != '');
        let overlappingNumbers = playerNumbersSplit.filter(value => winningNumbersSplit.includes(value))
        for(let j = gameNumber; j < gameNumber+overlappingNumbers.length; j++) {
            data.push(data[j])
        }
    }
    console.log(`length: ${data.length}`)
}

readInput();
// part1();
part2();