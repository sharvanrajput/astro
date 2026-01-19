import { Route, Routes } from 'react-router-dom'
import UpdateUser from './components/Home/UpdateUser'
import Layout from './layout/Layout'
import Home from './pages/Home'
import FreeKundli from './pages/kundli/FreeKundli'
import Horoscopes from './pages/Horoscopes'
import HoroscopeDetails from './components/Horoscopes/HoroscopeDetails'

const App = () => {
  return (
    <>
    
      <Routes>

        <Route path='/' element={<Layout />}>
          <Route path='/' element={<Home />} />
          <Route path='/free-kundli' element={<FreeKundli />} />
          <Route path='/update-user' element={<UpdateUser />} />
          <Route path='/horoscopes/:date' element={<Horoscopes />} />
          <Route path='/horoscopes/:time/:horos' element={<HoroscopeDetails />} />
        </Route>
      </Routes>
    </>
  )
}

export default App