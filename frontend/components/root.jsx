import React from 'react';
import { Provider } from 'react-redux';
import PokemonIndexContainer from './pokemon/pokemon_index_container';
import PokemonDetailContainer from './pokemon_details/pokemon_detail_container';
import { HashRouter, Route } from 'react-router-dom';
import PokemonFormContainer from './pokemon_form/pokemon_form_container';

const Root = ({ store }) => (
  <Provider store={store}>
    <HashRouter>
      <div>
        <Route path="/" component={ PokemonIndexContainer } />
        <Route exact path='/' component={ PokemonFormContainer } />
      </div>
    </HashRouter>
  </Provider>
);

export default Root;
