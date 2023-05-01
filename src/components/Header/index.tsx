import { HeaderContainer } from './styles'

import logoCoffee from '../../assets/logoCoffee.svg'
import { ShoppingCart, MapPin } from 'phosphor-react'
import { NavLink } from 'react-router-dom'
import { useContext } from 'react'
import { CartContext } from '../../contexts/CartContext'

export function Header() {
  const { cartQuantity } = useContext(CartContext)
  return (
    <HeaderContainer>
      <NavLink to="/" title="Home">
        <img src={logoCoffee} alt="" />
      </NavLink>
      <nav>
        <span>
          <MapPin size={24} color="#8047F8" weight="fill" />
          Porto Alegre
        </span>
        <NavLink to="/cart" title="Cart">
          <ShoppingCart size={24} color="#C47F17" weight="fill" />
        </NavLink>
        {cartQuantity >= 1 && <span id="q">{cartQuantity}</span>}
      </nav>
    </HeaderContainer>
  )
}
