
export default (state="", action) => {
    if(action.type === "CHANGE_VALUE"){
        return action.payload;
    }
    return state;
}