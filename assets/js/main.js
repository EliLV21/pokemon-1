var pokemones = [];
 var lista = document.createElement("ol");
function Pokemon(nombre, color, puntosAtaque){
    this.nombre = nombre;
    this.color = color;
    this.nivelVida = 100;
    this.puntosAtaque = puntosAtaque;
    this.batalla = function(pokemonObjeto){
        pokemonObjeto.vida = pokemonObjeto.vida - this.puntosAtaque
    }
   
}
function nuevoPokemon(){
    var nombrePokemon = document.getElementById("nombrePokemon");
    var colorPokemon = document.getElementById("colorPokemon");
    var puntosAtaque = document.getElementById("puntosAtaque");
   
    var pokemon = new Pokemon(nombrePokemon.value,
                              colorPokemon.value,
                              parseInt(puntosAtaque.value));
    pokemones.push(pokemon);
   console.log(pokemon.puntosAtaque)
    mostrarPokemons();
    mostrarNombre()
    
}
function mostrarPokemons(){
    var listaPokemons=document.getElementById("listaPokemon");
    var elemento = document.createElement("li");
    pokemones.forEach(function(pokemon){
        
        elemento.innerText ="Soy "+pokemon.nombre+", mi color es: "+pokemon.color+", mis puntos de ataque son: "+pokemon.puntosAtaque;
        lista.appendChild(elemento);
        console.log(lista)
    });
    listaPokemons.appendChild(lista);
}

function mostrarNombre(){
    var listaPokemon = document.getElementById("batallaPokemon");
    var elemento = document.createElement("option");
    pokemones.forEach(function(pokemon){
        
        elemento.text = pokemon.nombre;
        listaPokemon.add(elemento);
    });
    var listaPokemon2 = document.getElementById("batallaPokemon2");
    var elemento = document.createElement("option");
    pokemones.forEach(function(pokemon){
        
        elemento.text = pokemon.nombre;
        listaPokemon2.add(elemento);
    });
    
}
function batallaPokemon(){
    var pokemon1 = document.getElementById("batallaPokemon").selectedIndex;
    var pokemon2 = document.getElementById("batallaPokemon2").selectedIndex;
    if (pokemones[pokemon1].nombre != pokemones[pokemon2].nombre){
        pokemones[pokemon1].batalla(pokemones[pokemon2]);
        console.log(pokemones[pokemon1]);
        var resultado = document.getElementById("resultadoBatalla");
        resultado.innerText = pokemones[pokemon1].nombre + " ataco a "
                              + pokemones[pokemon2].nombre + " y "
                              + pokemones[pokemon2].nombre + " tiene "
                              + pokemones[pokemon2].vida + " de vida restante."
    } else {
        alert("no pueden pelear");
    }
    
}

/*var x = document.getElementById("mySelect");
    var option = document.createElement("option");
    option.text = "Kiwi";
    x.add(option);*/