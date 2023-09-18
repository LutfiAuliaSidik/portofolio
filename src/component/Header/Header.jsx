import './Header.css'
import { ButtonGradient } from '../Fraction/Button'

const Header = () =>
{
  return (
    <header className="container header">
      <h1>lutfi</h1>
        <nav className="container nav">
          <ul>
            <li><a href="#">home</a></li>
            <li><a href="#">about</a></li>
            <li><a href="#">category</a></li>
            <li><a href="#">single post</a></li>
            <li><a href="#">contact</a></li>
          </ul>
        </nav>
      <ButtonGradient text="subscribe"/>
    </header>
  )
}

export default Header
