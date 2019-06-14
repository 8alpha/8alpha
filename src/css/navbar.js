import styled from "styled-components";

export const NavBar = styled.div`
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  align-items: center;

  .logo {
    flex-basis: 182px;
  }
`;

export const NavBarLogo = styled.div`
  /* Limit hover to size of Logo */
  flex-basis: 182px;
`;

export const NavBarButton = styled.button`
  border: none;
  padding: 0;
  background-color: rgba(0, 0, 0, 0);
  text-decoration: none;
  cursor: pointer;
  user-select: none;
  font-size: var(--p-font-size);
  color: var(--primary-color);
  letter-spacing: var(--p-letter-spacing);
  -webkit-appearance: none;
  -moz-appearance: none;

  &:focus {
    outline: 0;
  }

  &:hover {
    color: var(--secondary-color);
  }

  &:lang(ja) {
    font-family: "Noto Sans JP", sans-serif;
    letter-spacing: normal;
  }
`;
