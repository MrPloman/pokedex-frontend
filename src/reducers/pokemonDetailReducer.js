export const pokemonDetailReducer = (state = [], action) => {
    switch (action.type) {
        case "UPDATE_POKEMON_DETAIL":
            console.log(action.payload);
            state = [...state, action.payload];
            state.sort((a, b) => a.id - b.id);
            console.log(state);
            return state;
            break;
        case "GET_NAME_POKEMON_DETAIL":
            state = [action.payload];
            return state;
            break;
        case "GET_NUMBER_POKEMON_DETAIL":
            state = [action.payload];
            return state;
            break;
        case "CLEAR_POKEMON_DETAIL":
            console.log(action.payload);
            state = [];
            return state;
            break;

        default:
            return state;
    }
};