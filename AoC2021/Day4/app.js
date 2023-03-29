var data;
var inputNumbers;
var tables = [];
var checkingTables = [];
var tablesCount = 0;

function readInput() {
    var fs = require('fs');
    var os = require('os');

    try {  
        var inputData = fs.readFileSync('input.txt', 'utf8');
        // var inputData = fs.readFileSync('testInput.txt', 'utf8');
        data = inputData.split('\n');
        // data = inputData.split(os.EOL);
        inputNumbers = data[0].split(',');
        data.splice(0,1);
        // console.log(data);

        for(var i = 1; i < data.length; i+=6) {
            var table = [];
            var checkingTable = [];
            checkingTable[0] = [false, false, false, false, false];
            checkingTable[1] = [false, false, false, false, false];
            checkingTable[2] = [false, false, false, false, false];
            checkingTable[3] = [false, false, false, false, false];
            checkingTable[4] = [false, false, false, false, false];

            table[0] = data[i].split(' ').filter(e => e);
            table[1] = data[i+1].split(' ').filter(e => e);;
            table[2] = data[i+2].split(' ').filter(e => e);;
            table[3] = data[i+3].split(' ').filter(e => e);;
            table[4] = data[i+4].split(' ').filter(e => e);;
            tables[tablesCount] = table;
            checkingTables[tablesCount] = checkingTable;
            tablesCount += 1;
        }
        // data = inputData.split(os.EOL);
    } catch(e) {
        console.log('Error:', e.stack);
    }
}

function part1() {
    for (var i = 0; i < inputNumbers.length; i++) {
        for (var j = 0; j < tables.length; j++) {
            var row = tables[j].findIndex(row => row.includes(inputNumbers[i]));
            var col;
            if (row != -1) {
                col = tables[j][row].indexOf(inputNumbers[i]);
            }
            if (row != -1 && col != -1) {
                checkingTables[j][row][col] = true;
            }

            //Check if table won
            var winningRow = 'truetruetruetruetrue';
            for (var k = 0; k < 5; k++) {
                var joinedRow = checkingTables[j][k].join('');
                if (joinedRow == winningRow) {
                    return getUnmarkedSum(j) * Number(inputNumbers[i]);
                    //THIS MEANS WE WON
                }
            }
            for (var k = 0; k < 5; k++) {
                var joinedCol = '';
                for (var l = 0; l < 5; l++) {
                    joinedCol += checkingTables[j][k][l];
                }
                if (joinedCol == winningRow) {
                    return getUnmarkedSum(j) * Number(inputNumbers[i]);
                    //  THIS MEANS WE WON
                }
            }
        }
    }
}

function getUnmarkedSum(tableNum) {
    var sum = 0;
    for (var i = 0; i < 5; i++) {
        for (var j = 0; j < 5; j++) {
            if (checkingTables[tableNum][i][j] == false) {
                sum += Number(tables[tableNum][i][j]);
            }
        }
    }
    return sum;
}

function part2() {
    var tablesWon = [];

    for (var i = 0; i < inputNumbers.length; i++) {
        for (var j = 0; j < tables.length; j++) {
            var row = tables[j].findIndex(row => row.includes(inputNumbers[i]));
            var col;
            if (row != -1) {
                col = tables[j][row].indexOf(inputNumbers[i]);
            }
            if (row != -1 && col != -1) {
                checkingTables[j][row][col] = true;
            }
            
            //Check if table won
            var winningRow = 'truetruetruetruetrue';
            for (var k = 0; k < 5; k++) {
                var joinedRow = checkingTables[j][k].join('');
                if (joinedRow == winningRow) {
                    if (tablesWon.indexOf(j) == -1) {
                        tablesWon.push(j);

                        if (tablesWon.length == tables.length) {
                            console.log(getUnmarkedSum(j) * Number(inputNumbers[i]));
                        }
                    }
                }
            }
            for (var k = 0; k < 5; k++) {
                var joinedCol = '';
                for (var l = 0; l < 5; l++) {
                    joinedCol += checkingTables[j][l][k];
                }
                if (joinedCol == winningRow) {
                    if (tablesWon.indexOf(j) == -1) {
                        tablesWon.push(j);

                        if (tablesWon.length == tables.length) {
                            console.log(getUnmarkedSum(j) * Number(inputNumbers[i]));
                        }
                    }
                }
            }
        }
    }
}

readInput();
part2();