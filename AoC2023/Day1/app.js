
var data;

function readInput() {
    var fs = require('fs');
    var os = require('os');

    try {  
        var inputData = fs.readFileSync('input.txt', 'utf8');
        // var inputData = fs.readFileSync('testInput.txt', 'utf8');
        data = inputData.split('\n');
        // data = inputData.split(os.EOL);
    } catch(e) {
        console.log('Error:', e.stack);
    }
}

function part1() {
//    readInput();
    console.log(data);
    let sum = 0;
    for(let i = 0; i < data.length; i++) {
        let textLine = data[i];
        let num1 = 0;
        let num2 = 0;
        for(let j = 0; j < textLine.length; j++) {
            if(textLine[j] >= '0' && textLine[j] <= '9') {
                num1 = Number(textLine[j]);
                break;
            }
        }
        for(let j = textLine.length - 1; j >= 0; j--) {
            if(textLine[j] >= '0' && textLine[j] <= '9') {
                num2 = Number(textLine[j]);
                break;
            }
        } 
        // console.log('num1:' + num1)
        // console.log('num2:' + num2)
        sum += (num1 * 10 + num2)
    }
    console.log(sum)
}

function part2() {
    let sum = 0;
    for(let i = 0; i < data.length; i++) {
        let words = ['one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
        let indexes = [];
        let textLine = data[i];
        let num1, num2, num1Index, num2Index;
        for(let j = 0; j < textLine.length; j++) { // randam skaitmeni
            if(textLine[j] >= '0' && textLine[j] <= '9') {
                num1 = Number(textLine[j]);
                num1Index = j;
                break;
            }
        }
        for(let j = 0; j < 9; j++) { // randam zodziu indeksus
            indexes[j] = data[i].indexOf(words[j]);
        }
        for(let j = 0; j < indexes.length; j++) {
            if(num1Index == undefined && indexes[j] != -1) {
                num1Index = indexes[j];
                num1 = indexes.indexOf(num1Index)+1;
            }
            if(indexes[j] != -1 && indexes[j] < num1Index) {
                num1Index = indexes[j];
                num1 = indexes.indexOf(num1Index)+1;
            }
        }

        for(let j = textLine.length - 1; j >= 0; j--) {
            if(textLine[j] >= '0' && textLine[j] <= '9') {
                num2 = Number(textLine[j]);
                num2Index = j;
                break;
            }
        } 
        indexes = [];
        for(let j = 0; j < 9; j++) { // randam zodziu indeksus
            indexes[j] = data[i].lastIndexOf(words[j]);
        }
        for(let j = 0; j < indexes.length; j++) {
            if(num2Index == undefined && indexes[j] != -1) {
                num2Index = indexes[j];
                num2 = indexes.lastIndexOf(num2Index)+1;
            }
            if(indexes[j] > num2Index) {
                num2Index = indexes[j];
                num2 = indexes.indexOf(num2Index)+1;
            }
        }
        // console.log('num1: ' + num1);
        // console.log('num2: ' + num2);
        sum += (num1 * 10 + num2)
    }
    console.log(sum);
}

readInput();
// part1();
part2();