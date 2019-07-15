import React from "react";
import PropTypes from "prop-types";

import { themeColors } from "../resources/theme.js";

/* const hoverColor = themeColors.ternary;
 * const noHoverColor = "061E2A";
 * const selectedColor =
 *  */

const tileBackground = "061E2A";

export const TechFinanceTile = ({ intl, hoverState, selectState }) => (
  <svg width="281" height="281" xmlns="http://www.w3.org/2000/svg">
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
        fontFamily="Questrial-Regular, Questrial"
        fontSize="26"
        fill={
          selectState
            ? themeColors.secondary
            : hoverState
            ? themeColors.background
            : themeColors.primary
        }
      >
        <tspan x="20" y="230">
          FINANCIAL
        </tspan>{" "}
        <tspan x="20" y="256">
          TECHNOLOGY
        </tspan>
      </text>
      <text
        fontFamily="HelveticaNeue-Medium, Helvetica Neue"
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
        fontFamily="Questrial-Regular, Questrial"
        fontSize="26"
        fill={
          selectState
            ? themeColors.secondary
            : hoverState
            ? themeColors.background
            : themeColors.primary
        }
      >
        <tspan x="20" y="230">
          AI & MACHINE
        </tspan>{" "}
        <tspan x="20" y="256">
          LEARNING
        </tspan>
      </text>
      <text
        fontFamily="HelveticaNeue-Medium, Helvetica Neue"
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
        fontFamily="Questrial-Regular, Questrial"
        fontSize="26"
        fill={
          selectState
            ? themeColors.secondary
            : hoverState
            ? themeColors.background
            : themeColors.primary
        }
      >
        <tspan x="20" y="230">
          2D/3D IMAGING
        </tspan>{" "}
        <tspan x="20" y="256">
          TECHNOLOGIES
        </tspan>
      </text>
      <text
        fontFamily="HelveticaNeue-Medium, Helvetica Neue"
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
        fontFamily="Questrial-Regular, Questrial"
        fontSize="26"
        fill={
          selectState
            ? themeColors.secondary
            : hoverState
            ? themeColors.background
            : themeColors.primary
        }
      >
        <tspan x="20" y="230">
          ENTERPRISE
        </tspan>{" "}
        <tspan x="20" y="256">
          SOFTWARE
        </tspan>
      </text>
      <text
        fontFamily="HelveticaNeue-Medium, Helvetica Neue"
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
