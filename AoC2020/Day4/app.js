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
    let expectedFields = ['byr', 'iyr', 'eyr', 'hgt', 'hcl', 'ecl', 'pid'];
    let tmpExpectedFields = expectedFields.slice();
    let isValid = true;
    let count = 0;
    for (let i = 0; i < data.length; i++) {
        const line = data[i];
        if (line !== '') {
            let fieldsInLine = line.split(' ');
            for (let j = 0; j < fieldsInLine.length; j++) {
                const singleField = fieldsInLine[j];
                let leftSideOfSingleField = singleField.split(':')[0];
                if (tmpExpectedFields.includes(leftSideOfSingleField)) {
                    let index = tmpExpectedFields.indexOf(leftSideOfSingleField);
                    tmpExpectedFields.splice(index, 1);
                }
            }
        } else {
            if (tmpExpectedFields.length === 0)
                count++;
            tmpExpectedFields = expectedFields.slice();
        }
    }
    if (tmpExpectedFields.length === 0)
        count++;
    console.log(count);
}

function secondPart() {
    let expectedFields = ['byr', 'iyr', 'eyr', 'hgt', 'hcl', 'ecl', 'pid'];
    let tmpExpectedFields = expectedFields.slice();
    let isValid = true;
    let count = 0;

    for (let i = 0; i < data.length; i++) {
        const line = data[i];
        if (line !== '') {
            let fieldsInLine = line.split(' ');
            for (let j = 0; j < fieldsInLine.length; j++) {
                const singleField = fieldsInLine[j];
                let leftSideOfSingleField = singleField.split(':')[0];
                let rightSideOfSingleField = singleField.split(':')[1];
                if (tmpExpectedFields.includes(leftSideOfSingleField)) {
                    let index = tmpExpectedFields.indexOf(leftSideOfSingleField);
                    tmpExpectedFields.splice(index, 1);
                }
                switch (leftSideOfSingleField) {
                    case 'byr':
                        if (!(Number(rightSideOfSingleField) >= 1920 && Number(rightSideOfSingleField) <= 2002))
                            isValid = false;
                        break;
                    case 'iyr':
                        if (!(Number(rightSideOfSingleField) >= 2010 && Number(rightSideOfSingleField) <= 2020))
                            isValid = false;
                        break;
                    case 'eyr':
                        if (!(Number(rightSideOfSingleField) >= 2020 && Number(rightSideOfSingleField) <= 2030))
                            isValid = false;
                        break;
                    case 'hgt':
                        if (rightSideOfSingleField.includes('cm')) {
                            let height = Number(rightSideOfSingleField.replace('cm', ''));
                            if (!(height >= 150 && height <= 193))
                                isValid = false;
                        } else if (rightSideOfSingleField.includes('in')) {
                            let height = Number(rightSideOfSingleField.replace('in', ''));
                            if (!(height >= 59 && height <= 76))
                                isValid = false;
                        } else
                            isValid = false;
                        break;
                    case 'hcl':
                        if (!/^#[0-9a-f]{6}$/.test(rightSideOfSingleField))
                            isValid = false;
                        break;
                    case 'ecl':
                        let colors = ['amb', 'blu', 'brn', 'gry', 'grn', 'hzl', 'oth'];
                        if (!colors.includes(rightSideOfSingleField))
                            isValid = false;
                        break;
                    case 'pid':
                        if (!/^[0-9]{9}$/.test(rightSideOfSingleField))
                            isValid = false;
                        break;
                    default:
                        break;
                }
            }
        } else {
            if (tmpExpectedFields.length === 0 && isValid)
                count++;
            tmpExpectedFields = expectedFields.slice();
            isValid = true;
        }
    }
    if (tmpExpectedFields.length === 0 && isValid)
        count++;
    console.log(count);
}

readInput();
// firstPart();
secondPart();
// console.log(data);