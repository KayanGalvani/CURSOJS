function tabuada(){

    var num = document.getElementById("txtn")
    var tab = document.getElementById("selftab")

    if (num.value.length == 0){
        window.alert("[ERRO] Por favor digite um numero ")
    }else{
        let n = Number(num.value)
        let c = 1
        tab.innerHTML = ''
        while(c <= 10){
            let item = document.createElement('option')
            item.text = `${n} x ${c} = ${n*c}`
            item.value = `tab${c}`
            tab.appendChild(item)
            c++
        }
    }
}   