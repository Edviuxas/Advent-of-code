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
    var totalPoints = 0;

    const lowerPoints = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
    const upperPoints = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
    data.forEach(element => {
        var half1 = element.slice(0, element.length/2);
        var half2 = element.slice(element.length/2);

        // console.log(element);
        // console.log(half1);
        // console.log(half2);

        loop1:
        for (let i = 0; i < half1.length; i++) {
            const character1 = half1[i];
            loop2:
            for (let j = 0; j < half2.length; j++) {
                const character2 = half2[j];
                if (character1 === character2) {
                    // console.log(character1);
                    if (character1 === character1.toLowerCase()) {
                        totalPoints += (lowerPoints.indexOf(character1) + 1);
                    } else {
                        totalPoints += (upperPoints.indexOf(character1) + 27);
                    }
                    break loop1;
                }
            }
        }
    });

    console.log(totalPoints);
}

function part2() {
    var totalPoints = 0;

    const lowerPoints = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
    const upperPoints = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];

    for (let index = 0; index < data.length; index += 3) {
        const firstLine = data[index];
        const secondLine = data[index+1];
        const thirdLine = data[index+2];

        // console.log(firstLine);
        // console.log(secondLine);
        // console.log(thirdLine);
        
        loop1:
        for (let i = 0; i < firstLine.length; i++) {
            const character1 = firstLine[i];
            loop2:
            for (let j = 0; j < secondLine.length; j++) {
                const character2 = secondLine[j];
                loop3:
                for (let j = 0; j < thirdLine.length; j++) {
                    const character3 = thirdLine[j];
                    
                    if (character1 === character2 && character1 === character3) {
                        // console.log(character1);
                        if (character1 === character1.toLowerCase()) {
                            totalPoints += (lowerPoints.indexOf(character1) + 1);
                        } else {
                            totalPoints += (upperPoints.indexOf(character1) + 27);
                        }
                        break loop1;
                    }
                }
            }
        }
    }

    console.log(totalPoints);
}

readInput();
// part1();
part2();