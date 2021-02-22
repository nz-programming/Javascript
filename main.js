const buttonAdd = document.getElementById('button-add');
const buttonSub = document.getElementById('button-sub');
const buttonMul = document.getElementById('button-mul');
const buttonDiv = document.getElementById('button-div');
const box = document.getElementById('box');
const inputnum1 = document.getElementById('num1');
const inputnum2 = document.getElementById('num2');

function getNum1(){
  let realnum1;
  realnum1 = Number.parseFloat(inputnum1.value);
  return realnum1;
}

function getNum2(){
  let realnum2;
  realnum2 = Number.parseFloat(inputnum2.value);
  return realnum2;
}

function showresult(result){
 box.textContent = result; 
}

function sum(){
  let sum;
  sum = getNum1() + getNum2();
  showresult(sum);
}

function sub(){
  let sub;
  sub = getNum1() - getNum2();
  showresult(sub);
}

function mul(){
  let mul;
  mul = getNum1() * getNum2();
  showresult(mul);
}

function div(){
  let div;
  div = getNum1() / getNum2();
  showresult(div);
}

buttonAdd.addEventListener('click', sum);
buttonSub.addEventListener('click', sub);
buttonMul.addEventListener('click', mul);
buttonDiv.addEventListener('click', div);