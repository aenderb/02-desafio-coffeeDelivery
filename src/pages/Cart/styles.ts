import * as ToggleGroup from '@radix-ui/react-toggle-group'
import styled from 'styled-components'

export const CartFrameContainer = styled.main`
  width: 100%;
  max-width: 1440px;
  margin: 4rem auto 0;
  padding: 0 1.5rem;
`

export const CartFrame = styled.div`
  /* Frame 1 */

  /* Auto layout */

  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0px;
  gap: 12px;

  //position: absolute;
  width: 640px;
  height: 591px;
  left: 220px;
  top: 182px;
`

export const CartFrameTitle = styled.div`
  /* Complete seu pedido */

  position: absolute;
  width: 170px;
  height: 23px;
  left: 220px;
  top: 144px;

  /* Title/Title XS */

  font-family: 'Baloo 2';
  font-style: normal;
  font-weight: 700;
  font-size: 18px;
  line-height: 130%;
  /* or 23px */

  display: flex;
  align-items: center;

  /* Base/Subtitle */

  color: #403937;
`

export const CartFrameTitle2 = styled.div`
  /* Cafés selecionados */

  position: absolute;
  width: 166px;
  height: 23px;
  left: 892px;
  top: 144px;

  /* Title/Title XS */

  font-family: 'Baloo 2';
  font-style: normal;
  font-weight: 700;
  font-size: 18px;
  line-height: 130%;
  /* or 23px */

  display: flex;
  align-items: center;

  /* Base/Subtitle */

  color: #403937;
`

export const CartFrame1 = styled.div`
  /* Frame 1 */

  /* Auto layout */

  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0px;
  gap: 12px;

  position: absolute;
  width: 640px;
  height: 591px;
  left: 220px;
  top: 182px;
`

export const CartFrame1Card = styled.span`
  /* Coffee Card */

  /* Auto layout */

  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 40px;
  gap: 32px;

  width: 640px;
  height: 372px;

  /* Base/Card */

  background: #f3f2f2;
  border-radius: 6px;

  /* Inside auto layout */

  flex: none;
  order: 0;
  align-self: stretch;
  flex-grow: 0;
`

export const CartFrame1CardDelivery = styled.span`
  /* Frame 3 */

  /* Auto layout */

  display: flex;
  flex-direction: row;
  align-items: flex-start;
  padding: 0px;
  gap: 8px;

  width: 560px;
  height: 44px;

  /* Inside auto layout */

  flex: none;
  order: 0;
  align-self: stretch;
  flex-grow: 0;
`

export const CartFrame1CardDeliveryDescription = styled.div`
  /* Frame 1 */

  /* Auto layout */

  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0px;
  gap: 2px;

  width: 530px;
  height: 44px;

  /* Inside auto layout */

  flex: none;
  order: 1;
  flex-grow: 1;
`

export const CartFrame1CardDeliveryIcon = styled.span`
  /* Icon */

  width: 22px;
  height: 22px;

  /* Inside auto layout */

  flex: none;
  order: 0;
  flex-grow: 0;
`

export const CartFrame2CardDeliveryAddress = styled.span`
  /* Endereço de Entrega */

  width: 530px;
  height: 21px;

  /* Text/Regular M */

  font-family: 'Roboto';
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 130%;
  /* identical to box height, or 21px */

  display: flex;
  align-items: center;

  /* Base/Subtitle */

  color: #403937;

  /* Inside auto layout */

  flex: none;
  order: 0;
  align-self: stretch;
  flex-grow: 0;
`

export const CartFrame2CardDeliveryInfo = styled.span`
  /* Informe o endereço onde deseja receber seu pedido */

  width: 530px;
  height: 21px;

  /* Text/Regular S */

  font-family: 'Roboto';
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 130%;
  /* or 18px */

  display: flex;
  align-items: center;

  /* Base/Text */

  color: #574f4d;

  /* Inside auto layout */

  flex: none;
  order: 1;
  align-self: stretch;
  flex-grow: 0;
`

