import React from 'react'
import "./App.css"
import Header from './Components/Header'
import Phone from './Components/Phone'
import Footer from './Components/Footer'
import Deskmat from './Components/Deskmat'
import Camo from './Components/Camo'
import { Route, Routes } from 'react-router-dom'
import Home from './Components/Home'
import Aura from './Components/Aura'
import Hoodies from './Components/Hoodies'
import Printed from './Components/Printed'
import Customise from './Components/Customise'
import Blackgold from './Components/Blackgold'
import Model from './Components/Model'
import LoginPage from './Components/LoginPage'
import Innerpage from './Components/Innerpage'
import Tie from './Components/Tie'
import Customised from './Components/Customised'
import Vibe from './Components/Vibe'
import Chandrayan from './Components/Chandrayan'
import Aboutus from './Components/Aboutus'
import Plain from './Components/Plain'
import Reflective from './Components/Reflective'
import Return from './Components/Return'
import Privacy from './Components/Privacy'
import Cancellation from './Components/Cancellation'

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/deskmat' element={<Deskmat />}></Route>
        <Route path='/phone' element={<Phone />}></Route>
        <Route path='/camo' element={<Camo />}></Route>
        <Route path='/aura' element={<Aura />}></Route>
        <Route path='/hoodies' element={<Hoodies />}></Route>
        <Route path='/printed' element={<Printed />}></Route>
        <Route path='/customise' element={<Customise />}></Route>
        <Route path='/blackgold' element={<Blackgold />}></Route>
        <Route path='/tie' element={<Tie />}></Route>
        <Route path='/customised' element={<Customised />}></Route>
        <Route path='/vibe' element={<Vibe />}></Route>
        <Route path='/chandrayan' element={<Chandrayan />}></Route>
        <Route path='/plain' element={<Plain />}></Route>
        <Route path='/reflective' element={<Reflective />}></Route>
        <Route path='/model' element={<Model />}></Route>
        <Route path='/login' element={<LoginPage />}></Route>
        <Route path='/innerpage' element={<Innerpage />}></Route>
        <Route path='/aboutus' element={<Aboutus />}></Route>
        <Route path='/return' element={<Return />}></Route>
        <Route path='/privacy' element={<Privacy />}></Route>
        <Route path='/cancellation' element={<Cancellation />}></Route>
      </Routes>
      <Footer />
    </div>
  )
}

export default App
