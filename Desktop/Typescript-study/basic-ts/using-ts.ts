// (1) HTML DOM

const button = document.querySelector("button");
// '!': tell Typescript there always be an element with id "num1" 
// 'as HTMLInputElement': typecast the type of element as an "input"
const input1 = document.getElementById("num1")! as HTMLInputElement;
const input2 = document.getElementById("num2")! as HTMLInputElement;

// ':number': tell Typescript the type of input will be a number 
function add1(num1: number, num2: number) {
    return num1 + num2;
}

button.addEventListener("click", function() {
  // no matter what, js take all the input as str
  console.log(add1(+input1.value, +input2.value));
});


// (2) Typescript types

function add(n1: number, n2: number, showResult: boolean, phrase: string){
  // console.log(typeof n1, typeof n2);
  if (showResult) {
      console.log(phrase, n1 + n2);
  } else {
      return n1 + n2;
  }
}

let number0: number; // how to assign(fix) type
const number1 = '5';
const number2 = 2.8;
const printResult = true;
const resultPhrase = "Result is: "

add(+number1, +number2, printResult, resultPhrase);
