import React from 'react';

class PokemonForm extends React.Component {
  constructor(props) {
    super(props);
    this.poke = this.props.poke;
    this.createPokemon = this.createPokemon.bind(this);
    this.update = this.update.bind(this);
    this.state = {
      pokemon: {
        name: "",
        image_url: "",
        poke_type: "",
        attack: "",
        defense: "",
        moves: ""
      }
    };
    this.pokeTypes = [
      "fire",
      "electric",
      "normal",
      "ghost",
      "psychic",
      "water",
      "bug",
      "dragon",
      "grass",
      "fighting",
      "ice",
      "flying",
      "poison",
      "ground",
      "rock",
      "steel"
    ];
  }

  update(property) { //TODO: when to use arrays???????????????????????????????????????????????????

     return (e) => {
       return this.setState({[property]: e.target.value
       });
     };
   }

  createPokemon(e){
    e.preventDefault();
    this.props.createPokemon(this.state);
  }

  render(){
    return (
      <form>
        <input onChange={this.update('name')}/>
        <input onChange={this.update('image_url')}/>
        <select
          value={this.state.poke_type}
          defaultValue="Select Pokemon Type"
          onChange={this.update('poke_type')}>
          {this.pokeTypes.map((pokeType, index) => (
            <option value={pokeType} key={index}>{pokeType}</option>
          ))}
        </select>
        <input onChange={this.update('attack')}/>
        <input onChange={this.update('defense')}/>
        <input onChange={this.update('moves')}/>
        <button onClick={this.createPokemon}>Create Pokemon</button>
      </form>
    );
  }
}

export default PokemonForm;
