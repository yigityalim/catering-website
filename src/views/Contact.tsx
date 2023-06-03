import {Text} from "../components/Text";
import BreadCrumb from "../components/BreadCrumb";
import Icon, {FacebookIcon, InstagramIcon, TwitterIcon} from "../components/Icon";
import React, {useState} from "react";
import {ToastContainer, toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {useSiteContext} from "../hooks/useSiteContext.ts";
import {useTranslation} from "react-i18next";
import {Helmet} from "react-helmet";
import {Switch, Transition} from "@headlessui/react";
import c from "classnames";

const MapComponent = () => {
    return (
        <div className="relative overflow-hidden rounded-lg shadow-md dark:shadow-xl">
            <iframe
                className="w-full h-full"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3056.6207039641013!2d32.84747831526187!3d39.92047207942537!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1
                s0x14d34a0f8d3b5b7b%3A0x7c2e4c0c5f3b5c9a!2sYDA%20Center!5e0!3m2!1str!2str!4v1630549832499!5m2!1str!2str"
                loading="lazy"
            />
        </div>
    )
}

const SocialMediaIcons: React.JSX.Element[] = [
    <FacebookIcon/>,
    <InstagramIcon/>,
    <TwitterIcon/>,
]

export default function Contact(): React.JSX.Element {

    const {t} = useTranslation();
    const {isDarkMode} = useSiteContext();
    const [enabledWorker, setEnabledWorker] = useState(false);

    const [adress, setAdress] = useState<string>('Kızılırmak, 06510 YDA Center, Çankaya/Ankara')
    const [phone, setPhone] = useState<string>('+90 312 000 00 00')
    const [email, setEmail] = useState<string>('xfood@info.de');
    const [text, setText] = useState<string>('')
    const fields = [
        {
            icon: 'location_on',
            value: adress,
            name: 'adress',
        },
        {
            icon: 'phone',
            value: phone,
            name: 'phone',
        },
        {
            icon: 'email',
            value: email,
            name: 'email',
        },
        {
            icon: 'schedule',
            value: '09:00 - 18:00',
            name: 'schedule',
        },
        {
            icon: 'print',
            value: '+90 312 000 00 00',
            name: 'fax',
        },
        {
            icon: 'public',
            value: 'www.xfood.com',
            name: 'website',
        }
    ]

    const notify = (message: string) => toast(message, {
        position: "top-right",
        type: 'success',
        autoClose: 2000,
        icon: "🚀",
        progressStyle: {backgroundColor: '#3A75C4'},
    });

    const copyToClipboard = async (index: number): Promise<void> => {
        await navigator.clipboard.writeText(fields[index].value);
        notify(`${t('contact.' + fields[index].name)} ${t('contact.copied')}`)
    }

    return (
        <>
            <Helmet><title>{t('contact.title')}</title></Helmet>
            <div className="max-w-7xl mx-auto">
                <Text children={t('contact.title')} size='4xl' weight='bold' className='text-brand'/>
                <BreadCrumb separator='Chevron'/>
                <div className="grid gap-4 md:grid-cols-3">
                    {fields.map((field, index) => (
                        <div
                            onClick={() => copyToClipboard(index)}
                            className="bg-card dark:bg-card-dark rounded-lg shadow-md dark:shadow-xl p-6 cursor-pointer hover:shadow-xl dark:hover:shadow-2xl transition-shadow"
                            key={index}
                        >
                            <div className="flex flex-col justify-center items-center h-full">
                                <Icon children={field.icon} className="text-brand" size="4xl"/>
                                <Text children={t(`contact.${field.name}`)} size="xl" weight="bold"
                                      className="text-brand mt-4"/>
                                <Text
                                    onClick={() => {
                                        if (field.name === "adress") {
                                            setAdress(field.value);
                                        } else if (field.name === "phone") {
                                            setPhone(field.value);
                                        } else {
                                            setEmail(field.value);
                                        }
                                    }}
                                    size="md"
                                    weight="semibold"
                                    className="text-gray-500 mt-4 cursor-pointer"
                                >
                                    {field.value}
                                </Text>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="mt-8">
                    <Text children={t('contact.contactUs')} size="4xl" weight="bold" className="text-brand my-6"/>
                    <div className="flex gap-4">
                        <div className="flex-1">
                            <div className="bg-card dark:bg-card-dark rounded-lg shadow-md dark:shadow-xl p-6 transition-all">
                                <div className="flex flex-col gap-4">
                                    <label htmlFor="email" className="text-brand font-bold capitalize text-xl">
                                        {t('contact.email')}
                                    </label>
                                    <input
                                        type="text"
                                        placeholder={t('contact.email') as string}
                                        onChange={(e) => setText(e.target.value)}
                                        className="bg-transparent border-b-2 border-brand p-2 pl-0 focus:outline-none rounded-none"
                                    />
                                    <Transition
                                        show={text.length > 0}
                                        enter="transition-all duration-300"
                                        enterFrom="-translate-y-2 opacity-0"
                                        enterTo="translate-y-0 opacity-100"
                                        leave="transition-all duration-300"
                                        leaveFrom="translate-y-0 opacity-100"
                                        leaveTo="-translate-y-2 opacity-0"
                                        appear={true}
                                        as="div"
                                        className="overflow-hidden"
                                    >
                                        <button className="bg-brand text-white rounded-lg p-2 w-full">
                                            {t('contact.send')}
                                        </button>
                                    </Transition>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="mt-8">
                    <div className="flex items-center justify-between">
                        <Text children="İletişim Bilgileri" size="4xl" weight="bold" className="text-brand my-6"/>
                        <div className="flex items-center gap-2">
                            <span className="text-gray-500 mr-2">İş Başvurusu</span>
                            <Switch
                                checked={enabledWorker}
                                onChange={setEnabledWorker}
                                className={c(
                                    'relative inline-flex h-[38px] w-[74px] shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus-visible:ring-2  focus-visible:ring-white focus-visible:ring-opacity-75',
                                    enabledWorker ? 'bg-brand' : 'bg-gray-200 dark:bg-gray-700'
                                )}
                            >
                                <span className="sr-only">Use setting</span>
                                <span
                                    aria-hidden="true"
                                    className={c(
                                        'pointer-events-none inline-block h-[34px] w-[34px] transform rounded-full bg-white shadow-lg ring-0 transition duration-200 ease-in-out',
                                        enabledWorker ? 'translate-x-[36px]' : 'translate-x-0'
                                    )}
                                />
                            </Switch>
                        </div>
                    </div>
                    <div className="bg-card dark:bg-card-dark rounded-lg shadow-md dark:shadow-xl p-6">
                        {enabledWorker ? (
                            <div className="flex flex-col gap-4">
                                <label htmlFor="name" className="text-brand font-bold capitalize text-xl">
                                    {t('contact.name')}
                                </label>
                                <input
                                    id="name"
                                    type="text"
                                    placeholder={t('contact.name') as string}
                                    className="bg-transparent border-b-2 border-brand p-2 pl-0 focus:outline-none rounded-none"
                                />
                                <label htmlFor="email" className="text-brand font-bold capitalize text-xl">
                                    {t('contact.email')}
                                </label>
                                <input
                                    id="email"
                                    type="text"
                                    placeholder={t('contact.email') as string}
                                    className="bg-transparent border-b-2 border-brand p-2 pl-0 focus:outline-none rounded-none"
                                />
                                <label htmlFor="age" className="text-brand font-bold capitalize text-xl">
                                    {t('contact.age')}
                                </label>
                                <input
                                    id="age"
                                    type="number"
                                    placeholder={t('contact.age') as string}
                                    className="bg-transparent border-b-2 border-brand p-2 pl-0 focus:outline-none rounded-none"
                                />
                                <label htmlFor="cv"
                                       className="text-brand font-bold capitalize text-xl">CV</label>
                                <label htmlFor="dropzone-file" className="relative cursor-pointer w-64">
                                    <div className="relative">
                                        <div
                                            className="border-2 border-gray-300 border-dashed rounded-lg w-24 h-24">
                                            <div className="h-full flex items-center justify-center">
                                                <svg
                                                    className="w-10 h-10 text-gray-400 transition-transform duration-300 transform hover:rotate-360"
                                                    fill="none"
                                                    stroke="currentColor"
                                                    viewBox="0 0 24 24"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                >
                                                    <path
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                        strokeWidth={2}
                                                        d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
                                                    ></path>
                                                </svg>
                                            </div>
                                        </div>
                                        <div
                                            className="before absolute inset-0 border-2 border-transparent border-dashed rounded-lg transition-transform duration-300 transform hover:rotate-360"></div>
                                    </div>
                                    <Text className="mt-2 text-sm text-gray-500 dark:text-gray-400">
                                        <span className="font-semibold">Dosya seçin</span> veya sürükleyip
                                        bırakın
                                    </Text>
                                    <p className="mt-1 text-xs text-gray-500 dark:text-gray-400">.pdf, .docx,
                                        .txt</p>
                                    <input id="dropzone-file" type="file" className="hidden"/>
                                </label>

                                <label htmlFor="message" className="text-brand font-bold capitalize text-xl">
                                    {t('contact.message')}
                                </label>
                                <textarea
                                    id="message"
                                    placeholder={t('contact.message') as string}
                                    className="bg-transparent border-b-2 border-brand p-2 pl-0 focus:outline-none rounded-none"
                                ></textarea>
                                <button className="bg-brand text-white rounded-lg p-2">
                                    {t('contact.send')}
                                </button>
                            </div>
                        ) : (
                            <div className="flex flex-col gap-4">
                                <label htmlFor="name" className="text-brand font-bold capitalize text-xl">
                                    {t('contact.name')}
                                </label>
                                <input
                                    id="name"
                                    type="text"
                                    placeholder={t('contact.name') as string}
                                    className="bg-transparent border-b-2 border-brand p-2 pl-0 focus:outline-none rounded-none"
                                />
                                <label htmlFor="email" className="text-brand font-bold capitalize text-xl">
                                    {t('contact.email')}
                                </label>
                                <input
                                    id="email"
                                    type="text"
                                    placeholder={t('contact.email') as string}
                                    className="bg-transparent border-b-2 border-brand p-2 pl-0 focus:outline-none rounded-none"
                                />
                                <label htmlFor="message" className="text-brand font-bold capitalize text-xl">
                                    {t('contact.message')}
                                </label>
                                <textarea
                                    id="message"
                                    placeholder={t('contact.message') as string}
                                    className="bg-transparent border-b-2 border-brand p-2 pl-0 focus:outline-none rounded-none"
                                ></textarea>
                                <button className="bg-brand text-white rounded-lg p-2">
                                    {t('contact.send')}
                                </button>
                            </div>
                        )}
                    </div>
                </div>

                <div className="mt-8">
                    <Text children="Konumumuz" size="4xl" weight="bold" className="text-brand my-6"/>
                    <div className="bg-card dark:bg-card-dark rounded-lg shadow-md dark:shadow-xl p-6">
                        <MapComponent/>
                    </div>
                    <a href="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3056.6207039641013!2d32.84747831526187!3d39.92047207942537!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14d34a0f8d3b5b7b%3A0x7c2e4c0c5f3b5c9a!2sYDA%20Center!5e0!3m2!1str!2str!4v1630549832499!5m2!1str!2st"
                       className="block bg-brand text-white rounded-lg p-2 mt-4 text-center">
                        Konumumuza Git
                    </a>
                </div>
                <div className="mt-8">
                    <Text children="Sosyal Medya" size="4xl" weight="bold" className="text-brand my-6"/>
                    <div className="bg-card dark:bg-card-dark rounded-lg shadow-md dark:shadow-xl p-6">
                        <div className="flex gap-4">
                            {SocialMediaIcons.map((icon, index) => (
                                <span key={index}>{icon}</span>
                            ))}
                        </div>
                    </div>
                </div>

                <div className="mt-8">
                    {/* Çalışma Saatleri */}
                    <div className="bg-card dark:bg-card-dark rounded-lg shadow-md dark:shadow-xl p-6">
                        {/* Çalışma saatleri bilgileri */}
                    </div>
                </div>
                <div className="mt-8">
                    <div className="bg-card dark:bg-card-dark rounded-lg shadow-md dark:shadow-xl p-6">
                        {/* Hizmetlerinizin kısa açıklaması */}
                    </div>
                </div>
            </div>
            <ToastContainer
                toastClassName={isDarkMode ? 'bg-wash-dark text-wash' : 'bg-wash text-wash-dark'}
                position='top-center'
            />
        </>
    )
}