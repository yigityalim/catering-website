import {Text} from "../components/Text.tsx";
import BreadCrumb from "../components/BreadCrumb.tsx";
import {Helmet} from "react-helmet";
import {useTranslation} from "react-i18next";

export default function References(): JSX.Element {

    const {t} = useTranslation();

    const references = [
        {
            name: "Turkcell",
            image: "https://ffo3gv1cf3ir.merlincdn.net/static_lib/assetsv2/common/images/content/turkcell-logo.png?1773534948038"
        },
        {
            name: "İş Bankası",
            image: "https://gorsel.isbank.com.tr/sttk/StaticFiles/Isbank/images/logo/isbank_logo_M.png"
        },
        {
            name: "Arçelik",
            image: "https://www.arcelik.com.tr/medias/logo.svg?context=bWFzdGVyfHJvb3R8MTkwM3xpbWFnZS9zdmcreG1sfGgzOS9oZDQvOTgwMTUyNDkwMzk2Ni9sb2dvLnN2Z3w1NGQxOTJkYjA1YWE4NmQzMzhlMTgxMmI5ZWVkOGQ0ODFhYTcxZjA1MDY2MTFhNzdiM2ZmZDgzMWVhOGUxZDBj"
        },
        {
            name: "Ülker",
            image: "https://www.arcelik.com.tr/medias/logo.svg?context=bWFzdGVyfHJvb3R8MTkwM3xpbWFnZS9zdmcreG1sfGgzOS9oZDQvOTgwMTUyNDkwMzk2Ni9sb2dvLnN2Z3w1NGQxOTJkYjA1YWE4NmQzMzhlMTgxMmI5ZWVkOGQ0ODFhYTcxZjA1MDY2MTFhNzdiM2ZmZDgzMWVhOGUxZDBj"
        },
        {
            name: "Enka",
            image: "https://www.arcelik.com.tr/medias/logo.svg?context=bWFzdGVyfHJvb3R8MTkwM3xpbWFnZS9zdmcreG1sfGgzOS9oZDQvOTgwMTUyNDkwMzk2Ni9sb2dvLnN2Z3w1NGQxOTJkYjA1YWE4NmQzMzhlMTgxMmI5ZWVkOGQ0ODFhYTcxZjA1MDY2MTFhNzdiM2ZmZDgzMWVhOGUxZDBj"
        },
        {
            name: "Koç Holding",
            image: "https://www.arcelik.com.tr/medias/logo.svg?context=bWFzdGVyfHJvb3R8MTkwM3xpbWFnZS9zdmcreG1sfGgzOS9oZDQvOTgwMTUyNDkwMzk2Ni9sb2dvLnN2Z3w1NGQxOTJkYjA1YWE4NmQzMzhlMTgxMmI5ZWVkOGQ0ODFhYTcxZjA1MDY2MTFhNzdiM2ZmZDgzMWVhOGUxZDBj"
        },
        {
            name: "Vestel",
            image: "https://www.arcelik.com.tr/medias/logo.svg?context=bWFzdGVyfHJvb3R8MTkwM3xpbWFnZS9zdmcreG1sfGgzOS9oZDQvOTgwMTUyNDkwMzk2Ni9sb2dvLnN2Z3w1NGQxOTJkYjA1YWE4NmQzMzhlMTgxMmI5ZWVkOGQ0ODFhYTcxZjA1MDY2MTFhNzdiM2ZmZDgzMWVhOGUxZDBj"
        }, {
            name: "Tofaş",
            image: "https://www.arcelik.com.tr/medias/logo.svg?context=bWFzdGVyfHJvb3R8MTkwM3xpbWFnZS9zdmcreG1sfGgzOS9oZDQvOTgwMTUyNDkwMzk2Ni9sb2dvLnN2Z3w1NGQxOTJkYjA1YWE4NmQzMzhlMTgxMmI5ZWVkOGQ0ODFhYTcxZjA1MDY2MTFhNzdiM2ZmZDgzMWVhOGUxZDBj"
        },
        {
            name: "Sabancı Holding",
            image: "https://www.arcelik.com.tr/medias/logo.svg?context=bWFzdGVyfHJvb3R8MTkwM3xpbWFnZS9zdmcreG1sfGgzOS9oZDQvOTgwMTUyNDkwMzk2Ni9sb2dvLnN2Z3w1NGQxOTJkYjA1YWE4NmQzMzhlMTgxMmI5ZWVkOGQ0ODFhYTcxZjA1MDY2MTFhNzdiM2ZmZDgzMWVhOGUxZDBj"
        },
        {
            name: "Pegasus Hava Yolları",
            image: "https://www.arcelik.com.tr/medias/logo.svg?context=bWFzdGVyfHJvb3R8MTkwM3xpbWFnZS9zdmcreG1sfGgzOS9oZDQvOTgwMTUyNDkwMzk2Ni9sb2dvLnN2Z3w1NGQxOTJkYjA1YWE4NmQzMzhlMTgxMmI5ZWVkOGQ0ODFhYTcxZjA1MDY2MTFhNzdiM2ZmZDgzMWVhOGUxZDBj"
        }
    ]


    return (
        <>
            <Helmet><title>{t('references.title')}</title></Helmet>
            <Text size='3xl' weight='bold' className='my-3 text-brand'>references.title</Text>
            <BreadCrumb separator='Chevron' />
            <div className='grid grid-cols-1 sm:grid-cols-2 gap-4 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-8'>
                {references.map((reference, index) => (
                    <div key={index} className='p-4 flex flex-col items-start justify-center shadow-xl rounded'>
                        <img src={reference.image} alt={reference.name} className='object-contain w-full h-36'/>
                        <Text size='lg' weight='bold' className='text-start my-3 text-light'>{reference.name}</Text>
                    </div>
                ))}
            </div>
        </>
    );
}