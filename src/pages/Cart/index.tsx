import {
  Bank,
  CreditCard,
  CurrencyDollar,
  MapPinLine,
  Money,
} from 'phosphor-react'

import {
  BairroInput,
  CEPInput,
  CartFrame1,
  CartFrame1Card,
  CartFrame1CardDelivery,
  CartFrame1CardDeliveryDescription,
  CartFrame1CardDeliveryIcon,
  CartFrame1CardListCoffee,
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
  ComplementoInput,
  LabelOptional,
  NumeroInput,
  RuaInput,
  UFInput,
} from './styles'
import React, { useContext, useRef } from 'react'

import { CartCoffeeList } from './components/CartCoffeeList'
import { CartContext } from '../../contexts/CartContext'
import { formatMoney } from '../../utils/formatMoney'
import { FormProvider, useForm } from 'react-hook-form'
import * as zod from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { useNavigate } from 'react-router-dom'

const deliverPrice = 3.5

const cartFilledSchema = zod.object({
  cep: zod.string().min(1, 'Informe o CEP'),
  street: zod.string().min(1, 'Informe o Rua'),
  number: zod.string().min(1, 'Informe o Número'),
  complement: zod.string(),
  district: zod.string().min(1, 'Informe o Bairro'),
  city: zod.string().min(1, 'Informe a Cidade'),
  uf: zod.string().min(1, 'Informe a UF'),
  paymentMethod: zod.string(),
})

export type OrderData = zod.infer<typeof cartFilledSchema>

type TOrderFormData = OrderData

export function Cart() {
  const btnPaymentRef = useRef<HTMLButtonElement>(null)

  const [value, setValue] = React.useState('')

  const { cartItems, cartQuantity, cartCoffeeTotal, resetCart } =
    useContext(CartContext)

  const cartTotal = deliverPrice + cartCoffeeTotal

  const formattedDeliveryPrice = formatMoney(deliverPrice)
  const formattedCoffeeTotal = formatMoney(cartCoffeeTotal)
  const formattedTotalGeneral = formatMoney(cartTotal)

  const { register, handleSubmit } = useForm<TOrderFormData>({
    resolver: zodResolver(cartFilledSchema),
  })

  const cartFilledForm = useForm<TOrderFormData>({
    resolver: zodResolver(cartFilledSchema),
  })

  const navigate = useNavigate()

  function handleConfirmOrder(data: TOrderFormData) {
    data.paymentMethod = value
    if (data.paymentMethod) {
      navigate('/success', { state: data })
      resetCart()
    } else {
      // alert('informe o metodo de pagamento')
      btnPaymentRef.current?.focus()
    }
  }

  return (
    <FormProvider {...cartFilledForm}>
      <CartFrameContainer onSubmit={handleSubmit(handleConfirmOrder)}>
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
              <CEPInput placeholder="CEP" {...register('cep')} />
              <RuaInput placeholder="Rua" {...register('street')} />
              <span>
                <NumeroInput placeholder="Numero" {...register('number')} />

                <ComplementoInput
                  placeholder="Complemento"
                  {...register('complement')}
                ></ComplementoInput>
                <LabelOptional>Opcional</LabelOptional>
              </span>
              <span>
                <BairroInput placeholder="Bairro" {...register('district')} />
                <CidadeInput placeholder="Cidade" {...register('city')} />
                <UFInput placeholder="UF" {...register('uf')} />
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
                  Informe o método do pagamento
                </CartFramePaymentDescriptionInfo>
              </div>
            </CartFramePaymentDescription>

            <CartFramePaymentButtons
              type="single"
              value={value}
              onValueChange={(value) => {
                if (value) setValue(value)
              }}
              {...register('paymentMethod')}
            >
              <CartFramePaymentButtonCredit
                ref={btnPaymentRef}
                id="payment"
                value="Cartão de crédito"
              >
                <CreditCard color="#8047F8" /> CARTÃO DE CRÉDITO
              </CartFramePaymentButtonCredit>
              <CartFramePaymentButtonDebit
                value="Cartão de débito"
                {...register('paymentMethod')}
              >
                <Bank color="#8047F8" /> CARTÃO DE DÉBITO
              </CartFramePaymentButtonDebit>
              <CartFramePaymentButtonMoney
                value="Dinheiro"
                {...register('paymentMethod')}
              >
                <Money color="#8047F8" /> DINHEIRO
              </CartFramePaymentButtonMoney>
            </CartFramePaymentButtons>
          </CartFramePayment>
        </CartFrame1>

        <CartFrameTitle2>Cafés Selecionados</CartFrameTitle2>

        <CartFrame1CardListCoffee>
          {cartItems.map((cartcoffee) => (
            <CartCoffeeList key={cartcoffee.id} cartcoffee={cartcoffee} />
          ))}

          <CartFrame1CardListCoffeeTotals>
            <CartFrame1CardListCoffeeTotalItens>
              <span id="texto">Total de itens</span>
              <span id="valor">R$ {formattedCoffeeTotal}</span>
            </CartFrame1CardListCoffeeTotalItens>
            <CartFrame1CardListCoffeeTotalDelivery>
              <span id="texto">Entrega</span>
              <span id="valor">R$ {formattedDeliveryPrice}</span>
            </CartFrame1CardListCoffeeTotalDelivery>
            <CartFrame1CardListCoffeeTotalGeneral>
              <span id="texto">Total</span>
              <span id="valor">R$ {formattedTotalGeneral}</span>
            </CartFrame1CardListCoffeeTotalGeneral>
          </CartFrame1CardListCoffeeTotals>

          <CartFrame1CardListCoffeeTotalsButton
            disabled={cartQuantity <= 0}
            type="submit"
          >
            Confirmar Pedido
          </CartFrame1CardListCoffeeTotalsButton>
        </CartFrame1CardListCoffee>
      </CartFrameContainer>
    </FormProvider>
  )
}
