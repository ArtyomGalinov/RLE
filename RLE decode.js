let fs = require('fs');
let inText;
let resStr = '';

inText = fs.readFileSync('output.txt'); //считывание из файла
inText = inText.toString(); //из байтового потока в строку (кодировка, например утф-8)
console.log(inText); //закодированный текст 
console.log(inText.length); //длина закодированного текста

let i = 0;
let n = 0;
while (i < inText.length) {
    if (inText.charAt(i) != '#') {
        resStr += inText.charAt(i); //незакодированные символы
        i++;
    }
    else {
        n = inText.charCodeAt(i + 1);
        for (j = 0; j < n; j++) {
            resStr += inText.charAt(i + 2); // закодированный символ
        }
        i += 3; // прыжок
    }
    n = 0; // обнуление
}
console.log(resStr);