import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

// Import layouts
import DefaultLayout from './layouts/DefaultLayout'

// Pagine di riferimento

import HomePage from './pages/HomePage'
import AboutPage from './pages/AboutPage'
import ProductPage from './pages/ProductsPage'

function App() {


  return (
    <BrowserRouter>
      <Routes>
        <Route element={<DefaultLayout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/product" element={<ProductPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
export default App
