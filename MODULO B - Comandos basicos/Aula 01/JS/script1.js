console.log("////////////////////////////////")
console.log("script 1")
//CONCATENAÇÃO  

var nome = prompt("Qual seu nome?")
var idade = prompt("Qual sua idade?")

alert("MODELO CONCATENAÇÃO COM +") //FORMA 1
alert("Seu nome é "+ nome +" e você tem "+ idade +" anos de idade") 

alert("MODELO CONCATENAÇAÕ COM ${}") //FORMA 2
alert(`Seu nome é ${nome} e você tem ${idade} anos de idade`) 