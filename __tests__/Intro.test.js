import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import Intro from '../components/intro'
 
describe('Header', () => {
  it('O header é carregado com o meu nome', () => {
    render(<Intro />)
 
    const footer = screen.getByText('Blog do Jónatas.')
    expect(footer).toBeInTheDocument();
 
  })
})