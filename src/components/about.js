import React from "react";
import PropTypes from "prop-types";
import { injectIntl } from "gatsby-plugin-intl";

import { SectionStyle } from "../components/styled";

const About = ({ intl }) => (
  <SectionStyle>
    <h2>{intl.formatMessage({ id: "aboutHeading" })}</h2>
    <p>{intl.formatMessage({ id: "aboutP1" })}</p>
    <p>{intl.formatMessage({ id: "aboutP2" })}</p>
  </SectionStyle>
);

About.propTypes = {
  intl: PropTypes.object.isRequired,
};

export default injectIntl(About);
