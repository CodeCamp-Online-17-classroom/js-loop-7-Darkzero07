let number1 = Number(prompt("User1 Enter number  1- 100: "));
let number2;
if(!(number1 < 1 || number1 > 100)) {
    while (number1 !== number2) {
        number2 = Number(prompt("User2 Enter number  1- 100: "));
        if (number1 === number2) {
           alert(`Congrate! you correct Number is ${number1}`);
        } else if (number1 > number2) {
           alert(`Number1 is greater than your number`);
        } else {
           alert(`Number1 is less than your number` );
        }
    };
} else {alert(`${number1} not between 1 -100`);}