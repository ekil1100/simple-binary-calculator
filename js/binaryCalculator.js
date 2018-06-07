'use strict'

let btn0 = document.getElementById('btn0');
let btn1 = document.getElementById('btn1');
let btnEql = document.getElementById('btnEql');
let btnClr = document.getElementById('btnClr');
let btnSum = document.getElementById('btnSum');
let btnMul = document.getElementById('btnMul');
let btnSub = document.getElementById('btnSub');
let btnDiv = document.getElementById('btnDiv');



btn0.addEventListener('click', action);
btn1.addEventListener('click', action);
btnSum.addEventListener('click', action);
btnMul.addEventListener('click', action);
btnSub.addEventListener('click', action);
btnDiv.addEventListener('click', action);
btnEql.addEventListener('click', getRes);
btnClr.addEventListener('click', clearRes);

function action(e){
  let btn = e.target || e.srcElement;
  res.innerHTML += btn.innerHTML;
}

function getRes(){
  let reg = /[\+\-\*\/]/;
  let operand = res.innerHTML.split(reg);
  let operator = res.innerHTML.match(reg);
  let operand1 = parseInt(operand[0], 2);
  let operand2 = parseInt(operand[1], 2);
  let expression = operand1 + operator + operand2;
  // console.log(expression + '->' + eval(expression) + '->' + eval(expression).toString(2));
  res.innerHTML = eval(expression).toString(2);
}

function clearRes(){
  res.innerHTML = '';
}
