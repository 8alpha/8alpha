import React from "react";
import PropTypes from "prop-types";

import { themeColors } from "../resources/theme.js";

export const ProcessAnalysisTile = ({ intl, hoverState }) => (
  <svg width="210" height="141" xmlns="http://www.w3.org/2000/svg">
    {hoverState ? (
      <g fill="none" fillRule="evenodd">
        <path
          d="M0 0h190c11.046 0 20 8.954 20 20v120.498H20c-11.046 0-20-8.954-20-20V0z"
          fill={themeColors.ternary}
        />
        <text
          fontFamily="Questrial-Regular, Questrial"
          fontSize="21"
          fill={themeColors.secondary}
          transform="translate(-3)"
        >
          <tspan x="21.39" y="76">
            {intl.formatMessage({ id: `processAnalysisTileHover` })}
          </tspan>
        </text>
      </g>
    ) : (
      <g fill="none" fillRule="evenodd">
        <path
          d="M0 0h190c11.046 0 20 8.954 20 20v120.498H20c-11.046 0-20-8.954-20-20V0z"
          fill={themeColors.ternary}
        />
        <g fill={themeColors.secondary} fillRule="nonzero">
          <path d="M120.378 37.491H72.61a4.301 4.301 0 0 0-4.296 4.298v26.798a4.301 4.301 0 0 0 4.296 4.296h47.767a4.302 4.302 0 0 0 4.297-4.296V41.79a4.302 4.302 0 0 0-4.297-4.298zm.753 31.096a.754.754 0 0 1-.753.754H72.61a.754.754 0 0 1-.753-.754V41.79c0-.416.338-.754.753-.754h47.767c.415 0 .753.34.753.754v26.798z" />
          <path d="M90.432 56.086h4.274v9.95h-4.274zM97.732 51.82h4.274v14.216h-4.274zM104.818 54.392h4.274v11.643h-4.274zM112.336 45.99h4.274v20.048h-4.274zM77.395 45.747h8.374a1.016 1.016 0 1 1 0 2.032h-8.374a1.016 1.016 0 1 1 0-2.032zM77.395 49.134h8.374a1.015 1.015 0 1 1 0 2.031h-8.374a1.016 1.016 0 1 1 0-2.031zM77.395 52.52h8.374a1.015 1.015 0 1 1 0 2.032h-8.374a1.017 1.017 0 0 1 0-2.032z" />
          <g>
            <path d="M98.982 91.477H95.55a6.265 6.265 0 0 0-6.265 6.265v3.303c0 .877.711 1.588 1.588 1.588h.836v-2.9a3.334 3.334 0 0 1 3.334-3.334h4.445a3.334 3.334 0 0 1 3.334 3.333v2.901h.836c.877 0 1.588-.711 1.588-1.588v-3.303a6.265 6.265 0 0 0-6.264-6.265zM97.265 90.19a4.462 4.462 0 0 1-4.462-4.462V83.24a3.174 3.174 0 0 1 3.175-3.175h2.575a3.174 3.174 0 0 1 3.175 3.175v2.488a4.464 4.464 0 0 1-4.463 4.462zM116.828 91.213h-3.432a6.265 6.265 0 0 0-6.265 6.265v3.303c0 .877.711 1.588 1.588 1.588h.836v-2.9a3.334 3.334 0 0 1 3.334-3.334h4.445a3.334 3.334 0 0 1 3.334 3.334v2.9h.836c.877 0 1.588-.711 1.588-1.588v-3.303a6.265 6.265 0 0 0-6.264-6.265zM115.111 89.925a4.462 4.462 0 0 1-4.462-4.462v-2.488a3.174 3.174 0 0 1 3.175-3.175h2.575a3.174 3.174 0 0 1 3.175 3.175v2.488a4.464 4.464 0 0 1-4.463 4.462z" />
            <g>
              <path d="M134.674 90.948h-3.432a6.265 6.265 0 0 0-6.265 6.265v3.303c0 .877.711 1.588 1.588 1.588h.836v-2.9a3.334 3.334 0 0 1 3.334-3.334h4.445a3.334 3.334 0 0 1 3.334 3.334v2.9h.836c.877 0 1.588-.711 1.588-1.588v-3.305a6.266 6.266 0 0 0-6.264-6.263zM132.957 89.66a4.462 4.462 0 0 1-4.462-4.462V82.71a3.174 3.174 0 0 1 3.175-3.175h2.575a3.174 3.174 0 0 1 3.175 3.175v2.488a4.463 4.463 0 0 1-4.463 4.462z" />
            </g>
          </g>
        </g>
      </g>
    )}
  </svg>
);

ProcessAnalysisTile.propTypes = {
  intl: PropTypes.object.isRequired,
  hoverState: PropTypes.bool.isRequired,
};

