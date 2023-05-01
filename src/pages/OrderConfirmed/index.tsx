import { CurrencyDollar, MapPin, Timer } from 'phosphor-react'
import IllustrationImg from '../../assets/Illustration.png'
import {
  DescriptionLocal,
  DescriptionPayment,
  DescriptionTime,
  IconBrackgroundLocal,
  IconBrackgroundPayment,
  IconBrackgroundTime,
  Ilustration,
  OrderContainer,
  OrderDetailsBox,
  OrderDetailsLocal,
  OrderDetailsPayment,
  OrderDetailsTime,
  OrderInfo,
  OrderMsg,
} from './styles'
import { useLocation, useNavigate } from 'react-router-dom'
import { OrderData } from '../Cart'
import { useEffect } from 'react'

interface ILocation {
  state: OrderData
}

export function OrderConfirmed() {
  const { state } = useLocation() as unknown as ILocation

  const navigate = useNavigate()

  useEffect(() => {
    if (!state) {
      navigate('/')
    }
  }, [])

  if (!state) {
    return <></>
  }

  return (
    <OrderContainer>
      <OrderInfo>
        Uhu! Pedido confirmado
        <OrderMsg>
          Agora é só aguardar que logo o café chegará até você
          <OrderDetailsBox>
            <OrderDetailsLocal>
              <IconBrackgroundLocal>
                <MapPin color="white" size={16} weight="fill" />
              </IconBrackgroundLocal>
              <DescriptionLocal>
                Entrega em{' '}
                <b>
                  {state.street}, {state.number}
                </b>{' '}
                {state.district} - {state.city}, {state.uf}
              </DescriptionLocal>
            </OrderDetailsLocal>
            <OrderDetailsTime>
              <IconBrackgroundTime>
                <Timer color="white" size={16} weight="fill" />
              </IconBrackgroundTime>
              <DescriptionTime>
                Previsão de entrega <b> 20 min - 30 min </b>
              </DescriptionTime>
            </OrderDetailsTime>
            <OrderDetailsPayment>
              <IconBrackgroundPayment>
                <CurrencyDollar color="white" size={16} weight="fill" />
              </IconBrackgroundPayment>
              <DescriptionPayment>
                Pagamento na entrega <b> {state.paymentMethod} </b>
              </DescriptionPayment>
            </OrderDetailsPayment>
          </OrderDetailsBox>
        </OrderMsg>
      </OrderInfo>
      <Ilustration>
        <img src={IllustrationImg} alt="" />
      </Ilustration>
    </OrderContainer>
  )
}
