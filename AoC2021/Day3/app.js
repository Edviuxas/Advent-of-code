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
    var gamma = ''
    var epsilon = '';
    var onesCount = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    data.forEach(element => {
        for (var i = 0; i < element.length; i++) {
            if (Number(element[i]) == 1) {
                onesCount[i] += 1;
            }
        }
    });

    onesCount.forEach (element => {
        if (element > 500) {
            gamma += '1';
            epsilon += '0';
        } else {
            gamma += '0';
            epsilon += '1';
        }
    });

    console.log('gamma: ' + gamma);
    console.log('epsilon: ' + epsilon);

    console.log('answer: ' + parseInt(gamma, 2) * parseInt(epsilon, 2));
}

// function filterFunction(value, position, binaryValueInInt) {
//     return value[position] == binaryValueInInt;
// }

function part2() {
    var dataCopy = data;
    console.log(dataCopy);
    var position = 0;
    while (dataCopy.length > 1) {
        var onesCount = 0;
        dataCopy.forEach(element => {
            if (Number(element[position]) == 1) {
                onesCount += 1;
            }
        });

        if (onesCount >= dataCopy.length / 2) {
            dataCopy = dataCopy.filter(function(value) {
                return value[position] == 1;
            });
        } else {
            dataCopy = dataCopy.filter(function(value) {
                return value[position] == 0;
            });
        }

        // console.log(dataCopy);
        position += 1;
    }

    var dataCopy1 = data;
    position = 0;
    while(dataCopy1.length > 1) {
        var onesCount = 0;
        dataCopy1.forEach(element => {
            if (Number(element[position]) == 1) {
                onesCount += 1;
            }
        });

        if (onesCount >= dataCopy1.length / 2) {
            dataCopy1 = dataCopy1.filter(function(value) {
                return value[position] == 0;
            });
        } else {
            dataCopy1 = dataCopy1.filter(function(value) {
                return value[position] == 1;
            });
        }

        // console.log(dataCopy);
        position += 1;
    }

    console.log(dataCopy[0]);
    console.log(dataCopy1[0]);

    console.log('answer: ' + parseInt(dataCopy[0], 2) * parseInt(dataCopy1[0], 2));
}

readInput();
part2();
