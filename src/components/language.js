import React, { useState } from "react";
import { changeLocale } from "gatsby-plugin-intl";

import gatsbyIntlLanguage from "../utilities/gatsbyintllanguage";

const nextLocale = {
  ja: "English",
  en: "日本語"
};

const Language = () => {
  const language = gatsbyIntlLanguage();
  const [currentLocale, setLocale] = useState(language);
  const newLocale = currentLocale === "en" ? "ja" : "en";

  const switchLocale = () => {
    setLocale(newLocale);
    changeLocale(newLocale);
  };

  return (
    <button lang={newLocale} onClick={() => switchLocale()}>
      {nextLocale[currentLocale]}
    </button>
  );
};

export default Language;
