import {createRoot} from 'react-dom/client'
import App from 'App.tsx'
import './styles/index.css'
import {BrowserRouter} from 'react-router-dom'
import SiteProvider from "context/SiteContext.tsx";
import AdminProvider from "./context/AdminContext.tsx";

import './i18n'
import {NhostClient, NhostProvider} from "@nhost/react";

const nhost: NhostClient = new NhostClient({
    subdomain: import.meta.env.VITE_NHOST_SUBDOMAIN,
    region: import.meta.env.VITE_NHOST_REGION
})

createRoot(document.getElementById('root') as HTMLElement).render(
    <NhostProvider nhost={nhost}>
        <BrowserRouter>
            <SiteProvider>
                <AdminProvider>
                    <App/>
                </AdminProvider>
            </SiteProvider>
        </BrowserRouter>
    </NhostProvider>
);
