import './App.css'
import About from './components/About'
import Blog from './components/Blog'
import Client from './components/Client'
import Footer from './components/Footer'
import Hero from './components/Hero'
import Navbar from './components/Navbar'
import Newsletter from './components/Newsletter'
import Products from './components/Products'
import { Services } from './components/Services'
function App() {
  return (
    <>
    <Navbar/>
    <Hero/>
    <Services/>
    <About/>
    <Products/>
    <Blog/>
    <Client/>
    <Newsletter/>
    <Footer/>
       </>
  )
}

export default App
