import {
  Bank,
  CreditCard,
  CurrencyDollar,
  MapPinLine,
  Money,
  Trash,
} from 'phosphor-react'

import coffeeTrad from '../../assets/CoffeeTrad.png'

import {
  BairroInput,
  CEPInput,
  CartFrame1,
  CartFrame1Card,
  CartFrame1CardDelivery,
  CartFrame1CardDeliveryDescription,
  CartFrame1CardDeliveryIcon,
  CartFrame1CardListCoffee,
  CartFrame1CardListCoffeeItem,
  CartFrame1CardListCoffeeItemDetails,
  CartFrame1CardListCoffeeItemPrice,
  CartFrame1CardListCoffeeItens,
  CartFrame1CardListCoffeeTotalDelivery,
  CartFrame1CardListCoffeeTotalGeneral,
  CartFrame1CardListCoffeeTotalItens,
  CartFrame1CardListCoffeeTotals,
  CartFrame1CardListCoffeeTotalsButton,
  CartFrame1Form,
  CartFrame2CardDeliveryAddress,
  CartFrame2CardDeliveryInfo,
  CartFrameContainer,
  CartFramePayment,
  CartFramePaymentButtonCredit,
  CartFramePaymentButtonDebit,
  CartFramePaymentButtonMoney,
  CartFramePaymentButtons,
  CartFramePaymentDescription,
  CartFramePaymentDescriptionInfo,
  CartFramePaymentDescriptionPay,
  CartFrameTitle,
  CartFrameTitle2,
  CidadeInput,
  CofferItemActions,
  ComplementoInput,
  Divider,
  LabelOptional,
  NumeroInput,
  RemoverButton,
  RuaInput,
  UFInput,
} from './styles'
import React from 'react'
import { Counter } from '../../components/Counter'

export function Cart() {
  const [value, setValue] = React.useState('')
  return (
    <CartFrameContainer>
      <CartFrameTitle>Complete seu pedido</CartFrameTitle>
      <CartFrame1>
        <CartFrame1Card>
          <CartFrame1CardDelivery>
            <CartFrame1CardDeliveryIcon>
              <MapPinLine size={22} color="#dbac2c" />
            </CartFrame1CardDeliveryIcon>
            <CartFrame1CardDeliveryDescription>
              <CartFrame2CardDeliveryAddress>
                Endereço de Entrega
              </CartFrame2CardDeliveryAddress>
              <CartFrame2CardDeliveryInfo>
                Informe o endereço onde deseja receber seu pedido
              </CartFrame2CardDeliveryInfo>
            </CartFrame1CardDeliveryDescription>
          </CartFrame1CardDelivery>
          <CartFrame1Form>
            <CEPInput placeholder="CEP" />
            <RuaInput placeholder="Rua" />
            <span>
              <NumeroInput placeholder="Numero" />

              <ComplementoInput
                name="complementoInput"
                placeholder="Complemento"
              ></ComplementoInput>
              <LabelOptional>Opcional</LabelOptional>
            </span>
            <span>
              <BairroInput placeholder="Bairro" />
              <CidadeInput placeholder="Cidade" />
              <UFInput placeholder="UF" />
            </span>
          </CartFrame1Form>
        </CartFrame1Card>

        <CartFramePayment>
          <CartFramePaymentDescription>
            <CurrencyDollar size={22} color="#8047F8" />
            <div>
              <CartFramePaymentDescriptionPay>
                Pagamento
              </CartFramePaymentDescriptionPay>
              <CartFramePaymentDescriptionInfo>
                Informe o valor do pagamento
              </CartFramePaymentDescriptionInfo>
            </div>
          </CartFramePaymentDescription>

          <CartFramePaymentButtons
            type="single"
            value={value}
            onValueChange={(value) => {
              if (value) setValue(value)
            }}
          >
            <CartFramePaymentButtonCredit value="credit">
              <CreditCard color="#8047F8" /> CARTÃO DE CRÉDITO
            </CartFramePaymentButtonCredit>
            <CartFramePaymentButtonDebit value="debit">
              <Bank color="#8047F8" /> CARTÃO DE DÉBITO
            </CartFramePaymentButtonDebit>
            <CartFramePaymentButtonMoney value="money">
              <Money color="#8047F8" /> DINHEIRO
            </CartFramePaymentButtonMoney>
          </CartFramePaymentButtons>
        </CartFramePayment>
      </CartFrame1>

      <CartFrameTitle2>Cafés Selecionados</CartFrameTitle2>

      <CartFrame1CardListCoffee>
        <CartFrame1CardListCoffeeItens>
          <CartFrame1CardListCoffeeItem>
            <img src={coffeeTrad} alt="" width="64px" height="64px" />
            <CartFrame1CardListCoffeeItemDetails>
              <span>Expresso Tracional</span>
              <CofferItemActions>
                <Counter />
                <RemoverButton>
                  <Trash color="#8047F8" />
                  Remover
                </RemoverButton>
              </CofferItemActions>
            </CartFrame1CardListCoffeeItemDetails>
            <CartFrame1CardListCoffeeItemPrice>
              R$ 9,90
            </CartFrame1CardListCoffeeItemPrice>
          </CartFrame1CardListCoffeeItem>
          <span>
            <Divider />
          </span>
        </CartFrame1CardListCoffeeItens>

        <CartFrame1CardListCoffeeItens>
          <CartFrame1CardListCoffeeItem>
            <img src={coffeeTrad} alt="" width="64px" height="64px" />
            <CartFrame1CardListCoffeeItemDetails>
              <span>Expresso Tracional</span>
              <CofferItemActions>
                <Counter />
                <RemoverButton>
                  <Trash color="#8047F8" />
                  Remover
                </RemoverButton>
              </CofferItemActions>
            </CartFrame1CardListCoffeeItemDetails>
            <CartFrame1CardListCoffeeItemPrice>
              R$ 9,90
            </CartFrame1CardListCoffeeItemPrice>
          </CartFrame1CardListCoffeeItem>
          <Divider />
        </CartFrame1CardListCoffeeItens>

        <CartFrame1CardListCoffeeTotals>
          <CartFrame1CardListCoffeeTotalItens>
            <span id="texto">Total de itens</span>
            <span id="valor">R$ 29,70</span>
          </CartFrame1CardListCoffeeTotalItens>
          <CartFrame1CardListCoffeeTotalDelivery>
            <span id="texto">Entrega</span>
            <span id="valor">R$ 3,50</span>
          </CartFrame1CardListCoffeeTotalDelivery>
          <CartFrame1CardListCoffeeTotalGeneral>
            <span id="texto">Total</span>
            <span id="valor">R$ 33,20</span>
          </CartFrame1CardListCoffeeTotalGeneral>
        </CartFrame1CardListCoffeeTotals>

        <CartFrame1CardListCoffeeTotalsButton>
          Confirmar Pedido
        </CartFrame1CardListCoffeeTotalsButton>
      </CartFrame1CardListCoffee>
    </CartFrameContainer>
  )
}
