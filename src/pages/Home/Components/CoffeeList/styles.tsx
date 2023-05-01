import styled from 'styled-components'

export const CoffeeListContainer = styled.div`
  /* Coffee List */

  width: 100%;
  max-width: 1120px;
  margin: 4rem 212px 0;
  padding: 0 1.5rem;

  position: absolute;
  //width: 1440px;
  height: 1645px;
  left: 0px;
  right: 0px;
  top: 648px;
`
export const CoffeeListTitle = styled.div`
  /* Nossos cafés */

  position: absolute;
  width: 193px;
  height: 42px;

  top: 32px;

  /* Title/Title L */

  font-family: 'Baloo 2';
  font-style: normal;
  font-weight: 800;
  font-size: 32px;
  line-height: 130%;
  /* identical to box height, or 42px */

  display: flex;
  align-items: center;

  /* Base/Subtitle */

  color: #403937;
`

export const CoffeeListItems = styled.div`
  /* List */
  position: absolute;
  width: 1120px;

  top: 128px;
  display: flex;
  flex-wrap: wrap;
  gap: 2rem;
`
