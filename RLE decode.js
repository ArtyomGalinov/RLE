let fs = require('fs');
let inText;
let resStr = '';

inText = fs.readFileSync('output.txt'); //���������� �� �����
inText = inText.toString(); //�� ��������� ������ � ������ (���������, �������� ���-8)
console.log(inText); //�������������� ����� 
console.log(inText.length); //����� ��������������� ������

let i = 0;
let n = 0;
while (i < inText.length) {
    if (inText.charAt(i) != '#') {
        resStr += inText.charAt(i); //���������������� �������
        i++;
    }
    else {
        n = inText.charCodeAt(i + 1);
        for (j = 0; j < n; j++) {
            resStr += inText.charAt(i + 2); // �������������� ������
        }
        i += 3; // ������
    }
    n = 0; // ���������
}
console.log(resStr);