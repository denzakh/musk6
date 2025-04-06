import { FC, ReactNode } from 'react'
import { Link } from 'react-router'

interface NavProps {
  children?: ReactNode
  cartCount: number
}

const menu = [
  {
    title: 'Inicio',
    href: '/',
  },
  {
    title: 'Libros',
    href: '/',
  },
  {
    title: 'Películas',
    href: '/',
  },
  {
    title: 'Cómics',
    href: '/',
  },
  {
    title: 'Juguetes',
    href: '/',
  },
  {
    title: 'Otros',
    href: '/',
  },
]

export const Nav: FC<NavProps> = ({ cartCount }) => {
  return (
    <div className="">
      <div className="min-h-[80px] p-4 lg:flex justify-center items-center gap-x-10 hidden">
        {menu.map((item) => (
          <Link to={item.href} key={item.title} className="text-white text-2xl hover:text-cyan-300">
            {item.title}
          </Link>
        ))}
        <Link
          to={'/cart'}
          className="text-white text-2xl hover:text-cyan-300 flex items-center gap-4"
        >
          <div>Carrito de compras</div>
          {Boolean(cartCount) && (
            <div
              className="w-[40px] h-[40px] rounded-full bg-primary flex items-center justify-center text-white leading-1"
              data-testid="cartCount"
            >
              {cartCount}
            </div>
          )}
        </Link>
      </div>
      <div className="flex justify-between items-center lg:hidden">
        <details className="dropdown">
          <summary className="btn m-1">Menu</summary>
          <ul className="menu dropdown-content bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm">
            {menu.map((item) => (
              <li className="mt-2" key={item.title}>
                <Link to={item.href} className="">
                  {item.title}
                </Link>
              </li>
            ))}
          </ul>
        </details>
        <div>
          <Link
            to={'/cart'}
            className="text-white text-xl hover:text-cyan-300 flex items-center"
            data-testid="cartBtn"
          >
            <div className="pr-2">Carrito</div>
            {Boolean(cartCount) && (
              <div
                className="w-[30px] h-[30px] rounded-full bg-primary flex items-center justify-center text-white leading-1"
                data-testid="cartCountMobile"
              >
                {cartCount}
              </div>
            )}
          </Link>
        </div>
      </div>
    </div>
  )
}
