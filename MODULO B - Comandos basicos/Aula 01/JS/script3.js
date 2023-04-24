console.log("////////////////////////////////")
console.log("script 3")
// MUDAR O FORMATO DO NUMBER PARA MONETARIO

var n1 = 1545.2
console.log(n1)

n1 = n1.toLocaleString('pt-BR',{style:'currency', currency: 'BRL'})
console.log(n1)