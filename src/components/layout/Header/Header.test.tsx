import { describe, it, expect } from 'vitest'
import { render } from '@testing-library/react'
import { Header } from './Header'
import { BrowserRouter } from 'react-router'

describe('Header', async () => {
  it('Si no hay productos, no se muestra el número de productos en el carrito.', async () => {
    const comp = render(
      <BrowserRouter>
        <Header cartCount={0} />
      </BrowserRouter>
    )

    expect(comp).toMatchSnapshot()
  })
})
