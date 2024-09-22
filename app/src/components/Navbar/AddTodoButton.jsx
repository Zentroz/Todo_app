import React, { useState } from 'react'
import AddTodoInput from './AddTodoInput'

const AddTodoButton = () => {
  const [visible, setVisible] = useState(false);

  const OnClick = () => {
    setVisible(v => !v);
  }
  return (
    <>
      <button className='add-task-button absolute top-1 left-1 bg-blue-200 w-8 h-8 text-center rounded-lg' onClick={OnClick}>+</button>
      <AddTodoInput visible={visible} setVisible={setVisible} />
    </>
  )
}

export default AddTodoButton