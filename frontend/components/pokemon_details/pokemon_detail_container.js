import { connect } from 'react-redux';
import { fetchDetail } from '../../actions/detail_actions';
import PokemonDetail from './pokemon_detail';

const mapDispatchToProps = (dispatch) => ({
  fetchDetail: (pokeId) => dispatch(fetchDetail(pokeId))
});

const mapStateToProps = (state) => ({
  pokemonDetail: state.pokemonDetail
});

export default connect(mapStateToProps,
      mapDispatchToProps)(PokemonDetail);
