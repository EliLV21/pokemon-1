var pokemones = [];

function Pokemon(nombre, color, puntosAtaque){
    this.nombre = nombre;
    this.color = color;
    this.nivelVida = 100;
    this.puntosAtaque = puntosAtaque;
   
}
function nuevoPokemon(){
    var nombrePokemon = document.getElementById("nombrePokemon");
    var colorPokemon = document.getElementById("colorPokemon");
    var puntosAtaque = document.getElementById("puntosAtaque");
    
    var pokemon = new Pokemon(nombrePokemon.value,
                              colorPokemon.value,
                              parseInt(puntosAtaque.value));
    pokemones.push(pokemon);
    console.log(pokemones);
    
}

