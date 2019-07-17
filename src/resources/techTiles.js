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
        <tspan x="22.838" y="40">
          01 /
        </tspan>
      </text>
      <path
        fill={themeColors.ternary}
        transform="translate(60, 20)"
        d="M104.186 160H55.814a3.721 3.721 0 0 1-3.721-3.72v-44.347a59.704 59.704 0 0 1-21.988-20.488c-6.063-9.53-9.268-20.565-9.268-31.91C20.837 26.707 47.545 0 80.372 0c32.828 0 59.535 26.707 59.535 59.535 0 11.5-3.286 22.662-9.504 32.278a59.669 59.669 0 0 1-22.496 20.516v43.95a3.721 3.721 0 0 1-3.721 3.721zm-44.651-7.442h40.93v-42.534c0-1.44.83-2.75 2.131-3.365 18.145-8.573 29.87-27.07 29.87-47.124 0-28.724-23.37-52.093-52.094-52.093S28.28 30.81 28.28 59.535c0 20.03 11.179 37.958 29.174 46.79a3.721 3.721 0 0 1 2.082 3.34v42.893z"
      />
      <path
        fill={themeColors.ternary}
        transform="translate(60, 20)"
        d="M93.023 178.605H66.977a3.721 3.721 0 0 1-3.721-3.721v-18.605a3.721 3.721 0 0 1 3.72-3.72h26.047a3.721 3.721 0 0 1 3.721 3.72v18.605a3.721 3.721 0 0 1-3.72 3.72zm-22.325-7.442h18.604V160H70.698v11.163zM115.349 130.233H44.65a3.721 3.721 0 0 1 0-7.442h70.698a3.721 3.721 0 0 1 0 7.442zM115.349 145.116H44.65a3.721 3.721 0 0 1 0-7.442h70.698a3.721 3.721 0 0 1 0 7.442z"
      />
      <path
        fill={themeColors.ternary}
        transform="translate(60, 20)"
        d="M74.419 130.233a3.721 3.721 0 0 1-3.721-3.721V93.023H59.535a3.721 3.721 0 0 1-3.721-3.72V85.58c0-10.258 8.346-18.604 18.605-18.604a3.72 3.72 0 0 1 3.72 3.72v14.884h7.442a3.721 3.721 0 0 1 0 7.442H78.14v33.489a3.721 3.721 0 0 1-3.721 3.72zM63.256 85.58h7.442V75.056c-4.332 1.536-7.442 5.674-7.442 10.525z"
      />
      <path
        fill={themeColors.ternary}
        transform="translate(60, 20)"
        d="M85.581 130.233a3.721 3.721 0 0 1-3.72-3.721V93.023h-7.442a3.721 3.721 0 0 1 0-7.442h7.441V70.698a3.721 3.721 0 0 1 3.721-3.721c10.259 0 18.605 8.346 18.605 18.604v3.721a3.721 3.721 0 0 1-3.72 3.721H89.301v33.489a3.721 3.721 0 0 1-3.72 3.72zm3.721-44.652h7.442c0-4.851-3.11-8.989-7.442-10.525v10.525zM156.28 178.605H37.21a3.721 3.721 0 0 1 0-7.442h119.07a3.721 3.721 0 0 1 0 7.442zM26.047 178.605a3.748 3.748 0 0 1-2.631-1.091 3.748 3.748 0 0 1-1.09-2.63 3.75 3.75 0 0 1 1.09-2.631 3.75 3.75 0 0 1 2.63-1.09c.98 0 1.94.398 2.631 1.09a3.75 3.75 0 0 1 1.09 2.63c0 .98-.398 1.94-1.09 2.631a3.748 3.748 0 0 1-2.63 1.09zM126.512 130.233a3.748 3.748 0 0 1-2.631-1.091 3.748 3.748 0 0 1-1.09-2.63c0-.979.397-1.939 1.09-2.631a3.75 3.75 0 0 1 2.63-1.09c.98 0 1.94.397 2.631 1.09a3.75 3.75 0 0 1 1.09 2.63c0 .98-.398 1.94-1.09 2.631a3.746 3.746 0 0 1-2.63 1.09zM126.512 145.116a3.748 3.748 0 0 1-2.631-1.09 3.748 3.748 0 0 1-1.09-2.63c0-.98.397-1.94 1.09-2.631a3.75 3.75 0 0 1 2.63-1.09c.98 0 1.94.397 2.631 1.09a3.75 3.75 0 0 1 1.09 2.63c0 .979-.398 1.939-1.09 2.63a3.746 3.746 0 0 1-2.63 1.091zM33.488 145.116a3.748 3.748 0 0 1-2.63-1.09 3.748 3.748 0 0 1-1.09-2.63 3.75 3.75 0 0 1 1.09-2.631 3.75 3.75 0 0 1 2.63-1.09c.979 0 1.939.397 2.631 1.09a3.75 3.75 0 0 1 1.09 2.63c0 .979-.398 1.939-1.09 2.63a3.748 3.748 0 0 1-2.63 1.091zM33.488 130.233a3.748 3.748 0 0 1-2.63-1.091 3.748 3.748 0 0 1-1.09-2.63 3.75 3.75 0 0 1 1.09-2.631 3.75 3.75 0 0 1 2.63-1.09c.979 0 1.939.397 2.631 1.09a3.75 3.75 0 0 1 1.09 2.63c0 .98-.398 1.94-1.09 2.631a3.748 3.748 0 0 1-2.63 1.09zM14.884 178.605a3.748 3.748 0 0 1-2.631-1.091 3.748 3.748 0 0 1-1.09-2.63 3.75 3.75 0 0 1 1.09-2.631 3.75 3.75 0 0 1 2.63-1.09c.98 0 1.94.398 2.631 1.09a3.75 3.75 0 0 1 1.09 2.63c0 .98-.397 1.94-1.09 2.631a3.748 3.748 0 0 1-2.63 1.09zM3.72 178.605a3.748 3.748 0 0 1-2.63-1.091 3.748 3.748 0 0 1-1.09-2.63 3.75 3.75 0 0 1 1.09-2.631 3.75 3.75 0 0 1 2.63-1.09c.98 0 1.94.398 2.632 1.09a3.75 3.75 0 0 1 1.09 2.63c0 .98-.398 1.94-1.09 2.631a3.748 3.748 0 0 1-2.631 1.09zM88.764 35.814c-.076-.1-.298-.266-.665-.493a13.736 13.736 0 0 0-1.404-.74 19.845 19.845 0 0 0-1.898-.76c-.696-.24-1.398-.41-2.106-.512v5.162l1.215.303c1.29.355 2.454.74 3.492 1.158 1.037.417 1.916.936 2.637 1.556a6.309 6.309 0 0 1 1.67 2.258c.392.886.588 1.949.588 3.188 0 1.442-.253 2.67-.758 3.682-.507 1.012-1.184 1.84-2.031 2.486a9.052 9.052 0 0 1-2.922 1.461 14.158 14.158 0 0 1-3.474.57v4.402H80.49v-4.441a23.118 23.118 0 0 1-5.181-1.062c-1.708-.557-3.245-1.29-4.611-2.202l2.732-5.427c.101.127.373.336.816.626.443.292 1.006.595 1.69.911.682.317 1.454.62 2.314.911.86.291 1.746.5 2.658.626V44.43l-1.823-.532c-1.24-.38-2.315-.79-3.226-1.233-.91-.442-1.664-.955-2.258-1.537a5.572 5.572 0 0 1-1.328-2.012c-.292-.759-.437-1.644-.437-2.657 0-1.315.228-2.486.683-3.51a8.174 8.174 0 0 1 1.841-2.638 8.434 8.434 0 0 1 2.733-1.727c1.05-.418 2.182-.69 3.397-.816v-3.833h2.618v3.833c1.645.152 3.189.519 4.63 1.1 1.443.582 2.695 1.177 3.759 1.784l-2.733 5.162zm-10.514-.342c0 .633.221 1.133.664 1.5.442.366 1.107.69 1.993.967v-4.668c-1.771.152-2.657.886-2.657 2.201zm7.363 12.07c0-.658-.266-1.17-.797-1.538-.531-.366-1.24-.702-2.125-1.005v4.554c1.948-.076 2.922-.746 2.922-2.011zM104.186 52.093h7.442v7.442h-7.442zM55.814 48.372h7.442v7.442h-7.442zM55.814 37.209h7.442v7.442h-7.442zM48.372 55.814h7.442v7.442h-7.442zM40.93 48.372h7.442v7.442H40.93zM40.93 63.256h7.442v7.442H40.93zM104.186 37.209h7.442v7.442h-7.442z"
      />
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
        <tspan x="22.838" y="40">
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
