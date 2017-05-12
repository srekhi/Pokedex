import{ RECEIVE_DETAIL } from '../actions/detail_actions';

const DetailReducer = (state = {}, action) => {
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_DETAIL:
      return action.pokemonDetail;
    default:
      return state;
  }
};

export default DetailReducer;
