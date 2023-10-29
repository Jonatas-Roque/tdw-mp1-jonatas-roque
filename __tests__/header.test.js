import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import Header from '../components/header'
 
describe('Header', () => {
  it('Faz render do header', () => {
    render(<Header />)
 
    const heading = screen.getByText('Blog do Jónatas')
    expect(heading).toBeInTheDocument();
 
  })
})