let data;
let firstWire = [];
let secondWire = [];

function readInput() {
    let fs = require('fs');
    let os = require('os');

    try {  
        // var inputData = fs.readFileSync('input.txt', 'utf8');
        var inputData = fs.readFileSync('testInput.txt', 'utf8');
        data = inputData.split('\r\n');
        // data = inputData.split(os.EOL);
    } catch(e) {
        console.log('Error:', e.stack);
    }
}

function fillWireArray(arr, instr) {
    // let firstInstructions = data[0].split(',');
    // console.log(instructions);

    let currentPoint = [0, 0];
    let nextPoint;
    arr.push(currentPoint);
    // console.log(firstWire);

    for (let i = 0; i < instr.length; i++) {
        const instruction = instr[i];
        let direction = instruction[0];
        let distance = Number(instruction.slice(1));
        nextPoint = currentPoint.slice();
        switch (direction) {
            case 'R':
                nextPoint[0] += distance;
                break;
            case 'D':
                nextPoint[1] -= distance;
                break;
            case 'L':
                nextPoint[0] -= distance;
                break;
            case 'U':
                nextPoint[1] += distance;
                break;
            default:
                break;
        }
        arr.push(nextPoint);
        currentPoint = nextPoint.slice();
    }
}

function firstPart() {
    fillWireArray(firstWire, data[0].split(','));
    fillWireArray(secondWire, data[1].split(','));
    // console.log(firstWire);
    // console.log(secondWire);

    for (let i = 0; i < firstWire.length; i++) {
        for (let j = 0; j < secondWire.length; j++) {
            if (secondWire[j][0] === secondWire[j+1][0]) { // x koordinates sutampa
                
            } else if (secondWire[j][1] === secondWire[j+1][1]) { // y koordinates sutampa

            }
        }        
    }
}

readInput();
firstPart();
// console.log(data);