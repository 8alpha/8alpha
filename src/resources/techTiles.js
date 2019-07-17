import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

import { themeColors } from "../resources/theme.js";

const tileBackground = "061E2A";

export const TechFinanceTile = ({ intl, hoverState, selectState }) => (
  <svg width="281" height="281" xmlns="http://www.w3.org/2000/svg">
    <style>{`.header { text-transform: uppercase;`}</style>
    <g fill="none" fillRule="evenodd">
      <path
        d="M.5.5V261c0 10.77 8.73 19.5 19.5 19.5h260.5V20C280.5 9.23 271.77.5 261 .5H.5z"
        stroke="#8B8B8D"
        fill={
          selectState
            ? tileBackground
            : hoverState
            ? themeColors.ternary
            : tileBackground
        }
      />
      <text
        fontFamily="Questrial-Regular, Questrial, 'Noto Sans JP'"
        fontSize="26"
        fill={
          selectState
            ? themeColors.secondary
            : hoverState
            ? themeColors.background
            : themeColors.primary
        }
        className="header"
      >
        <tspan x="20" y="230">
          {intl.formatMessage({ id: "techTileFinanceL1" })}
        </tspan>
        <tspan x="20" y="256">
          {intl.formatMessage({ id: "techTileFinanceL2" })}
        </tspan>
      </text>
      <text
        fontFamily="Questrial-Regular, Questrial"
        fontSize="22"
        fontWeight="400"
        fill={
          selectState
            ? themeColors.ternary
            : hoverState
            ? themeColors.background
            : themeColors.secondary
        }
      >
        <tspan x="22.838" y="194">
          01 /
        </tspan>
      </text>
    </g>
  </svg>
);

TechFinanceTile.propTypes = {
  intl: PropTypes.object.isRequired,
  hoverState: PropTypes.bool.isRequired,
  selectState: PropTypes.bool.isRequired,
};

export const TechAiTile = ({ intl, hoverState, selectState }) => (
  <svg width="281" height="281" xmlns="http://www.w3.org/2000/svg">
    <style>{`.header { text-transform: uppercase;`}</style>
    <g fill="none" fillRule="evenodd">
      <path
        d="M.5.5V261c0 10.77 8.73 19.5 19.5 19.5h260.5V20C280.5 9.23 271.77.5 261 .5H.5z"
        stroke="#8B8B8D"
        fill={
          selectState
            ? tileBackground
            : hoverState
            ? themeColors.ternary
            : tileBackground
        }
      />
      <text
        fontFamily="Questrial-Regular, Questrial, 'Noto Sans JP'"
        fontSize="26"
        fill={
          selectState
            ? themeColors.secondary
            : hoverState
            ? themeColors.background
            : themeColors.primary
        }
        className="header"
      >
        <tspan x="20" y="230">
          {intl.formatMessage({ id: "techTileArtificialL1" })}
        </tspan>
        <tspan x="20" y="256">
          {intl.formatMessage({ id: "techTileArtificialL2" })}
        </tspan>
      </text>
      <text
        fontFamily="Questrial-Regular, Questrial"
        fontSize="22"
        fontWeight="400"
        fill={
          selectState
            ? themeColors.ternary
            : hoverState
            ? themeColors.background
            : themeColors.secondary
        }
      >
        <tspan x="22.838" y="194">
          02 /
        </tspan>
      </text>
    </g>
  </svg>
);

TechAiTile.propTypes = {
  intl: PropTypes.object.isRequired,
  hoverState: PropTypes.bool.isRequired,
  selectState: PropTypes.bool.isRequired,
};

export const TechImagingTile = ({ intl, hoverState, selectState }) => (
  <svg width="281" height="281" xmlns="http://www.w3.org/2000/svg">
    <style>{`.header { text-transform: uppercase;`}</style>
    <g fill="none" fillRule="evenodd">
      <path
        d="M.5.5V261c0 10.77 8.73 19.5 19.5 19.5h260.5V20C280.5 9.23 271.77.5 261 .5H.5z"
        stroke="#8B8B8D"
        fill={
          selectState
            ? tileBackground
            : hoverState
            ? themeColors.ternary
            : tileBackground
        }
      />
      <text
        fontFamily="Questrial-Regular, Questrial, 'Noto Sans JP'"
        fontSize="26"
        fill={
          selectState
            ? themeColors.secondary
            : hoverState
            ? themeColors.background
            : themeColors.primary
        }
        className="header"
      >
        <tspan x="20" y="230">
          {intl.formatMessage({ id: "techTileImagingL1" })}
        </tspan>
        <tspan x="20" y="256">
          {intl.formatMessage({ id: "techTileImagingL2" })}
        </tspan>
      </text>
      <text
        fontFamily="Questrial-Regular, Questrial"
        fontSize="22"
        fontWeight="400"
        fill={
          selectState
            ? themeColors.ternary
            : hoverState
            ? themeColors.background
            : themeColors.secondary
        }
      >
        <tspan x="22.838" y="194">
          03 /
        </tspan>
      </text>
    </g>
  </svg>
);

TechImagingTile.propTypes = {
  intl: PropTypes.object.isRequired,
  hoverState: PropTypes.bool.isRequired,
  selectState: PropTypes.bool.isRequired,
};

export const TechEnterpriseTile = ({ intl, hoverState, selectState }) => (
  <svg width="281" height="281" xmlns="http://www.w3.org/2000/svg">
    <style>{`.header { text-transform: uppercase;`}</style>
    <g fill="none" fillRule="evenodd">
      <path
        d="M.5.5V261c0 10.77 8.73 19.5 19.5 19.5h260.5V20C280.5 9.23 271.77.5 261 .5H.5z"
        stroke="#8B8B8D"
        fill={
          selectState
            ? tileBackground
            : hoverState
            ? themeColors.ternary
            : tileBackground
        }
      />
      <text
        fontFamily="Questrial-Regular, Questrial, 'Noto Sans JP'"
        fontSize="26"
        fill={
          selectState
            ? themeColors.secondary
            : hoverState
            ? themeColors.background
            : themeColors.primary
        }
        className="header"
      >
        <tspan x="20" y="230">
          {intl.formatMessage({ id: "techTileEnterpriseL1" })}
        </tspan>
        <tspan x="20" y="256">
          {intl.formatMessage({ id: "techTileEnterpriseL2" })}
        </tspan>
      </text>
      <text
        fontFamily="Questrial-Regular, Questrial"
        fontSize="22"
        fontWeight="400"
        fill={
          selectState
            ? themeColors.ternary
            : hoverState
            ? themeColors.background
            : themeColors.secondary
        }
      >
        <tspan x="22.838" y="194">
          04 /
        </tspan>
      </text>
    </g>
  </svg>
);

TechEnterpriseTile.propTypes = {
  intl: PropTypes.object.isRequired,
  hoverState: PropTypes.bool.isRequired,
  selectState: PropTypes.bool.isRequired,
};
