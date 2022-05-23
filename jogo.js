var vidas = 1
var altura = 0
var largura = 0
var tempo = 30
var criaMoscaTempo = 1500

var nivel = window.location.search
nivel = nivel.replace('?', '')

if (nivel === 'normal'){
    criaMoscaTempo = 1500
} else if (nivel === 'dificil'){
    criaMoscaTempo = 100
} else if (nivel === 'nemfodendo'){
    criaMoscaTempo = 750
}

function ajustaTamanho(){
    altura = window.innerHeight
    largura = window.innerWidth
    //console.log(altura, largura)
}

ajustaTamanho()

var cronometro = setInterval(function(){document.getElementById('tempo').innerHTML = tempo
 tempo -= 1
 if (tempo < 0){
     clearInterval(cronometro)
     window.location.href = 'vitoria.html'
 }

},1000)



function posicaoRandom(){

    

    if (document.getElementById('mosca')){
        document.getElementById('mosca').remove()
        
        if (vidas > 3){
           window.location.href = 'fim_jogo.html'
        }

        document.getElementById('v'+ vidas).src = "imagens/coracao_vazio.png"
        vidas++
    }

    var posicaioY = (Math.floor(Math.random() * altura) - 100)
    var posicaioX =  (Math.floor(Math.random() * largura) - 100)
    if (posicaioX > 1000){
        posicaioX = posicaioX - 100
    }
    if (posicaioY > 1400){
        posicaioY = posicaioY - 300
    }

    posicaioX = posicaioX < 0 ? 0 : posicaioX
    posicaioY = posicaioY < 0 ? 0 : posicaioY

    console.log(posicaioY, posicaioX)

    //Criar elemento HTML

    var mosca = document.createElement('img')
    mosca.src = 'imagens/mosca.png'
    mosca.className = tamanhoaleatorio() + ' ' + ladoAleatorio()
    mosca.style.left = posicaioX + 'px'
    mosca.style.top = posicaioY + 'px'
    mosca.style.position = 'absolute'
    mosca.id = 'mosca'
    mosca.onclick = function(){
        this.remove()
    }
    document.body.appendChild(mosca)
    
    
}



function tamanhoaleatorio(){
    var tamanho = Math.floor(Math.random() * 3)
    switch(tamanho){
        case 0:
            return 'mosca1'
        case 1: 
            return 'mosca2'
        case 2: 
            return 'mosca3'
    }
}


function ladoAleatorio(){
    var tamanho = Math.floor(Math.random() * 2)
    switch(tamanho){
        case 0: 
            return 'lado1'
        case 1: 
            return 'lado2'
    }
}
