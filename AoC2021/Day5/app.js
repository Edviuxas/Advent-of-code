var data;
var board;

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
    board = Array.from({length: 1000}, () => (Array.from({length: 1000}, () => 0)));
}

function part1() {
    var x1, y1, x2, y2;
    data.forEach(element => {
        // console.log(element);
        x1 = Number(element.split(' ')[0].split(',')[0]);
        y1 = Number(element.split(' ')[0].split(',')[1]);
        x2 = Number(element.split(' ')[2].split(',')[0]);
        y2 = Number(element.split(' ')[2].split(',')[1]);

        // console.log(x1 + ' ' + y1 + ' ' + x2 + ' ' + y2);

        if (x1 == x2) {
            if (y1 < y2) {
                for (let i = y2; i >= y1; i--){
                    board[i][x1] += 1;
                }
            } else {
                for (let i = y1; i >= y2; i--){
                    board[i][x1] += 1;                       
                }
                
            }
        }

        else if (y1 == y2) {
            if (x1 < x2) {
                for (let i = x2; i >= x1; i--){
                    board[y1][i] += 1;
                }
            } else {
                for (let i = x1; i >= x2; i--){
                    board[y1][i] += 1;                       
                }
                
            }
        }

        // printArray(board);
    });

    count();
}

function printArray(printableArray) {
    for (var i = 0; i < printableArray.length; i++) {
        console.log(printableArray[i].join(' '));
    }
    console.log('\n');
}

function part2() {
    data.forEach(element => {
        x1 = Number(element.split(' ')[0].split(',')[0]);
        y1 = Number(element.split(' ')[0].split(',')[1]);
        x2 = Number(element.split(' ')[2].split(',')[0]);
        y2 = Number(element.split(' ')[2].split(',')[1]);
    
        // console.log(x1 + ' ' + y1 + ' ' + x2 + ' ' + y2);
    
        const xOfVector = Math.abs(x1 - x2);
        const yOfVector = Math.abs(y1 - y2);

        const angle = Math.atan2(yOfVector, xOfVector)*180/Math.PI;

        // console.log(angle);

        if (angle == 45) {
            const xIncrement = (x2 - x1) / Math.abs(x2 - x1);
            const yIncrement = (y2 - y1) / Math.abs(y2 - y1);
            const difference = Math.abs(x2 - x1);
            var currentX = x1;
            var currentY = y1;

            for (var i = 0; i <= difference; i++) {
                board[currentY][currentX] += 1;
                currentX += xIncrement;
                currentY += yIncrement;
            }
        }

        if (x1 == x2) {
            if (y1 < y2) {
                for (let i = y2; i >= y1; i--){
                    board[i][x1] += 1;
                }
            } else {
                for (let i = y1; i >= y2; i--){
                    board[i][x1] += 1;                       
                }
                
            }
        }

        else if (y1 == y2) {
            if (x1 < x2) {
                for (let i = x2; i >= x1; i--){
                    board[y1][i] += 1;
                }
            } else {
                for (let i = x1; i >= x2; i--){
                    board[y1][i] += 1;                       
                }
                
            }
        }
    
        // console.log(Math.atan2(yOfVector, xOfVector)*180/Math.PI);
    });  
    count(); 
    // printArray(board);
}

function count() {
    var counter = 0;
    for (var i = 0; i < board.length; i++) {
        for (var j = 0; j < board.length; j++) {
            if (board[i][j] > 1) {
                counter += 1;
            }
        }
    }

    console.log(counter);
}

readInput();
// console.log(data);
// part1();
part2();
// console.log(data);
// printArray(board);