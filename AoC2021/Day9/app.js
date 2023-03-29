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

function addBorderOf9Around(arr) {
    var width = arr[0].length;
    var topBottomRows = '9'.repeat(width);
    arr.unshift(topBottomRows);
    arr.push(topBottomRows);
    for (let i = 0; i < arr.length; i++) {
        arr[i] = '9' + arr[i] + '9';
    }
    return arr;
}

function part1() {
    data = addBorderOf9Around(data);

    var sum = 0;    
    for (let i = 1; i < data.length - 1; i++) {
        for (let j = 1; j < data[i].length - 1; j++) {
            var checkingNumber = Number(data[i][j]);
            if (checkingNumber < Number(data[i-1][j]) && checkingNumber < Number(data[i][j+1]) && checkingNumber < Number(data[i+1][j]) && checkingNumber < Number(data[i][j-1])) {
                sum += (1 + checkingNumber);
            }
        }
    }

    console.log(sum);
}

function part2() {
    data = addBorderOf9Around(data);

    var lowestPoints = findLowestPoints(data);

    var areas = [];

    lowestPoints.forEach(element => {
        area = findBasinArea(Number(element.x), Number(element.y));
        areas.push(area);
    });

    areas = areas.sort(function (a, b) {  return b-a;  });

    answ = 1;
    
    for (let i = 0; i < 3; i++) {
        answ *= areas[i];
    }

    console.log(answ);
}

function findLowestPoints(arr) {
    var lowest = [];

    for (let i = 1; i < arr.length - 1; i++) {
        for (let j = 1; j < arr[i].length - 1; j++) {
            var checkingNumber = Number(arr[i][j]);

            if (checkingNumber < Number(arr[i-1][j]) && checkingNumber < Number(arr[i][j+1]) && checkingNumber < Number(arr[i+1][j]) && checkingNumber < Number(arr[i][j-1])) {
                lowest.push({'x' : j, 'y' : i});
            }
        }
    }

    return lowest;
}

function findBasinArea(x, y) {
    var visited = [{'x' : x, 'y' : y}];

    var area = 1;

    var toGo = getHigherNeighboursCoords(x, y);

    while (toGo.length > 0) {
        var point = toGo[toGo.length - 1];
        visited.push({'x' : Number(point.x), 'y' : Number(point.y)});
        area++;
        toGo.pop();
        var neighbours = getHigherNeighboursCoords(Number(point.x), Number(point.y));
        neighbours.forEach(el => {
            if(!visited.find( p => p.x === el.x && p.y === el.y ) && !toGo.find( f => f.x === el.x && f.y === el.y )) {
                toGo.push(el);
            }
        });
    }

    return area;
}

function getHigherNeighboursCoords(x, y) {
    var result = [];

    var elementComparing = Number(data[y][x]);

    if (Number(data[y-1][x]) > elementComparing && Number(data[y-1][x]) != 9) {
        var point = {'x': x, 'y' : y-1};
        result.push(point);
    }
    if (Number(data[y][x+1]) > elementComparing && Number(data[y][x+1]) != 9) {
        var point = {'x': x+1, 'y' : y};
        result.push(point);
    }
    if (Number(data[y+1][x]) > elementComparing && Number(data[y+1][x]) != 9) {
        var point = {'x': x, 'y' : y+1};
        result.push(point);
    }
    if (Number(data[y][x-1]) > elementComparing && Number(data[y][x-1]) != 9) {
        var point = {'x': x-1, 'y' : y};
        result.push(point);
    }

    return result;
}

readInput();
// part1();
part2();