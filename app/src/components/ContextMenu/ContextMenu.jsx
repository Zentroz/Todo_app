import React, { useEffect, useRef, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeTodo, markAsComplete, markAsWorking } from '../../features/todoSlice'
import MenuOption from './MenuOption';

const ContextMenu = () => {
  const contextMenu = useRef();

  const dispatch = useDispatch();

  const todo = useSelector(state => state.todos);

  const [visible, setVisible] = useState(false);
  const [currentElementId, setCurrentElementId] = useState("")

  useEffect(() => {
    const todoElements = document.querySelectorAll(".todo");

    todoElements.forEach(element => {
      element.addEventListener("contextmenu", (e) => {
        e.preventDefault();
        setCurrentElementId(element.id);
        const rect = element.getBoundingClientRect();
        contextMenu.current.style.top = rect.y + "px";
        contextMenu.current.style.left = rect.x + rect.width + "px";
        setVisible(true);
      });
    });
  }, [todo]);

  window.addEventListener("mousedown", (e) => {
    const rect = contextMenu.current.getBoundingClientRect();
    const isInside = (e.clientX > rect.x) &&
      (e.clientX < (rect.x + rect.width)) &&
      (e.clientY > rect.y) &&
      (e.clientY < (rect.y + rect.height));

    if (!isInside) setVisible(false);
  });

  // Context Menu Options
  const options = {
    "Mark as Complete": () => {
      dispatch(markAsComplete(currentElementId));
      setVisible(false);
    },
    "Mark as Working": () => {
      dispatch(markAsWorking(currentElementId));
      setVisible(false);
    },
    "Add Child": () => {
      console.log("Add Child");
      setVisible(false);
    },
    "Remove": () => {
      dispatch(removeTodo(currentElementId));
      setVisible(false);
    },
  }

  return (
    <div
      className={`contextmenu absolute ${visible ? "flex" : "hidden"} flex-col items-center w-44 overflow-hidden bg-gray-200  py-2 gap-2 rounded-md px-2 z-20`}
      ref={contextMenu}
    >
      {Object.entries(options).map((e, f) => <MenuOption key={f} option={e[0]} func={e[1]} />)}
    </div >
  )
};

export default ContextMenu;