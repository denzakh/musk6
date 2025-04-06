import { FC } from 'react'
import { Footer } from '../../components/layout/Footer'
import { Header } from '../../components/layout/Header'
import { Card } from '../../components/ui/Card'
import { Hero } from '../../components/ui/Hero'
import { CardType, CartType } from '../../typos'
import { getCartCount, handleCart, isInCart } from '../../helpers'

interface MainPageProps {
  list: CardType[]
  cart: CartType
  setCart: React.Dispatch<React.SetStateAction<CartType>>
}

export const MainPage: FC<MainPageProps> = ({ list = [], cart = {}, setCart }) => {
  const cartCount = getCartCount(cart)
  return (
    <>
      <Header cartCount={cartCount} />
      <main className="bg-base-200">
        <div className="container">
          <Hero />
          <div className="pb-12">
            <h2 className="text-2xl font-normal font-header mb-5">Productos destacados</h2>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {list.map((card) => (
                <Card
                  key={card.title}
                  card={card}
                  onClick={() => handleCart(card.id, cart, setCart)}
                  isInCart={isInCart(card.id, cart)}
                />
              ))}
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
