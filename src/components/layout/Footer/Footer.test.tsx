import { it, expect } from 'vitest'
import { render } from '@testing-library/react'
import { Footer } from './Footer'

it('Snapshot', () => {
  const comp = render(<Footer />)
  expect(comp).toMatchSnapshot()
})
