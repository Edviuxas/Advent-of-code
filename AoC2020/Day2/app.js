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

function secondPart() {
    let sum = 0;
    for (let i = 0; i < data.length; i++) {
        const password = data[i];
        let splittedPassword = password.split(' ');
        let positions = splittedPassword[0].split('-');
        let passChar = splittedPassword[1][0];
        if ((splittedPassword[2][Number(positions[0])-1] === passChar) || ((splittedPassword[2][Number(positions[1])-1] === passChar))) {
            if (splittedPassword[2][Number(positions[0])-1] !== splittedPassword[2][Number(positions[1])-1])
                sum++;
        }
    }
    console.log(sum);
}

readInput();
secondPart();