import { Minus, Plus } from 'phosphor-react'
import {
  CoffeeListCardBuyCounter,
  CounterSpan,
  MinusButton,
  PlusButton,
} from './styles'
import { useState } from 'react'

export function Counter() {
  const [counter, SetCounter] = useState(1)

  return (
    <CoffeeListCardBuyCounter>
      <CounterSpan>
        <MinusButton onClick={() => SetCounter(counter - 1)}>
          <Minus size={14} color="#8047F8" />
        </MinusButton>

        {counter}

        <PlusButton onClick={() => SetCounter(counter + 1)}>
          <Plus size={14} color="#8047F8" />
        </PlusButton>
      </CounterSpan>
    </CoffeeListCardBuyCounter>
  )
}
