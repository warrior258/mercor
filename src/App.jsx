import Navbar from './components/Navbar'
import Sidebar from './components/Sidebar'
import Header from './components/Header'
import Main from './components/Main'
import { DndProvider } from 'react-dnd'
import { HTML5Backend } from 'react-dnd-html5-backend'

const App = () => {

  return (
    <div className='flex'>
      <Sidebar/>

      <main className='md:ml-[250px] ml-[35px] overflow-x-hidden'>
        <Navbar/>
        <Header/>

        <DndProvider backend={HTML5Backend}>
          <Main/>
        </DndProvider>

      </main>
    </div>
  )
}

export default App
