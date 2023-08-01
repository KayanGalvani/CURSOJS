function calcular(){
    var nasc = document.getElementById('nasc').value;
    var res = document.getElementById('res');
    if(nasc == 'Brasileiro'){
        res.innerText = `Você é brasileiro`;
    }else{
        res.innerText = `Você é estrangeiro`;
    }
}