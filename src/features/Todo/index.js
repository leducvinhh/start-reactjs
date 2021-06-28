import React, { useState } from 'react';
import TodoList from './components/TodoList';

const TodoFeature = () => {
    const defaultTodoList = [
        {
            id: 1,
            title: 'Play video games',
        },
        {
            id: 2,
            title: 'Play football',
        },
        {
            id: 3,
            title: 'Work from home',
        },
    ];
    const [todoList, setTodoList] = useState(defaultTodoList);
    return (
        <div>
            <h3>Todo List</h3>
            <TodoList todoList={todoList} />
        </div>
    );
};

export default TodoFeature;
