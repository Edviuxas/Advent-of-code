// 0:      1:      2:      3:      4:
//  aaaa    ....    aaaa    aaaa    ....
// b    c  .    c  .    c  .    c  b    c
// b    c  .    c  .    c  .    c  b    c
//  ....    ....    dddd    dddd    dddd
// e    f  .    f  e    .  .    f  .    f
// e    f  .    f  e    .  .    f  .    f
//  gggg    ....    gggg    gggg    ....

//  5:      6:      7:      8:      9:
//  aaaa    aaaa    aaaa    aaaa    aaaa
// b    .  b    .  .    c  b    c  b    c
// b    .  b    .  .    c  b    c  b    c
//  dddd    dddd    ....    dddd    dddd
// .    f  e    f  .    f  e    f  .    f
// .    f  e    f  .    f  e    f  .    f
//  gggg    gggg    ....    gggg    gggg

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
    let sum = 0;
    data.forEach(element => {
        neededElements = element.split('|')[1].split(' ');

        for (let i = 1; i < neededElements.length; i++) {
            if (neededElements[i].length === 2 || neededElements[i].length === 3 || neededElements[i].length === 4 || neededElements[i].length === 7) {
                sum++;
            }
        }
    });
    console.log(sum);
}

function findChar(longer, shorter) {
    for(let i = 0; i < shorter.length; i++) {
        longer = longer.replace(shorter[i], '');
    }
    return longer;
}

function countCharDifference(longer, shorter) {
    let diff = 0;
    for (let i = 0; i < shorter.length; i++) {
        if (!longer.includes(shorter[i])) {
            diff++;
        }
    }
    for (let i = 0; i < longer.length; i++) {
        if (!shorter.includes(longer[i])) {
            diff++;
        }
    }
    return diff;
}

function sortAlphabets(text) {
    return text.split('').sort().join('');
}

function part2() {
    var sum = 0;

    data.forEach(element => {

        let dict = {'a': 'a',
        'b': 'b',
        'c': 'c',
        'd': 'd',
        'e': 'e',
        'f': 'f',
        'g': 'g'};

        neededElements = element.split('|')[0].split(' ');
        calcElements = element.split('|')[1].split(' ');

        var one, four, seven, eight;
        for (let i = 0; i < 10; i++) {
            if (neededElements[i].length === 2) {
                one = neededElements[i];
            } else if (neededElements[i].length === 3) {
                seven = neededElements[i]
            } else if (neededElements[i].length === 4) {
                four = neededElements[i];
            } else if (neededElements[i].length === 7) {
                eight = neededElements[i];
            }
        }

        for (let j = 0; j < 10; j++) {
            if (neededElements[j].length === 3) { // finding 7
                dict.a = findChar(neededElements[j], one);
            }
        }

        for (let j = 0; j < 10; j++) {
            if (neededElements[j].length === 6) { // finding 9
                let fourPlusTop = four + dict.a;

                if (countCharDifference(neededElements[j], fourPlusTop) === 1) {  
                    dict.g = findChar(neededElements[j], fourPlusTop);
                }
            }
        }

        for (let j = 0; j < 10; j++) {
            if (neededElements[j].length === 5) { // finding 3
                let onePlusTopBottom = one + dict.a + dict.g;

                if (countCharDifference(neededElements[j], onePlusTopBottom) === 1) {  
                    dict.d = findChar(neededElements[j], onePlusTopBottom);
                }
            }
        }

        for (let j = 0; j < 10; j++) {
            if (neededElements[j].length === 6) { // finding 9
                let onePlusTopBottomMiddle = one + dict.a + dict.g + dict.d;

                if (countCharDifference(neededElements[j], onePlusTopBottomMiddle) === 1) {  
                    dict.b = findChar(neededElements[j], onePlusTopBottomMiddle);
                }
            }
        }

        for (let j = 0; j < 10; j++) {
            if (neededElements[j].length === 7) { // finding 8
                let mask = seven + dict.b + dict.d + dict.g;

                if (countCharDifference(neededElements[j], mask) === 1) {  
                    dict.e = findChar(neededElements[j], mask);
                }
            }
        }

        for (let j = 0; j < 10; j++) {
            if (neededElements[j].length === 5) { // finding 5
                let mask = dict.b + dict.a + dict.g + dict.d;

                if (countCharDifference(neededElements[j], mask) === 1) {  
                    dict.f = findChar(neededElements[j], mask);
                }
            }
        }

        for (let j = 0; j < 10; j++) {
            if (neededElements[j].length === 2) { // finding 1
                let mask = dict.f;

                if (countCharDifference(neededElements[j], mask) === 1) {  
                    dict.c = findChar(neededElements[j], mask);
                }
            }
        }

        var decodingArray = [sortAlphabets(dict.a + dict.b + dict.c + dict.e + dict.f + dict.g),
                             sortAlphabets(dict.c + dict.f),
                             sortAlphabets(dict.a + dict.c + dict.d + dict.e + dict.g),
                             sortAlphabets(dict.a + dict.c + dict.d + dict.f + dict.g),
                             sortAlphabets(dict.b + dict.c + dict.d + dict.f),
                             sortAlphabets(dict.a + dict.b + dict.d + dict.f + dict.g),
                             sortAlphabets(dict.a + dict.b + dict.d + dict.e + dict.f + dict.g),
                             sortAlphabets(dict.a + dict.c + dict.f),
                             sortAlphabets(dict.a + dict.b + dict.c + dict.d + dict.e + dict.f + dict.g),
                             sortAlphabets(dict.a + dict.b + dict.c + dict.d + dict.f + dict.g)];

        var output = '';                     
        for (let i = 1; i < calcElements.length; i++) {
            var sorted = sortAlphabets(calcElements[i]);
            output += decodingArray.indexOf(sorted).toString();
        }
        sum += Number.parseInt(output);
    });

    console.log(sum);
}

readInput();
// part1();
part2();