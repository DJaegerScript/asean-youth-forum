import React from "react"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import { Navbar, Footer } from "./components"
import { Home, Activities, About, Archive } from "./pages"

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} exact />
        <Route path="/activities" element={<Activities />} exact />
        <Route path="/about" element={<About />} exact />
        <Route path="/archive" element={<Archive />} exact />
      </Routes>
      <Footer />
    </Router>
  )
}

export default App
