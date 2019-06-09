import React, { useState } from "react";
import { changeLocale } from "gatsby-plugin-intl";

import { MenuItemStyle } from "./styled";
import gatsbyIntlLanguage from "../utilities/gatsbyintllanguage";

const nextLocale = {
  ja: "English",
  en: "日本語",
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
    <MenuItemStyle>
      <button lang={newLocale} onClick={() => switchLocale()}>
        {nextLocale[currentLocale]}
      </button>
    </MenuItemStyle>
  );
};

export default Language;
