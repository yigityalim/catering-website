import {useSiteContext} from "../hooks/useSiteContext.ts";
import {Menu} from "@headlessui/react";
import Icon from "./Icon.tsx";
import React, {Fragment} from "react";
import c from "classnames";
import {Text} from "./Text.tsx";
import {useTranslation} from "react-i18next";
type LanguageMenuProps = {
    className?: string;
    bg: boolean;
}
const LanguageMenu = ({className, bg}: LanguageMenuProps): React.JSX.Element => {
    const {handleLanguage} = useSiteContext();
    const {t, i18n} = useTranslation();
    const currentLanguage = i18n.language;

    return (
        <Menu as='div' className={c('relative inline-block text-left z-5', className)}>
            <Menu.Button
                className={c(
                    'w-full transition px-4 py-2 rounded-md flex items-center justify-center',
                    bg ? 'bg-brand text-wash' : 'bg-transparent text-brand hover:bg-brand hover:text-wash',
                )}>
                <Icon size='xl'>Translate</Icon>
                <Text className='ml-2'>{t('header.language')}</Text>
            </Menu.Button>
            <Menu.Items
                as="div"
                className="lg:w-48 absolute right-0 left-0 top-0 mt-14 w-full p-2 rounded-md shadow-lg bg-wash dark:bg-wash-dark outline-none flex flex-row gap-x-1"
            >
                <Menu.Item as={Fragment}>
                    <button
                        onClick={() => handleLanguage("tr")}
                        className={`${
                            currentLanguage === "tr" ? "bg-brand dark:bg-brand-dark" : ""
                        } flex items-center justify-center w-full p-1 rounded-md text-white transition-all duration-300 ease-in-out hover:bg-brand hover:text-white`}
                    >
                        <span role="img" aria-label="turkey-flag" className='text-xl'>🇹🇷</span>
                    </button>
                </Menu.Item>
                <Menu.Item as={Fragment}>
                    <button
                        onClick={() => handleLanguage("en")}
                        className={`${
                            currentLanguage === "en" ? "bg-brand dark:bg-brand-dark" : ""
                        } flex items-center justify-center w-full p-1 rounded-md text-white transition-all duration-300 ease-in-out hover:bg-brand hover:text-white`}
                    >
                      <span role="img" aria-label="united-kingdom-flag" className='text-xl'>🇬🇧</span>
                    </button>
                </Menu.Item>
                <Menu.Item as={Fragment}>
                    <button
                        onClick={() => handleLanguage("de")}
                        className={`${
                            currentLanguage === "de" ? "bg-brand dark:bg-brand-dark" : ""
                        } flex items-center justify-center w-full p-1 rounded-md text-white transition-all duration-300 ease-in-out hover:bg-brand hover:text-white`}
                    >
                        <span role="img" aria-label="germany-flag" className='text-xl'>🇩🇪</span>
                    </button>
                </Menu.Item>
            </Menu.Items>

        </Menu>
    )
}

export default LanguageMenu