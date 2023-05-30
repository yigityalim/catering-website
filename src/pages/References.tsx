import {Text} from "../components/Text.tsx";
import BreadCrumb from "../components/BreadCrumb.tsx";
import {Helmet} from "react-helmet";
import {useTranslation} from "react-i18next";
import React from "react";

type Reference = {
    name: string;
    image: string;
}

const references: Omit<Reference[], "image"> = [
    {
        name: "Turkcell",
        image: "https://ffo3gv1cf3ir.merlincdn.net/static_lib/assetsv2/common/images/content/turkcell-logo.png?1773534948038"
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

const ReferenceCard: React.FC<Reference> = ({name, image}: {name: string, image: string}): React.JSX.Element => {
    return (
        <div className="bg-card dark:bg-card-dark shadow-lg rounded-lg p-4 cursor-pointer hover:scale-105 transition">
            <div className="text-center">
                <img src={image} alt={name} className="w-24 h-24 mx-auto mb-4"/>
                <p className="text-gray-800 dark:text-light font-bold text-lg">{name}</p>
            </div>
        </div>
    )
}
export default function References(): React.JSX.Element {
    const {t} = useTranslation();
    return (
        <>
            <Helmet><title>{t('references.title')}</title></Helmet>
            <Text size='3xl' weight='bold' className='my-3 text-brand'>{t('references.title')}</Text>
            <BreadCrumb separator='Chevron'/>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-8 gap-4">
                {references.map((reference: Reference, index: number) => (
                    <ReferenceCard key={index} name={reference.name} image={reference.image}/>
                ))}
            </div>
        </>
    );
}