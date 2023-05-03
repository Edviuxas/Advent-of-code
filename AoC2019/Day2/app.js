let data;

function readInput() {
    let fs = require('fs');
    let os = require('os');

    try {  
        var inputData = fs.readFileSync('input.txt', 'utf8');
        // var inputData = fs.readFileSync('testInput.txt', 'utf8');
        data = inputData.split('\n');
        // data = inputData.split(os.EOL);
    } catch(e) {
        console.log('Error:', e.stack);
    }
}

function firstPart() {
    let instructions = data[0].split(',');
    // console.log(instructions);
    for (let i = 0; i < instructions.length; i++) {
        const currentInstruction = Number(instructions[i]);
        // console.log(currentInstruction);
        if (currentInstruction === 99)
            break;
        let firstOperand = Number(instructions[i+1]);
        let secondOperand = Number(instructions[i+2]);
        let outputPosition = Number(instructions[i+3]);
        // console.log('firstOperand: ' + instructions[firstOperand]);
        // console.log('secondOperand: ' + instructions[secondOperand]);
        // console.log('outputPosition: ' + instructions[outputPosition]);
        if (currentInstruction === 1) {
            // console.log(Number(instructions[firstOperand]) + Number(instructions[secondOperand]));
            instructions[outputPosition] = Number(instructions[firstOperand]) + Number(instructions[secondOperand]);
        }
        else {
            instructions[outputPosition] = Number(instructions[firstOperand]) * Number(instructions[secondOperand]);
        }
        i+=3;
        // console.log(instructions);
    }
    // console.log(instructions);
    // for (let i = 0; i < instructions.length; i++) {
    //     console.log(instructions[i] + ',');
        
    // }
    console.log(instructions[0]);
}

function secondPart() {
    loop1:
    for (let noun = 0; noun <= 99; noun++) {
        loop2:
        for (let verb = 0; verb <= 99; verb++) {
            let instructions = data[0].split(',');
            instructions[1] = noun;
            instructions[2] = verb;
            loop3:
            for (let i = 0; i < instructions.length; i++) {
                const currentInstruction = Number(instructions[i]);
                if (currentInstruction === 99) {
                    if (instructions[0] === 19690720) {
                        console.log('verb: ' + verb);
                        console.log('noun: ' + noun);
                        console.log(100 * noun + verb);
                    }
                    break loop3;
                }
                let firstOperand = Number(instructions[i+1]);
                let secondOperand = Number(instructions[i+2]);
                let outputPosition = Number(instructions[i+3]);
                if (currentInstruction === 1) {
                    instructions[outputPosition] = Number(instructions[firstOperand]) + Number(instructions[secondOperand]);
                }
                else {
                    instructions[outputPosition] = Number(instructions[firstOperand]) * Number(instructions[secondOperand]);
                }
                i+=3;
            }
        }
    }
    
}

readInput();
// firstPart();
secondPart();
// console.log(data);