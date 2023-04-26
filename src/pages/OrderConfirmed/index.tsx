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

export function OrderConfirmed() {
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
                Entrega em <b> Rua João Daniel Martinelli, 102 </b> Farrapos -
                Porto Alegre, RS
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
                Pagamento na entrega <b> Cartão de Crédito </b>
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
