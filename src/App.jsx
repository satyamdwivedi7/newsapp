import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar.jsx'
import Articles from './sections/Articles.jsx'
import Footer from './sections/Footer.jsx'
import HomePage from './sections/Home.jsx'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar />
      <HomePage />
      <Articles />
      <Footer />
    </>
  );
}

export default App
