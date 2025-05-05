import { Routes, Route } from 'react-router-dom'
import Main from './components/views/Main'
import TestingView from './components/views/Testing'
import './App.css'

function App() {
  return (
    <Routes>
      <Route path='/' element={<Main />} />
      <Route path='/testing' element={<TestingView />} />
      {/* fallback 404 */}
      <Route path='*' element={<h2>Page not found</h2>} />
    </Routes>
  )
}

export default App
