import React from "react";
import {User, useUserData} from "@nhost/react";
import {Link} from "react-router-dom";
import Icon from "../../components/Icon.tsx";
import Logo from "../../components/Logo.tsx";
import {Text} from "../../components/Text.tsx";

const Settings = (): React.JSX.Element => {

    const userData: User | null = useUserData()
    const [user, setUser] = React.useState<User | null>(userData)

    console.log(user, setUser)

    return (
        <div className="p-4 flex flex-col gap-y-2">
            <header className="flex flex-row items-center justify-between w-full bg-card dark:bg-card-dark p-2 px-4 rounded">
                <div className="flex items-center justify-center gap-x-2">
                    <Logo link={false}/>
                    <Text size="4xl" weight="bold" className="text-brand flex gap-x-2">
                        <span
                            className="font-bold tracking-tight flex flex-col items-end justify-end text-xl text-brand/70">Ayarlar</span>
                    </Text>
                </div>
                <Link to="/admin"
                      className="bg-card dark:bg-card-dark hover:bg-red-400 dark:hover:bg-red-700 hover:text-white text-red-500 px-4 py-2 rounded-md text-md transition duration-300 flex gap-x-2 items-center justify-between group">
                    <Icon children="arrow_back"
                          className="w-4 h-4 mr-2 transition-transform group-hover:-translate-x-1"/>
                    <span className="text-md">Geri</span>
                </Link>
            </header>
            <div className="flex flex-col">
                <div className="bg-white dark:bg-gray-800 rounded-lg shadow">
                    <div className="p-4">
                        <h5 className="text-xl font-bold mb-4">Basic Example</h5>
                    </div>
                    <div className="relative">
                        <div
                            className="absolute top-0 left-0 w-full h-60 rounded-lg bg-cover bg-no-repeat"
                            style={{ backgroundImage: "url('assets/images/small/img-4.jpg')" }}
                        ></div>
                        <div className="flex justify-center">
                            <img src="assets/images/users/avatar-1.jpg" alt="" className="w-24 h-24 rounded-full border-4 border-white -mt-12" />
                        </div>
                    </div>
                    <div className="p-4">
                        <div className="mb-3 text-gray-500">
                            <i className="bi bi-geo-alt"></i> Phoenix, USA
                        </div>
                        <p>Product visual designer, expert in UI design</p>
                        <div className="flex gap-2 mt-4">
                            <button type="button" className="bg-blue-500 text-white px-4 py-2 rounded-md">
                                Invite to Project
                            </button>
                            <button type="button" className="bg-blue-100 text-blue-500 px-4 py-2 rounded-md">
                                <i className="bi bi-chat-left-text"></i>
                            </button>
                            <div className="relative inline-block">
                                <button className="bg-red-100 text-red-500 px-4 py-2 rounded-md">
                                    <i className="bi bi-three-dots-vertical"></i>
                                </button>
                                <ul className="absolute right-0 hidden mt-2 w-40 py-2 bg-white shadow rounded-md">
                                    <li><a href="#" className="block px-4 py-2 hover:bg-gray-100">Action</a></li>
                                    <li><a href="#" className="block px-4 py-2 hover:bg-gray-100">Another action</a></li>
                                    <li><a href="#" className="block px-4 py-2 hover:bg-gray-100">Something else here</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="mt-4">
                    <p className="text-gray-500 font-medium mb-2">Language Knows</p>
                    <ul className="flex gap-2 mb-4">
                        <li>
                            <span className="px-3 py-1 text-white bg-blue-500 rounded-md">English</span>
                        </li>
                        <li>
                            <span className="px-3 py-1 text-white bg-blue-500 rounded-md">Russian</span>
                        </li>
                        <li>
                            <span className="px-3 py-1 text-white bg-blue-500 rounded-md">Chinese</span>
                        </li>
                    </ul>
                    <div>
                        <p className="text-gray-500 font-medium mb-2">Featured Skills</p>
                        <ul className="flex flex-wrap gap-2 list-none">
                            <li>
                                <span className="px-3 py-1 text-gray-500 bg-gray-200 rounded-md">Business Marketing</span>
                            </li>
                            <li>
                                <span className="px-3 py-1 text-gray-500 bg-gray-200 rounded-md">Google Ads Management</span>
                            </li>
                            <li>
                                <span className="px-3 py-1 text-gray-500 bg-gray-200 rounded-md">Social Ads Management</span>
                            </li>
                            <li>
                                <span className="px-3 py-1 text-gray-500 bg-gray-200 rounded-md">Content SEO</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Settings;