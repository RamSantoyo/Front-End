document.addEventListener('DOMContentLoaded', function(){

})

function buscar(){
           
    const nombre = document.getElementById("pokname");    
    let name = nombre.value.toLowerCase();
    let card = document.querySelector('.card');
    let card_g = document.querySelector('.crd-mv');
    let esta = document.getElementById("esta");
    let movi = document.getElementById("movi");
    card.className = "card";
    card_g.className = "card crd-mv";
    
    if (esta.hasChildNodes()){
        while (esta.childNodes.length >= 1){
            esta.removeChild(esta.firstChild );
        }
    }
    
    if (movi.hasChildNodes()){
        while (movi.childNodes.length >= 1){
            movi.removeChild(movi.firstChild );
        }
    } 

    if(!name){
        let error = `recursos/error.png`;
        const imgen = document.querySelector('.img-bola');
        imgen.src = error;       
    }else{                
        consultarpokemon(name);
        name.placeholder = "";
    } 
}


function consultarpokemon(name){

    const url = `https://pokeapi.co/api/v2/pokemon/${name}`;
    let error = `recursos/error.png`;
    let imgen = document.getElementById("pokimg");
    let titulo = document.getElementById("titulo");
    let tipo = document.querySelector('.title');
    let sta = document.querySelector('.sta');
    let tipe = document.getElementById("tipo");
    const imgenbol = document.querySelector('.img-bola');

    fetch(url).then((res) => {

    if(res.status != 200){        
        imgenbol.src = error;   
        titulo.innerHTML = "error";
        tipo.innerHTML = "";
        tipe.innerHTML = "";
        sta.innerHTML = "";
        imgen.src = error;        
    }else{
        if(sta.innerHTML == ""){
            tipo.innerHTML = "tipo";
            sta.innerHTML = "estadisticas";
        }       
        return res.json();
    }

    }).then((data) => {
        console.log(data)
        let img = data.sprites.other.home.front_shiny;
        let title = data.name;
        let tipe = data.types;
        let esta = data.stats;
        let move = data.moves;        
        remplazar(img, title, tipe, esta, move);
    })
     
}

function remplazar(img, title, tipe, esta, move){   
    const imgen = document.getElementById("pokimg");
    const titulo = document.getElementById("titulo");
    const tipo = document.getElementById("tipo");
    const estadistica = document.getElementById("esta");
    const movimiento = document.getElementById("movi");
    let bola = document.querySelector('.img-bola');
    let tarjetas = document.querySelector('.cards');
    let tarjeta = document.querySelector('.card');
    let tarjeta_g = document.querySelector('.crd-mv');
    bola.classList.add('none');
    tarjetas.classList.add('block');      

    imgen.src = img;

    titulo.innerHTML = title;
    
    tipe.forEach( function(tip) {
        tarjeta.classList.add(tip.type.name);
        tarjeta_g.classList.add(tip.type.name);
        tipo.innerHTML = tip.type.name;
    })

    esta.forEach( function(sta) {       
        const td = document.createElement('LI');
        td.id = 'li';     
        td.innerHTML = sta.stat.name + " " + sta.base_stat + "%";                
        estadistica.appendChild(td);
    })
    
    move.forEach( function(movi) {
        const td = document.createElement('LI');
        td.innerHTML = movi.move.name;
        movimiento.appendChild(td);
    })
    
}
