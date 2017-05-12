import React from 'react';
import { Link } from 'react-router-dom';

class PokemonIndexItem extends React.Component {
  constructor(props) {
    super(props);
    this.poke = this.props.poke;

  }

  render(){
    return (<li>
      <Link to={`/pokemon/${this.poke.id}`}>
        <h1>{this.poke.name}</h1>
        <img src={this.poke.image_url} />
      </Link>
    </li>);
  }
}

export default PokemonIndexItem;
