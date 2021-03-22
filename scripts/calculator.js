function updateDisplay(value){
	var disp = document.getElementById('display');
	switch(value){
		case '0':
			if (disp.innerHTML === ''){
				disp.innerHTML === '';
			}
			else{
				disp.innerHTML += value;
			}
			break;
		case '1':
		case '2':
		case '3':
		case '4':
		case '5':
		case '6':
		case '7':
		case '8':
		case '9':
			disp.innerHTML += value;
			break;
		case '+':
		case '-':
		case '*':
		case '/':
			if (disp.innerHTML === ''){
				disp.innerHTML = '';
			}
			else if (disp.innerHTML.endsWith('+') || disp.innerHTML.endsWith('-') || disp.innerHTML.endsWith('*') || disp.innerHTML.endsWith('/')){
				disp.innerHTML = disp.innerHTML;
			}
			else{
				disp.innerHTML += value;
			}
			break;
		case 'AC':
			disp.innerHTML = '';
			break;
		case '=':
			if (disp.innerHTML === ''){
				disp.innerHTML = '';
			}
			else if (disp.innerHTML.endsWith('+') || disp.innerHTML.endsWith('-') || disp.innerHTML.endsWith('*') || disp.innerHTML.endsWith('/')){
				disp.innerHTML = 'Err';
			}
			else{
				var answer = eval(disp.innerHTML);
				disp.innerHTML = answer;
			}
			break;
	}
}