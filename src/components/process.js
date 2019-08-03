import React, { useState } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { injectIntl } from "gatsby-plugin-intl";

import { Section } from "../css/style";
import {
  ProcessAnalysisTile,
  ProcessDiscoveryTile,
  ProcessEngagementTile,
} from "../resources/processTiles";

const ProcessBox = styled.div`
  /* display: grid;

    * @media screen and (max-width: 599px) {
    *   grid-template-columns: 1fr;
    *   grid-template-rows: auto;
    *   grid-gap: 2vh 2vw;
    * }

    * @media screen and (min-width: 600px) {
    *   grid-template-columns: 1fr;
    *   grid-template-rows: auto;
    *   grid-gap: 2vh 2vw;
    * }

    * @media screen and (min-width: 1200px) {
    *   grid-template-columns: 1fr;
    *   grid-template-rows: auto;
    *   grid-gap: 2vh 2vw;
    * } */

  display: flex;
  flex-direction: column;
  flex-wrap: no-wrap;
  justify-content: space-between;
`;

const ProcessCard = styled.div`
  margin-right: 2rem;
  display: flex;
  flex-direction: row-reverse;
  flex-wrap: nowrap;
  justify-content: flex-start;
  align-items: flex-start;
`;

const ProcessText = styled.div`
  p {
    margin-top: 0.75rem;
    margin-right: 2rem;
  }

  h3 {
    font-size: calc(var(--h3-font-size) * 1.2);
    margin-top: 0;
    padding-top: 0;
    margin-bottom: 0;
    margin-right: 2rem;
  }
`;

const Tile = styled.div`
  margin-bottom: 1vw;
`;

const Process = ({ intl }) => {
  const defaultTileHoverStates = {
    discovery: false,
    analysis: false,
    engagement: false,
  };

  const [tileHoverStates, setHoverState] = useState(defaultTileHoverStates);

  const handleHover = (hoverState, tile) => {
    Object.entries(tileHoverStates).map(([key]) => {
      if (key === tile) {
        tileHoverStates[key] = hoverState;
      }
    });

    setHoverState({ ...defaultTileHoverStates, ...tileHoverStates });
  };

  const renderCard = (tile, tileFn) => {
    const toUpperCase = () => tile.charAt(0).toUpperCase() + tile.slice(1);

    return (
      <ProcessCard>
        <Tile
          onMouseEnter={() => handleHover(true, tile)}
          onMouseLeave={() => handleHover(false, tile)}
        >
          {tileFn}
        </Tile>
        <ProcessText>
          <h3>
            {intl.formatMessage({ id: `process${toUpperCase()}Heading` })}
          </h3>
          <p>{intl.formatMessage({ id: `process${toUpperCase()}Body` })}</p>
        </ProcessText>
      </ProcessCard>
    );
  };

  return (
    <Section>
      <h2 lang={intl.locale}>{intl.formatMessage({ id: "processHeading" })}</h2>
      <ProcessBox>
        {renderCard(
          "discovery",
          <ProcessDiscoveryTile
            intl={intl}
            hoverState={tileHoverStates.discovery}
          />
        )}
        {renderCard(
          "analysis",
          <ProcessAnalysisTile
            intl={intl}
            hoverState={tileHoverStates.analysis}
          />
        )}
        {renderCard(
          "engagement",
          <ProcessEngagementTile
            intl={intl}
            hoverState={tileHoverStates.engagement}
          />
        )}
      </ProcessBox>
    </Section>
  );
};

Process.propTypes = {
  intl: PropTypes.object.isRequired,
};

export default injectIntl(Process);
