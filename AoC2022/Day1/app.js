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
    var most = 0;
    var tmpMost = 0;

    data.forEach(element => {
        if(element !== '\r') {
            tmpMost += Number(element);
            // console.log('fits');
        } else {
            if(most < tmpMost)
                most = tmpMost;
            tmpMost = 0;
            // console.log('does not fit');
        }
    });

    console.log(most);
}

function part2() {
    var tmpMost = 0;
    var totals = [];

    data.forEach(element => {
        if(element !== '\r') {
            tmpMost += Number(element);
            // console.log('fits');
        } else {
            totals.push(tmpMost);
            tmpMost = 0;
            // console.log('does not fit');
        }
    });

    if(tmpMost !== 0) {
        totals.push(tmpMost);
    }

    // console.log(totals);

    totals.sort(function(a, b) {
        return b - a;
    });

    // console.log(totals)

    console.log(totals[0] + totals[1] + totals[2]);
}

readInput();
part1();
part2();