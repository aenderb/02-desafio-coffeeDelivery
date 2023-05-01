import { useContext, useState } from 'react'
import { Counter } from '../../../../components/Counter'
import {
  CoffeeListCard,
  CoffeeListCardBuy,
  CoffeeListCardBuyCounterCartButton,
  CoffeeListCardBuyPrice,
  CoffeeListCardDescription,
  CoffeeListCardImg,
  CoffeeListCardName,
  CoffeeListCardTag,
  CoffeeListCardTagContent,
} from './styles'
import { Icard } from '../CoffeeList'
import { ShoppingCart } from 'phosphor-react'
import { CartContext } from '../../../../contexts/CartContext'
import { formatMoney } from '../../../../utils/formatMoney'

interface CardProps {
  card: Icard
}

export function CoffeeCard({ card }: CardProps) {
  const { addCardToCart } = useContext(CartContext)

  const [count, setCount] = useState(1)

  function handleIncrement() {
    setCount((state) => state + 1)
  }

  function handleDecrement() {
    if (count > 1) {
      setCount((state) => state - 1)
    }
  }

  function handleAddToCart() {
    const CardToAdd = {
      ...card,
      count,
    }
    addCardToCart(CardToAdd)
  }

  const formattedPrice = formatMoney(card.price)

  return (
    <CoffeeListCard>
      <CoffeeListCardImg>
        <img src={card.imagemUrl} alt="" />
      </CoffeeListCardImg>
      <CoffeeListCardTag>
        {card.tagNames.map((tag) => {
          return (
            <CoffeeListCardTagContent key={tag}>
              <span>{tag}</span>
            </CoffeeListCardTagContent>
          )
        })}
      </CoffeeListCardTag>

      <CoffeeListCardName>{card.name}</CoffeeListCardName>
      <CoffeeListCardDescription>{card.description}</CoffeeListCardDescription>
      <CoffeeListCardBuy>
        <p>
          R$ <CoffeeListCardBuyPrice>{formattedPrice}</CoffeeListCardBuyPrice>
        </p>

        <Counter
          onIncrement={handleIncrement}
          onDecrement={handleDecrement}
          count={count}
        />

        <CoffeeListCardBuyCounterCartButton onClick={handleAddToCart}>
          <ShoppingCart color="#F3F2F2" weight="fill" />
        </CoffeeListCardBuyCounterCartButton>
      </CoffeeListCardBuy>
    </CoffeeListCard>
  )
}
