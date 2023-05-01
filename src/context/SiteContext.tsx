import React, {createContext, useEffect} from "react";
import {useDarkMode} from "usehooks-ts";
import {useTranslation} from "react-i18next";

export type Language = "tr" | "en" | "de";

type ContextType = {
    isDarkMode: boolean;
    enable: () => void;
    disable: () => void;
    toggle: () => void;
    handleLanguage: (language: Language) => Promise<void>;
};

export const Context = createContext<ContextType>({} as ContextType);

type Props = { children: React.ReactNode };

const Provider = ({children}: Props): JSX.Element => {

    const {i18n} = useTranslation();
    const handleLanguage = async (language: Language): Promise<void> => {
        await i18n.changeLanguage(language);
    }
    const {isDarkMode, enable, disable, toggle} = useDarkMode();

    useEffect(() => {
        const html: HTMLHtmlElement = document.querySelector(
            "html"
        ) as HTMLHtmlElement;
        if (html) html.classList.toggle("dark", isDarkMode);
    }, [isDarkMode]);

    const contextValue: ContextType = {
        isDarkMode,
        enable,
        disable,
        toggle,
        handleLanguage,
    };

    return <Context.Provider value={contextValue}>{children}</Context.Provider>;
};

export default Provider;
