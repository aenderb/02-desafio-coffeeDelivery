import styled from 'styled-components'

export const OrderContainer = styled.main`
  width: 100%;
  max-width: 1440px;
  margin: 4rem auto 0;
  padding: 0 1rem;
`

export const OrderInfo = styled.div`
  /* Uhu! Pedido confirmado */

  position: absolute;
  width: 353px;
  height: 42px;
  left: 220px;
  top: 184px;

  /* Title/Title L */

  font-family: 'Baloo 2';
  font-style: normal;
  font-weight: 800;
  font-size: 32px;
  line-height: 130%;
  /* identical to box height, or 42px */

  /* Brand / Yellow Dark */

  color: #c47f17;
`

export const OrderMsg = styled.div`
  /* Agora é só aguardar que logo o café chegará até você */

  //position: absolute;
  width: 552px;
  height: 26px;
  left: calc(50% - 552px / 2 - 284px);
  top: 230px;

  /* Text/Regular L */

  font-family: 'Roboto';
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 130%;
  /* identical to box height, or 26px */

  /* Base/Subtitle */

  color: #403937;
  font-stretch: 100;
`

export const OrderDetailsBox = styled.div`
  /* Order info */

  //box-sizing: border-box;

  /* Auto layout */

  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 40px;
  gap: 32px;

  //position: absolute;
  width: 526px;
  height: 270px;
  left: calc(50% - 526px / 2 - 297px);
  top: 296px;
  margin-top: 40px;

  background: linear-gradient(#fafafa, #fafafa) padding-box,
    linear-gradient(to right, #dbac2c, #8047f8) border-box;
  border-radius: 6px 36px;
  border: 1px solid transparent;
`

export const OrderDetails = styled.span``

export const OrderDetailsLocal = styled.span`
  /* Local */

  /* Auto layout */

  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 0px;
  gap: 12px;

  width: 354px;
  height: 42px;

  /* Inside auto layout */

  flex: none;
  order: 0;
  flex-grow: 0;
`

export const IconBrackgroundLocal = styled.div`
  /* Icon */

  /* Auto layout */

  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 8px;
  gap: 8px;

  width: 32px;
  height: 32px;

  /* Brand/Purple */

  background: #8047f8;
  border-radius: 1000px;

  /* Inside auto layout */

  flex: none;
  order: 0;
  flex-grow: 0;
`

export const DescriptionLocal = styled.div`
  /* Entrega em Rua João Daniel Martinelli, 102Farrapos - Porto Alegre, RS */

  width: 310px;
  height: 42px;

  /* Text/Regular M */

  font-family: 'Roboto';
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 130%;
  /* or 21px */

  /* Base/Text */

  color: #574f4d;

  /* Inside auto layout */

  flex: none;
  order: 1;
  flex-grow: 0;
`

export const OrderDetailsTime = styled.span`
  /* Time */

  /* Auto layout */

  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 0px;
  gap: 12px;

  width: 185px;
  height: 42px;

  /* Inside auto layout */

  flex: none;
  order: 1;
  flex-grow: 0;
`
export const IconBrackgroundTime = styled.div`
  /* Icon */

  /* Auto layout */

  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 8px;
  gap: 8px;

  width: 32px;
  height: 32px;

  /* Brand / Yellow */

  background: #dbac2c;
  border-radius: 1000px;

  /* Inside auto layout */

  flex: none;
  order: 0;
  flex-grow: 0;
`

export const DescriptionTime = styled.div`
  /* Previsão de entrega 20 min - 30 min */

  width: 141px;
  height: 42px;

  /* Text/Regular M */

  font-family: 'Roboto';
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 130%;
  /* or 21px */

  /* Base/Text */

  color: #574f4d;

  /* Inside auto layout */

  flex: none;
  order: 1;
  flex-grow: 0;
`

export const OrderDetailsPayment = styled.span`
  /* Payment */

  /* Auto layout */

  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 0px;
  gap: 12px;

  width: 206px;
  height: 42px;

  /* Inside auto layout */

  flex: none;
  order: 2;
  flex-grow: 0;
`

export const IconBrackgroundPayment = styled.div`
  /* Icon */

  /* Auto layout */

  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 8px;
  gap: 8px;

  width: 32px;
  height: 32px;

  /* Brand / Yellow Dark */

  background: #c47f17;
  border-radius: 1000px;

  /* Inside auto layout */

  flex: none;
  order: 0;
  flex-grow: 0;
`

export const DescriptionPayment = styled.div`
  /* Pagamento na entrega Cartão de Crédito */

  width: 162px;
  height: 42px;

  /* Text/Regular M */

  font-family: 'Roboto';
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 130%;
  /* or 21px */

  /* Base/Text */

  color: #574f4d;

  /* Inside auto layout */

  flex: none;
  order: 1;
  flex-grow: 0;
`

export const Ilustration = styled.div`
  /* Illustration */

  position: absolute;
  width: 492px;
  height: 293px;
  left: 842px;
  top: 284px;
`
