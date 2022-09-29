// (1) HTML DOM
var button = document.querySelector("button");
// '!': tell Typescript there always be an element with id "num1" 
// 'as HTMLInputElement': typecast the type of element as an "input"
var input1 = document.getElementById("num1");
var input2 = document.getElementById("num2");
// ':number': tell Typescript the type of input will be a number 
function add1(num1, num2) {
    return num1 + num2;
}
button.addEventListener("click", function () {
    // no matter what, js take all the input as str
    console.log(add1(+input1.value, +input2.value));
});
// (2) Typescript types
function add(n1, n2, showResult, phrase) {
    // console.log(typeof n1, typeof n2);
    if (showResult) {
        console.log(phrase, n1 + n2);
    }
    else {
        return n1 + n2;
    }
}
var number0; // how to assign(fix) type
var number1 = '5';
var number2 = 2.8;
var printResult = true;
var resultPhrase = "Result is: ";
add(+number1, +number2, printResult, resultPhrase);
