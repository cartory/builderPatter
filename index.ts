// /* 
//     PRODUCT
// */
// class Pokemon {
//     hp: number;   
//     attack: number;   
//     defense: number;   
//     specialAtack: number;   
//     specialDefense: number;   
//     speed: number;
// }

// /* 
//     ABSTRACT BUILDER -- SPECIFIC BUILDER(S)
// */

// abstract class PokemonBuilder {
//     protected _pokemon: Pokemon;

//     public getPokemon(): Pokemon {
//         return this._pokemon;
//     }

//     public abstract buildHP(): void;
//     public abstract buildAttack(): void;
//     public abstract buildDefense(): void;
//     public abstract buildSpecialAttack(): void;
//     public abstract buildSpecialDefense(): void;
//     public abstract buildSpeed(): void;
// }

// class ChimcharBuilder extends PokemonBuilder {
//     constructor() {
//         super();
//         this._pokemon = new Pokemon();
//     }

//     public buildHP(): void {
//         this._pokemon.hp = 60;
//     }
//     public buildAttack(): void {
//         this._pokemon.attack = 85;
//     }
//     public buildDefense(): void {
//         this._pokemon.defense = 50;
//     }
//     public buildSpecialAttack(): void {
//         this._pokemon.specialAtack = 95;
//     }
//     public buildSpecialDefense(): void {
//         this._pokemon.specialDefense = 85;
//     }
//     public buildSpeed(): void {
//         this._pokemon.speed = 110;
//     }
// }

// class PiplupBuilder extends PokemonBuilder {
//     constructor() {
//         super();
//         this._pokemon = new Pokemon();
//     }

//     public buildHP(): void {
//         this._pokemon.hp = 68;
//     }
//     public buildAttack(): void {
//         this._pokemon.attack = 65;
//     }
//     public buildDefense(): void {
//         this._pokemon.defense = 65;
//     }
//     public buildSpecialAttack(): void {
//         this._pokemon.specialAtack = 125;
//     }
//     public buildSpecialDefense(): void {
//         this._pokemon.specialDefense = 115;
//     }
//     public buildSpeed(): void {
//         this._pokemon.speed = 80;
//     }
// }

// class TurtwigBuilder extends PokemonBuilder {
//     constructor() {
//         super();
//         this._pokemon = new Pokemon();
//     }

//     public buildHP(): void {
//         this._pokemon.hp = 70;
//     }
//     public buildAttack(): void {
//         this._pokemon.attack = 110;
//     }
//     public buildDefense(): void {
//         this._pokemon.defense = 70;
//     }
//     public buildSpecialAttack(): void {
//         this._pokemon.specialAtack = 115;
//     }
//     public buildSpecialDefense(): void {
//         this._pokemon.specialDefense = 70;
//     }
//     public buildSpeed(): void {
//         this._pokemon.speed = 90;
//     }
// }

// /* 
//     DIRECTOR
// */

// class Pokeball {
//     private _pokemonBuilder: PokemonBuilder;

//     public set pokemonBuilder(newPokemonBuilder: PokemonBuilder) {
//         this._pokemonBuilder = newPokemonBuilder;
//     }

//     public get pokemon(): Pokemon {
//         return this._pokemonBuilder.getPokemon();
//     }

//     public buildPokemon(): void {
//         this._pokemonBuilder.buildHP();
//         this._pokemonBuilder.buildAttack;
//         this._pokemonBuilder.buildDefense();
//         this._pokemonBuilder.buildSpecialAttack();
//         this._pokemonBuilder.buildSpecialDefense();
//         this._pokemonBuilder.buildSpeed();
//     }
// }