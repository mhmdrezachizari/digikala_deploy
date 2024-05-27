import Dailusuggest from "@/components/Dailusuggest";
import MainSlider from "@/components/MainSlider";
import SevenIcons from "@/components/SevenIcons";
import DataBanner from "@/components/DataBanner";
import { Inter } from "next/font/google";
import { useId } from "react";
import IncredibleOffersCarousel from "@/components/IncredibleOffersCarousel";
import TopBanner2 from "@/components/TopBanner2";

const inter = Inter({ subsets: ["latin"] });

export default function Home(props) {
  const id1 = useId()
  const id2 = useId()
  const id3 = useId()
  const id4 = useId()
  const id5 = useId()
  return (
    <>
      <MainSlider key={id1} mainSlider={props.mainSlider} />
      <SevenIcons key={id2} date={props.seveniconsdate} />
      <IncredibleOffersCarousel key={id5} products={props.dateinc}/>
      <Dailusuggest key={id3} date={props.daily}/>
      <DataBanner key={id4}/>
    
    </>
  );
}
export async function getServerSideProps() {
  const response = await fetch("http://80.75.14.90:9090/public/mainSlider");
  const mainSlider = await response.json();
  const seveniconsresponse = await fetch("http://80.75.14.90:9090/SevenIcons")
  const seveniconsdate = await seveniconsresponse.json()
  const dailysuggest = await fetch("http://80.75.14.90:9090/products/dailySuggests")
  const daily = await dailysuggest.json()
  const inc1 = await fetch("http://80.75.14.90:9090/products/incredibleOffers")
  const dateinc =await inc1.json()
  return {
    props: { mainSlider, seveniconsdate , daily ,dateinc }
  }
}