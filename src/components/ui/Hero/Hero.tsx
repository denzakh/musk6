import { FC, ReactNode } from 'react'
import Img from './cover.jpg'

interface HeroProps {
  children?: ReactNode
}

export const Hero: FC<HeroProps> = () => {
  return (
    <div className="hero bg-base-200 min-h-[800px] py-8">
      <div className="hero-content flex-col lg:flex-row-reverse gap-x-8">
        <img src={Img} className="rounded-lg shadow-2xl" />
        <div>
          <h1 className="text-3xl md:text-5xl font-normal font-header">Trilogía clásica!</h1>
          <div className="max-w-[500px] py-6">
            <p className="py-2">
              La Primera trilogía de Star Wars es el primer conjunto de películas pertenecientes a
              la franquicia Star Wars, una ópera espacial estadounidense creada por George Lucas.
            </p>
            <p className="py-2">
              Edición clásica, complementada y restaurada. Star Wars Episodios 4-6 (Blu-ray +
              Blu-ray Extras) (6 discos) (Ediciones remasterizadas): La Guerra de las Galaxias, El
              Imperio Contraataca, El Retorno del Jedi
            </p>
          </div>
          <button className="btn btn-primary btn-xl">
            Comprar <span className="hidden sm:inline-block">con descuento</span>
          </button>
        </div>
      </div>
    </div>
  )
}
