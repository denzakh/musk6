import { FC } from 'react'
import HeaderBg from './header.jpg'
import { Nav } from '../Nav'

interface HeaderProps {
  cartCount: number
}

export const Header: FC<HeaderProps> = ({ cartCount }) => {
  return (
    <header
      className="bg-cover bg-no-repeat bg-[#2a59bd]"
      style={{ backgroundImage: `URL(${HeaderBg})` }}
    >
      <div className="backdrop-brightness-70 md:backdrop-brightness-100">
        <div className="container">
          <div className="flex items-center text-white min-h-[45vw] lg:min-h-[380px] pl-2 md:pl-0">
            <div className="flex flex-col gap-2 md:items-center pt-4 ">
              <div className="text-3xl md:text-5xl font-header font-bold drop-shadow-lg pl-2 md:pl-0">
                Star Jedi
              </div>
              <div className="drop-shadow-sm">
                tienda de productos <br className="md:hidden" />
                exclusivos
              </div>
            </div>

            <div className="grow"></div>
            <div className=""></div>
          </div>
        </div>
      </div>
      <div className="bg-[rgba(0,0,0,0.5)]" style={{ backdropFilter: 'blur(5px)' }}>
        <div className="container">
          <Nav cartCount={cartCount} />
        </div>
      </div>
    </header>
  )
}
