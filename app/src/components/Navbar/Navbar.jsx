import React from 'react'
import AddTodoButton from './AddTodoButton'

const Navbar = () => {
  const navLinks = {
    "Web View": "/",
    "List View": "/"
  }
  return (
    <>
      <AddTodoButton />
      <span className='navbar flex gap-5 w-fit px-4 py-2 bg-blue-200 mx-auto rounded-b-lg' id='navbar'>
        {Object.entries(navLinks).map((e, f) => <a
          className='navlink'
          key={f}
          href={e[1]}>
          {e[0]}</a>)}
      </span>
    </>
  )
}

export default Navbar