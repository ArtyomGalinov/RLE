let fs = require('fs');
let inText;
let resStr = '';

inText = fs.readFileSync('input.txt'); //���������� �� �����
inText = inText.toString();//�� ��������� ������ � ������ (���������, �������� ���-8)
console.log(inText.length);//����� ������

i = 0;
n = 0;
while(i < inText.length) {
	while (inText.charAt(i) == inText.charAt(i + n))
		n++;
	console.log(inText.charAt(i), " - ", n)
	nJump = n;
	while (n >= 127) {
		resStr += '#' + String.fromCharCode(127) + inText.charAt(i);//�������� ������� ������
		n -= 127;
	}
	if ((n > 3) || (inText.charAt(i) == '#'))
		resStr += '#' + String.fromCharCode(n) + inText.charAt(i);//��������� �������� ������
	else
		for (k = 0; k < n; k++)
			resStr += inText.charAt(i);
	i += nJump; //� ������ ����� �������
	n = 1; //���������� n
}
console.log(resStr);
fs.writeFileSync('output.txt', resStr); //������ ������ � ����