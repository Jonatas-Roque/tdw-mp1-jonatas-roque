import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import Footer from '../components/footer'
 
describe('Footer', () => {
  it('faz render do footer', () => {
    render(<Footer />)
 
    const footer = screen.getByText('Statically Generated with Next.js.')
    expect(footer).toBeInTheDocument();
 
  })
})