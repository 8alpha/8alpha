import React from "react";
import PropTypes from "prop-types";
import { Link } from "gatsby";
import { injectIntl } from "gatsby-plugin-intl";

import Layout from "../components/layout";
import Team from "../components/team";
import About from "../components/about";
import { ButtonStyle, BoxSectionStyle } from "../components/styled";

const Submitted = ({ intl }) => (
  <Layout location="/submitted/">
    <BoxSectionStyle>
      <h2>{intl.formatMessage({ id: "submittedHeading" })}</h2>
      <p>{intl.formatMessage({ id: "submittedP1" })}</p>
      <Link to="/">
        <ButtonStyle>
          <button className="button">
            <span className="btnText">{`\u00A0\u00A0${intl.formatMessage({
              id: "buttonHide",
            })}\u00A0\u00A0`}</span>
          </button>
        </ButtonStyle>
      </Link>
    </BoxSectionStyle>
    <About />
    <Team />
  </Layout>
);

Submitted.propTypes = {
  intl: PropTypes.object.isRequired,
};

export default injectIntl(Submitted);
