import { combineReducers } from 'redux';
import pokemonReducer from './pokemon_reducer';
import detailReducer from './detail_reducer';
const rootReducer = combineReducers({
  pokemon: pokemonReducer,
  pokemonDetail: detailReducer
});

export default rootReducer;
