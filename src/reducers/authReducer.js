export const authReducer = (state = {}, action) => {
    switch (action.type) {
        case "GET_TOKEN":
            return state;
        case "SET_TOKEN":
            state = action.payload;
            return state;
        case "REMOVE_TOKEN":
            state = "";
            return state;
        default:
            return state;
    }
};