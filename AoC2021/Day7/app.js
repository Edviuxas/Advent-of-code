var positions;

function readInput() {
    var fs = require('fs');

    try {  
        var inputData = fs.readFileSync('input.txt', 'utf8');
        // var inputData = fs.readFileSync('testInput.txt', 'utf8');
        positions = inputData.split(',').map(function(item) {
            return parseInt(item, 10);
        });
    } catch(e) {
        console.log('Error:', e.stack);
    }
}

function median(numbers) {
    const sorted = numbers.slice().sort((a, b) => a - b);
    const middle = Math.floor(sorted.length / 2);

    if (sorted.length % 2 === 0) {
        return (sorted[middle - 1] + sorted[middle]) / 2;
    }

    return sorted[middle];
}

function average(numbers) {
    var sum = 0;
    for (var i = 0; i < numbers.length; i++) {
        sum += numbers[i];
    }
    return Math.round(sum / numbers.length);
}

function part1() {
    var med = median(positions);
    
    var fuelSum = 0;
    for (var i = 0; i < positions.length; i++) {
        console.log(Math.abs(med - positions[i]));
        fuelSum += Math.abs(med - positions[i]);
    }
    console.log(fuelSum);
    // console.log(median(positions));
}

function part2() {
    var maxPos = Math.max(...positions);

    var minFuelConsumption = Number.MAX_SAFE_INTEGER;
    // console.log(minFuelConsumption);

    for (var i = 0; i <= maxPos; i++) {
        var fuel = calculateFuelConsumption(i);
        // console.log('i = ' + i + ' fuel: ' + fuel);
        if (fuel < minFuelConsumption) {
            minFuelConsumption = fuel;
        }
    }
    console.log(minFuelConsumption);
}

function calculateFuelConsumption(pos) {
    var sum = 0;
    for (var i = 0; i < positions.length; i++) {
        var diff = Math.abs(positions[i] - pos);
        // sum += diff * (diff + 1) / 2; FASTER WAY, TRIANGULAR NUMBERS
        for (var j = 1; j <= diff; j++) {
            sum += j;
        }
    }
    return sum;
}

readInput();
part2();
// console.log(positions);