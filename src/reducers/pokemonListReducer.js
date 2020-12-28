export const pokemonListReducer = (state = [], action) => {
    switch (action.type) {
        case "GET_ALL_POKEMONS":
            state = action.payload;
            return state;
            break;

        default:
            return state;
    }
};