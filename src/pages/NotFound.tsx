import {Link} from "react-router-dom";
import {Helmet} from "react-helmet";
import {Trans, useTranslation} from "react-i18next";
import Icon from "../components/Icon.tsx";
import React from "react";

export default function NotFound(): React.JSX.Element {
    const {t} = useTranslation();
    return (
        <Trans t={t}>
            <Helmet><title>{t('404.title')}</title></Helmet>
            <div className='flex flex-col items-center justify-center w-full gap-y-4 h-[calc(100vh-20rem)]'>
                <div className='text-9xl text-center font-semibold text-red-500'>404</div>
                <div className='text-4xl text-center font-normal text-dark dark:text-light leading-normal'>
                    {t('404.subtitle')}
                </div>
                <Link to='/'
                      className='flex items-center justify-between gap-x-4 px-4 py-2 text-lg text-center font-medium text-white bg-brand rounded-md'>
                    <Icon children='arrow_back' className='w-4 h-4 flex items-center justify-center'
                          aria-hidden='true'/>
                    {t('404.button')}
                </Link>
            </div>
        </Trans>
    )
}