var data;
var fish;

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
    fish = data[0].split(',');
}

function part1() {
    for (var i = 0; i < 18; i++) {
        // console.log(fish);
        for (var j = 0; j < fish.length; j++) {
            var num = Number(fish[j]);
            if (num == 0) {
                num = 6;
                fish.push('9');
            } else {
                num -= 1;
            }
            fish[j] = num.toString();
        }
    }
    console.log(fish.length);
}

function part2() {

    var fishCountEachDay = [0, 0, 0, 0, 0, 0, 0, 0];
    for (var i = 0; i < fish.length; i++) {
        fishCountEachDay[Number(fish[i])] += 1;
    }
    // console.log(fishTurbo);

    var prev = fishCountEachDay[0];
    var curr;
    for (var i = 0; i <= 256; i++) {
        for (var j = fishCountEachDay.length - 1; j >= 0; j--) {
            curr = fishCountEachDay[j];
            fishCountEachDay[j] = prev;
            prev = curr;
        }
        fishCountEachDay[6] += prev;
    }
    var totalCount = 0;
    for (var i = 0; i < fishCountEachDay.length; i++) {
        totalCount += fishCountEachDay[i];
    }
    console.log(totalCount);

}

readInput();
// console.log(fish);
// part1();
part2();
// console.log(data);