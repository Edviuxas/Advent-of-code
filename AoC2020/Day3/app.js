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
    let horizontalLength = data[0].length;
    let verticalLegth = data.length;
    let currentHorizontal = 0;
    let currentVertical = 0;

    while (currentVertical < verticalLegth - 1) {
        currentHorizontal += 3;
        currentVertical++;
        if (currentHorizontal >= horizontalLength)
            currentHorizontal = Math.abs(horizontalLength - currentHorizontal);

        console.log('vertical: ' + currentVertical);
        console.log('horizontal: ' + currentHorizontal);
        console.log(data[currentVertical][currentHorizontal]);
        if (data[currentVertical][currentHorizontal] === '#')
            sum++;
    }
    console.log(sum);
}

function secondPart() {
    let steps = [[1, 1], [3, 1], [5, 1], [7, 1], [1, 2]]
    let horizontalLength = data[0].length;
    let verticalLegth = data.length;
    let multiplication = 1;

    for (let i = 0; i < steps.length; i++) {
        const currentStep = steps[i];
        let sum = 0;
        let currentHorizontal = 0;
        let currentVertical = 0;

        while (currentVertical < verticalLegth - 1) {
            currentHorizontal += currentStep[0];
            currentVertical += currentStep[1];
            if (currentHorizontal >= horizontalLength)
                currentHorizontal = Math.abs(horizontalLength - currentHorizontal);
    
            if (data[currentVertical][currentHorizontal] === '#')
                sum++;
        }
        multiplication *= sum;
    }
    console.log(multiplication);
}

readInput();
// firstPart();
secondPart();
// console.log(data);