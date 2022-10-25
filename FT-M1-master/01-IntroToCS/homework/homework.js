'use strict'

function BinarioADecimal(num) {
  // tu codigo aca
  let dig=0;
  let decimal=0;
  let tamanio=0;
  let pos=0;
  tamanio = num.length;
  console.log(tamanio);
  for(let i=tamanio-1;i>=0;i--){
      dig = num[pos];
      decimal += dig*(Math.pow(2,i));
      pos++;
  }
  return decimal;
}

function DecimalABinario(num) {
  // tu codigo aca
  let dig=0;
  let expo=0;
  let binario=0;
  let base=1;
  while(num>0){
       dig = Math.floor(num%2);
       binario=  binario + dig*base;
       num = Math.floor(num/2);   
       base = base*10;
  }
  return binario.toString();
}


module.exports = {
  BinarioADecimal,
  DecimalABinario,
}