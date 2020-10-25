let fs = require('fs');
let inText;
let resStr = '';

inText = fs.readFileSync('input.txt'); // reading from file
inText = inText.toString();// from byte to string
console.log(inText.length);// string length

i = 0;
n = 0;
while(i < inText.length) {
	while (inText.charAt(i) == inText.charAt(i + n))
		n++;
	console.log(inText.charAt(i), " - ", n)
	nJump = n;
	while (n >= 127) {
		resStr += '#' + String.fromCharCode(127) + inText.charAt(i);
		n -= 127;
	}
	if ((n > 3) || (inText.charAt(i) == '#'))
		resStr += '#' + String.fromCharCode(n) + inText.charAt(i);
	else
		for (k = 0; k < n; k++)
			resStr += inText.charAt(i);
	i += nJump; //jump to beginning of the new chain
	n = 1;
}
console.log(resStr);
fs.writeFileSync('output.txt', resStr); //saving in .txt file