import React from 'react'
import { Button } from './components/ui/button'
import { Route, Router, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Layout from './layout/Layout'
import FreeKundli from './pages/kundli/FreeKundli'

const App = () => {
  return (
    <>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route path='/' element={<Home />} />
          <Route path='/free-kundli' element={<FreeKundli />} />
        </Route>
      </Routes>
    </>
  )
}

export default App