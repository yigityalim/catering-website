import {Text} from "../components/Text";
import BreadCrumb from "../components/BreadCrumb";
import Icon from "../components/Icon";
import {useState} from "react";
import {ToastContainer, toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {useSiteContext} from "../hooks/useSiteContext.ts";
import {useTranslation} from "react-i18next";
import {Helmet} from "react-helmet";
export default function Contact(): JSX.Element {

    const {t} = useTranslation();
    const {isDarkMode} = useSiteContext();
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
                            className="bg-wash dark:bg-wash-dark rounded-lg shadow-md dark:shadow-xl p-6 cursor-pointer hover:shadow-xl dark:hover:shadow-2xl"
                            key={index}
                        >
                            <div className="flex flex-col justify-center items-center h-full">
                                <Icon children={field.icon} className="text-brand" size="4xl"/>
                                <Text children={t(`contact.${field.name}`)} size="xl" weight="bold" className="text-brand mt-4"/>
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
                            <div className="bg-white dark:bg-wash-dark rounded-lg shadow-md dark:shadow-xl p-6">
                                <div className="flex flex-col gap-4">
                                    <label htmlFor="email" className="text-brand font-bold capitalize text-xl">
                                        {t('contact.email')}
                                    </label>
                                    <input
                                        id="email"
                                        onChange={(e) => setText(e.target.value)}
                                        type="text"
                                        placeholder={t('contact.email')!}
                                        className="bg-transparent border-b-2 border-brand p-2 pl-0 focus:outline-none"
                                    />
                                    <button
                                        disabled={!text}
                                        className="bg-brand disabled:bg-opacity-5 text-white disabled:text-opacity-5 rounded-lg p-2"
                                    >
                                        {t('contact.send')}
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <ToastContainer toastClassName={isDarkMode ? 'bg-wash-dark text-wash' : 'bg-wash text-wash-dark'} position='top-center'/>
        </>
    )
}