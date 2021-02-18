class Builder {
    setName(name) {
        this.name = name;
        return this;
    }

    setMovs(moves) {
        this.moves = moves;
        return this;
    }

    setTypes(types) {
        this.types = types;
        return this;
    }

    getPokemon() {
        return JSON.stringify(this);
    }
}

class PokemonBuilder extends Builder {
    constructor() {
        super();
    }

    setName() {
        super.setName('chimchar');
        return this;
    }

    setMovs() {
        super.setMovs([
            { dmg: 40, name: 'scratch', color: 'grey', type: 'normal' },
            { dmg: 60, name: 'ember', color: 'red', type: 'fire' },
            { dmg: 70, name: 'facade', color: 'grey', type: 'normal' },
        ]);
        return this;
    }

    setTypes() {
        super.setTypes([
            { name: 'fire', color: 'red' }
        ]);
        return this;
    }
}

class PokemonWithStateBuilder extends Builder {
    constructor(state) {
        super();
        this.setState(state);
    }

    setState(state = 'SLP') {
        this.state = state;
        return this;
    }

    setName() {
        super.setName('turtwig');
        return this;
    }

    setMovs() {
        super.setMovs([
            { dmg: 45, name: 'tackle', color: 'grey', type: 'normal' },
            { dmg: 55, name: 'absorb', color: 'green', type: 'grass' },
        ]);
        return this;
    }

    setTypes() {
        super.setTypes([
            { name: 'grass', color: 'green' }
        ]);
        return this;
    }
}

class PokemonWithObjectBuilder extends Builder {
    constructor(object) {
        super();
        this.setObject(object);
    }

    setObject(object = 'choice scarf') {
        this.object = object;
        return this;
    }

    setName() {
        super.setName('piplup');
        return this;
    }

    setMovs() {
        super.setMovs([
            { dmg: 40, name: 'pound', color: 'grey', type: 'normal' },
            { dmg: 65, name: 'bubble', color: 'blue', type: 'water' },
        ]);
        return this;
    }

    setTypes() {
        super.setTypes([
            { name: 'water', color: 'blue' }
        ]);
        return this;
    }
}

class Pokeball {
    setPokemonBuilder(builder) {
        this.builder = builder;
    }

    getPokemon() {
        return JSON.parse(this.builder.getPokemon());
    }

    buildPokemon() {
        this.builder.setName().setMovs().setTypes();
    }
}

/* MAIN */
let _pokeball = new Pokeball();

let starters = {
    chimchar: new PokemonBuilder(),
    piplup: new PokemonWithObjectBuilder(),
    turtwig: new PokemonWithStateBuilder(),
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
        pokemon = _pokeball.getPokemon();

        document.getElementById("name").innerHTML = pokemon.name.toUpperCase();
        let card = document.querySelector(".card-attack");
        card.remove();
        card = document.querySelector("#stats");
        card.innerHTML = `<h5 id="name" class="card-title" style="margin-bottom: 2px;">${pokemon.name.toUpperCase()}`;
        pokemon.types.forEach(type => {
            card.innerHTML += `<span class="badge badge-pill badge-danger" style="background-color: ${type.color}; font-size: 170%;">${type.name}</span>`;
        });
        if (pokemon.state) {
            card.innerHTML += `<span 
                                    class="badge badge-secondary" 
                                    style="font-size: 170%; border-radius: 20px; border-style: groove; border-color: white; cursor: pointer;"
                                    title="${"SLEEPING...zzZZZ"}"
                                >${pokemon.state}
                                </span>`;
        }
        if (pokemon.object) {
            card.innerHTML += `<span 
                                    class="badge badge-info" 
                                    style="font-size: 170%; border-radius: 20px; border-style: groove; border-color: white; cursor: pointer;"
                                    title="WITH ${pokemon.object.toUpperCase()}"
                                >${"OBJ"}
                                </span>`;
        }
        card.innerHTML += '</h5>';
        pokemon.moves.forEach(move => {
            card.innerHTML += `
                <div 
                    class="card-attack" 
                    style="background-color: light${move.color == 'red' ? 'salmon' : move.color}; box-shadow: 0 0 3px 3px light${move.color == 'red' ? 'salmon' : move.color};"
                >
                    <div class="row">
                        <div class="col col-6">
                            <h5 class="attack-points">${move.dmg}</h5>
                        </div>
                        <div class="col col-6">
                            <h5 class="attack-name">${move.name.toUpperCase()}</h5>
                            <span class="badge badge-pill badge-danger" style="background-color: ${move.color}; font-size: 110%;">${move.type}</span>
                        </div>
                    </div>
                </div>
            `;
        });

    });
});