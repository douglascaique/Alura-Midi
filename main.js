function tocaSom (idAudio) {

    document.querySelector(idAudio).play();
}




// referencias, usadas com base no valor que vao receber e no que devem guardar 
const listaDeTeclas = document.querySelectorAll('.tecla');

let contador = 0;

while(contador < listaDeTeclas.length){

    const tecla = listaDeTeclas[contador];

    const instrumento = tecla.classList[1];
    
    console.log(instrumento);

    const idAudio = `#som_${instrumento}`;
    console.log(idAudio);


    
    tecla.onclick = function(){
        tocaSom(idAudio);
    }

    contador++;

    console.log(contador);
}


