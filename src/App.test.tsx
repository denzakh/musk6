import { describe, it, expect } from 'vitest'
import { render, fireEvent, screen } from '@testing-library/react'
import { App } from './App'
import { list } from './mock'

describe('Implementación de un Test de Aceptación', async () => {
  it('Should render the page correctly', async () => {
    render(<App />)
  })

  it('Añadiendo el artículo 1 al carrito', async () => {
    const addCartBtn1Element = await screen.findByTestId('addCartBtn1')
    fireEvent.click(addCartBtn1Element)
    const cartCountElement = await screen.findByTestId('cartCount')
    expect(cartCountElement.innerHTML).toContain(1)
  })

  it('Añadiendo el artículo 2 al carrito', async () => {
    const addCartBtn2Element = await screen.findByTestId('addCartBtn2')
    fireEvent.click(addCartBtn2Element)
    const cartCountElement = await screen.findByTestId('cartCount')
    expect(cartCountElement.innerHTML).toContain(2)
  })

  it('Añadiendo el artículo 3 al carrito', async () => {
    const addCartBtn3Element = await screen.findByTestId('addCartBtn3')
    fireEvent.click(addCartBtn3Element)
    const cartCountElement = await screen.findByTestId('cartCount')
    expect(cartCountElement.innerHTML).toContain(3)
  })

  it('Al hacer clic nuevamente se elimina el artículo 1 del carrito.', async () => {
    const addCartBtn1Element = await screen.findByTestId('addCartBtn1')
    fireEvent.click(addCartBtn1Element)
    const cartCountElement = await screen.findByTestId('cartCount')
    expect(cartCountElement.innerHTML).toContain(2)
  })

  it('Ir al carrito.', async () => {
    const сartBtnElement = await screen.findByTestId('cartBtn')
    fireEvent.click(сartBtnElement)

    const cartPage = await screen.findByTestId('cartPage')
    expect(cartPage).toBeTruthy()
  })

  it('Eliminar un artículo del carrito', async () => {
    const cartCountElement = await screen.findByTestId('cartCount')
    const cartPrecioElement = await screen.findByTestId('precio')
    expect(cartCountElement.innerHTML).toContain(2)
    expect(cartPrecioElement.innerHTML).toContain(list[1].price + list[2].price)

    const сartDelBtn2Element = await screen.findByTestId('сartDelBtn2')
    fireEvent.click(сartDelBtn2Element)
    expect(cartCountElement.innerHTML).toContain(1)
    expect(cartPrecioElement.innerHTML).toContain(list[2].price)
  })

  it('Proceder al pago.', async () => {
    const orderBtnElement = await screen.findByTestId('orderBtn')
    fireEvent.click(orderBtnElement)

    const orderResult = await screen.findByTestId('orderResult')
    expect(orderResult).toBeTruthy()
  })
})
