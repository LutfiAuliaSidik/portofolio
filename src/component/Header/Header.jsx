import './style.css'
import NavigationMenu from '../NavigationMenu/NavigationMenu'
import { ButtonGradient, ButtonHamburger } from '../Fraction/Button'

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
      <NavigationMenu />
      <ButtonGradient text="subscribe"/>
      <ButtonHamburger/>
    </header>
  )
}

export default Header
