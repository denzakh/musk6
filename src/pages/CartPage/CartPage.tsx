import { FC, useState } from 'react'
import { CardType, CartType } from '../../typos'
import { Header } from '../../components/layout/Header'
import { Footer } from '../../components/layout/Footer'
import { getCartCount, cartSum, handleCart, isInCart, setInitialCart } from '../../helpers'

interface CartPageProps {
  list: CardType[]
  cart: CartType
  setCart: React.Dispatch<React.SetStateAction<CartType>>
}

export const CartPage: FC<CartPageProps> = ({ list = [], cart = {}, setCart }) => {
  const sum = cartSum(cart, list)
  const [isOrder, setOrder] = useState<boolean>(false)

  const count = getCartCount(cart)

  const handleOrder = () => {
    setOrder(true)
    setInitialCart(list, setCart)
  }
  return (
    <>
      <Header cartCount={count} />
      <main className="bg-base-200" data-testid="cartPage">
        <div className="container pt-10 min-h-[600px]">
          {!isOrder ? (
            <div className="  max-w-2xl flex gap-4">
              <div className="grow">
                <h1 className="text-3xl font-normal font-header mb-10">Carrito de compras</h1>
                <div className="flex flex-col gap-4">
                  {list
                    .filter((card) => isInCart(card.id, cart))
                    .map((card) => {
                      return (
                        <div key={card.title} className="flex gap-6 items-center">
                          <div className="">{card.id}</div>
                          <div className="font-medium text-2xl">{card.title}</div>
                          <div className="">
                            <button
                              className="btn btn-error"
                              onClick={() => handleCart(card.id, cart, setCart)}
                              data-testid={`сartDelBtn${card.id}`}
                            >
                              Quitar del carrito
                            </button>
                          </div>
                        </div>
                      )
                    })}
                </div>
                {Boolean(count) && (
                  <div className="mt-10">
                    <button
                      className="btn btn-lg btn-accent"
                      onClick={handleOrder}
                      data-testid="orderBtn"
                    >
                      Proceder al pago
                    </button>
                  </div>
                )}
              </div>

              <div className="pt-1">
                <div className="font-medium text-2xl">Precio total:</div>
                <div className="text-4xl text-accent">
                  <span data-testid="precio">{sum}</span> €
                </div>
              </div>
            </div>
          ) : (
            <div className="text-3xl font-normal" data-testid="orderResult">
              Gracias! <br />
              Su pedido ha sido realizado
            </div>
          )}
        </div>
      </main>
      <Footer />
    </>
  )
}
