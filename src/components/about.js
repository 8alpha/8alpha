import React from "react";
import PropTypes from "prop-types";
import { injectIntl } from "gatsby-plugin-intl";

import { SectionStyle } from "../components/styled";
import gatsbyIntlLanguage from "../utilities/gatsbyintllanguage";

const About = ({ intl }) => {
  const language = gatsbyIntlLanguage();

  return (
    <SectionStyle>
      <h2 lang={language}>{intl.formatMessage({ id: "aboutHeading" })}</h2>
      <p lang={language}>{intl.formatMessage({ id: "aboutP1" })}</p>
      <p lang={language}>{intl.formatMessage({ id: "aboutP2" })}</p>
    </SectionStyle>
  );
};

About.propTypes = {
  intl: PropTypes.object.isRequired,
};

export default injectIntl(About);
