import Dailusuggest from "@/components/Dailusuggest";
import MainSlider from "@/components/MainSlider";
import SevenIcons from "@/components/SevenIcons";
import DataBanner from "@/components/dataBanner";
import { Inter } from "next/font/google";
import { useId } from "react";

const inter = Inter({ subsets: ["latin"] });

export default function Home(props) {
  const id1 = useId()
  const id2 = useId()
  const id3 = useId()
  const id4 = useId()
  return (
    <>
      <MainSlider key={id1} mainSlider={props.mainSlider} />
      <SevenIcons key={id2} date={props.seveniconsdate} />
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
  return {
    props: { mainSlider, seveniconsdate , daily }
  }
}