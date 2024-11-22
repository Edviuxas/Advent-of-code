
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
    let impossibleSum = 0;
    let totalSum = 0;
    loop1:
    for(let i = 0; i < data.length; i++) {
        totalSum += i+1;
        let regExp = /Game \d+: /gm;
        let colorsString = data[i].replace(regExp, '');
        let sets = colorsString.split(';')
        console.log(colorsString);
        loop2:
        for(let j = 0; j < sets.length; j++) {
            let singleSet = sets[j].trim();
            let subsets = singleSet.split(',')
            loop3:
            for(let k = 0; k < subsets.length; k++) {
                let singleSubset = subsets[k].trim();
                let number = singleSubset.split(' ')[0];
                let color = singleSubset.split(' ')[1];
                console.log(`number: ${number} color: ${color}`);
                if(color == 'red') {
                    if (number > 12) {
                        console.log('red overflow')
                        impossibleSum += i+1;
                        break loop2;
                    }                        
                } else if(color == 'green') {
                    if (number > 13) {
                        console.log('green overflow')
                        impossibleSum += i+1;
                        break loop2;
                    }
                } else {
                    if (number > 14) {
                        console.log('blue overflow')
                        impossibleSum += i+1;
                        break loop2;
                    }
                }
            }
        }
    }
    console.log(`answer: ${totalSum - impossibleSum}`);
}

function part2() {
    let sum = 0;
    loop1:
    for(let i = 0; i < data.length; i++) {
        let maxRed = 0;
        let maxGreen = 0;
        let maxBlue = 0;
        let regExp = /Game \d+: /gm;
        let colorsString = data[i].replace(regExp, '');
        let sets = colorsString.split(';')
        loop2:
        for(let j = 0; j < sets.length; j++) {
            let singleSet = sets[j].trim();
            let subsets = singleSet.split(',')
            loop3:
            for(let k = 0; k < subsets.length; k++) {
                let singleSubset = subsets[k].trim();
                let number = Number(singleSubset.split(' ')[0].trim());
                let color = singleSubset.split(' ')[1].trim();
                if(color == 'red') {
                    if(number > maxRed) {
                        maxRed = number;
                    }
                } else if(color == 'green') {
                    if(number > maxGreen) {
                        maxGreen = number;
                    }
                } else {
                    if(number > maxBlue) {
                        maxBlue = number;
                    }
                }
            }
        }
        sum += maxRed * maxGreen * maxBlue;
    }
    console.log(`answer: ${sum}`);
}

readInput();
// part1();
part2();