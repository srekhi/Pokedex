export const RECEIVE_DETAIL = 'RECEIVE_DETAIL';
import * as APIUtil from '../util/api_util';

export const receiveDetail = (pokemonDetail) => (
  {
    type: RECEIVE_DETAIL,
    pokemonDetail
  }
);

export const fetchDetail = (pokeId) => (dispatch) => (
  APIUtil.fetchDetail(pokeId).
    then((pokemonDetail) => dispatch(receiveDetail(pokemonDetail)))
);
//action(dispatch)
