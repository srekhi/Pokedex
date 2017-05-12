import {values} from 'lodash';

export const selectAllPokemon = (state) => {
  return values(state.pokemon);
};

export const selectPokemonItem = (state, itemId) => {
  let matchingItem;
  state.pokemonDetail.items.forEach((item) => {
    if (item.id == itemId){
      matchingItem = item;
      return;
    }
  });
  return matchingItem;
};

window.selectPokemonItem = selectPokemonItem;
