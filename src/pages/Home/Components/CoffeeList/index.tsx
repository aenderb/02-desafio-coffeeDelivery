import { CoffeeListContainer, CoffeeListItems, CoffeeListTitle } from './styles'

import { cards } from '../../../../data/CardCoffes'

import { CoffeeCard } from '../CoffeeCard'

export interface Icard {
  id: string
  imagemUrl: string
  tagNames: string[]
  name: string
  description: string
  price: number
}

export function CoffeeList() {
  return (
    <CoffeeListContainer>
      <CoffeeListTitle>Nossos cafés</CoffeeListTitle>
      <CoffeeListItems>
        {cards.map((card) => (
          <CoffeeCard key={card.id} card={card} />
        ))}
      </CoffeeListItems>
    </CoffeeListContainer>
  )
}
