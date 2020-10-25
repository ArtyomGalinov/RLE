let fs = require('fs');
let inText;
let resStr = '';

inText = fs.readFileSync('output.txt'); //reading from file
inText = inText.toString(); //from byte to string
console.log(inText);
console.log(inText.length);

let i = 0;
let n = 0;
while (i < inText.length) {
    if (inText.charAt(i) != '#') {
        resStr += inText.charAt(i); //uncoded symbol
        i++;
    }
    else {
        symbolCounter = inText.charCodeAt(i + 1);
        for (j = 0; j < symbolCounter; j++) {
            resStr += inText.charAt(i + 2); // coded symbol
        }
        i += 3; // jump
    }
}
console.log(resStr);