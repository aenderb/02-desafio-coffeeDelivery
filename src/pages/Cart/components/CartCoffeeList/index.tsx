import { Trash } from 'phosphor-react'
import { Counter } from '../../../../components/Counter'

import {
  CartFrame1CardListCoffeeItem,
  CartFrame1CardListCoffeeItemDetails,
  CartFrame1CardListCoffeeItemPrice,
  CartFrame1CardListCoffeeItens,
  CofferItemActions,
  Divider,
  RemoverButton,
} from './styles'

import { useContext } from 'react'
import { CartContext, ICartItem } from '../../../../contexts/CartContext'
import { formatMoney } from '../../../../utils/formatMoney'

interface ICoffeeCardProps {
  cartcoffee: ICartItem
}

export function CartCoffeeList({ cartcoffee }: ICoffeeCardProps) {
  const { changeCountCartCoffeeItem, removeCartCoffeeItem } =
    useContext(CartContext)

  function handleIncrement() {
    changeCountCartCoffeeItem(cartcoffee.id, 'increment')
  }

  function handleDecrement() {
    if (cartcoffee.count > 1) {
      changeCountCartCoffeeItem(cartcoffee.id, 'decrement')
    }
  }

  function handleRemove() {
    removeCartCoffeeItem(cartcoffee.id)
  }

  const coffeeListTotal = cartcoffee.price * cartcoffee.count
  const formattedPrice = formatMoney(coffeeListTotal)

  return (
    <CartFrame1CardListCoffeeItens>
      <CartFrame1CardListCoffeeItem>
        <img src={cartcoffee.imagemUrl} alt="" width="64px" height="64px" />
        <CartFrame1CardListCoffeeItemDetails>
          <span>{cartcoffee.name}</span>
          <CofferItemActions>
            <Counter
              onIncrement={handleIncrement}
              onDecrement={handleDecrement}
              count={cartcoffee.count}
            />
            <RemoverButton onClick={handleRemove}>
              <Trash color="#8047F8" />
              Remover
            </RemoverButton>
          </CofferItemActions>
        </CartFrame1CardListCoffeeItemDetails>
        <CartFrame1CardListCoffeeItemPrice>
          R$ {formattedPrice}
        </CartFrame1CardListCoffeeItemPrice>
      </CartFrame1CardListCoffeeItem>
      <span>
        <Divider />
      </span>
    </CartFrame1CardListCoffeeItens>
  )
}