export const ProcessDiscoveryTile = ({ intl, hoverState }) => (
  <svg width="210" height="141" xmlns="http://www.w3.org/2000/svg">
    {hoverState ? (
      <g fill="none" fillRrule="evenodd">
        <path
          d="M1 1v119.498c0 10.494 8.507 19 19 19h189V20c0-10.493-8.507-19-19-19H1z"
          stroke="none"
          strokeWidth="2"
          fill={themeColors.ternary}
        />
        <text
          fontFamily="Questrial-Regular, Questrial"
          fontSize="21"
          fill={themeColors.secondary}
        >
          <tspan x="14.599" y="77">
            {intl.formatMessage({ id: `processDiscoveryTileHover` })}
          </tspan>
        </text>
      </g>
    ) : (
      <g fill="none" fillRule="evenodd">
        <path
          d="M0 0h190c11.046 0 20 8.954 20 20v120.498H20c-11.046 0-20-8.954-20-20V0z"
          fill={themeColors.ternary}
        />
        <g fill={themeColors.secondary} fillRule="nonzero" stroke="#A03C4F">
          <path
            d="M133.18 41.713c-11.134-11.193-29.188-11.193-40.328 0-11.137 11.187-11.137 29.328 0 40.522 11.14 11.188 29.194 11.188 40.328 0 11.14-11.194 11.14-29.332 0-40.522zM130 79.036c-9.379 9.421-24.583 9.421-33.96 0-9.38-9.424-9.38-24.702 0-34.124 9.377-9.42 24.581-9.422 33.96 0 9.377 9.424 9.377 24.7 0 34.124z"
            strokeWidth=".998"
          />
          <path
            strokeWidth=".938"
            d="M74.385 107.18l-6.668-6.695 18.271-18.37 6.668 6.697z"
          />
        </g>
      </g>
    )}
  </svg>
);

ProcessDiscoveryTile.propTypes = {
  intl: PropTypes.object.isRequired,
  hoverState: PropTypes.bool.isRequired,
};

