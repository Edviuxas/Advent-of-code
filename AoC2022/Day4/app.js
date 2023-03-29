var data;

function readInput() {
    var fs = require('fs');

    try {  
        var inputData = fs.readFileSync('input.txt', 'utf8');
        // var inputData = fs.readFileSync('testInput.txt', 'utf8');
        data = inputData.split('\r\n');
        // data = inputData.split(os.EOL);
    } catch(e) {
        console.log('Error:', e.stack);
    }
    // console.log(data);
}

function part1() {
    var count = 0;
    data.forEach(pair => {
        var first = pair.split(',')[0].split('-');
        var second = pair.split(',')[1].split('-');

        if ((Number(first[0]) <= Number(second[0]) && Number(first[1]) >= Number(second[1])) || (Number(second[0]) <= Number(first[0]) && Number(second[1]) >= Number(first[1])))
            count++;
    });
    console.log(count);
}

function part2() {
    var count = 0;
    data.forEach(pair => {
        var first = pair.split(',')[0].split('-');
        var second = pair.split(',')[1].split('-');

        if (Number(second[0]) <= Number(first[1]) && Number(second[1]) >= Number(first[0]))
            count++;
        else if (Number(second[1]) >= Number(first[0]) && Number(second[0]) <= Number(first[1]))
            count++;
    });
    console.log(count);
}

readInput();
part1();
part2();