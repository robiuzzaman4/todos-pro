import { createSlice } from '@reduxjs/toolkit';

import { getTodos, setTodos } from '../../database/database';

// initial state for todos
const initialState = {
    todos: getTodos()
};

const todosSlice = createSlice({
    name: "todosSlice",
    initialState,
    reducers: {
        addTodo: (state, { payload }) => {
            // get data from payload
            const { title, description } = payload;

            // create dynamic id by time based
            const id = new Date().getTime();

            // new todo object
            const newTodo = {
                id,
                title,
                description,
            };

            // push newTodo to todos array
            state.todos.push(newTodo);

            // set todos in localStorage
            setTodos(state.todos);
        },
        deleteTodo: (state, { payload }) => {
            // get id from payload
            const { id } = payload;

            // set filtered remaining todos
            state.todos = state.todos?.filter((todo) => todo.id !== id);

            // set todos in localStorage
            setTodos(state.todos);
        },
        updateTodo: (state, { payload }) => {
            // get id, title, description from payload
            const { id, title, description } = payload;

            // find current todo
            const currentTodo = state.todos.find((todo) => todo.id === id);

            // check if current todo is existing then update todo
            if (currentTodo) {
                currentTodo.title = title;
                currentTodo.description = description;
            }

            // set todos in localStorage
            setTodos(state.todos);
        }
    }
})

// export todosSlice actions
export const { addTodo, deleteTodo, updateTodo } = todosSlice.actions;

// export todosSlice
export default todosSlice.reducer;