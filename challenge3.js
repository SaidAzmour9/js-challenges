let number1 = Number(prompt("enter number 1:"));
let operator = prompt("choose operator (+ ; - ; / ):");
let number2 = Number(prompt("enter number 2:"));

/*
let result;
switch(operator){
    case "+":
        result = number1 + number2;
        console.log(`Result of ${number1} ${operator} ${number2} is ${result}`);
        break;
        case "-":
            result = number1 - number2;
            console.log(`Result of ${number1} ${operator} ${number2} is ${result}`);
            break;
        case "/":
            if (number2 == 0) {
                console.log('connot divide by 0');
            }else{    
                result = number1 / number2;
                console.log(`Result of ${number1} ${operator} ${number2} is ${result}`);
            }
            break;
        default:
            console.error('invalid info');
}
*/

let result = 
    operator === "+"
    ? number1 + number2
    : operator === "-"
    ? number1 - number2
    : operator === "/"
    ? number2 !== 0
        ?number1 / number2 
        :console.error('connot divide by 0')
    :console.error("invalid operator ");
console.log(`Result of ${number1} ${operator} ${number2} is ${result}`);

