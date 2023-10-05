function carregar () {
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    msg.innerHTML = `Agora São ${hora} horas.`

    if (hora >= 0 && hora < 12) {               //BOM DIA
        img.src= 'IMG/Manha.png'
        document.body.style.background = "#99b4d4"
    } else if (hora >= 12 && hora <= 18) {      //BOA TARDE 
        img.src= 'IMG/Tarde.png'
        document.body.style.background = "#cf9a72"
    }else{                                      //BOA NOITE
        img.src= 'IMG/Noite.png'
        document.body.style.background = "#523d5c"       
    }
    }