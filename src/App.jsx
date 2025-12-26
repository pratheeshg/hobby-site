import React from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import HobbyGrid from './components/HobbyGrid'
import Footer from './components/Footer'

function App() {
  return (
    <div className="app">
      <Header />
      <main>
        <Hero />
        <HobbyGrid />
      </main>
      <Footer />
    </div>
  )
}

export default App
