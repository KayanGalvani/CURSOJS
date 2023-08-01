// var velocidade = 28
// console.log(`A velociadade do seu carro é ${velocidade} `)

// if(velocidade > 60<30){
//     console.log(`Você utrapasso a velocidade permitida. Multado!`)
// }else(velocidade<60)
//     console.log(`Você passou a ${velocidade} KM/H você nao foi multado`)
function calcular(){
    var txtv = document.getElementById(`txtvel`)
    var res = document.getElementById(`res`)
    var vel = Number(txtv.value)
    res.innerHTML = `<p>Sua velocidade atual é de <strong>${vel} Km/h</strong> </p>`
    if(vel > 60)
        res.innerHTML += `<p>Você foi <strong>MULTADO</strong> por Passsar a ${vel} Km/H em uma via de 60 Km/H `
    res.innerHTML += `<p>Dirija sempre com cinto de segurança</p>`

}