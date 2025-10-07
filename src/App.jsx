import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

// Import layouts
import DefaultLayout from './layouts/DefaultLayout'

// Pagine di riferimento

import HomePage from './pages/HomePage'
import AboutPage from './pages/AboutPage'
import ProductPage from './pages/ProductsPage'
import ProductDetails from './pages/ProductDetails'
import PageNotFound from './pages/PageNotFound'

function App() {


  return (
    <BrowserRouter>
      <Routes>
        <Route element={<DefaultLayout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/product" >
            <Route index element={<ProductPage />} />
            <Route path=":id" element={<ProductDetails />} />
          </Route>
          <Route path="*" element={<PageNotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
export default App
