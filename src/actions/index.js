import postAPI from "../apis/postAPI"

export const fetchTodos = () => {
    return async (dispatch) => {
        const { data } = await postAPI.get("/todos");
        dispatch({
            type : "FETCH_TODOS",
            payload : data
        })
    }
}

export const postTodo = (todoValue) => {
    return async (dispatch) => {
        const { data } = await postAPI.post("/todos", todoValue);
        dispatch({
            type : "POST_TODO",
            payload : data
        })
    }
}

export const deleteTodo = (id) => {
    return async (dispatch) => {
        await postAPI.delete(`/todos/${id}`);
        dispatch({
            type : "DELETE_TODO",
            payload : id
        })
    }
}

export const changeInputValue = (value) => {
    return {
        type : "CHANGE_VALUE",
        payload : value
    }
}