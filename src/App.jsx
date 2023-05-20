import './App.scss'
import Footer from './components/Footer/Footer'
import Navbar from './components/Navbar/Navbar'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/home/Home'
import Gigs from './pages/gigs/Gigs'
import Gig from './pages/gig/Gig'
import MyGigs from './pages/myGigs/MyGigs'
import Message from './pages/message/Message'
import Messages from './pages/messages/Messages'
import Orders from './pages/orders/Orders'
import Add from './pages/add/Add'


function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/add' element={<Add />} />
        <Route path='/gigs' element={<Gigs />} />
        <Route path='/gig/:id' element={<Gig />} />
        <Route path='/mygigs' element={<MyGigs />} />
        <Route path='/orders' element={<Orders />} />
        <Route path='/messages' element={<Messages />} />
        <Route path='/message/:id' element={<Message />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App