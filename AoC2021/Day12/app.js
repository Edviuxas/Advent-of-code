var data;
var connections = [{}];

function readInput() {
    var fs = require('fs');
    var os = require('os');

    try {  
        // var inputData = fs.readFileSync('input.txt', 'utf8');
        var inputData = fs.readFileSync('testInput.txt', 'utf8');
        // data = inputData.split('\n');
        data = inputData.split(os.EOL);

        data.forEach(element => {
            var foundExistingNode = false;
            var start = element.split('-')[0];
            var finish = element.split('-')[1];

            for (let i = 0; i < connections.length; i++) {
                if (connections[i].name == start) {
                    if (!connections[i].conn.includes(finish)) {
                        foundExistingNode = true;
                        connections[i].conn.push(finish);
                    }
                } else if (connections[i].name == finish) {
                    if (!connections[i].conn.includes(start)) {
                        foundExistingNode = true;
                        connections[i].conn.push(start);
                    }
                }
            }
            if (!foundExistingNode) {
                connections.push({'name': start, 'conn': [finish]});
                connections.push({'name': finish, 'conn': [start]});
            }
        });

    } catch(e) {
        console.log('Error:', e.stack);
    }
}

function part1() {

}

function part2() {

}

readInput();
console.log(connections);