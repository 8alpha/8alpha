import React, { useState } from "react";
import { changeLocale } from "gatsby-plugin-intl";

import { MenuItemStyle, NotoSansJPStyle } from "./styled";

const nextLocale = {
  ja: "English",
  en: "日本語",
};

const initialLanguage = () => {
  if (typeof window !== `undefined`) {
    return window.___gatsbyIntl["language"];
  }
  return "en";
};

const Language = () => {
  const [currentLocale, setLocale] = useState(initialLanguage());

  const switchLocale = () => {
    const newLocale = currentLocale === "en" ? "ja" : "en";
    setLocale(newLocale);
    changeLocale(newLocale);
  };

  return (
    <MenuItemStyle>
      <button onClick={() => switchLocale()}>
        {nextLocale[currentLocale]}
      </button>
    </MenuItemStyle>
  );
};

export default Language;
