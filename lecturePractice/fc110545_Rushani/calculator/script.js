
let output=document.getElementById("op");

let num1=null;
let num2=null;
let ops=null;
let result=null;
let entered=false;

function display(num){
    output.value += num;

}

function setop(operator){

    num1=Number(output.value);
    output.value = " ";
    ops=operator;
    entered=true;

}

function equal(){

    num2=Number(output.value);

    if (ops === '+') {
        result = num1 + num2;
    } else if (ops === '-') {
        result = num1 - num2;
    } else if (ops === '*') {
        result = num1 * num2;
    } else if (ops === '/') {
        if (num2 === 0) {
            result = 'Error';
        } else {
            result = num1 / num2;
        }
    }

    output.value=result;

    num1 = result;
    num2 = null;
    ops = null;
    result = null;


}
function remove (){
    output.value = " ";
    num1 = null;
    num2 = null;
    ops = null;
    result = null;

}