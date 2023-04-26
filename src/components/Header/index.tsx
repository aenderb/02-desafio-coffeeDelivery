import { HeaderContainer } from './styles'

import logoCoffee from '../../assets/logoCoffee.svg'
import { ShoppingCart, MapPin } from 'phosphor-react'
import { NavLink } from 'react-router-dom'

export function Header() {
  return (
    <HeaderContainer>
      <img src={logoCoffee} alt="" />
      <nav>
        <span>
          <MapPin size={24} color="#8047F8" weight="fill" />
          Porto Alegre
        </span>
        <NavLink to="/cart" title="Cart">
          <ShoppingCart size={24} color="#C47F17" weight="fill" />
        </NavLink>
      </nav>
    </HeaderContainer>
  )
}
