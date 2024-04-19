import React from 'react'
import MainPage from './Pages/MainPage/MainPage'

import { Route, Routes } from 'react-router-dom'
import Projects from './Pages/Projects/Projects'

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<MainPage />}/>
      <Route path='/projects' element={<Projects/>}/>
    </Routes>
  )
}

export default App