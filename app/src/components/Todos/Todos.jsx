import React from 'react';
import { useSelector } from 'react-redux';
import Todo from './Todo';

const Todos = () => {
  const todos = useSelector(state => state.todos);

  return (
    <div className='todos-container'>
      {todos.map((todo) =>
        <Todo key={todo["_id"]} _id={todo["_id"]} taskName={todo["taskName"]} description={todo["description"]} status={todo["status"]} targetTime={todo["targetTime"]} />
      )}
    </div>
  )
};

export default Todos;