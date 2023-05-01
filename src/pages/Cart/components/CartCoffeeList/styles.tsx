import styled from 'styled-components'

export const CartFrame1CardListCoffeeItens = styled.div`
  margin: 0;
  padding: 0;
  gap: 0;
  border: none;
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

  width: 85px;
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
  margin-left: 30px;
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
