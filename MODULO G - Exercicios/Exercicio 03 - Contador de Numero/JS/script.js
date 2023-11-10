function contar (){
    let inicio = document.getElementById('txti')
    let final = document.getElementById('txtf')
    let passo = document.getElementById('txtp')
    let res = document.getElementById('resposta')

    if (inicio.value.length == 0  || final.value.length == 0 || passo.value.length == 0){
    window.alert('[ERRO] Está faltando preencher um campo')
    res.innerHTML = `Impossivel contar`
    }else{
        res.innerHTML = 'Contando: '
        let i = Number(inicio.value)
        let f = Number(final.value)
        let p = Number(passo.value)
        if (i < f){
        for(let c = i; c <= f; c += p){
            res.innerHTML += ` ${c} \u{1F449}`
        }
        res.innerHTML += ` \u{1F3C1}`
        }else{
            for(let c = i; c >= f; c-= p){
            res.innerHTML += ` ${c} \u{1F449}`
        }
        res.innerHTML += ` \u{1F3C1}`
             }
    }
}