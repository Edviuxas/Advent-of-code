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
    let horizontalLength = data[0].length;
    let newLine = ''.padEnd(horizontalLength, '.');
    data.unshift(newLine);
    data.push(newLine);
    for(let i = 0; i < data.length; i++) {
        data[i] = '.'+data[i]+'.';
    }

    for(let i = 0; i < data.length; i++) {
        let digitsCoords = [];
        let number = '';
        let singleLine = data[i];
        for(let j = 0; j < singleLine.length; j++) {
            if(singleLine[j] >= '0' && singleLine[j] <= '9') {
                digitsCoords.push({x: i, y: j});
                number += singleLine[j];
            } else {
                for(let k = 0; k < digitsCoords.length; k++) {
                    let xCoord = digitsCoords[k].x;
                    let yCoord = digitsCoords[k].y;
                    let x1 = xCoord;
                    let y1 = yCoord-1;
                    let x2 = xCoord-1;
                    let y2 = yCoord;
                    let x3 = xCoord;
                    let y3 = yCoord+1;
                    let x4 = xCoord+1;
                    let y4 = yCoord;
                    let x5 = xCoord-1;
                    let y5 = yCoord-1;
                    let x6 = xCoord-1;
                    let y6 = yCoord+1;
                    let x7 = xCoord+1;
                    let y7 = yCoord+1;
                    let x8 = xCoord+1;
                    let y8 = yCoord-1;
                    let point1 = data[x1][y1];
                    let point2 = data[x2][y2];
                    let point3 = data[x3][y3];
                    let point4 = data[x4][y4];
                    let point5 = data[x5][y5];
                    let point6 = data[x6][y6];
                    let point7 = data[x7][y7];
                    let point8 = data[x8][y8];
                    if ((!(point1 >= '0' && point1 <= '9') && point1 != '.') || (!(point2 >= '0' && point2 <= '9') && point2 != '.') || (!(point3 >= '0' && point3 <= '9') && point3 != '.') || (!(point1 >= '0' && point4 <= '9') && point4 != '.') ||
                        (!(point5 >= '0' && point5 <= '9') && point5 != '.') || (!(point6 >= '0' && point6 <= '9') && point6 != '.') || (!(point7 >= '0' && point7 <= '9') && point7 != '.') || (!(point8 >= '0' && point8 <= '9') && point8 != '.')) {
                        sum += Number(number);
                        break;
                    }
                }
                digitsCoords = [];
                number = '';
            }
        }
    }
    console.log(sum);
}

function part2() {
    let sum = 0;
    let horizontalLength = data[0].length;
    let newLine = ''.padEnd(horizontalLength, '.');
    data.unshift(newLine);
    data.push(newLine);
    for(let i = 0; i < data.length; i++) {
        data[i] = '.'+data[i]+'.';
    }
    let numbersInfo = [];
    let starsInfo = [];
    for(let i = 0; i < data.length; i++) {
        starsInfo.push(Array(horizontalLength).fill(0));
    }

    for(let i = 0; i < data.length; i++) {
        let digitsCoords = [];
        let number = '';
        let singleLine = data[i];
        for(let j = 0; j < singleLine.length; j++) {
            if(singleLine[j] >= '0' && singleLine[j] <= '9') {
                digitsCoords.push({x: i, y: j});
                number += singleLine[j];
            } else {
                for(let k = 0; k < digitsCoords.length; k++) {
                    let xCoord = digitsCoords[k].x;
                    let yCoord = digitsCoords[k].y;
                    let x1 = xCoord;
                    let y1 = yCoord-1;
                    let x2 = xCoord-1;
                    let y2 = yCoord;
                    let x3 = xCoord;
                    let y3 = yCoord+1;
                    let x4 = xCoord+1;
                    let y4 = yCoord;
                    let x5 = xCoord-1;
                    let y5 = yCoord-1;
                    let x6 = xCoord-1;
                    let y6 = yCoord+1;
                    let x7 = xCoord+1;
                    let y7 = yCoord+1;
                    let x8 = xCoord+1;
                    let y8 = yCoord-1;
                    let point1 = data[x1][y1];
                    let point2 = data[x2][y2];
                    let point3 = data[x3][y3];
                    let point4 = data[x4][y4];
                    let point5 = data[x5][y5];
                    let point6 = data[x6][y6];
                    let point7 = data[x7][y7];
                    let point8 = data[x8][y8];
                    if (point1 == '*') {
                        starsInfo[x1][y1]++;
                        numbersInfo.push({'number': number, starXCoord: x1, starYCorrd: y1});
                        break;
                    }
                    if (point2 == '*') {
                        starsInfo[x2][y2]++;
                        numbersInfo.push({'number': number, starXCoord: x2, starYCorrd: y2});
                        break;
                    }
                    if (point3 == '*') {
                        starsInfo[x3][y3]++;
                        numbersInfo.push({'number': number, starXCoord: x3, starYCorrd: y3});
                        break;
                    }
                    if (point4 == '*') {
                        starsInfo[x4][y4]++;  
                        numbersInfo.push({'number': number, starXCoord: x4, starYCorrd: y4});
                        break;
                    }
                    if (point5 == '*') {
                        starsInfo[x5][y5]++;
                        numbersInfo.push({'number': number, starXCoord: x5, starYCorrd: y5});
                        break;
                    }
                    if (point6 == '*') {
                        starsInfo[x6][y6]++;
                        numbersInfo.push({'number': number, starXCoord: x6, starYCorrd: y6});
                        break;
                    }
                    if (point7 == '*') {
                        starsInfo[x7][y7]++;
                        numbersInfo.push({'number': number, starXCoord: x7, starYCorrd: y7});
                        break;
                    }
                    if (point8 == '*') {
                        starsInfo[x8][y8]++;
                        numbersInfo.push({'number': number, starXCoord: x8, starYCorrd: y8});
                        break;
                    }
                }
                digitsCoords = [];
                number = '';
            }
        }
    }
    for(let i = 0; i < starsInfo.length; i++) {
        for(let j = 0; j < starsInfo[i].length; j++) {
            let multiply = 1;
            if(starsInfo[i][j] == 2) {
                for(let k = 0; k < numbersInfo.length; k++) {
                    if(numbersInfo[k].starXCoord == i && numbersInfo[k].starYCorrd == j) {
                        multiply *= numbersInfo[k].number;
                    }
                }
            }
            if (multiply > 1) {
                sum += multiply;
            }
        }
    }
    console.log(sum);
}

readInput();
// part1();
part2();