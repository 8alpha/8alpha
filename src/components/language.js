import React from "react";
import { IntlContextConsumer, changeLocale } from "gatsby-plugin-intl";

import { MenuItemStyle } from "./styled";

const languageName = {
  en: "English",
  ja: "日本語",
};

const Language = () => {

    const [language, setLanguage] = useState('en');

    const toggleLanguage =
    return (
        <div>
            <IntlContextConsumer>
                <MenuItemStyle>
                    <button onClick={() =>  } />
                </MenuItemStyle>
            </IntlContextConsumer>
        </div>
    );
};

export default Language;