export const CartFrame1Form = styled.span`
  /* Form */

  /* Auto layout */

  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0px;
  gap: 16px;

  width: 560px;
  height: 216px;

  /* Inside auto layout */

  flex: none;
  order: 1;
  align-self: stretch;
  flex-grow: 0;
`
const BaseInput = styled.input`
  /* Input */

  box-sizing: border-box;

  /* Auto layout */
  align-items: center;
  padding: 12px;

  /* Base/Input */

  background: #eeeded;
  /* Base/Button */

  border: 1px solid #e6e5e5;
  border-radius: 4px;

  /* Inside auto layout */

  order: 0;
  flex-grow: 0;

  span {
    width: 100%;
  }
`
export const CEPInput = styled(BaseInput)`
  width: 200px;
  height: 42px;
`

export const RuaInput = styled(BaseInput)`
  width: 560px;
  height: 42px;
`

export const NumeroInput = styled(BaseInput)`
  width: 200px;
  height: 42px;
  margin-right: 12px;
`

export const ComplementoInput = styled(BaseInput)`
  width: 348px;
  height: 42px;
  z-index: 2;
`

export const LabelOptional = styled.label`
  /* Opcional */
  position: absolute;
  margin-left: -60px;
  margin-top: 15px;
  font-family: 'Roboto';
  font-style: italic;
  font-weight: 400;
  font-size: 12px;
  line-height: 130%;
  /* identical to box height, or 16px */

  /* Base/Label */

  color: #8d8686;
`

export const BairroInput = styled(BaseInput)`
  width: 200px;
  height: 42px;
  margin-right: 12px;
`

export const CidadeInput = styled(BaseInput)`
  width: 276px;
  height: 42px;
  margin-right: 12px;
`

export const UFInput = styled(BaseInput)`
  width: 60px;
  height: 42px;
`

export const CartFramePayment = styled.span`
  /* Coffee Card */

  /* Auto layout */

  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 40px;
  gap: 32px;

  width: 640px;
  height: 207px;

  /* Base/Card */

  background: #f3f2f2;
  border-radius: 6px;

  /* Inside auto layout */

  flex: none;
  order: 1;
  flex-grow: 0;
`

export const CartFramePaymentDescription = styled.div`
  /* Frame 1 */

  /* Auto layout */

  display: flex;
  flex-direction: row;
  align-items: flex-start;
  padding: 0px;
  gap: 8px;

  width: 560px;
  height: 44px;

  /* Inside auto layout */

  flex: none;
  order: 0;
  flex-grow: 0;
`

export const CartFramePaymentDescriptionPay = styled.span`
  /* Pagamento */

  width: 530px;
  height: 21px;

  /* Text/Regular M */

  font-family: 'Roboto';
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 130%;
  /* identical to box height, or 21px */

  display: flex;
  align-items: center;

  /* Base/Subtitle */

  color: #403937;

  /* Inside auto layout */

  flex: none;
  order: 0;
  align-self: stretch;
  flex-grow: 0;
`

export const CartFramePaymentDescriptionInfo = styled.span`
  /* O pagamento é feito na entrega. Escolha a forma que deseja pagar */

  width: 530px;
  height: 21px;

  /* Text/Regular S */

  font-family: 'Roboto';
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 130%;
  /* or 18px */

  display: flex;
  align-items: center;

  /* Base/Text */

  color: #574f4d;

  /* Inside auto layout */

  flex: none;
  order: 1;
  align-self: stretch;
  flex-grow: 0;
`
export const CartFramePaymentButtons = styled(ToggleGroup.Root)`
  /* Frame 1 */

  /* Auto layout */

  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 0px;
  gap: 12px;

  width: 560px;
  height: 51px;

  /* Inside auto layout */

  flex: none;
  order: 1;
  flex-grow: 0;
`

