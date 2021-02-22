const buttonAdd = document.getElementById('button-add');
const box = document.getElementById('box');
const inputnum1 = document.getElementById('num1');
const inputnum2 = document.getElementById('num2');

function getNum1(){
  console.log(inputnum1.value);
  console.log(typeof inputnum1.value);
  let realnum1;
  realnum1 = Number.parseFloat(inputnum1.value);
  console.log(realnum1);
  console.log(typeof realnum1);  
  return realnum1;
}

function getNum2(){
  console.log(inputnum2.value);
  console.log(typeof inputnum2.value);
  let realnum2;
  realnum2 = Number.parseFloat(inputnum2.value);
  console.log(realnum2);
  console.log(typeof realnum2);
  return realnum2;
}

function showresult(result){
 box.textContent = result; 
}

function sum(){
  console.log(getNum1() + getNum2());
  let sum;
  sum = getNum1() + getNum2();
  console.log(sum);
  showresult(sum);
}

buttonAdd.addEventListener('click', sum);