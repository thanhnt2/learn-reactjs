import React, { useEffect, useState, useMemo } from 'react';
import { useHistory, useLocation, useRouteMatch } from 'react-router';
import TodoList from '../../components/TodoList';
import queryString from 'query-string';
import TodoForm from '../../components/TodoForm';

ListPage.propTypes = {};

function ListPage(props) {
    const initTodoList = [
        {
            id: 1,
            title: 'Eat',
            status: 'new',
        },
        {
            id: 2,
            title: 'Code',
            status: 'completed',
        },
        {
            id: 3,
            title: 'Sleep',
            status: 'new',
        },
    ]

    const location = useLocation();
    const history = useHistory();
    const match = useRouteMatch();

    const [todoList, setTodoList] = useState(initTodoList);
    const [filteredStatus, setFilteredStatus] = useState(() => {
        const params = queryString.parse(location.search);
        console.log(params);

        return params.status || 'all';
    });

    useEffect(() => {
        const params = queryString.parse(location.search);
        setFilteredStatus(params.status || 'all');
    }, [location.search]);

    const handleTodoClick = (todo, idx) => {
        // clone current array to the new one
        const newTodoList = [...todoList];
        // toggle state
        const newTodo = {
            ...newTodoList[idx],
            status: newTodoList[idx].status === 'new' ? 'completed' : 'new',
        }

        newTodoList[idx] = newTodo;
        // update todo list
        setTodoList(newTodoList);
    }

    const handleShowAll = () => {
        // setFilteredStatus('all');
        const queryParams = { status: 'all' };
        history.push({
            pathname: match.path,
            search: queryString.stringify(queryParams),
        });
    }

    const handleShowCompleted = () => {
        // setFilteredStatus('completed');
        const queryParams = { status: 'completed' };
        history.push({
            pathname: match.path,
            search: queryString.stringify(queryParams),
        });
    }

    const handleShowNew = () => {
        // setFilteredStatus('new');
        const queryParams = { status: 'new' };
        history.push({
            pathname: match.path,
            search: queryString.stringify(queryParams),
        });
    }

    const filterTodoList = useMemo(() => {
        return todoList.filter(todo => filteredStatus === 'all' || filteredStatus === todo.status);
    }, [todoList, filteredStatus]);

    const handleTodoFormSubmit = (values) => {
        console.log('Form submit: ', values);

     
        const newTodo = {
            id: todoList.length + 1,
            title: values.title,
            status:'new',
        }

        const newTodoList = [...todoList, newTodo];

        setTodoList(newTodoList);
    };

    return (
        <div>
            <h4>What to do</h4>
            <TodoForm onSubmit={handleTodoFormSubmit} />

            <h3>TodoList</h3>
            <TodoList todoList={filterTodoList} onTodoClick={handleTodoClick} />

            <div>
                <button onClick={handleShowAll}>Show All</button>
                <button onClick={handleShowCompleted}>Show Completed</button>
                <button onClick={handleShowNew}>Show New</button>
            </div>
        </div>
    );
}

export default ListPage;