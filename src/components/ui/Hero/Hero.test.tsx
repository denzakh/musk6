import { it, expect } from 'vitest'
import { render } from '@testing-library/react'
import { Hero } from './Hero'

it('Snapshot', () => {
  const comp = render(<Hero />)
  expect(comp).toMatchSnapshot()
})
