import {Link, NavLink} from "react-router-dom";
import Icon from "./Icon.tsx";
import {Menu} from "@headlessui/react";
import {useSiteContext} from "context";
import React, {Fragment} from "react";
import menu from "./menu.ts";
import c from "classnames";
import Logo, {LogoName} from "./Logo.tsx";
import {useTranslation} from "react-i18next";
import {disableBodyScroll, enableBodyScroll} from "body-scroll-lock";
import i18n from "i18next";
import LanguageMenu from "./LanguageMenu.tsx";

const MobileMenu = (): React.JSX.Element => {
    const {t} = useTranslation();
    const {isDarkMode, enable, disable} = useSiteContext();
    const body: HTMLElement = document.body as HTMLElement;
    const closeOverflow = (): void => enableBodyScroll(body);
    const openOverflow = (): void => disableBodyScroll(body);
    return (
        <Menu as='div' className='inline-block text-left md:hidden'>
            <Menu.Button onClick={openOverflow} className='flex items-center justify-center'>
                <Icon children='menu' size='4xl' className='text-wash-light dark:text-wash'/>
            </Menu.Button>
            <Menu.Items
                as='div'
                className='p-8 fixed left-0 top-0 w-screen h-[100dvh] backdrop-filter backdrop-blur-lg backdrop-saturate-200 dark:text-white z-full bg-wash dark:bg-wash-dark bg-opacity-95 dark:bg-opacity-95 outline-none flex flex-col justify-start gap-y-8'>
                <div className='flex justify-between gap-x-4'>
                    <Logo link={false}/>
                    <Menu.Button onClick={closeOverflow} className='flex items-center justify-center'>
                        <Icon children='close' className='text-brand' size='4xl'/>
                    </Menu.Button>
                </div>
                <Link to="/admin" className='transition px-4 py-2 text-brand rounded-md hover:bg-brand hover:text-white'>
                    Admin
                </Link>
                {menu.map((item, key) => (
                    <Menu.Item as={Fragment} key={key}>
                        <NavLink
                            onClick={(): void => {
                                closeOverflow();
                                window.scrollTo({top: 0, behavior: 'smooth'});
                            }}
                            to={item.href}
                            className='text-2xl font-semibold text-brand transition p-2 rounded-md'
                        >
                            {t(`menu.${item.name}`)}
                        </NavLink>
                    </Menu.Item>
                ))}
                <button
                    onClick={isDarkMode ? disable : enable}
                    className='transition px-4 py-2 rounded-md flex items-center justify-center text-white bg-brand'>
                    <Icon size='xl'>{isDarkMode ? 'light_mode' : 'dark_mode'}</Icon>
                    <span className='ml-4 text-2xl font-semibold'>
                        {i18n.language === 'tr' && (isDarkMode ? 'Açık' : 'Koyu')}
                        {i18n.language === 'en' && (isDarkMode ? 'Light' : 'Dark')}
                        {i18n.language === 'de' && (isDarkMode ? 'Hell' : 'Dunkel')}
                    </span>
                </button>
                <LanguageMenu bg={true}/>
                <Menu.Item onClick={closeOverflow} as={'div'}
                           className='text-md font-semibold text-brand mt-auto text-center'>
                    <LogoName/>
                </Menu.Item>
            </Menu.Items>
        </Menu>
    )
}
const Header = () => {
    const {t} = useTranslation();
    const {isDarkMode, toggle} = useSiteContext();
    return (
        <>
            <header className="z-10 sticky top-0">
                <nav
                    className={c(
                        'items-center w-full flex justify-between bg-wash dark:bg-wash-dark z-50 dark:shadow-nav-dark shadow-nav backdrop-blur-sm backdrop-saturate-200 bg-opacity-70 dark:bg-opacity-80',
                        'p-8 md:px-16 lg:px-24 xl:px-32 2xl:px-40',
                    )}
                >
                    <Logo link={true}/>
                    <MobileMenu/>
                    <div className='hidden md:flex items-center md:gap-x-2 lg:gap-x-4'>
                        <LanguageMenu bg={false}/>
                        <button
                            onClick={toggle}
                            className='transition px-4 py-3 text-brand rounded-md hover:bg-brand hover:text-white'>
                            <Icon size='xl'>
                                {isDarkMode ? 'light_mode' : 'dark_mode'}
                            </Icon>
                        </button>
                        {menu.map((item, index) => (
                            <Link
                                to={item.href}
                                key={index}
                                className='transition px-4 py-2 text-brand rounded-md hover:bg-brand hover:text-white'>
                                {t(`menu.${item.name}`)}
                            </Link>
                        ))}
                        <Link to="/admin" className='transition px-4 py-2 text-brand rounded-md hover:bg-brand hover:text-white'>
                            Admin
                        </Link>
                    </div>
                </nav>
            </header>
        </>
    );
};

export default Header;

/*
    const [showHeader, setShowHeader] = useState<boolean>(true);
    const [prevScrollPos, setPrevScrollPos] = useState<number>(0);
    const handlePrevScrollPos = useCallback((pos: number): void => setPrevScrollPos(pos), [setPrevScrollPos]);
    const handleShowHeader = useCallback((val: boolean): void => setShowHeader(val), [setShowHeader]);

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollPos = window.scrollY;
            if (prevScrollPos > currentScrollPos && currentScrollPos > 50) {
                handleShowHeader(true);
            } else if (prevScrollPos < currentScrollPos && currentScrollPos > 50) {
                handleShowHeader(false);
            }
            handlePrevScrollPos(currentScrollPos);
        };
        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [prevScrollPos, handleShowHeader, handlePrevScrollPos, showHeader]);*/
