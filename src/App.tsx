import { useEffect, useState } from 'react'
import './assets/fonts/starjedi.woff2'
import { BrowserRouter, Route, Routes } from 'react-router'
import { CartType } from './typos'
import { setInitialCart } from './helpers'
import { MainPage } from './pages/MainPage'
import { list } from './mock'
import { CartPage } from './pages/CartPage'

export const App = () => {
  const [cart, setCart] = useState<CartType>({})

  useEffect(() => {
    setInitialCart(list, setCart)
  }, [])

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPage list={list} cart={cart} setCart={setCart} />} />
        <Route path="/cart" element={<CartPage list={list} cart={cart} setCart={setCart} />} />
      </Routes>
    </BrowserRouter>
  )
}
