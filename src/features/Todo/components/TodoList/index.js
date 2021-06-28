import React from 'react';
import PropTypes from 'prop-types';
import './style.scss';
import classnames from 'classnames';

TodoList.propTypes = {
    todoList: PropTypes.array,
};

TodoList.defaultProps = {
    todoList: [],
};

function TodoList({ todoList, onTodoClick }) {
    return (
        <ul className="todo-list">
            {todoList.map((todo, index) => {
                return (
                    <li
                        key={todo.id}
                        className={classnames({
                            'todo-item': true,
                            completed: todo.status === 'completed',
                        })}
                        onClick={() => onTodoClick(todo.id)}
                    >
                        {todo.title}
                    </li>
                );
            })}
        </ul>
    );
}

export default TodoList;
