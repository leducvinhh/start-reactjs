import React, { useEffect, useState } from 'react';
import { useHistory, useLocation, useRouteMatch } from 'react-router-dom';
import TodoList from '../../components/TodoList';
import queryString from 'query-string';

const ListPage = () => {
    const [filterStatus, setFilterStatus] = useState('all');
    const defaultTodoList = [
        {
            id: 1,
            title: 'Play video games',
            status: 'new',
        },
        {
            id: 2,
            title: 'Play football',
            status: 'new',
        },
        {
            id: 3,
            title: 'Work from home',
            status: 'new',
        },
    ];

    const [todoList, setTodoList] = useState(defaultTodoList);

    const handleTodoClick = (id) => {
        setTodoList(
            todoList.map((todo) =>
                todo.id === id ? { ...todo, status: todo.status === 'new' ? 'completed' : 'new' } : todo
            )
        );
    };

    //Show all todo
    const handleShowAll = () => {
        setFilterStatus('all');
    };

    //Show new Todo
    const handleShowNew = () => {
        setFilterStatus('new');
    };

    //Show completed todo
    const handleShowCompleted = () => {
        setFilterStatus('completed');
    };

    const renderTodoList = todoList.filter((todo) => filterStatus === 'all' || filterStatus === todo.status);
    return (
        <div>
            <h3 className="todo-title">Todo List</h3>
            {renderTodoList.length > 0 ? (
                <TodoList onTodoClick={handleTodoClick} todoList={renderTodoList} />
            ) : (
                <p>No Todo To Show</p>
            )}
            <div className="btn-list">
                <button onClick={handleShowAll}>Show All</button>
                <button onClick={handleShowNew}>Show New</button>
                <button onClick={handleShowCompleted}>Show Completed</button>
            </div>
        </div>
    );
};

export default ListPage;
