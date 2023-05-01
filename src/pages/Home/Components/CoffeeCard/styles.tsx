import styled from 'styled-components'

export const CoffeeListCard = styled.div`
  /* Coffee Card */

  position: relative;
  width: 256px;
  height: 310px;
  left: calc(50% - 1120px / 2);
  top: 0px;
  display: flex;
  flex-direction: row;

  /* Base/Card */

  background: #f3f2f2;
  border-radius: 6px 36px;
`

export const CoffeeListCardImg = styled.div`
  img {
    /* Coffee */

    position: absolute;
    width: 120px;
    height: 120px;
    left: calc(50% - 120px / 2);
    top: -20px;
  }
`

export const CoffeeListCardTag = styled.div`
  /* Tags */

  /* Auto layout */

  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 0px;
  gap: 4px;

  position: absolute;
  width: 81px;
  height: 21px;
  left: calc(50% - 81px / 2);
  top: 112px;
`

export const CoffeeListCardTagContent = styled.div`
  /* Tag 1 */

  /* Auto layout */

  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 4px 8px;

  /* Brand/Yellow Light */

  background: #f1e9c9;
  border-radius: 100px;

  /* Inside auto layout */

  flex: none;
  order: 0;
  flex-grow: 0;

  span {
    /* Tradicional */

    /* Components/Tag */
    justify-content: center;
    align-items: center;

    font-family: 'Roboto';
    font-style: normal;
    font-weight: 700;
    font-size: 10px;
    line-height: 130%;
    /* identical to box height, or 13px */

    text-transform: uppercase;

    /* Brand / Yellow Dark */

    color: #c47f17;

    /* Inside auto layout */

    flex: none;
    order: 0;
    flex-grow: 0;
  }
`
export const CoffeeListCardName = styled.p`
  /* Name */

  /* Name */

  position: absolute;
  height: 26px;
  left: 20px;
  right: 20px;
  top: 149px;

  /* Title/Title S */

  font-family: 'Baloo 2';
  font-style: normal;
  font-weight: 700;
  font-size: 20px;
  line-height: 130%;
  /* identical to box height, or 26px */

  display: flex;
  justify-content: center;
  align-items: flex-end;
  text-align: center;

  /* Base/Subtitle */

  color: #403937;
`

export const CoffeeListCardDescription = styled.p`
  /* Description */

  position: absolute;
  height: 36px;
  left: 20px;
  right: 20px;
  top: 183px;

  /* Text/Regular S */

  font-family: 'Roboto';
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 130%;
  /* or 18px */

  text-align: center;

  /* Base/Label */

  color: #8d8686;
`

export const CoffeeListCardBuy = styled.div`
  /* Buy */

  /* Auto layout */

  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 0px;
  gap: 29px;

  position: absolute;
  height: 38px;
  left: 24px;
  right: 24px;
  bottom: 20px;

  p {
    /* R$ 9,90 */

    width: 67px;
    height: 31px;

    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 130%;
    /* or 18px */

    text-align: right;

    /* Base/Text */

    color: #574f4d;

    /* Inside auto layout */

    flex: none;
    order: 0;
    flex-grow: 0;
  }
`

export const CoffeeListCardBuyPrice = styled.span`
  /* R$ 9,90 */

  width: 67px;
  height: 31px;

  font-family: 'Baloo 2';
  font-style: normal;
  font-weight: 800;
  font-size: 24px;
  line-height: 130%;
  /* or 31px */

  text-align: right;

  /* Base/Text */

  color: #574f4d;

  /* Inside auto layout */

  flex: none;
  order: 0;
  flex-grow: 0;
`

export const CoffeeListCardBuyCounterCartButton = styled.button`
  /* Icon Button */

  /* Auto layout */

  border: none !important;
  background: #e6e5e5;
  box-shadow: 0 0 0 0 rgba(0, 0, 0, 0), 0 0 0 0 rgba(0, 0, 0, 0) !important;

  display: flex;

  justify-content: center;
  align-items: center;
  padding: 8px;

  width: 38px;
  height: 38px;

  margin-left: -28px;
  /* Brand/Purple Dark */

  background: #4b2995;
  border-radius: 6px;

  /* Inside auto layout */

  flex: none;
  order: 1;
  flex-grow: 0;

  &:hover {
    background-color: #8047f8;
  }
`
