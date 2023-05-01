import {NavLink} from 'react-router-dom';
import {useMediaQuery} from "usehooks-ts";
import Icon, {FacebookIcon, InstagramIcon, TwitterIcon} from "./Icon.tsx";
import menu from "./menu.ts";
import React, {useState} from "react";
import Logo, {LogoName} from "./Logo.tsx";
import c from "classnames";
import {Text} from "./Text.tsx";
import LanguageMenu from "./LanguageMenu.tsx";
import {useSiteContext} from "../hooks/useSiteContext.ts";
import {Trans, useTranslation} from "react-i18next";

const icons: { icon: JSX.Element | string; href: string }[] = [
    {
        icon: <FacebookIcon/>,
        href: ''
    },
    {
        icon: <TwitterIcon/>,
        href: ''
    },
    {
        icon: <InstagramIcon/>,
        href: ''
    },
];

function Footer(): JSX.Element {
    const {t} = useTranslation();
    return (
        <Trans t={t}>
        <footer className="w-full mx-auto bg-wash dark:bg-wash-dark p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                <LogoSection/>
                <MenuSection/>
                <SocialMediaSection/>
            </div>
            <div className="w-full h-0.5 bg-brand my-8" />
            <LogoName />
        </footer>
        </Trans>
    );
}

const LogoSection = (): JSX.Element => {
    const {t} = useTranslation();
    const {isDarkMode, toggle} = useSiteContext();
    return (
        <div className="col-span-1 lg:col-span-2 flex flex-col gap-6 justify-between border-b border-brand pb-8 md:border-none">
            <div>
                <Logo link={true} className='mb-4' />
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores atque commodi dicta, ducimus, expedita harum inventore ipsam iusto laboriosam molestias, mollitia praesentium repudiandae saepe sunt vel? Ab aut nesciunt veniam.
                </p>
            </div>
            <div className="flex justify-between flex-col gap-y-4 sm:flex-row sm:gap-x-4 items-center md:mt-0">
                <button onClick={toggle} className={c(
                    "bg-brand text-light p-2 rounded-md font-bold text-lg flex items-center justify-center gap-x-4 w-full"
                )}>
                    <Icon size="2xl" children={isDarkMode ? 'light_mode' : 'dark_mode'} />
                    {isDarkMode ? t('footer.lightMode') : t('footer.darkMode')}
                </button>
                <LanguageMenu className='w-full' bg={true}/>
                <ul className="flex w-full gap-4 items-center justify-center">
                    {icons.map((icon, key) => (
                        <li key={key}>
                            <a href={icon.href} className="block hover:scale-110 transition duration-300">
                                {icon.icon}
                            </a>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    )
}

const MenuSection = (): JSX.Element =>  {
    const scrollTop = () => window.scrollTo({top: 0, behavior: 'smooth'});
    const {t} = useTranslation();
    return (
        <div className="col-span-1 lg:col-span-1">
            <Text className="text-xl font-semibold text-dark dark:text-light mb-4" children={t('footer.discover')} />
            <ul className="flex flex-col w-full gap-y-4">
                {menu.map((item, index) => (
                    <li key={index}>
                        <NavLink onClick={scrollTop} to={item.href} className="text-dark dark:text-light transition duration-300 font-medium text-lg block py-2 px-4 rounded-md">
                            {t(`menu.${item.name}`)}
                        </NavLink>
                    </li>
                ))}
            </ul>
        </div>
    )
}

const SocialMediaSection = (): JSX.Element => {
    const {t} = useTranslation();
    const [text, setText] = useState<string>('');
    const subscribeButton = useMediaQuery('(min-width: 1279px) and (max-width: 1766px)');
    return (
        <div className="col-span-1 md:col-span-2 lg:col-span-2 xl:col-span-1">
            <Text className="text-xl font-semibold text-dark dark:text-light mb-4" children={t('footer.news')} />
            <p className="text-dark dark:text-light leading-7 mb-4" children={t('footer.newsDesc')} />
            <form className="flex flex-col lg:flex-row gap-4">
                <input
                    value={text}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => setText(e.target.value)}
                    className="w-full lg:w-64 p-2 pl-4 rounded-md outline-none border border-brand focus:ring-0 bg-light dark:bg-dark dark:placeholder-gray-400"
                    type="email"
                    placeholder={t('footer.email')!}
                />
                <button disabled={text.length < 1} className={c(
                    "disabled:opacity-50 w-full lg:w-auto p-2 rounded-md bg-brand text-light font-semibold flex items-center justify-center gap-x-2",
                    subscribeButton && 'flex-1'
                )}>
                    <Icon size="2xl" children="drafts" />
                    {subscribeButton ? '' : t('footer.subscribe')}
                </button>
            </form>
        </div>
    )
}

const MemoFooter = React.memo<
    React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>
>(Footer);
export default MemoFooter;