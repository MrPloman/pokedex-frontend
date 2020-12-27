export const pokemonDetailReducer = (state = {}, action) => {
    switch (action.type) {
        case "UPDATE_POKEMON_DETAIL":
            console.log(action.payload);
            state = action.payload;
            return state;
            break;

        default:
            return state;
    }
};