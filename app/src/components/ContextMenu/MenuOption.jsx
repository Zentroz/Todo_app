import React from 'react';

const MenuOption = ({ option, func }) => {
  return (
    <div className='inline-block py-1 text-center w-full hover:bg-gray-400 rounded-sm cursor-pointer' onClick={func} > {option}</div >
  )
};

export default MenuOption;