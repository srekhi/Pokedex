export const fetchAllPokemon = () => (
  $.ajax({
    method: "GET",
    url: "/api/pokemon"
  })
);

export const fetchDetail = (pokeId) => (
  $.ajax({
    method: 'GET',
    url: `/api/pokemon/${pokeId}`
  })
);

export const createPokemon = (pokemon) => {
  debugger;
  return $.ajax({
    method: 'POST',
    url: '/api/pokemon',
    data: pokemon
  });
};
