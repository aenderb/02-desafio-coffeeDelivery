import { Minus, Plus } from 'phosphor-react'
import {
  CoffeeListCardBuyCounter,
  CounterSpan,
  MinusButton,
  PlusButton,
} from './styles'

interface ICounterProps {
  count: number
  onIncrement: () => void
  onDecrement: () => void
}

export function Counter({ onIncrement, onDecrement, count }: ICounterProps) {
  return (
    <CoffeeListCardBuyCounter>
      <CounterSpan>
        <MinusButton type="button" onClick={onDecrement}>
          <Minus size={14} color="#8047F8" />
        </MinusButton>

        {count}

        <PlusButton type="button" onClick={onIncrement}>
          <Plus size={14} color="#8047F8" />
        </PlusButton>
      </CounterSpan>
    </CoffeeListCardBuyCounter>
  )
}
