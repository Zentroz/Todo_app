import React from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { addTodo } from '../../features/todoSlice';

const AddTodoInput = ({ visible, setVisible }) => {
  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const AddTodo = (data) => {
    const { taskName, description, targetTime } = data;
    const todo = {
      taskName,
      status: 0,
      description,
      targetTime
    };

    dispatch(addTodo(todo));
    setVisible(false);
  }

  return (
    <form onSubmit={handleSubmit(AddTodo)} className={`add-task-input ${visible ? "absolute" : "hidden"
      } top-10 left-1 w-56 h-36 rounded-lg bg-blue-200 px-2 py-1`}>
      <div className='flex flex-col gap-2'>
        <input className='task-input w-[13rem] py-1 px-2 bg-blue-200 focus:outline-none rounded-lg hover:bg-blue-400' placeholder='Task Name' type="text" {...register("taskName", { required: true })} />
        <input className='description-input w-[13rem] py-1 px-2 bg-blue-200 focus:outline-none rounded-lg hover:bg-blue-400' placeholder='Description' type="text" {...register("description", { required: true })} />
        <input className='task-time-input bg-transparent px-2' type="time" name="" id="" {...register("targetTime", { required: true })} />
      </div>
      <button className='task-input-btn w-[13rem] h-6 text-md px-1 m-auto hover:bg-blue-400 rounded-lg hover:text-white'
      >Add</button>
    </form>
  )
}

export default AddTodoInput