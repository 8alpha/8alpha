import React, { useState } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { injectIntl } from "gatsby-plugin-intl";
/* import { FaCaretLeft, FaCaretRight } from "react-icons/fa/"; */

import { Section } from "../css/style";

import {
  TechFinanceTile,
  TechAIMLTile,
  TechImagingTile,
  TechEnterpriseTile,
  TechLeftArrow,
  TechRightArrow,
  TechClose,
} from "../resources/techTiles";

const DescBox = styled.div`
  width: 80%;
  margin: auto;

  display: grid;
  grid-template-columns: 1fr 10fr 1fr;
  grid-template-rows: auto;
  grid-column-gap: 3vh;

  h3 {
    font-size: 2.5rem;
    margin: 0;
    padding: 0;
  }

  .number {
    color: var(--ternary-color);
  }

  @media screen and (max-width: 599px) {
    grid-template-columns: 1fr;
    grid-template-rows: auto;
    grid-row-gap: 2vh;
  }
`;

const ControlBox = styled.div`
  min-height: 14vh;
  margin-bottom: 2rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  @media screen and (max-width: 599px) {
    display: flex;
    flex-flow: row wrap;
    justify-content: space-between;
    margin-left: 0;
  }

  a {
    text-decoration: none;
  }
`;

const CardBox = styled.div`
  display: grid;
  grid-gap: 2vh 2vw;
  grid-template-rows: auto;

  @media screen and (max-width: 599px) {
    grid-template-columns: 1fr;
  }

  @media screen and (min-width: 600px) {
    width: 80%;
    margin: auto;
    grid-template-columns: 1fr 1fr;
  }

  @media screen and (min-width: 1200px) {
    width: 100%;
    margin: auto;
    grid-template-columns: repeat(4, 1fr);
  }
`;

const Tile = styled.div`
  a {
    text-decoration: none;
  }
`;

const Technologies = ({ intl }) => {
  const defaultTileSelectStates = {
    imaging: false,
    ai: false,
    enterprise: false,
    finance: false,
  };

  const defaultTileHoverStates = {
    imaging: false,
    ai: false,
    enterprise: false,
    finance: false,
  };

  const defaultCtlHoverStates = {
    leftArrow: false,
    rightArrow: false,
    close: false,
  };

  const [tileSelectStates, setSelectState] = useState(defaultTileSelectStates);
  const [tileHoverStates, setTileHoverState] = useState(defaultTileHoverStates);
  const [ctlHoverStates, setCtlHoverState] = useState(defaultCtlHoverStates);

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

  const handleTileHover = (hoverState, tile) => {
    Object.entries(tileHoverStates).map(([key]) => {
      if (key === tile) {
        tileHoverStates[key] = hoverState;
      }
    });

    setTileHoverState({ ...defaultTileHoverStates, ...tileHoverStates });
  };

  const handleCtlHover = (hoverState, control) => {
    Object.entries(ctlHoverStates).map(([key]) => {
      if (key === control) {
        ctlHoverStates[key] = hoverState;
      }
    });

    setCtlHoverState({ ...defaultCtlHoverStates, ...ctlHoverStates });
  };

  const closeSelected = event => {
    event.preventDefault();
    setSelectState({ ...defaultTileSelectStates, ...defaultTileSelectStates });
    setCtlHoverState({ ...defaultCtlHoverStates, ...defaultCtlHoverStates });
  };

  const findSelectedTileIndex = () => {
    return Object.entries(tileSelectStates).findIndex(
      ([, value]) => value === true
    );
  };

  const previous = event => {
    event.preventDefault();
    const currentIndex = findSelectedTileIndex();
    let previousTile;
    if (currentIndex === 0) {
      previousTile = Object.keys(tileSelectStates).length - 1;
    } else {
      previousTile = currentIndex - 1;
    }
    handleTileSelect(event, Object.keys(tileSelectStates)[previousTile]);
  };

  const next = event => {
    event.preventDefault();
    const currentIndex = findSelectedTileIndex();
    let nextTile;
    if (currentIndex === Object.keys(tileSelectStates).length - 1) {
      nextTile = 0;
    } else {
      nextTile = currentIndex + 1;
    }
    handleTileSelect(event, Object.keys(tileSelectStates)[nextTile]);
  };

  const isTileSelected = () => {
    const reducer = (accumulator, currentValue) => accumulator || currentValue;
    return Object.values(tileSelectStates).reduce(reducer, false);
  };

  const renderTile = (tile, tileFn) => (
    <Tile
      onMouseEnter={() => handleTileHover(true, tile)}
      onMouseLeave={() => handleTileHover(false, tile)}
    >
      <a href="#" onClick={e => handleTileSelect(e, tile)}>
        {tileFn}
      </a>
    </Tile>
  );

  const renderDescBox = (boxNumber, heading, desc) => (
    <>
      <h3 lang={intl.locale} className="number">
        {boxNumber}
      </h3>
      <div>
        <h3 lang={intl.locale}>{`${intl.formatMessage({
          id: `${heading}L1`,
        })} ${intl.formatMessage({ id: `${heading}L2` })}`}</h3>
        <p lang={intl.locale}>{intl.formatMessage({ id: desc })}</p>
      </div>
    </>
  );

  const renderControl = (key, fn1, fn2) => (
    <a
      href="#"
      style={{ textDecoration: "none" }}
      onMouseEnter={() => handleCtlHover(true, key)}
      onMouseLeave={() => handleCtlHover(false, key)}
      onClick={e => fn1(e)}
    >
      {fn2}
    </a>
  );

  return (
    <Section>
      <h2 lang={intl.locale}>{intl.formatMessage({ id: "techHeading" })}</h2>
      <p lang={intl.locale}>{intl.formatMessage({ id: "techBodyP1" })}</p>
      <p lang={intl.locale}>{intl.formatMessage({ id: "techBodyP2" })}</p>
      <DescBox>
        {tileSelectStates.imaging &&
          renderDescBox("01/", "techTileImaging", "techImagingDesc")}
        {tileSelectStates.ai &&
          renderDescBox("02/", "techTileAIML", "techAiDesc")}
        {tileSelectStates.enterprise &&
          renderDescBox("03/", "techTileEnterprise", "techEnterpriseDesc")}
        {tileSelectStates.finance &&
          renderDescBox("04/", "techTileFinance", "techFinanceDesc")}
        {isTileSelected() && (
          <ControlBox>
            {renderControl(
              "rightArrow",
              next,
              <TechRightArrow hoverState={ctlHoverStates.rightArrow} />
            )}
            {renderControl(
              "leftArrow",
              previous,
              <TechLeftArrow hoverState={ctlHoverStates.leftArrow} />
            )}
            {renderControl(
              "close",
              closeSelected,
              <TechClose hoverState={ctlHoverStates.close} />
            )}
          </ControlBox>
        )}
      </DescBox>
      <CardBox>
        {renderTile(
          "imaging",
          <TechImagingTile
            intl={intl}
            hoverState={tileHoverStates.imaging}
            selectState={tileSelectStates.imaging}
          />
        )}

        {renderTile(
          "ai",
          <TechAIMLTile
            intl={intl}
            hoverState={tileHoverStates.ai}
            selectState={tileSelectStates.ai}
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

        {renderTile(
          "finance",
          <TechFinanceTile
            intl={intl}
            hoverState={tileHoverStates.finance}
            selectState={tileSelectStates.finance}
          />
        )}
      </CardBox>
    </Section>
  );
};

Technologies.propTypes = {
  intl: PropTypes.object.isRequired,
};

export default injectIntl(Technologies);
