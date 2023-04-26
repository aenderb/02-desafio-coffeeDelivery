import styled from 'styled-components'

export const HeaderContainer = styled.div`
  /* Navbar */

  /* Auto layout */

  width: 100%;
  max-width: 1440px;
  margin-left: 4.18rem;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 2rem 10rem;
  //gap: 820px;

  //position: absolute;
  height: 104px;
  left: 0px;
  right: 0px;
  top: 0px;

  background: #fafafa;
  position: fixed;
  z-index: 99;

  nav {
    display: flex;
    gap: 0.5rem;
    display: flex;
    justify-content: center;
    align-items: center;

    span {
      /* Location */

      /* Auto layout */

      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: center;
      padding: 8px;
      gap: 4px;

      width: 143px;
      height: 38px;

      /* Brand/Purple Light */

      background: ${(props) => props.theme['purple-light']};

      border-radius: 6px;

      /* Inside auto layout */

      flex: none;
      order: 0;
      flex-grow: 0;

      font-family: 'Roboto';
      color: ${(props) => props.theme['purple-dark']};
    }

    a {
      /* Cart */

      /* Auto layout */

      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: center;
      padding: 8px;
      gap: 4px;
      isolation: isolate;

      width: 38px;
      height: 38px;

      /* Brand/Yellow Light */

      background: #f1e9c9;
      border-radius: 6px;

      /* Inside auto layout */

      flex: none;
      order: 1;
      flex-grow: 0;
    }
  }
`
