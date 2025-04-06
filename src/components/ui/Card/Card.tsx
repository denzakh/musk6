import { FC } from 'react'
import { CardType } from '../../../typos'

interface CardProps {
  card: CardType
  onClick: () => void
  isInCart: boolean
}

export const Card: FC<CardProps> = ({ card, onClick, isInCart }) => {
  return (
    <div className="card bg-base-100  shadow-sm">
      <figure>
        <img src={card?.img} alt={card?.title} />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{card?.title}</h2>
        <p>{card?.text}</p>
        <div className="card-actions mt-3 flex justify-between items-center">
          <div className="card-title text-accent">{card?.price} €</div>
          <button
            className={`btn ${isInCart ? 'btn-accent' : 'btn-primary'}`}
            onClick={onClick}
            data-testid={`addCartBtn${card.id}`}
          >
            {isInCart ? 'En carrito' : 'Añadir al carrito'}
          </button>
        </div>
      </div>
    </div>
  )
}
