import styled from "styled-components";
import { Link } from "gatsby-plugin-intl";

export const NavBar = styled.div`
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  align-items: center;
`;

export const NavBarLogo = styled.div`
  /* Limit hover to size of Logo */
  flex-basis: 182px;
`;

export const NavBarButton = styled.button`
  font-size: var(--p-font-size);
  color: var(--primary-color);
  letter-spacing: var(--p-letter-spacing);
  text-decoration: none;
  flex-basis: 8rem;

  border: none;
  padding: 0;
  background-color: rgba(0, 0, 0, 0);
  cursor: pointer;
  user-select: none;
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

export const activeStyles = {
  color: "#d6d6d6",
};

export const NavBarLink = styled(Link)`
  font-size: var(--p-font-size);
  color: var(--primary-color);
  letter-spacing: var(--p-letter-spacing);
  text-decoration: none;
  flex-basis: 7rem;

  &:active {
    color: var(--secondary-color);
  }

  &:link {
    color: var(--secondary-color);
  }

  &:hover {
    text-decoration: underline;
  }

  &:lang(ja) {
    font-family: "Noto Sans JP", sans-serif;
    letter-spacing: normal;
  }
`;
