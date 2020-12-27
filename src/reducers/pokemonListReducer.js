export const pokemonListReducer = (state = [], action) => {
    switch (action.type) {
        case "UPDATE_POKEMON_MAIN_LIST":
            console.log(action.payload);
            state = action.payload;
            return state;
            break;

        default:
            return state;
    }
};