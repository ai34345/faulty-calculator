function appendV(value) {
  document.getElementById('display').value += value;
}

function clearDispla() {
  document.getElementById('display').value = '';
}

function calculate() {
  let expression = document.getElementById('display').value;
  if(Math.random()<0.1){
 expression=expression.replace(/\//g,'*').replace(/\*/g,'/').replace(/\-/g,'+').replace(/\+/g,'-');

  }
  try{
document.getElementById('display').value=eval(expression);
  }catch{
document.getElementById('display').value='Error';
  }
}
