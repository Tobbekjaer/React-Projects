import { NavLink, Link, Route, Routes, useLocation } from 'react-router-dom'
import { Home } from './components/Home'
import { NotFound } from './components/NotFound'
import { BookRoutes } from './BookRoutes'
import './styles.css'
function App() {
  const location = useLocation()
  return (
    <>
    <nav>
      <ul>
        <li>
          <NavLink to='/' state='Hi '>Home</NavLink>
        </li>
        <li>
          <NavLink to='/books'>Books</NavLink>
        </li>
      </ul>
    </nav>
    {location.state}
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/books/*' element={<BookRoutes />}/>
      <Route path='*' element={<NotFound />}/>
    </Routes>

    </>
  )
}

export default App
 