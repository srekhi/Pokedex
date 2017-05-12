import React from 'react';
import ItemDetailContainer from './item_details/item_detail_container';
import { Link, Route } from 'react-router-dom';

class PokemonDetail extends React.Component {
  constructor(props){
    super(props);
    this.details = {items: []};
  }

  componentDidMount() {
    this.props.fetchDetail(this.props.match.params.pokemonId);
  }

  componentWillReceiveProps(newProps){
    if (newProps.match.params.pokemonId !== this.props.match.params.pokemonId) {
      this.props.fetchDetail(newProps.match.params.pokemonId);
    }
  }

  render(){
    this.details = this.props.pokemonDetail;
    if (this.details.items === undefined) {
      return (<div></div>);
    }
    return (
    <section>
      <ul>
        <li>{this.details.name}</li>
        <li>{this.details.attack}</li>
        <li> Defense:
          {this.details.defense}
        </li>
        <li>{this.details.moves}</li>
      </ul>

      <ul>
        { this.details.items.map((item) =>
           (
            <li key={item.id}>
              <Link to={`/pokemon/${this.details.id}/items/${item.id}`}><img src={item.image_url} /></Link>
              <Route exact path='/pokemon/:id/items/:itemId' component={ItemDetailContainer} />
            </li>
          ))
        }
      </ul>
    </section>
    );
  }
}

export default PokemonDetail;
