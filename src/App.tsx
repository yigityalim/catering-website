import {Trans, useTranslation} from "react-i18next";
import {Helmet} from "react-helmet";
import React from "react";
import {Route, Routes} from "react-router-dom";
import Home from "./views/Home.tsx";
import References from "./views/References.tsx";
import Gallery from "./views/Gallery.tsx";
import Contact from "./views/Contact.tsx";
import NotFound from "./views/NotFound.tsx";
import Header from "./components/Header.tsx";
import Footer from "./components/Footer.tsx";
import PrivateRoute from "./PrivateRoute.tsx";

export default function App(): React.JSX.Element {
    const {t} = useTranslation();
    return (
        <>
            <Helmet>
                <title>{t('app.title')}</title>
            </Helmet>
            <Trans t={t}>
                <Routes>
                    <Route path="/admin/*" element={<PrivateRoute />} />
                    <Route
                        path="/*"
                        element={
                            <>
                                <Header />
                                <div className="p-8 mt-[104px]">
                                    <Routes>
                                        <Route path="/" element={<Home />} />
                                        <Route path="/references" element={<References />} />
                                        <Route path="/gallery" element={<Gallery />} />
                                        <Route path="/contact" element={<Contact />} />
                                        <Route path="*" element={<NotFound />} />
                                    </Routes>
                                </div>
                                <Footer />
                            </>
                        }
                    />
                </Routes>
            </Trans>
        </>
    );
}
