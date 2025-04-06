export type CardType = {
  id: number
  title: string
  price: number
  img: string
  text: string
}

export type CartType = Record<number, boolean>
