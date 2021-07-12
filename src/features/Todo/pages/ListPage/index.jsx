import queryString from 'query-string';
import React, { useEffect, useState } from 'react';
import { useHistory, useLocation, useRouteMatch } from 'react-router-dom';
import TodoForm from '../../components/TodoForm';
import TodoList from '../../components/TodoList';

const ListPage = () => {
    const location = useLocation();
    const history = useHistory();
    const match = useRouteMatch();
    const [filterStatus, setFilterStatus] = useState(() => {
        const params = queryString.parse(location.search);
        return params.status || 'all';
    });
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

    useEffect(() => {
        const params = queryString.parse(location.search);
        setFilterStatus(params.status || 'all');
    }, [location.search]);

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
        const params = { status: 'all' };
        history.push({
            pathname: match.path,
            search: queryString.stringify(params),
        });
    };

    //Show new Todo
    const handleShowNew = () => {
        const params = { status: 'new' };
        history.push({
            pathname: match.path,
            search: queryString.stringify(params),
        });
    };

    //Show completed todo
    const handleShowCompleted = () => {
        const params = { status: 'completed' };
        history.push({
            pathname: match.path,
            search: queryString.stringify(params),
        });
    };

    const renderTodoList = todoList.filter((todo) => filterStatus === 'all' || filterStatus === todo.status);

    const handleTodoFormSubmit = (values) => {
        const newValues = {
            id: todoList.length + 1,
            title: values.title,
            status: 'new',
        };
        setTodoList([...todoList, newValues]);
    };

    return (
        <div>
            <h2>Todo Form</h2>
            <TodoForm onSubmit={handleTodoFormSubmit} />
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
