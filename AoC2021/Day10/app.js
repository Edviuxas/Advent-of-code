var data;
var openingTags = ['(', '[', '{', '<'];
var closingTags = [')', ']', '}', '>'];
var points = [3, 57, 1197, 25137];

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

    var part1Answer = 0;
    var scores = [];

    data.forEach(element => {

        var stack = [];
        var breakTriggered = false;
        var score = 0;

        for (let i = 0; i < element.length; i++) {
            var index = openingTags.indexOf(element[i]);

            if (index != -1) {
                stack.push(closingTags[index]);
            } else {
                if (element[i] != stack[stack.length-1]) {
                    part1Answer += points[closingTags.indexOf(element[i])];
                    breakTriggered = true;
                    break;
                } else {
                    stack.pop();
                }
            }
        }

        if (!breakTriggered) {
            for (let j = stack.length - 1; j >= 0; j--) {
                var index = closingTags.indexOf(stack[j]);
                score = score * 5 + index + 1;
            }
            scores.push(score);
        }

    });

    console.log('part 1 answer: ' + part1Answer);

    scores = scores.sort(function (a, b) {  return b-a;  });
    console.log('part 2 answer: ' + scores[Math.floor(scores.length / 2)]);
}

readInput();
part1();