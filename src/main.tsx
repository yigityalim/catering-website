import {createRoot} from 'react-dom/client'
import App from 'App.tsx'
import './styles/index.css'
import {BrowserRouter} from 'react-router-dom'
import Provider from "context/SiteContext.tsx";

import Header from "components/Header.tsx";
import Footer from "components/Footer.tsx";

import './i18n'

createRoot(document.getElementById('root') as HTMLElement).render(
    <BrowserRouter>
        <Provider>
            <Header/>
            <App/>
            <Footer/>
        </Provider>

    </BrowserRouter>
);
