import { render, screen } from '@testing-library/react'
import Home from '../pages/index'
import '@testing-library/jest-dom'
import Header from '../components/header'
 
describe('Header', () => {
  it('renders a heading', () => {
    render(<Header />)
 
    const heading = screen.getByText('Blog')
    expect(heading).toBeInTheDocument();
 
  })
})