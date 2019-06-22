import React from "react";
import PropTypes from "prop-types";
import { Link } from "gatsby";
import { injectIntl } from "gatsby-plugin-intl";

import Layout from "../components/layout";
import About from "../components/about";
import { ButtonStyle, BoxSectionStyle } from "../components/styled";

const Submitted = ({ intl }) => (
  <Layout location="/submitted/">
    <BoxSectionStyle>
      <h2 lang={intl.locale}>
        {intl.formatMessage({ id: "submittedHeading" })}
      </h2>
      <p lang={intl.locale}>{intl.formatMessage({ id: "submittedP1" })}</p>
      <Link to="/">
        <ButtonStyle>
          <button lang={intl.locale}>
            {`\u00A0\u00A0${intl.formatMessage({
              id: "buttonHide"
            })}\u00A0\u00A0`}
          </button>
        </ButtonStyle>
      </Link>
    </BoxSectionStyle>
    <About />
  </Layout>
);

Submitted.propTypes = {
  intl: PropTypes.object.isRequired
};

export default injectIntl(Submitted);
