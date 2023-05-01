import Routes from "./Routes.tsx";
import {Trans, useTranslation} from "react-i18next";
import {Helmet} from "react-helmet";

export default function App(): JSX.Element {
    const {t} = useTranslation();
    return (<>
            <Helmet><title>{t('app.title')}</title></Helmet>
            <Trans t={t}>
                <div className='p-8 mt-[104px]'>
                    <Routes/>
                </div>
            </Trans>
        </>
    )
}