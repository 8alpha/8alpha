import React, { useState } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { injectIntl } from "gatsby-plugin-intl";
import { FaCaretLeft, FaCaretRight } from "react-icons/fa/";

import { Section } from "../css/style";

import {
  TechFinanceTile,
  TechAiTile,
  TechImagingTile,
  TechEnterpriseTile,
} from "../resources/techTiles";

const DescBox = styled.div`
  margin-bottom: 1vh;
  /* display: grid;
    * grid-template-columns: 1fr 6fr 1fr;
    * grid-template-rows: auto; */
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  flex-wrap: nowrap;
`;

const CardBox = styled.div`
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

  const findSelectedTileIndex = () => {
    return Object.entries(tileSelectStates).findIndex(
      ([, value]) => value === true
    );
  };

  const previous = event => {
    event.preventDefault();
    console.log(`index: ${findSelectedTileIndex()}`);
  };

  /* const previous = event => {
    *     if (event) {                                   <!---->
    *         event.stopPropagation();                   <!---->
    *     }                                              <!---->
       <!---->
    *     const currentIndex = findCurrentMemberIndex(); <!---->
    *     if (currentIndex || currentIndex === 0) {      <!---->
    *         let previousMember;                        <!---->
    *         if (currentIndex - 1 === -1) {             <!---->
    *             previousMember = edges[edges.length - 1].node.slug; <!---->
    *         } else {          <!---->
    *             previousMember = edges[currentIndex - 1].node.slug; <!---->
    *         }                                     <!---->
    *         navigate(`/team/${previousMember}/`); <!---->
    *     }                                         <!---->
    * };                                            <!---->
    *
    */

  /* const next = event => {
     *   if (event) {
     *     event.stopPropagation();
     *   }

     *   const currentIndex = findCurrentMemberIndex();
     *   if (currentIndex || currentIndex === 0) {
     *     let nextMember;
     *     if (currentIndex + 1 === edges.length) {
     *       nextMember = edges[0].node.slug;
     *     } else {
     *       nextMember = edges[currentIndex + 1].node.slug;
     *     }
     *     navigate(`/team/${nextMember}/`);
     *   }
     * };
     */

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

  return (
    <Section>
      <h2 lang={intl.locale}>{intl.formatMessage({ id: "techHeading" })}</h2>
      <DescBox>
        {isTileSelected() && (
          <FaCaretLeft
            css={{
              cursor: `pointer`,
              fontSize: `10rem`,
              color: `var(--primary-color)`,
              userSelect: `none`,
              margin: `2vh 2vw 2vh 2vw`,
            }}
            onClick={e => previous(e)}
          />
        )}
        {tileSelectStates.finance && (
          <p>{intl.formatMessage({ id: "techFinanceDesc" })}</p>
        )}
        {tileSelectStates.ai && (
          <p>{intl.formatMessage({ id: "techAiDesc" })}</p>
        )}
        {tileSelectStates.imaging && (
          <p>{intl.formatMessage({ id: "techImagingDesc" })}</p>
        )}
        {tileSelectStates.enterprise && (
          <p>{intl.formatMessage({ id: "techEnterpriseDesc" })}</p>
        )}
        {isTileSelected() && (
          <FaCaretRight
            css={{
              cursor: `pointer`,
              fontSize: `10rem`,
              color: `var(--primary-color)`,
              userSelect: `none`,
              margin: `2vh 2vw 2vh 2vw`,
            }}
          />
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
