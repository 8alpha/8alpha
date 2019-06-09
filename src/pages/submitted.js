import React from "react";
import PropTypes from "prop-types";
import { Link } from "gatsby";
import { injectIntl } from "gatsby-plugin-intl";

import Layout from "../components/layout";
import Team from "../components/team";
import About from "../components/about";
import { ButtonStyle, BoxSectionStyle } from "../components/styled";
import gatsbyIntlLanguage from "../utilities/gatsbyintllanguage";

const Submitted = ({ intl }) => {
  const language = gatsbyIntlLanguage();

  return (
    <Layout location="/submitted/">
      <BoxSectionStyle>
        <h2 lang={language}>
          {intl.formatMessage({ id: "submittedHeading" })}
        </h2>
        <p lang={language}>{intl.formatMessage({ id: "submittedP1" })}</p>
        <Link to="/">
          <ButtonStyle>
            <button lang={language}>
              {`\u00A0\u00A0${intl.formatMessage({
                id: "buttonHide",
              })}\u00A0\u00A0`}
            </button>
          </ButtonStyle>
        </Link>
      </BoxSectionStyle>
      <About />
      <Team />
    </Layout>
  );
};

Submitted.propTypes = {
  intl: PropTypes.object.isRequired,
};

export default injectIntl(Submitted);
