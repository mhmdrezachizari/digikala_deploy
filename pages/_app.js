import "@/styles/globals.css";
import "bootstrap/dist/css/bootstrap.rtl.min.css";
import localFont from "next/font/local";
import FooterResponsive from "@/components/FooterResponsive";
import TopBanner from "@/components/TopBaner";
import { Provider } from "react-redux";
import ResponNavbar from "@/components/ResponNavbar";
import { ReduxPersistStore, persistor } from "@/redux/ReduxPersistStore";
import { PersistGate } from "redux-persist/integration/react";
import Magnify from "@/components/Magnify";
import { useId } from "react";
import TopBanner2 from "@/components/TopBanner2";

const iranSansFont = localFont({ src: "../public/fonts/IRANSansWeb.woff" });

export default function App({ Component, pageProps }) {
  const id1 = useId()
  const id2 = useId()
  const id3 = useId()
  const id4 = useId()
  const id5 = useId()
  return (
    <>
      <main className={`${iranSansFont.className} divmain`}>
        <Provider store={ReduxPersistStore}>
        <PersistGate loading={<Magnify key={id1}/>} persistor={persistor}>
          <TopBanner2 key={id5}/>
          <ResponNavbar key={id3}/>
          <Component {...pageProps} />
          <FooterResponsive key={id4} />
          </PersistGate>
        </Provider>
      </main>
    </>
  );
}
