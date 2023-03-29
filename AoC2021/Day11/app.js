var data;

function readInput() {
    var fs = require('fs');
    var os = require('os');

    try {  
        var inputData = fs.readFileSync('input.txt', 'utf8');
        // var inputData = fs.readFileSync('testInput.txt', 'utf8');
        data = inputData.split('\n');
        // data = inputData.split(os.EOL);

        for (let i = 0; i < data.length; i++) {
            data[i] = data[i].split('').map(function(item) {
                return parseInt(item, 10);
            });   
        }
        data = addBorderOfDotsAround(data);
    } catch(e) {
        console.log('Error:', e.stack);
    }
}

function addBorderOfDotsAround(arr) {
    var topBottomRows = ['.', '.', '.', '.', '.', '.', '.', '.'];
    arr.unshift(topBottomRows);
    arr.push(topBottomRows);
    for (let i = 0; i < arr.length; i++) {
        arr[i].unshift('.');
        arr[i].push('.');
    }
    return arr;
}

function part1() {
    var numFlashes = 0;

    for (let i = 0; i < 100; i++) {
        for (let j = 1; j < data.length - 1; j++) {
            for (let k = 1; k < data[j].length - 1; k++) {
                data[j][k]++;
            }
        }

        var flashed = [];
        while(containsElementsAbove10(data)) {

            for (let j = 1; j < data.length - 1; j++) {
                for (let k = 1; k < data[j].length - 1; k++) {
                    if (data[j][k] > 9) {
                        increaseAdjescent(j, k);
                        flashed.push({'j': j, 'k': k});
                        numFlashes++;
                    }
                }
            }
            
            flashed.forEach(fl => {
                data[fl.j][fl.k] = 0;
            });
        }
    }

    console.log(numFlashes);
}

function increaseAdjescent(j, k) {
    if (data[j-1][k] != '.') {
        if(data[j-1][k] < 10) {
            data[j-1][k]++;
        }
    }
    if (data[j-1][k-1] != '.') {
        if(data[j-1][k-1] < 10) {
            data[j-1][k-1]++;
        }
    }
    if (data[j][k-1] != '.') {
        if(data[j][k-1] < 10) {
            data[j][k-1]++;
        }
    }
    if (data[j+1][k-1] != '.') {
        if(data[j+1][k-1] < 10) {
            data[j+1][k-1]++;
        }
    }
    if (data[j+1][k] != '.') {
        if(data[j+1][k] < 10) {
            data[j+1][k]++;
        }
    }
    if (data[j+1][k+1] != '.') {
        if(data[j+1][k+1] < 10) {
            data[j+1][k+1]++;
        }
    }
    if (data[j][k+1] != '.') {
        if(data[j][k+1] < 10) {
            data[j][k+1]++;
        }
    }
    if (data[j-1][k+1] != '.') {
        if(data[j-1][k+1] < 10) {
            data[j-1][k+1]++;
        }
    }
}

function containsElementsAbove10(arr) {
    for (let i = 1; i < arr.length - 1; i++) {
        for (let j = 1; j < arr[i].length - 1; j++) {
            if(arr[i][j] != '.') {
                if(arr[i][j] > 9) {
                    return true;
                }
            }
        }
    }
    return false;
}

function printArray(printableArray) {
    for (var i = 0; i < printableArray.length; i++) {
        console.log(printableArray[i].join(' '));
    }
    console.log('\n');
}

function part2() {

    for (let i = 0; i < 10000; i++) {

        for (let j = 1; j < data.length - 1; j++) {
            for (let k = 1; k < data[j].length - 1; k++) {
                data[j][k]++;
            }
        }

        var flashed = [];
        while(containsElementsAbove10(data)) {

            for (let j = 1; j < data.length - 1; j++) {
                for (let k = 1; k < data[j].length - 1; k++) {
                    if (data[j][k] > 9) {
                        increaseAdjescent(j, k);
                        flashed.push({'j': j, 'k': k});
                    }
                }
            }
            
            flashed.forEach(fl => {
                data[fl.j][fl.k] = 0;
            });

        }
        if (flashed.length === 100) {
            console.log(i+1);
            return;
        }
    }
}

readInput();
// part1();
part2();