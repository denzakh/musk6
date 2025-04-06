import { describe, it, expect, vi } from 'vitest'
import { cleanup, fireEvent, render, screen } from '@testing-library/react'
import { CartPage } from './CartPage'
import { BrowserRouter } from 'react-router'
import { CardType } from '../../typos'

const list: CardType[] = [
  {
    id: 1,
    title: 'Boba Fett',
    price: 80,
    img: 'https://vieraboschkova.github.io/swapi-gallery/static/assets/img/people/22.jpg',
    text: 'Figura de Boba Fett de la serie Elite de Star Wars, 6" de metal fundido a presión, nueva, envío gratis',
  },
  {
    id: 2,
    title: 'R2-D2',
    price: 75,
    img: 'https://vieraboschkova.github.io/swapi-gallery/static/assets/img/people/3.jpg',
    text: 'Figura de acción de 3,75" de la colección vintage de STAR WARS, Artoo-Detoo (R2-D2) VC149',
  },
]

describe('CartPage', async () => {
  it('Si no hay productos, no se muestra productos en el carrito.', async () => {
    const cart = {}
    const setCart = () => {}

    render(
      <BrowserRouter>
        <CartPage list={list} cart={cart} setCart={setCart} />
      </BrowserRouter>
    )

    expect(screen.queryByText('Quitar del carrito')).toBeNull()
    expect(screen.queryByText('Proceder al pago')).toBeNull()
    cleanup()
  })

  it('Se muestra productos en el carrito.', async () => {
    const cart = { 1: true }
    const setCart = () => {}

    render(
      <BrowserRouter>
        <CartPage list={list} cart={cart} setCart={setCart} />
      </BrowserRouter>
    )

    expect(screen.queryByText('Quitar del carrito')).toBeTruthy()
    expect(screen.queryByText('Proceder al pago')).toBeTruthy()
    cleanup()
  })

  it('Render precio y eliminar un artículo del carrito', async () => {
    const cart = { 1: true, 2: true }
    const setCart = vi.fn(() => 1)

    render(
      <BrowserRouter>
        <CartPage list={list} cart={cart} setCart={setCart} />
      </BrowserRouter>
    )

    const cartPrecioElement = await screen.findByTestId('precio')
    expect(cartPrecioElement.innerHTML).toContain(list[0].price + list[1].price)

    const сartDelBtn2Element = await screen.findByTestId('сartDelBtn2')
    fireEvent.click(сartDelBtn2Element)
    expect(setCart).toHaveBeenCalled()
  })
})
