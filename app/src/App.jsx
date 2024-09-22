import './App.css'
import { Provider } from 'react-redux'
import { store } from './app/store'
import Todos from './components/Todos/Todos'
import Navbar from './components/Navbar/Navbar'
import ContextMenu from './components/ContextMenu/ContextMenu'

function App() {

  return (
    <>
      <Provider store={store}>
        <Navbar />
        <Todos />
        <ContextMenu />
      </Provider>
    </>
  )
}

export default App
