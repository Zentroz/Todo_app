import React, { useEffect, useRef, useState } from 'react';
import statusState from '../../constants/status'

const Todo = ({ _id, taskName, description, status, targetTime }) => {
  // Variables
  // useRef
  const elementRef = useRef();
  const detailRef = useRef();
  // useState
  const [MouseHover, setMouseHover] = useState(false);
  const [MouseHold, setMouseHold] = useState(false);
  const [showDetails, setshowDetails] = useState(false);
  const [MousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  // Position
  let X = 0;
  let Y = 0;

  // Functions
  // useEffect
  useEffect(() => {
    // console.log(MouseHold, MouseHover);
  }, [MouseHold, MouseHover]);

  // Change element position
  if (MouseHover && MouseHold) {
    const rect = elementRef.current.getBoundingClientRect();
    X = MousePosition.x - (rect.width / 2);
    Y = MousePosition.y - (rect.height / 2);
    elementRef.current.style.top = Y + "px";
    elementRef.current.style.left = X + "px";
  }

  // Show Details
  if (MouseHover && !MouseHold) {
    // Set details position
    const rect = elementRef.current.getBoundingClientRect();
    detailRef.current.style.top = rect.y + rect.height + "px";
    detailRef.current.style.left = rect.x + "px";
    // Display details
    if (!showDetails) setshowDetails(true);
  } else {
    // Hide details
    if (showDetails) setshowDetails(false);
  }

  // Get Mouse Position
  window.addEventListener("mousemove", (e) => {
    setMousePosition({ x: e.clientX, y: e.clientY });
  })

  return (
    <>
      <span
        className='todo absolute px-3 py-2 rounded-lg bg-blue-400 select-none'
        onMouseDown={(e) => { if (e.button == 0) setMouseHold(true) }}
        onMouseUp={(e) => { if (e.button == 0) setMouseHold(false) }}
        onMouseOver={() => setMouseHover(true)}
        onMouseOut={() => { setMouseHover(false); setMouseHold(false) }}
        ref={elementRef}
        id={_id}
      >
        {taskName}
      </span>
      {/* Task Details */}
      <div className={`task-detail ${showDetails ? "absolute" : "hidden"} bg-blue-200 p-2 w-52 max-w-52 rounded-lg`} ref={detailRef}>
        <div className=''>
          <h1 className='font-bold pr-8 float-left'>Target Time:</h1>
          <p className='float-right'>{targetTime}</p>
        </div>
        <div className=''>
          <h1 className='font-bold pr-8 float-left'>Status:</h1>
          <p className='float-right'>{statusState[status]}</p>
        </div>
        <div className=''>
          <h1 className='font-bold'>Description</h1>
          <div className='whitespace-normal break-words'>
            {description}
          </div>
        </div>
      </div>
    </>
  )
};

export default Todo;