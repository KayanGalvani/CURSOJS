function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.querySelector('div#res')

    if (fano.value.length == 0 || Number(fano.value) > ano) {
        alert("[ERRO] Verifique os dados e tente novamente! ")
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked) {
            genero = 'homem'
            if (idade >= 0 && idade < 12) {
                //Criança
                img.setAttribute('src', 'PX/homemCrianca.png')
            } else if (idade < 24) {
                //Jovem
                img.setAttribute('src', 'PX/homemJovem.png')

            } else if (idade < 55) {
                //Adulto
                img.setAttribute('src', 'PX/homemAdulto.png')
            } else {
                //Idoso
                img.setAttribute('src', 'PX/homemVelho.png')

            }

        } else if (fsex[1].checked) {
            genero = 'mulher'
            if (idade >= 0 && idade < 12) {
                //Criança
                img.setAttribute('src', 'PX/mulherCrianca.png')
            } else if (idade < 24) {
                //Jovem
                img.setAttribute('src', 'PX/mulherJovem.png')
            } else if (idade < 55) {
                //Adulto
                img.setAttribute('src', 'PX/mulherAdulta.png')
            } else {
                //Idoso 
                img.setAttribute('src', 'PX/mulherVelha.png')
            }
        }
        res.style.textAlign = 'center' //CENTRALIZAR
        res.innerHTML = `Detectamos ${genero} com ${idade} anos`
        res.appendChild(img)
    }
}




