import { CardType, CartType } from './typos'

export const handleCart = (
  cardId: number,
  cart: CartType,
  setCart: React.Dispatch<React.SetStateAction<CartType>>
) => {
  setCart({ ...cart, [cardId]: !cart[cardId] })
}

export const isInCart = (cardId: number, cart: CartType) => {
  return Boolean(cart[cardId])
}

export const getCartCount = (cart: CartType) =>
  Object.values(cart).reduce((sum, item) => {
    if (item) {
      return sum + 1
    }
    return sum
  }, 0)

export const cartSum = (cart: CartType, list: CardType[]) =>
  list.reduce((sum, item) => {
    if (isInCart(item.id, cart)) {
      return sum + item?.price
    }
    return sum
  }, 0)

export const setInitialCart = (
  list: CardType[],
  setCart: React.Dispatch<React.SetStateAction<CartType>>
) => {
  const cart: CartType = {}

  list.map((item) => {
    cart[item.id] = false
  })

  setCart(cart)
}
