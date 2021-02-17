// "use strict";
/*
    PRODUCT
*/
class Pokemon { }
/*
    ABSTRACT BUILDER -- SPECIFIC BUILDER(S)
*/
class PokemonBuilder {
    getPokemon() {
        return this._pokemon;
    }
}
class DragoniteBuilder extends PokemonBuilder {
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
        this._pokemon.specialAttack = 95;
    }
    buildSpecialDefense() {
        this._pokemon.specialDefense = 85;
    }
    buildSpeed() {
        this._pokemon.speed = 110;
    }
}
class GardevoirBuilder extends PokemonBuilder {
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
        this._pokemon.specialAttack = 125;
    }
    buildSpecialDefense() {
        this._pokemon.specialDefense = 115;
    }
    buildSpeed() {
        this._pokemon.speed = 80;
    }
}
class LucarioBuilder extends PokemonBuilder {
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
        this._pokemon.specialAttack = 115;
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
    setPokemonBuilder(newPokemonBuilder) {
        this._pokemonBuilder = newPokemonBuilder;
    }
    getPokemon() {
        return this._pokemonBuilder.getPokemon();
    }
    buildPokemon() {
        this._pokemonBuilder.buildHP();
        this._pokemonBuilder.buildAttack();
        this._pokemonBuilder.buildDefense();
        this._pokemonBuilder.buildSpecialAttack();
        this._pokemonBuilder.buildSpecialDefense();
        this._pokemonBuilder.buildSpeed();
    }
}

/* MAIN */
let pokeball = new Pokeball();

let lucario = new LucarioBuilder();
let dragonite = new DragoniteBuilder();
let gardevoir = new GardevoirBuilder();


const color = stat => {
    if (stat > 89) return 'blue';
    if (stat > 59) return 'green';
    if (stat > 49) return 'orange';
    if (stat > 39) return 'orange';
    return 'red';
}
const choosePokemon = (pokemonBuilder, pokemonID) => {
    pokeball.setPokemonBuilder(pokemonBuilder);
    pokeball.buildPokemon();

    let pokemon = pokeball.getPokemon();
    let div = document.querySelector(pokemonID).querySelector(".stats");
    if (div.childNodes.length < 6) {
        for (const k in pokemon) {
            div.innerHTML += `
                <H3>${k.toUpperCase()}</H3>
                <div class="w3-light-grey">
                    <div 
                        style="width:${pokemon[k] > 100 ? 100 : pokemon[k]}%"
                        class="w3-container w3-${color(pokemon[k])} w3-center" 
                    >${pokemon[k]}</div>
                </div><br>
            `;
        }
    }

    return pokemon;
}

Object.values(document.getElementsByTagName("button")).forEach(button => {
    button.addEventListener("click", _ => {
        let pokemonID = button.dataset.bsTarget;

        if (pokemonID === "#dragonite") {
            choosePokemon(dragonite, pokemonID);
        } else if (pokemonID === "#gardevoir") {
            choosePokemon(gardevoir, pokemonID);
        } else if (pokemonID === "#lucario") {
            choosePokemon(lucario, pokemonID);
        }
    });
});

document.getElementById("dragonite-tab").click();