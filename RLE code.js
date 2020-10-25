let fs = require('fs');
let inText;
let resStr = '';

inText = fs.readFileSync('input.txt'); //считывание из файла
inText = inText.toString();//из байтового потока в строку (кодировка, например утф-8)
console.log(inText.length);//длина строки

i = 0;
n = 0;
while(i < inText.length) {
	while (inText.charAt(i) == inText.charAt(i + n))
		n++;
	console.log(inText.charAt(i), " - ", n)
	nJump = n;
	while (n >= 127) {
		resStr += '#' + String.fromCharCode(127) + inText.charAt(i);//отрезаем длинные хвосты
		n -= 127;
	}
	if ((n > 3) || (inText.charAt(i) == '#'))
		resStr += '#' + String.fromCharCode(n) + inText.charAt(i);//проверяем короткие хвосты
	else
		for (k = 0; k < n; k++)
			resStr += inText.charAt(i);
	i += nJump; //в начало новой цепочки
	n = 1; //возвращаем n
}
console.log(resStr);
fs.writeFileSync('output.txt', resStr); //запись строки в файл