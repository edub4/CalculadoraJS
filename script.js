function fAddNum(btn){
  valor = btn.value;
  var visor = document.getElementById('visor');
  visor.innerHTML += valor;

}
function fApag(){
  var visor = document.getElementById('visor');
  visor.innerHTML = " ";
}
function fIgual(){
  var visor = document.getElementById('visor');
  var valor = visor.innerHTML;

  try{
    conta = eval(valor);
    visor.innerHTML = conta;
  }catch{
    visor.innerHTML = "ERROR";
    setTimeout(() => {
      visor.innerHTML = "";
    }, 700);
  }
}
