function tocaSom (seletorAudio) {

    const elemento = document.querySelector(seletorAudio);

    if (elemento && elemento.localName === 'audio') {
        elemento.play();
        //alert('Elemento não encontrado!');
    } else {
        alert('Elemento não encontrado!');
    }
}



// referencias, usadas com base no valor que vao receber e no que devem guardar 
const listaDeTeclas = document.querySelectorAll('.tecla');

//para
for (let contador = 0; contador < listaDeTeclas.length; contador++){

    const tecla = listaDeTeclas[contador];
    const instrumento = tecla.classList[1];
    const idAudio = `#som_${instrumento}`;
    
    tecla.onclick = function(){
        tocaSom(idAudio);
    }

    tecla.onkeydown = function(evento){
       console.log(evento.code == 'Space')
       
        if (evento.code === 'Space' || evento.code === 'Enter') {
            tecla.classList.add('ativa'); 
        }
    }

    tecla.onkeyup = function () {
        tecla.classList.remove('ativa');
    }
}

