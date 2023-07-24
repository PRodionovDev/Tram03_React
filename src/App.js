import React from 'react'
import Header from './components/Header'
import Background from './components/Background'
import News from './components/News'
import Info from './components/Info'
import Scheme from './components/Scheme'
import MobileApp from './components/MobileApp'
import Proezd03 from './components/Proezd03'
import Faq from './components/Faq'
import Footer from './components/Footer'

function App() {
  return (
    <div className="app">
      <Header/>
      <Background/>
      <News/>
      <Info/>
      <Scheme/>
      <MobileApp/>
      <Proezd03/>
      <Faq/>
      <Footer/>
    </div>
  )
}

export default App
