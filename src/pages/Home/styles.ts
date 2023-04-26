import styled from 'styled-components'
import BackgroundHome from '../../assets/BackgroundHome.svg'

export const HomeContainer = styled.main`
  width: 100%;
  max-width: 1440px;
  margin: 4rem auto 0;
  padding: 0 1rem;
`

export const HomeIntro = styled.div`
  /* Intro */

  //position: absolute;
  position: absolute;
  height: 544px;
  left: 120px;
  right: 0px;
  top: 104px;
  background: url(${BackgroundHome});
`

export const HomeTitle = styled.div`
  /* Title */

  /* Auto layout */

  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0px;
  gap: 16px;

  position: absolute;
  width: 588px;
  height: 192px;
  left: 112px;
  top: calc(50% - 192px / 2 - 82px);
`

export const HomeTitle1 = styled.div`
  /* Encontre o café perfeito para qualquer hora do dia */

  width: 100%;

  /* Title/Title XL */

  font-family: 'Baloo 2';
  font-style: normal;
  font-weight: 800;
  font-size: 48px;
  line-height: 130%;
  /* or 62px */

  /* Base/Title */

  color: #272221;

  /* Inside auto layout */

  flex: none;
  order: 0;
  align-self: stretch;
  flex-grow: 0;
`

export const HomeTitle2 = styled.div`
  /* Com o Coffee Delivery você recebe seu café onde estiver, a qualquer hora */

  width: 100%;

  /* Text/Regular L */

  font-family: 'Roboto';
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 130%;
  /* or 26px */

  /* Base/Subtitle */

  color: #403937;
  font-stretch: 100;

  /* Inside auto layout */

  flex: none;
  order: 1;
  align-self: stretch;
  flex-grow: 0;
`

export const HomeItems = styled.div`
  /* Items */

  position: absolute;
  width: 567px;
  height: 84px;
  left: 112px;
  top: calc(50% - 84px / 2 + 122px);
`

export const HomeItem1 = styled.span`
  /* Item 1 */

  /* Auto layout */

  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 0px;
  gap: 12px;

  position: absolute;
  width: 231px;
  height: 32px;
  left: 0px;
  top: 0px;

  p {
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
  }
`
export const HomeItem2 = styled.span`
  /* Item 2 */

  /* Auto layout */

  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 0px;
  gap: 12px;

  position: absolute;
  width: 231px;
  height: 32px;
  left: 0px;
  top: 52px;

  p {
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
  }
`

export const HomeItem3 = styled.span`
  /* Item 3 */

  /* Auto layout */

  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 0px;
  gap: 12px;

  position: absolute;
  width: 294px;
  height: 32px;
  left: 271px;
  top: 0px;

  p {
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

    /* Base/Text */

    background: #574f4d;
    border-radius: 1000px;

    /* Inside auto layout */

    flex: none;
    order: 0;
    flex-grow: 0;
  }
`

export const HomeItem4 = styled.span`
  /* Item 4 */

  /* Auto layout */

  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 0px;
  gap: 12px;

  position: absolute;
  width: 294px;
  height: 32px;
  left: 271px;
  top: 52px;

  p {
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
  }
`

export const HomeImage = styled.div`
  /* Imagem */

  position: absolute;
  width: 476px;
  height: 360px;
  left: 762px;
  top: calc(50% - 360px / 2);
`
