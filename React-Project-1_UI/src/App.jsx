
import React from 'react'


import {BrowserRouter as Routers , Routes , Route} from 'react-router-dom';

import Header from './Components/Header'
import Footer from './Components/Footer'
import Services from './Components/Services'
import Contact from './Components/Contact'
import Home from './Components/Home';

import './Styles/Header.scss'
import './Styles/App.scss'
import './Styles/Home.scss';
import './Styles/Contact.scss';
import './Styles/Services.scss';


const App = () => {
  return (
    <Routers>
      <Header/>
      <Routes>
        <Route path='/' element = {<Home />}/>
        <Route path='/contact' element = {<Contact />}/>
        <Route path='/services' element = {<Services />}/>
      </Routes>
      <Footer/>
    </Routers>
  )
}

export default App
