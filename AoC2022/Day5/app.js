var rawData;
var stacks = [[], [], [], [], [], [], [], [], []];

function readInput() {
    var fs = require('fs');

    try {  
        var inputData = fs.readFileSync('input.txt', 'utf8');
        // var inputData = fs.readFileSync('testInput.txt', 'utf8');
        rawData = inputData.split('\r\n');
    
        for (let i = 0; i < rawData.length; i++) {
            const line = rawData[i];

            if (line[1] === '1') {
                break;
            }
            for (let index = 0; index < line.length; index+=4) {
                const letter = line[index+1];
                if (letter !== ' ') {
                    stacks[index / 4].unshift(letter);
                }
            }
            
        }
        // data = inputData.split(os.EOL);

    } catch(e) {
        console.log('Error:', e.stack);
    }
}

function part1() {
    rawData.forEach(line => {
        if (line[0] === 'm') {
            var num = line.replace('move ', '').replace(' from ', ' ').replace(' to ', ' ');
            var nums = num.split(' ');

            var iterations = Number(nums[0]);
            var from = Number(nums[1]);
            var to = Number(nums[2]);

            for (let index = 0; index < iterations; index++) {
                stacks[to-1].push(stacks[from-1].pop());
            }

        }
    });
}

function part2() {
    rawData.forEach(line => {
        if (line[0] === 'm') {
            var num = line.replace('move ', '').replace(' from ', ' ').replace(' to ', ' ');
            var nums = num.split(' ');
            var iterations = Number(nums[0]);
            var from = Number(nums[1]);
            var to = Number(nums[2]);

            var tmp = [];

            for (let index = 0; index < iterations; index++) {
                tmp.unshift(stacks[from-1].pop())
            }

            while (tmp.length !== 0) {
                stacks[to-1].push(tmp.shift());
            }
        }
    });
}

readInput();
// part1();
part2();
console.log(stacks);