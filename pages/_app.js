import "@/styles/globals.css";
import "bootstrap/dist/css/bootstrap.rtl.min.css";
import localFont from "next/font/local";
import FooterResponsive from "@/components/FooterResponsive";
import TopBanner from "@/components/TopBaner";
import { Provider } from "react-redux";
import ResponNavbar from "@/components/ResponNavbar";
import { ReduxPersistStore, persistor } from "@/redux/ReduxPersistStore";
import { PersistGate } from "redux-persist/integration/react";

const iranSansFont = localFont({ src: "../public/fonts/IRANSansWeb.woff" });

export default function App({ Component, pageProps }) {
  return (
    <>
      <main className={`${iranSansFont.className} divmain`}>
        <Provider store={ReduxPersistStore}>
        <PersistGate loading={<h1>loading...</h1>} persistor={persistor}>
          <TopBanner />
          <ResponNavbar />
          <Component {...pageProps} />
          <FooterResponsive />
          </PersistGate>
        </Provider>
      </main>
    </>
  );
}
