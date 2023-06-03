import React, {useCallback, useState} from "react";
import {useMediaQuery} from "usehooks-ts";
import c from "classnames";
import Icon from "../../components/Icon.tsx";
import {Link} from "react-router-dom";
import {User, useUserData} from "@nhost/react";

type Width = "w-1/4" | "w-1/8";

const Sidebar: React.MemoExoticComponent<() => React.JSX.Element> = React.memo((): React.JSX.Element => {
    const user: User | null = useUserData()
    const isMobile: boolean = useMediaQuery('(max-width: 1200px)');
    const [width, setWidth] = useState<Width>("w-1/4");
    const handleChangeSidebarWidth = useCallback(() => {
        setWidth((prevState: Width) => (prevState === "w-1/4" ? "w-1/8" : "w-1/4"));
    }, []);

    return (
        <div style={width === "w-1/4" ? {width: "20%"} : {width: "10%"}}
            className={"w-44 h-full bg-card dark:bg-card-dark rounded-lg transition-all duration-300 ease-out p-2"}
        >
            <div className="flex flex-col items-center justify-start gap-y-4 h-full w-full">
                {!isMobile && (
                    <button className="flex flex-col items-center justify-center gap-y-2"
                            onClick={handleChangeSidebarWidth}>
                        <Icon
                            size="4xl"
                            children={width === "w-1/4" ? "unfold_more" : "unfold_less"}
                            className="text-brand rotate-90"
                        />
                    </button>
                )}
                <div className="hidden md:flex flex-col items-center justify-center gap-y-2">
                    <img
                        src={user?.avatarUrl}
                        alt="Logo"
                        className="w-16 h-16 rounded-full"
                    />
                    {width === "w-1/4" && !isMobile && (
                        <span className="text-2xl font-semibold text-gray-500 dark:text-gray-400 capitalize">{user?.displayName}</span>
                    )}
                </div>
                <div className="flex flex-col items-center justify-start gap-y-2 w-full h-full">
                    {menu.map((item, index) => (
                        <Link
                            key={index}
                            to={item.to}
                            className={c(
                                "w-full flex items-center gap-x-2 p-1 px-3 rounded transition-colors bg-secondary-button dark:bg-secondary-button-dark",
                                width === "w-1/4" && !isMobile ? "justify-start" : "justify-center"
                            )}
                        >
                            <Icon children={item.icon} size="4xl"/>
                            {width === "w-1/4" && !isMobile && (
                                <span className="text-sm text-gray-500 dark:text-gray-400">{item.title}</span>
                            )}
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    );
});

const menu = [
    {
        title: 'Kontrol Paneli',
        icon: 'apps',
        to: '/admin/'
    },
    {
        title: 'Sayfalar',
        icon: 'web',
        to: '/admin/pages'
    },
    {
        title: 'Komponentler',
        icon: 'backup_table',
        to: '/admin/components'
    },
    {
        title: 'Kullanıcılar',
        icon: 'person',
        to: '/admin/users'
    },
    {
        title: 'Takvim',
        icon: 'event',
        to: '/admin/calendar'
    },
    {
        title: 'Ayarlar',
        icon: 'settings',
        to: '/admin/settings'
    }
]

export default Sidebar;