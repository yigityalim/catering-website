import {User, useSignOut, useUserData} from "@nhost/react";
import React, {Fragment} from "react";
import {useOnClickOutside} from "usehooks-ts";
import {Link} from "react-router-dom";
import Logo from "../../components/Logo.tsx";
import {Text} from "../../components/Text.tsx";
import c from "classnames";
import {Menu, Transition} from "@headlessui/react";
import Icon from "../../components/Icon.tsx";

const Header = (): React.JSX.Element => {
    const userData: User | null = useUserData();
    const {signOut} = useSignOut();
    const ref: React.RefObject<HTMLButtonElement> = React.useRef<HTMLButtonElement>(null)
    const [isMenuOpen, setIsMenuOpen] = React.useState<boolean>(false)
    useOnClickOutside(ref, () => setIsMenuOpen(false))

    return (
        <header
            className="flex flex-row items-center justify-between w-full bg-card dark:bg-card-dark p-2 px-4 rounded">
            <div className="flex gap-x-2">
                <Link to="/admin" className="flex items-center gap-x-2">
                    <Logo link={false} className="hidden md:flex"/>
                    <Text size="4xl" weight="bold" className="text-brand flex gap-x-2">
                    <span
                        className={c(
                            "font-bold tracking-tight flex flex-col items-end justify-end text-lg md:text-lg lg:text-xl xl:text-2xl",
                        )}>Kontrol Paneli</span>
                    </Text>
                </Link>
            </div>
            <div className="flex flex-row items-center justify-center gap-2">
                <Menu as="div" className="relative inline-block text-left">
                    <div>
                        <Menu.Button
                            ref={ref}
                            onClick={() => setIsMenuOpen((prevState: boolean) => !prevState)}
                            className="inline-flex items-center justify-center gap-x-2 w-full h-full rounded-md bg-wash dark:bg-wash-dark px-4 py-2 text-sm font-medium text-dark dark:text-white hover:bg-card/90 dark:hover:bg-car-dark/90 focus:outline-none transition"
                        >
                            <div className="flex items-center justify-center gap-x-2">
                                <img src={userData?.avatarUrl} alt="avatar" className="w-8 h-8 rounded-full"/>
                                <span className="hidden md:inline text-lg capitalize font-semibold">{userData?.displayName}</span>
                            </div>
                            <div className="flex items-center justify-center">
                                <Icon children="expand_more" className={c(
                                    isMenuOpen ? 'transform rotate-180' : 'transform rotate-0',
                                    'transition-transform'
                                )}/>
                            </div>
                        </Menu.Button>
                    </div>
                    <Transition
                        as={Fragment}
                        enter="transition ease-out duration-100"
                        enterFrom="transform opacity-0 scale-95"
                        enterTo="transform opacity-100 scale-100"
                        leave="transition ease-in duration-75"
                        leaveFrom="transform opacity-100 scale-100"
                        leaveTo="transform opacity-0 scale-95"
                    >
                        <Menu.Items
                            style={{width: '12rem'}}
                            className="absolute right-0 mt-2 origin-top-right divide-y divide-gray-100 dark:divide-gray-700 rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none bg-card dark:bg-card-dark">
                            <div className="p-1">
                                <Menu.Item>
                                    {({active}) => (
                                        <button
                                            onClick={(): void => {
                                                signOut && signOut()
                                                setIsMenuOpen(false)
                                            }}
                                            className={c(
                                                active ? 'bg-red-500 text-white' : 'text-red-500',
                                                'group flex rounded-md items-center w-full px-2 py-2 text-sm transition-colors'
                                            )}
                                        >
                                            <Icon
                                                children="logout"
                                                className={c(
                                                    active ? 'text-white transform translate-x-1' : 'transform translate-x-0',
                                                    'mr-2 transition-transform'
                                                )}
                                            />
                                            Çıkış Yap
                                        </button>
                                    )}
                                </Menu.Item>
                            </div>
                            <div className="p-1">
                                <Menu.Item>
                                    {({active}) => (
                                        <Link
                                            to="/admin/settings"
                                            onClick={(): void => {
                                                setIsMenuOpen(false)
                                            }}
                                            className={c(
                                                active ? 'bg-gray-500 text-white' : 'text-gray-900 dark:text-gray-100',
                                                'group flex rounded-md items-center w-full px-2 py-2 text-sm transition-colors'
                                            )}
                                        >
                                            <Icon
                                                children="settings"
                                                className={c(
                                                    active ? 'text-white transform rotate-45' : 'transform rotate-0',
                                                    'mr-2 transition-all'
                                                )}
                                            />
                                            Ayarlar
                                        </Link>
                                    )}
                                </Menu.Item>
                            </div>
                            <div className="p-1">
                                <Menu.Item>
                                    {({active}) => (
                                        <Link
                                            to="/"
                                            onClick={(): void => {
                                                setIsMenuOpen(false)
                                            }}
                                            className={c(
                                                active ? 'bg-emerald-600 text-white' : 'text-gray-900 dark:text-gray-100',
                                                'group flex rounded-md items-center w-full px-2 py-2 text-sm transition-colors'
                                            )}
                                        >
                                            <Icon
                                                children="home"
                                                className={c(
                                                    active ? 'text-white' : 'text-dark dark:text-gray-100',
                                                    'mr-2 transition-all'
                                                )}
                                            />
                                            Anasayfa
                                        </Link>
                                    )}
                                </Menu.Item>
                            </div>
                        </Menu.Items>
                    </Transition>
                </Menu>
            </div>
        </header>
    )
}

export default Header