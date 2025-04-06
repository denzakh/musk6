import { FC, ReactNode } from 'react'

interface FooterProps {
  children?: ReactNode
}

export const Footer: FC<FooterProps> = () => {
  return <footer className=" bg-neutral text-neutral-content min-h-[200px]"></footer>
}
