import { Card } from './Card'
import { describe, it, expect, vi } from 'vitest'
import { render, fireEvent, screen, cleanup } from '@testing-library/react'

const card = {
  id: 1,
  title: 'Boba Fett',
  price: 80,
  img: 'https://vieraboschkova.github.io/swapi-gallery/static/assets/img/people/22.jpg',
  text: 'Figura de Boba Fett de la serie Elite de Star Wars, 6" de metal fundido a presión, nueva, envío gratis',
}

describe('Card', async () => {
  it('El artículo de la tarjeta no está en el carrito.', async () => {
    render(<Card key={card.title} card={card} onClick={() => {}} isInCart={false} />)

    expect(screen.queryByText('Añadir al carrito')).toBeTruthy()
    expect(screen.queryByText('En carrito')).toBeNull()

    cleanup()
  })

  it('Snapshot: El artículo de la tarjeta no está en el carrito.', async () => {
    const comp = render(<Card key={card.title} card={card} onClick={() => {}} isInCart={false} />)
    expect(comp).toMatchSnapshot()
    cleanup()
  })

  it('Añadiendo el artículo 1 al carrito', async () => {
    render(<Card key={card.title} card={card} onClick={() => {}} isInCart={true} />)

    expect(screen.queryByText('Añadir al carrito')).toBeNull()
    expect(screen.queryByText('En carrito')).toBeTruthy()
    cleanup()
  })

  it('Añadiendo el artículo 1 al carrito', async () => {
    const handleCart = vi.fn(() => 1)

    render(<Card key={card.title} card={card} onClick={() => handleCart()} isInCart={false} />)

    const addCartBtn1Element = await screen.findByTestId('addCartBtn1')
    fireEvent.click(addCartBtn1Element)
    expect(handleCart).toHaveBeenCalled()
  })
})
