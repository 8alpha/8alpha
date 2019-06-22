import React, { useState } from "react";
import PropTypes from "prop-types";
import { changeLocale } from "gatsby-plugin-intl";

import { NavBarButton } from "../css/navbar";

const nextLocale = {
  ja: "English",
  en: "日本語"
};

const Language = ({ locale }) => {
  const [currentLocale, setLocale] = useState(locale);
  const newLocale = currentLocale === "en" ? "ja" : "en";

  const switchLocale = () => {
    setLocale(newLocale);
    changeLocale(newLocale);
  };

  return (
    <NavBarButton lang={newLocale} onClick={() => switchLocale()}>
      {nextLocale[currentLocale]}
    </NavBarButton>
  );
};

Language.propTypes = {
  locale: PropTypes.string.isRequired
};

export default Language;
