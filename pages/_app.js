import "@/styles/globals.css";
import 'bootstrap/dist/css/bootstrap.rtl.min.css'
import localFont from 'next/font/local'
import NavbarResponsive from '../components/NavbarResponsive'
import FooterResponsive from '@/components/FooterResponsive'
import TopBanner from "@/components/TopBaner";
import { Provider } from "react-redux";
import Store from "@/redux/Store";


const iranSansFont = localFont({ src: '../public/fonts/IRANSansWeb.woff' })

export default function App({ Component, pageProps }) {

    return (
        <>
            <main className={`${iranSansFont.className} divmain`}>
                <Provider store={Store}>
                <TopBanner/>
                <NavbarResponsive />
                <Component {...pageProps} />
                <FooterResponsive/>
                </Provider>

            </main>
        </>
    )

}
