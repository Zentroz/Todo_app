import React from 'react'

const TodoDetails = ({ targetTime, description }) => {
  return (
    <div className={`task-detail absolute bg-blue-200 p-2 w-52 max-w-52 rounded-lg`}>
      <div className='flex flex-col'>
        <div className='flex'>
          <h1 className='font-bold pr-8'>Target Time:</h1>
          <p>{targetTime}</p>
        </div>
        {/* <div className='flex flex-col'>
          <h1 className='font-bold'>Description</h1>
          <div className='whitespace-normal break-words'>
            {description}
          </div>
        </div> */}
      </div>
    </div>
  )
}

export default TodoDetails