export const ProcessEngagementTile = ({ intl, hoverState }) => (
  <svg width="210" height="141" xmlns="http://www.w3.org/2000/svg">
    {hoverState ? (
      <g fill={themeColors.secondary} fillRule="evenodd">
        <path
          d="M0 0h190c11.046 0 20 8.954 20 20v120.498H20c-11.046 0-20-8.954-20-20V0z"
          fill={themeColors.ternary}
        />
        <text
          fontFamily="Questrial-Regular, Questrial"
          fontSize="21"
          fill={themeColors.secondary}
        >
          <tspan x="15.355" y="77">
            {intl.formatMessage({ id: `processEngagementTileHover` })}
          </tspan>
        </text>
      </g>
    ) : (
      <g fill="none" fillRule="evenodd">
        <path
          d="M0 0h190c11.046 0 20 8.954 20 20v120.498H20c-11.046 0-20-8.954-20-20V0z"
          fill={themeColors.ternary}
        />
        <g fill={themeColors.secondary} fillRule="nonzero">
          <path d="M141.781 75.3l-2.135-.665a8.259 8.259 0 0 0-.36-1.867l1.734-1.412a.576.576 0 0 0 .117-.762l-1.68-2.547a.576.576 0 0 0-.748-.192l-1.982 1.042a8.073 8.073 0 0 0-1.573-1.066l.229-2.226a.574.574 0 0 0-.458-.62l-2.989-.613a.576.576 0 0 0-.664.392l-.665 2.137a8.22 8.22 0 0 0-1.863.363l-1.415-1.74a.576.576 0 0 0-.762-.116l-2.547 1.68a.575.575 0 0 0-.192.748l1.043 1.985a8.219 8.219 0 0 0-1.066 1.57l-2.227-.229a.574.574 0 0 0-.622.456l-.612 2.99c-.06.29.11.577.392.664l2.138.666c.047.636.168 1.26.36 1.865l-1.736 1.413a.576.576 0 0 0-.118.762l1.681 2.547c.164.246.487.33.748.193l1.98-1.04a8.257 8.257 0 0 0 1.575 1.064l-.23 2.225a.577.577 0 0 0 .457.622l2.99.612a.574.574 0 0 0 .665-.393l.664-2.136a8.016 8.016 0 0 0 1.865-.363l1.413 1.736c.187.229.515.28.762.117l2.547-1.68a.574.574 0 0 0 .192-.747l-1.042-1.982a8.08 8.08 0 0 0 1.067-1.573l2.223.228a.569.569 0 0 0 .622-.457l.612-2.989a.57.57 0 0 0-.39-.662zm-6.587.793a3.99 3.99 0 0 1-1.72 2.547 4.022 4.022 0 0 1-5.567-1.14 4.023 4.023 0 0 1 1.14-5.565 4.021 4.021 0 0 1 5.565 1.139c.592.896.797 1.967.582 3.02zM104.884 72.685a.574.574 0 0 0-.747.189l-1.327 1.991a.574.574 0 0 0 .114.764l1.29 1.059c-.133.435-.22.88-.261 1.325l-1.596.489a.576.576 0 0 0-.396.662l.47 2.347c.06.29.332.49.62.459l1.662-.164c.211.4.463.774.753 1.121l-.783 1.477a.575.575 0 0 0 .188.748l1.992 1.327a.577.577 0 0 0 .763-.114l1.06-1.292c.432.134.876.223 1.325.263l.488 1.596a.576.576 0 0 0 .664.395l2.346-.47a.574.574 0 0 0 .459-.62l-.163-1.661c.396-.21.772-.461 1.123-.752l1.475.783c.26.14.584.056.747-.188l1.327-1.992a.573.573 0 0 0-.114-.762l-1.292-1.062c.133-.432.22-.873.262-1.323l1.597-.49a.575.575 0 0 0 .396-.662l-.47-2.346a.578.578 0 0 0-.62-.46l-1.664.164a6.549 6.549 0 0 0-.753-1.119l.785-1.478a.575.575 0 0 0-.188-.749l-1.992-1.325a.574.574 0 0 0-.763.114l-1.062 1.294a6.603 6.603 0 0 0-1.323-.263l-.49-1.6a.576.576 0 0 0-.662-.395l-2.345.47a.573.573 0 0 0-.459.62l.163 1.663c-.4.211-.774.463-1.12.752l-1.48-.785zm3.24 4.285a3.028 3.028 0 0 1 4.195-.84 3.028 3.028 0 0 1 .84 4.195 3.009 3.009 0 0 1-1.923 1.29c-.793.158-1.6 0-2.272-.448a3.015 3.015 0 0 1-1.289-1.923 3.015 3.015 0 0 1 .449-2.274zM119.883 53.511a.576.576 0 0 0-.707.401l-1.71 6.181C104.61 39.175 80.472 42.56 80.225 42.597a.575.575 0 0 0 .172 1.136c.239-.036 23.544-3.304 36.021 16.851l-6.059-1.676a.574.574 0 1 0-.306 1.108l7.457 2.064a.587.587 0 0 0 .706-.399h.002l2.064-7.463a.573.573 0 0 0-.4-.707zM119.676 90.543c-.067-.135-.274-.26-.355-.26l-3.853-.938a.575.575 0 1 0-.271 1.118l2.418.587c-10.182 5.174-19.283-1.692-19.379-1.766a.575.575 0 0 0-.704.908c2.805 2.18 11.648 6.555 20.784 1.792l-.626 2.575a.576.576 0 0 0 1.117.272c.04-.165.912-3.731.94-3.897a.525.525 0 0 0-.07-.39zM79.569 95.687c0 1.092.885 1.978 1.977 1.978h8.612a1.977 1.977 0 0 0 1.978-1.978v-5.335H79.569v5.335z" />
          <path d="M98.712 77.326a17.265 17.265 0 0 0 4.427-11.555c0-9.822-8.166-17.736-18.132-17.258-9.037.426-16.257 7.853-16.441 16.901a17.236 17.236 0 0 0 4.553 12.05c2.495 2.702 4.035 6.174 4.346 9.761a2.168 2.168 0 0 0 2.173 1.978h4.047c.023-1.426.057-11.578-3.783-15.487a.58.58 0 0 1 .012-.817.566.566 0 0 1 .805.012c4.208 4.277 4.15 14.67 4.116 16.292h2.035c-.046-1.622-.092-12.015 4.104-16.292a.58.58 0 0 1 .817-.012.58.58 0 0 1 .011.817c-3.84 3.909-3.817 14.05-3.783 15.487.385 0 3.733.003 4.117-.006v.015c1.045-.029 2-.842 2.104-1.986.322-3.588 1.862-7.014 4.472-9.9zm-8.359-6.346a.641.641 0 0 1-.356.127.607.607 0 0 1-.46-.219l-1.598-2.046-1.564 2c-.218.276-.69.276-.908 0l-1.575-2.023-1.748 2.08a.567.567 0 0 1-.804.07.568.568 0 0 1-.07-.805l2.197-2.621a.568.568 0 0 1 .448-.207c.172 0 .333.08.448.218l1.564 2 1.564-2c.218-.276.69-.276.908 0l2.046 2.622a.58.58 0 0 1-.092.804z" />
        </g>
      </g>
    )}
  </svg>
);

ProcessEngagementTile.propTypes = {
  intl: PropTypes.object.isRequired,
  hoverState: PropTypes.bool.isRequired,
};
