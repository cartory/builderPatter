// "use strict";
/*
    PRODUCT
*/
class Pokemon {
}
/*
    ABSTRACT BUILDER -- SPECIFIC BUILDER(S)
*/
class PokemonBuilder {
    getPokemon() {
        return this._pokemon;
    }
}
class ChimcharBuilder extends PokemonBuilder {
    constructor() {
        super();
        this._pokemon = new Pokemon();
    }
    buildHP() {
        this._pokemon.hp = 60;
    }
    buildAttack() {
        this._pokemon.attack = 85;
    }
    buildDefense() {
        this._pokemon.defense = 50;
    }
    buildSpecialAttack() {
        this._pokemon.specialAtack = 95;
    }
    buildSpecialDefense() {
        this._pokemon.specialDefense = 85;
    }
    buildSpeed() {
        this._pokemon.speed = 110;
    }
}
class PiplupBuilder extends PokemonBuilder {
    constructor() {
        super();
        this._pokemon = new Pokemon();
    }
    buildHP() {
        this._pokemon.hp = 68;
    }
    buildAttack() {
        this._pokemon.attack = 65;
    }
    buildDefense() {
        this._pokemon.defense = 65;
    }
    buildSpecialAttack() {
        this._pokemon.specialAtack = 125;
    }
    buildSpecialDefense() {
        this._pokemon.specialDefense = 115;
    }
    buildSpeed() {
        this._pokemon.speed = 80;
    }
}
class TurtwigBuilder extends PokemonBuilder {
    constructor() {
        super();
        this._pokemon = new Pokemon();
    }
    buildHP() {
        this._pokemon.hp = 70;
    }
    buildAttack() {
        this._pokemon.attack = 110;
    }
    buildDefense() {
        this._pokemon.defense = 70;
    }
    buildSpecialAttack() {
        this._pokemon.specialAtack = 115;
    }
    buildSpecialDefense() {
        this._pokemon.specialDefense = 70;
    }
    buildSpeed() {
        this._pokemon.speed = 90;
    }
}
/*
    DIRECTOR
*/
class Pokeball {
    set pokemonBuilder(newPokemonBuilder) {
        this._pokemonBuilder = newPokemonBuilder;
    }
    get pokemon() {
        return this._pokemonBuilder.getPokemon();
    }
    buildPokemon() {
        this._pokemonBuilder.buildHP();
        this._pokemonBuilder.buildAttack;
        this._pokemonBuilder.buildDefense();
        this._pokemonBuilder.buildSpecialAttack();
        this._pokemonBuilder.buildSpecialDefense();
        this._pokemonBuilder.buildSpeed();
    }
}

/* MAIN */
let _pokeball = new Pokeball();

let starters = {
    chimchar: new ChimcharBuilder(),
    piplup: new PiplupBuilder(),
    turtwig: new TurtwigBuilder(),
}


const color = stat => {
    if (stat > 89) return 'blue';
    if (stat > 59) return  'green';
    if (stat > 49) return 'orange';
    if (stat > 39) return 'orange';
    return 'red';
}

document.querySelectorAll(".pokeball").forEach(pokeball => {
    pokeball.addEventListener("click", async _ => {
        let pokemon = pokeball.dataset.pokemon;
        let sound = document.getElementById('sound');
        
        sound.src = `./assets/${pokemon}.ogg`;
        document.getElementById("sprite").src = `./assets/${pokemon}.gif`;

        await sound.play();

        _pokeball.setPokemonBuilder(starters[pokemon]);
        _pokeball.buildPokemon();

        document.getElementById("name").innerHTML = pokemon.toUpperCase();

        pokemon = _pokeball.getPokemon();
        for (const key in pokemon) {
            let stat = document.getElementById(key);
            stat.innerHTML = pokemon[key];
            stat.style.width = `${pokemon[key] > 100 ? 100 : pokemon[key]}%`;

            let className = stat.className;
            let lastClass = className.substring(className.lastIndexOf(' '));
            stat.className = `${className.replace(lastClass, '')} w3-${color(pokemon[key])}`;

            document.getElementById(key).innerHTML = pokemon[key];
        }
    });
});