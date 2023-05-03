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
    let highestID = 0;
    for (let i = 0; i < data.length; i++) {
        let rowArr = Array.from(Array(128).keys());
        let colArr = Array.from(Array(8).keys());
        const currentPassport = data[i];
        for (let j = 0; j < 7; j++) { // calculating rows
            const currentLetter = currentPassport[j];
            let half_length = Math.ceil(rowArr.length / 2);
            if (currentLetter === 'F') {
                rowArr = rowArr.slice(0, half_length);
                // console.log(rowArr);
            } else if (currentLetter === 'B') {
                rowArr = rowArr.slice(half_length, rowArr.length);
                // console.log(rowArr);
            }
        }
        for (let j = 7; j < currentPassport.length; j++) { // calculating columns
            const currentLetter = currentPassport[j];
            let half_length = Math.ceil(colArr.length / 2);
            if (currentLetter === 'R') {
                colArr = colArr.slice(half_length, colArr.length);
            } else if (currentLetter === 'L') {
                colArr = colArr.slice(0, half_length);
            }
        }
        let seatID = rowArr[0] * 8 + colArr[0];
        if (seatID > highestID)
            highestID = seatID;
    }
    console.log(highestID);
}

function secondPart() {
    let allSeats = []; 
    for (let i = 0; i < data.length; i++) {
        let rowArr = Array.from(Array(128).keys());
        let colArr = Array.from(Array(8).keys());
        const currentPassport = data[i];
        for (let j = 0; j < 7; j++) { // calculating rows
            const currentLetter = currentPassport[j];
            let half_length = Math.ceil(rowArr.length / 2);
            if (currentLetter === 'F') {
                rowArr = rowArr.slice(0, half_length);
            } else if (currentLetter === 'B') {
                rowArr = rowArr.slice(half_length, rowArr.length);
            }
        }
        for (let j = 7; j < currentPassport.length; j++) { // calculating columns
            const currentLetter = currentPassport[j];
            let half_length = Math.ceil(colArr.length / 2);
            if (currentLetter === 'R') {
                colArr = colArr.slice(half_length, colArr.length);
            } else if (currentLetter === 'L') {
                colArr = colArr.slice(0, half_length);
            }
        }
        let seatID = rowArr[0] * 8 + colArr[0];
        allSeats.push(seatID);
    }
    allSeats.sort(function(a,b){return a-b});
    for (let i = 0; i < allSeats.length; i++) {
        if (allSeats[i+1] - allSeats[i] === 2) {
            console.log(allSeats[i]+1);
        }
    }
}

readInput();
// firstPart();
secondPart();
// console.log(data);