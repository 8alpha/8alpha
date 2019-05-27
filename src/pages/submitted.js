import React from "react";
import { Link } from "gatsby";

import Layout from "../components/layout";
import Team from "../components/team";
import AboutUs from "../components/about-us";
import { ButtonStyle, BoxSectionStyle } from "../components/styled";

const Submitted = () => (
  <Layout>
    <BoxSectionStyle>
      <h2>Thank you!</h2>
      <p>
        We will be in touch with you shortly. If you do not receive an email
        confirmation within 2-3 business days then please email us directly at
        info @ 8alpha.com.
      </p>
      <Link to="/">
        <ButtonStyle>
          <button className="button">
            <span className="btnText">{"\u00A0\u00A0Hide\u00A0\u00A0"}</span>
          </button>
        </ButtonStyle>
      </Link>
    </BoxSectionStyle>
    <AboutUs />
    <Team />
  </Layout>
);

export default Submitted;
