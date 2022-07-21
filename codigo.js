'use strict';
/*
programa que nos diga si un numero es par o impar.
*/

var numero = parseInt(prompt("mete un número",0));

while(isNaN(numero)){
    numero = parseInt(prompt("mete un número",0));
}

if(numero%2 == 0){
    alert(`el número ${numero} es: \n
    PAR`)
}else{
    alert(`el número ${numero} es: \n
    IMPAR`)
}