export const CartFramePaymentButtonCredit = styled(ToggleGroup.Item)`
  /* Select */

  /* Auto layout */

  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 16px;
  gap: 12px;

  width: 178.67px;
  height: 51px;

  /* Base/Button */

  background: #e6e5e5;
  border-radius: 6px;

  /* Inside auto layout */

  flex: none;
  order: 0;
  flex-grow: 1;

  font-family: 'Roboto';
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 160%;
  /* or 19px */

  text-transform: uppercase;

  /* Base/Text */

  color: #574f4d;

  border: none;

  &:hover {
    background-color: #d7d5d5;
  }

  &[data-state='on'] {
    background-color: #ebe5f9;
    border: 1px solid;
    border-color: #8047f8;
  }
`

export const CartFramePaymentButtonDebit = styled(ToggleGroup.Item)`
  /* Select */

  /* Auto layout */

  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 16px;
  gap: 12px;

  width: 178.67px;
  height: 51px;

  /* Base/Button */

  background: #e6e5e5;
  border-radius: 6px;

  /* Inside auto layout */

  flex: none;
  order: 0;
  flex-grow: 1;

  /* Components/Button S */

  font-family: 'Roboto';
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 160%;
  /* or 19px */

  text-transform: uppercase;

  /* Base/Text */

  color: #574f4d;
  border: none;
  &:hover {
    background-color: #d7d5d5;
  }

  &[data-state='on'] {
    background-color: #ebe5f9;
    border: 1px solid;
    border-color: #8047f8;
  }
`

export const CartFramePaymentButtonMoney = styled(ToggleGroup.Item)`
  /* Select */

  /* Auto layout */

  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 16px;
  gap: 12px;

  width: 178.67px;
  height: 51px;

  /* Base/Button */

  background: #e6e5e5;
  border-radius: 6px;

  /* Inside auto layout */

  flex: none;
  order: 2;
  flex-grow: 1;

  font-family: 'Roboto';
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 160%;
  /* or 19px */

  text-transform: uppercase;

  /* Base/Text */

  color: #574f4d;
  border: none;

  &:hover {
    background-color: #d7d5d5;
  }

  &[data-state='on'] {
    background-color: #ebe5f9;
    border: 1px solid;
    border-color: #8047f8;
  }
`

export const CartFrame1CardListCoffee = styled.div`
  /* Coffee Card */

  /* Auto layout */

  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 40px;
  gap: 24px;

  position: absolute;
  width: 448px;
  height: 498px;
  left: 892px;
  top: 182px;

  /* Base/Card */

  background: #f3f2f2;
  border-radius: 6px 44px;
`

export const CartFrame1CardListCoffeeItemDetails = styled.div`
  /* Details */

  /* Auto layout */

  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0px;
  gap: 8px;

  width: 171px;
  height: 61px;

  /* Inside auto layout */

  flex: none;
  order: 1;
  flex-grow: 0;
`

export const CartFrame1CardListCoffeeItem = styled.div`
  /* Info */

  /* Auto layout */

  display: flex;
  flex-direction: row;

  padding: 0px;
  gap: 20px;

  width: 255px;
  height: 64px;

  /* Inside auto layout */

  flex: none;
  order: 0;
  flex-grow: 0;
`

export const CofferItemActions = styled.div`
  /* Actions */

  /* Auto layout */

  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 0px;
  gap: 8px;

  width: 171px;
  height: 32px;

  /* Inside auto layout */

  flex: none;
  order: 1;
  flex-grow: 0;
`

export const RemoverButton = styled.button`
  /* Button Small */

  /* Auto layout */

  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 0px 8px;
  gap: 4px;

  width: 91px;
  height: 38px;

  /* Base/Button */

  background: #e6e5e5;
  border-radius: 6px;

  /* Components/Button S */

  font-family: 'Roboto';
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 160%;
  /* or 19px */

  text-transform: uppercase;

  /* Base/Text */

  color: #574f4d;

  /* Inside auto layout */

  flex: none;
  order: 1;
  flex-grow: 0;
  border: none;
`

