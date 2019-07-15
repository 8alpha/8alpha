import React, { useState } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { injectIntl } from "gatsby-plugin-intl";

import { Section } from "../css/style";

import {
  TechFinanceTile,
  TechAiTile,
  TechImagingTile,
  TechEnterpriseTile,
} from "../resources/techTiles";

const TechBox = styled.div`
  margin-left: 30rem;
  margin-right: 30rem;
  display: grid;

  @media screen and (max-width: 599px) {
    grid-template-columns: 1fr;
    grid-template-rows: auto;
    grid-gap: 2vh 2vw;
  }

  @media screen and (min-width: 600px) {
    grid-template-columns: 1fr 1fr;
    grid-template-rows: auto;
    grid-gap: 2vh 2vw;
  }

  @media screen and (min-width: 1200px) {
    grid-template-columns: 1fr 1fr;
    grid-template-rows: auto;
    grid-gap: 2vh 2vw;
  }
`;

const Tile = styled.div`
  a {
    text-decoration: none;
  }
`;

const Technologies = ({ intl }) => {
  const defaultTileSelectStates = {
    finance: false,
    ai: false,
    imaging: false,
    enterprise: false,
  };

  const defaultTileHoverStates = {
    finance: false,
    ai: false,
    imaging: false,
    enterprise: false,
  };

  const [tileSelectStates, setSelectState] = useState(defaultTileSelectStates);
  const [tileHoverStates, setHoverState] = useState(defaultTileHoverStates);

  const handleTileSelect = (e, tileName) => {
    e.preventDefault();

    Object.entries(tileSelectStates).map(([key]) => {
      if (key === tileName) {
        tileSelectStates[key] = true;
      } else {
        tileSelectStates[key] = false;
      }
    });

    setSelectState({ ...defaultTileSelectStates, ...tileSelectStates });
  };

  const handleHover = (hoverState, tile) => {
    Object.entries(tileHoverStates).map(([key]) => {
      if (key === tile) {
        tileHoverStates[key] = hoverState;
      }
    });

    setHoverState({ ...defaultTileHoverStates, ...tileHoverStates });
  };

  const renderTile = (tile, tileFn) => (
    <Tile
      onMouseEnter={() => handleHover(true, tile)}
      onMouseLeave={() => handleHover(false, tile)}
    >
      <a href="#" onClick={e => handleTileSelect(e, tile)}>
        {tileFn}
      </a>
    </Tile>
  );

  return (
    <Section>
      <h2 lang={intl.locale}>{intl.formatMessage({ id: "techHeading" })}</h2>
      {tileSelectStates.finance && <p>Finance Tile Selected</p>}
      {tileSelectStates.ai && <p>AI Machine Learning Tile Selected</p>}
      {tileSelectStates.imaging && <p>CG & Image Processing Tile Selected</p>}
      {tileSelectStates.enterprise && <p>Enterprise Tile Selected</p>}
      <TechBox>
        {renderTile(
          "finance",
          <TechFinanceTile
            intl={intl}
            hoverState={tileHoverStates.finance}
            selectState={tileSelectStates.finance}
          />
        )}
        {renderTile(
          "ai",
          <TechAiTile
            intl={intl}
            hoverState={tileHoverStates.ai}
            selectState={tileSelectStates.ai}
          />
        )}

        {renderTile(
          "imaging",
          <TechImagingTile
            intl={intl}
            hoverState={tileHoverStates.imaging}
            selectState={tileSelectStates.imaging}
          />
        )}

        {renderTile(
          "enterprise",
          <TechEnterpriseTile
            intl={intl}
            hoverState={tileHoverStates.enterprise}
            selectState={tileSelectStates.enterprise}
          />
        )}
      </TechBox>
    </Section>
  );
};

Technologies.propTypes = {
  intl: PropTypes.object.isRequired,
};

export default injectIntl(Technologies);
