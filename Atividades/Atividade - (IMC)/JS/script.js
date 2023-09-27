//CALCULO IMC

function calculoimc (peso, altura){
var imc = peso / (altura * altura);
return imc.toFixed(2)                       //to.Fixed(2) - retorna apenas 2 numeros apos o ponto
                                            //return - RETORNA O CALCULO PARA A VARIAVEL

}

var peso = prompt("Qual seu peso? ex: 90");        //dando valor a peso
var altura = prompt("Qual sua altura? ex: 1.70");    //dando valor a altura
var imc = calculoimc(peso,altura);
alert(`seu IMC é ${imc}`)