export const CartFrame1CardListCoffeeItemPrice = styled.div`
  /* R$ 9,90 */

  width: 55px;
  height: 21px;

  /* Text/Bold M */

  font-family: 'Roboto';
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 130%;
  /* identical to box height, or 21px */

  align-items: center;
  text-align: right;
  margin-left: 40px;
  /* Base/Text */

  color: #574f4d;

  /* Inside auto layout */

  flex: none;
  order: 1;
  flex-grow: 0;
`

export const Divider = styled.div`
  /* divider */

  width: 368px;
  height: 0px;

  margin-top: 28px;

  /* Base/Button */

  border: 0.8px solid #e6e5e5;

  /* Inside auto layout */

  flex: none;
  order: 1;
  align-self: stretch;
  flex-grow: 0;
`

export const CartFrame1CardListCoffeeItens = styled.div`
  margin: 0;
  padding: 0;
  gap: 0;
  border: none;
`

export const CartFrame1CardListCoffeeTotals = styled.div`
  /* Frame 1 */

  /* Auto layout */

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  padding: 0px;
  gap: 12px;

  width: 368px;
  height: 92px;

  /* Inside auto layout */

  flex: none;
  order: 4;
  align-self: stretch;
  flex-grow: 0;
`

export const CartFrame1CardListCoffeeTotalsButton = styled.button`
  /* Button */

  /* Auto layout */

  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 12px 8px;
  gap: 4px;

  width: 368px;
  height: 46px;

  /* Brand / Yellow */

  background: #dbac2c;
  border-radius: 6px;

  /* Components/Button G */

  font-family: 'Roboto';
  font-style: normal;
  font-weight: 700;
  font-size: 14px;
  line-height: 160%;
  /* or 22px */

  text-transform: uppercase;

  /* Base/White */

  color: #ffffff;
  font-stretch: 100;

  /* Inside auto layout */

  flex: none;
  order: 5;
  align-self: stretch;
  flex-grow: 0;

  border: none;
`

export const CartFrame1CardListCoffeeTotalItens = styled.div`
  /* Frame 1 */

  /* Auto layout */

  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 0px;
  gap: 8px;

  width: 368px;
  height: 21px;

  /* Text/Regular S */

  font-family: 'Roboto';
  font-style: normal;
  font-weight: 400;

  line-height: 130%;
  /* or 18px */

  display: flex;
  align-items: center;
  text-align: right;

  /* Base/Text */

  color: #574f4d;

  span#texto {
    font-size: 14px;
  }

  span#valor {
    font-size: 16px;
  }

  /* Inside auto layout */

  flex: none;
  order: 0;
  align-self: stretch;
  flex-grow: 0;
`

export const CartFrame1CardListCoffeeTotalDelivery = styled.div`
  /* Frame 2 */

  /* Auto layout */

  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 0px;
  gap: 8px;

  width: 368px;
  height: 21px;

  /* Text/Regular S */

  font-family: 'Roboto';
  font-style: normal;
  font-weight: 400;

  line-height: 130%;
  /* or 18px */

  display: flex;
  align-items: center;
  text-align: right;

  /* Base/Text */

  color: #574f4d;

  span#texto {
    font-size: 14px;
  }

  span#valor {
    font-size: 16px;
  }

  /* Inside auto layout */

  flex: none;
  order: 1;
  align-self: stretch;
  flex-grow: 0;
`

export const CartFrame1CardListCoffeeTotalGeneral = styled.div`
  /* Frame 3 */

  /* Auto layout */

  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 0px;
  gap: 8px;

  width: 368px;
  height: 26px;

  /* Text/Bold L */

  font-family: 'Roboto';
  font-style: normal;
  font-weight: 700;
  font-size: 20px;
  line-height: 130%;
  /* identical to box height, or 26px */

  display: flex;
  align-items: center;
  text-align: right;

  /* Base/Subtitle */

  color: #403937;

  /* Inside auto layout */

  flex: none;
  order: 2;
  align-self: stretch;
  flex-grow: 0;
`
