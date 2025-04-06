import { describe, it, expect } from 'vitest'
import { cleanup, render, screen } from '@testing-library/react'
import { Nav } from './Nav'
import { BrowserRouter } from 'react-router'

describe('Nav', async () => {
  it('Si no hay productos, no se muestra el número de productos en el carrito.', async () => {
    render(
      <BrowserRouter>
        <Nav cartCount={0} />
      </BrowserRouter>
    )

    const cartCountElement = await screen.queryByTestId('cartCount')
    expect(cartCountElement).toBeNull()
    cleanup()
  })

  it('No se muestra el número de artículos en el carrito', async () => {
    render(
      <BrowserRouter>
        <Nav cartCount={1} />
      </BrowserRouter>
    )

    const cartCountElement = await screen.findByTestId('cartCount')
    expect(cartCountElement.innerHTML).toContain(1)
    cleanup()
  })
})
