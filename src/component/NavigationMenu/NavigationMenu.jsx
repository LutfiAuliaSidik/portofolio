import './style.css'
import { useNavbarDropdown } from '../../stores/app'

const NavigationMenu = () =>
{
  const { status } = useNavbarDropdown((state) => ({ status: state.status }))

  return (
    <>
      <nav className={`container dropdown ${status ? 'active' : ''}`}>
        <ul className="list-menu">
          <li><a href="#">home</a></li>
          <li><a href="#">about</a></li>
          <li><a href="#">category</a></li>
          <li><a href="#">single post</a></li>
          <li><a href="#">contact</a></li>
        </ul>
      </nav>
    </>
  )
}

export default NavigationMenu
