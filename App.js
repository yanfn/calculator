const numbers = document.querySelectorAll('.number');
const operation = document.querySelectorAll('[data-operation]');
const display = document.querySelector('.display');

let currentOperator = '';
let operator = '';
let currentNumber = '';
let previousNumber = '';
let result = '';


function dis(val) {
	display.innerText += val;
}

numbers.forEach((number) => {
	number.addEventListener('click', (e) => {
		if (operator === '') {
			// Read first number if no operator set yet
			currentNumber += e.target.innerText;
			
		} else {
			currentNumber += e.target.innerText;
			console.log('second: ' + currentNumber);
			
		} 
		
	});
});

operation.forEach((operators)=> {
	operators.addEventListener('click', (e) => {
		if (operator !== '') {
				currentOperator = e.target.innerText;
				calculate();
			}

		if (previousNumber == ''){
			previousNumber = currentNumber;		
			currentNumber = '';
			console.log('first: ' + previousNumber);
		}else if (previousNumber !== '') {
			previousNumber = result;	
			currentNumber = '';
			
			console.log('first: ' + previousNumber);
		}
		if (e.target.innerText !== '=') {
			
 			operator = e.target.innerText;
			console.log(operator);
 		}
	});
});


function calculate() {
	result = operate(parseFloat(previousNumber), parseFloat(currentNumber), operator);
	console.log(result);
  	display.innerText = result;
}

function operate(previousNumber, currentNumber, operator) {
	switch (operator) {
		case '+':
			return add(previousNumber, currentNumber);	
	
		case '-':
			return subtract(previousNumber, currentNumber);

		case '*':
			return multiply(previousNumber, currentNumber);	

		case '/':
			return divide(previousNumber, currentNumber);	

		default:
			break;
	}
}

function add(a,b) {
	return a + b;	
}

function subtract(a,b) {
	return a - b;	
}

function multiply(a,b) {
	return a * b;	
}

function divide(a,b) {
	return a / b;	
}

