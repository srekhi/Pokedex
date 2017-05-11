import React from 'react';
class PokemonIndex extends React.Component {
  constructor(props){
    super(props);
  }

  componentDidMount(){
    this.props.requestAllPokemon();
  }

  render(){
    return(
      <ul>
        {
          this.props.pokemon.map( (poke) => {
            return (
              <li>
                <h1>{poke.name}</h1>
                <img src={poke.image_url} />
              </li>
            );
          }
        )
      }
      </ul>
    );
  }
}

export default PokemonIndex;
