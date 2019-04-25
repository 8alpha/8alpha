import React from "react";
import styled from "styled-components";
import { Link } from "gatsby";
import PropTypes from "prop-types";

const Menu = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: flex-start;
`;

const MenuItem = styled.div`
  flex-basis: 12%;
  font-weight: bold;
  font-size: 2.5rem;
`;

const StyledLink = styled(Link)`
  color: white;
  text-decoration: none;
  &:hover {
    border-bottom: 2px solid white;
  }
`;

const SectionMenu = ({ menu }) => (
  <Menu>
    {menu.map(item => (
      <MenuItem key={item.name}>
        <StyledLink
          to={item.path}
          activeStyle={{ borderBottom: `2px solid white` }}
        >
          <>{item.name}</>
        </StyledLink>
      </MenuItem>
    ))}
  </Menu>
);

SectionMenu.propTypes = {
  menu: PropTypes.arrayOf(PropTypes.object),
};

export default SectionMenu;
