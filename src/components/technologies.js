import React, { useState } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { injectIntl } from "gatsby-plugin-intl";
/* import { FaCaretLeft, FaCaretRight } from "react-icons/fa/"; */

import { Section } from "../css/style";

import {
  TechFinanceTile,
  TechAiTile,
  TechImagingTile,
  TechEnterpriseTile,
  TechLeftArrow,
  TechRightArrow,
  TechClose,
} from "../resources/techTiles";

const DescBox = styled.div`
  margin: auto;
  width: 80%;
  display: grid;
  grid-template-columns: 1fr 4fr 1fr;
  grid-template-rows: auto;
`;

const ControlBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;

const CardBox = styled.div`
  margin: auto;
  width: 50%;
  display: grid;

  @media screen and (max-width: 599px) {
    margin-left: 0;
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

  const closeSelected = event => {
    event.preventDefault();
    setSelectState({ ...defaultTileSelectStates, ...defaultTileSelectStates });
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
      onMouseEnter={() => handleHover(true, tile)}
      onMouseLeave={() => handleHover(false, tile)}
    >
      <a href="#" onClick={e => handleTileSelect(e, tile)}>
        {tileFn}
      </a>
    </Tile>
  );

  const renderDescBox = (boxNumber, heading, desc) => (
    <>
      <h2>{boxNumber}</h2>
      <div>
        <h3>{`${intl.formatMessage({
          id: `${heading}L1`,
        })} ${intl.formatMessage({ id: `${heading}L2` })}`}</h3>
        <p>{intl.formatMessage({ id: desc })}</p>
      </div>
    </>
  );

  return (
    <Section>
      <h2 lang={intl.locale}>{intl.formatMessage({ id: "techHeading" })}</h2>
      <DescBox>
        {tileSelectStates.finance &&
          renderDescBox("01/", "techTileFinance", "techFinanceDesc")}
        {tileSelectStates.ai &&
          renderDescBox("02/", "techTileArtificial", "techAiDesc")}
        {tileSelectStates.imaging &&
          renderDescBox("03/", "techTileImaging", "techImagingDesc")}
        {tileSelectStates.enterprise &&
          renderDescBox("04/", "techTileEnterprise", "techEnterpriseDesc")}
        {isTileSelected() && (
          <ControlBox>
            <a href="#" onClick={e => next(e)}>
              <TechRightArrow hoverState={false} />
            </a>
            <a href="#" onClick={e => previous(e)}>
              <TechLeftArrow hoverState={false} onClick={e => previous(e)} />
            </a>
            <a href="#" onClick={e => closeSelected(e)}>
              <TechClose hoverState={false} onClick={e => previous(e)} />
            </a>
          </ControlBox>
        )}
      </DescBox>
      <CardBox>
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
      </CardBox>
    </Section>
  );
};

Technologies.propTypes = {
  intl: PropTypes.object.isRequired,
};

export default injectIntl(Technologies);
