import React, { useState } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { injectIntl } from "gatsby-plugin-intl";

import { Section } from "../css/style";
import {
  processAnalysisTile,
  ProcessAnalysisTileHover,
  processDiscoveryTile,
  ProcessDiscoveryTileHover,
  processEngagementTile,
  ProcessEngagagementTileHover,
} from "../resources/processTiles";

const ProcessBox = styled.div`
  margin-left: 7rem;
  margin-right: 7rem;
  display: grid;
  /* grid-template-columns: 1fr 1fr 1fr;
    * grid-template-rows: auto;
    */
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
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows: auto;
    grid-gap: 2vh 2vw;
  }
`;

const ProcessCard = styled.div`
    display: flex;
    flex-direction: column;
    flex-wrap: nowrap;
    justify-content: flex-start;
    }

    p {
    margin-top: 0.25rem;
    font-size: 1.5rem;
    width: 80%;
    }

    h3 {
    margin-top: 0.25rem;
    margin-bottom: 0.25rem;
    }
`;

const Tile = styled.div`
  /* animation: fadeout 0.5s normal 1;
    * @keyframes fadeout {
    *   from {
    *     opacity: 0;
    *   }
    *   to {
    *     opacity: 1;
    *   }
    * }

    * &:hover {
    *   animation: fadein 0.5s normal 1;
    *   @keyframes fadein {
    *     from {
    *       opacity: 0;
    *     }
    *     to {
    *       opacity: 1;
    *     }
    *   }
    * } */
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

  const renderCard = (tile, enterFn, leaveFn) => {
    const toUpperCase = () => tile.charAt(0).toUpperCase() + tile.slice(1);

    return (
      <ProcessCard>
        <Tile
          onMouseEnter={() => handleHover(true, tile)}
          onMouseLeave={() => handleHover(false, tile)}
        >
          {tileHoverStates[tile] ? enterFn : leaveFn}
        </Tile>
        <h3>{intl.formatMessage({ id: `process${toUpperCase()}Heading` })}</h3>
        <p>{intl.formatMessage({ id: `process${toUpperCase()}Body` })}</p>
      </ProcessCard>
    );
  };

  return (
    <Section>
      <h2 lang={intl.locale}>{intl.formatMessage({ id: "processHeading" })}</h2>
      <ProcessBox>
        {renderCard(
          "discovery",
          <ProcessDiscoveryTileHover intl={intl} />,
          processDiscoveryTile
        )}
        {renderCard(
          "analysis",
          <ProcessAnalysisTileHover intl={intl} />,
          processAnalysisTile
        )}
        {renderCard(
          "engagement",
          <ProcessEngagagementTileHover intl={intl} />,
          processEngagementTile
        )}
      </ProcessBox>
    </Section>
  );
};

Process.propTypes = {
  intl: PropTypes.object.isRequired,
};

export default injectIntl(Process);
