import {
  CoffeeListCard,
  CoffeeListCardBuy,
  CoffeeListCardBuyCounterCart,
  CoffeeListCardBuyPrice,
  CoffeeListCardDescription,
  CoffeeListCardImg,
  CoffeeListCardName,
  CoffeeListCardTag,
  CoffeeListCardTagContent,
  CoffeeListContainer,
  CoffeeListItems,
  CoffeeListTitle,
} from './styles'
import coffeeTrad from '../../../../assets/CoffeeTrad.png'
import { ShoppingCart } from 'phosphor-react'
import { Counter } from '../../../../components/Counter'

export function CoffeeList() {
  return (
    <CoffeeListContainer>
      <CoffeeListTitle>Nossos cafés</CoffeeListTitle>
      <CoffeeListItems>
        <CoffeeListCard>
          <CoffeeListCardImg>
            <img src={coffeeTrad} alt="" />
          </CoffeeListCardImg>
          <CoffeeListCardTag>
            <CoffeeListCardTagContent>
              <span>tradicional</span>
            </CoffeeListCardTagContent>
            <CoffeeListCardTagContent>
              <span>com leite</span>
            </CoffeeListCardTagContent>
            <CoffeeListCardTagContent>
              <span>gelato</span>
            </CoffeeListCardTagContent>
          </CoffeeListCardTag>
          <CoffeeListCardName>Expresso Tradicional</CoffeeListCardName>
          <CoffeeListCardDescription>
            O tradicional café feito com água quente e grãos moídos
          </CoffeeListCardDescription>
          <CoffeeListCardBuy>
            <p>
              R$ <CoffeeListCardBuyPrice>9,90</CoffeeListCardBuyPrice>
            </p>

            <Counter />
            <CoffeeListCardBuyCounterCart>
              <ShoppingCart color="#F3F2F2" weight="fill" />
            </CoffeeListCardBuyCounterCart>
          </CoffeeListCardBuy>
        </CoffeeListCard>

        <CoffeeListCard>
          <CoffeeListCardImg>
            <img src={coffeeTrad} alt="" />
          </CoffeeListCardImg>
          <CoffeeListCardTag>
            <CoffeeListCardTagContent>
              <span>tradicional</span>
            </CoffeeListCardTagContent>
            <CoffeeListCardTagContent>
              <span>com leite</span>
            </CoffeeListCardTagContent>
            <CoffeeListCardTagContent>
              <span>gelato</span>
            </CoffeeListCardTagContent>
          </CoffeeListCardTag>
          <CoffeeListCardName>Expresso Tradicional</CoffeeListCardName>
          <CoffeeListCardDescription>
            O tradicional café feito com água quente e grãos moídos
          </CoffeeListCardDescription>
          <CoffeeListCardBuy>
            <p>
              R$ <CoffeeListCardBuyPrice>9,90</CoffeeListCardBuyPrice>
            </p>

            <Counter />
            <CoffeeListCardBuyCounterCart>
              <ShoppingCart color="#F3F2F2" weight="fill" />
            </CoffeeListCardBuyCounterCart>
          </CoffeeListCardBuy>
        </CoffeeListCard>

        <CoffeeListCard>
          <CoffeeListCardImg>
            <img src={coffeeTrad} alt="" />
          </CoffeeListCardImg>
          <CoffeeListCardTag>
            <CoffeeListCardTagContent>
              <span>tradicional</span>
            </CoffeeListCardTagContent>
            <CoffeeListCardTagContent>
              <span>com leite</span>
            </CoffeeListCardTagContent>
            <CoffeeListCardTagContent>
              <span>gelato</span>
            </CoffeeListCardTagContent>
          </CoffeeListCardTag>
          <CoffeeListCardName>Expresso Tradicional</CoffeeListCardName>
          <CoffeeListCardDescription>
            O tradicional café feito com água quente e grãos moídos
          </CoffeeListCardDescription>
          <CoffeeListCardBuy>
            <p>
              R$ <CoffeeListCardBuyPrice>9,90</CoffeeListCardBuyPrice>
            </p>

            <Counter />
            <CoffeeListCardBuyCounterCart>
              <ShoppingCart color="#F3F2F2" weight="fill" />
            </CoffeeListCardBuyCounterCart>
          </CoffeeListCardBuy>
        </CoffeeListCard>

        <CoffeeListCard>
          <CoffeeListCardImg>
            <img src={coffeeTrad} alt="" />
          </CoffeeListCardImg>
          <CoffeeListCardTag>
            <CoffeeListCardTagContent>
              <span>tradicional</span>
            </CoffeeListCardTagContent>
            <CoffeeListCardTagContent>
              <span>com leite</span>
            </CoffeeListCardTagContent>
            <CoffeeListCardTagContent>
              <span>gelato</span>
            </CoffeeListCardTagContent>
          </CoffeeListCardTag>
          <CoffeeListCardName>Expresso Tradicional</CoffeeListCardName>
          <CoffeeListCardDescription>
            O tradicional café feito com água quente e grãos moídos
          </CoffeeListCardDescription>
          <CoffeeListCardBuy>
            <p>
              R$ <CoffeeListCardBuyPrice>9,90</CoffeeListCardBuyPrice>
            </p>

            <Counter />
            <CoffeeListCardBuyCounterCart>
              <ShoppingCart color="#F3F2F2" weight="fill" />
            </CoffeeListCardBuyCounterCart>
          </CoffeeListCardBuy>
        </CoffeeListCard>

        <CoffeeListCard>
          <CoffeeListCardImg>
            <img src={coffeeTrad} alt="" />
          </CoffeeListCardImg>
          <CoffeeListCardTag>
            <CoffeeListCardTagContent>
              <span>tradicional</span>
            </CoffeeListCardTagContent>
            <CoffeeListCardTagContent>
              <span>com leite</span>
            </CoffeeListCardTagContent>
            <CoffeeListCardTagContent>
              <span>gelato</span>
            </CoffeeListCardTagContent>
          </CoffeeListCardTag>
          <CoffeeListCardName>Expresso Tradicional</CoffeeListCardName>
          <CoffeeListCardDescription>
            O tradicional café feito com água quente e grãos moídos
          </CoffeeListCardDescription>
          <CoffeeListCardBuy>
            <p>
              R$ <CoffeeListCardBuyPrice>9,90</CoffeeListCardBuyPrice>
            </p>

            <Counter />
            <CoffeeListCardBuyCounterCart>
              <ShoppingCart color="#F3F2F2" weight="fill" />
            </CoffeeListCardBuyCounterCart>
          </CoffeeListCardBuy>
        </CoffeeListCard>

        <CoffeeListCard>
          <CoffeeListCardImg>
            <img src={coffeeTrad} alt="" />
          </CoffeeListCardImg>
          <CoffeeListCardTag>
            <CoffeeListCardTagContent>
              <span>tradicional</span>
            </CoffeeListCardTagContent>
            <CoffeeListCardTagContent>
              <span>com leite</span>
            </CoffeeListCardTagContent>
            <CoffeeListCardTagContent>
              <span>gelato</span>
            </CoffeeListCardTagContent>
          </CoffeeListCardTag>
          <CoffeeListCardName>Expresso Tradicional</CoffeeListCardName>
          <CoffeeListCardDescription>
            O tradicional café feito com água quente e grãos moídos
          </CoffeeListCardDescription>
          <CoffeeListCardBuy>
            <p>
              R$ <CoffeeListCardBuyPrice>9,90</CoffeeListCardBuyPrice>
            </p>
            <Counter />

            <CoffeeListCardBuyCounterCart>
              <ShoppingCart color="#F3F2F2" weight="fill" />
            </CoffeeListCardBuyCounterCart>
          </CoffeeListCardBuy>
        </CoffeeListCard>
      </CoffeeListItems>
    </CoffeeListContainer>
  )
}
