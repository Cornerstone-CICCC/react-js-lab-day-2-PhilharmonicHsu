import {BrowserRouter, Routes, Route} from 'react-router-dom'
import './App.css'
import Layout from './components/Layout'
import Login from './components/Login'
import ToDo from './components/ToDo'

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Login />}/>
            <Route path="todo" element={<ToDo />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
