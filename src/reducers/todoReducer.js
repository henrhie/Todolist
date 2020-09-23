import _ from "lodash"

export default (state={}, action) => {
    switch(action.type){
        case "FETCH_TODOS":
            return { ...state,  ..._.mapKeys(action.payload, "id")};
        case "POST_TODO":
            return { ...state, [action.payload.id] : action.payload};
        case "DELETE_TODO":
            return _.omit(state, [action.payload])
        default:
            return state;
    }
}