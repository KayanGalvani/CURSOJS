let num = [5, 8, 2, 9, 3] //Vetor
        // 0, 1, 2, 3, 4, Ordem das casas
    num [3] = 5 //Substitui o 3 e troca por 5
    num.push(7) //Adiciona um valor ao final do Vetor
    num.sort() // Coloca os numeros em ordem crescente
console.log(`Nosso vetor é ${num}`) 
console.log(`O vetor tem ${num.length} posições`) //num.length Mostra a QTD de casas
let casa = num.indexOf(8) //Fala em qual posição está o numero procurado

    if (casa == num.indexOf(8)){
    console.log(`O Valor 8 esta na posição ${casa}`)
    }else{
        (casa == -1)
    console.log("Esse numero não existe no vetor")
    }
w



/*----------------------------------------------------------------------------------------------------------------------------*/
console.log("//////////////////////////////////////////////////////////")
console.log("//////////////////////////////////////////////////////////")
console.log("//////////////////////////////////////////////////////////")

/*----------------------------------------------------------------------------------------------------------------------------*/


// usando for para mostrar o vetor em vertical
for(let casa = 0; casa<num.length; casa++){
    console.log(`A posição ${casa} tem o valor ${num[casa]}`)
}

/*----------------------------------------------------------------------------------------------------------------------------*/
console.log("//////////////////////////////////////////////////////////")
console.log("//////////////////////////////////////////////////////////")
console.log("//////////////////////////////////////////////////////////")

/*----------------------------------------------------------------------------------------------------------------------------*/

// usando o for IN para mostrar o vetor em vertical {forma mais simplificada}
for (let casa in num){
    console.log(`A posição ${casa} tem o valor ${num[casa]}`)
}

/*----------------------------------------------------------------------------------------------------------------------------*/

