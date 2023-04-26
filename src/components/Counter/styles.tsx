import styled from 'styled-components'

export const CoffeeListCardBuyCounter = styled.div`
  /* Counter */

  /* Auto layout */

  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 8px;
  gap: 4px;

  width: 72px;
  height: 38px;

  /* Base/Button */

  background: #e6e5e5;
  border-radius: 6px;

  /* Inside auto layout */

  flex: none;
  order: 0;
  flex-grow: 0;
`

export const CounterSpan = styled.span`
  /* 1 */

  width: 20px;
  height: 21px;
  display: flex;

  justify-content: center;
  align-items: center;
  padding: 8px;
  gap: 4px;

  /* Text/Regular M */

  font-family: 'Roboto';
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 130%;
  /* identical to box height, or 21px */

  /* Base/Title */

  color: #272221;

  /* Inside auto layout */

  flex: none;
  order: 1;
  flex-grow: 0;
`

export const MinusButton = styled.button`
  border: none;
  background: #e6e5e5;
  box-shadow: 0 0 0 0 rgba(0, 0, 0, 0), 0 0 0 0 rgba(0, 0, 0, 0) !important;
`

export const PlusButton = styled.button`
  border: none !important;
  background: #e6e5e5;
  box-shadow: 0 0 0 0 rgba(0, 0, 0, 0), 0 0 0 0 rgba(0, 0, 0, 0) !important;
`
