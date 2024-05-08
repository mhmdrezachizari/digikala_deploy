
import MainSlider from "@/components/MainSlider";
import SevenIcons from "@/components/SevenIcons";
import styles from "@/styles/Home.module.css";
import { Inter } from "next/font/google";
import { useId } from "react";

const inter = Inter({ subsets: ["latin"] });

export default function Home(props) {
  const id1 = useId()
  const id2 = useId()
  return (
    <>
      <MainSlider key={id1} mainSlider={props.mainSlider} />
      <SevenIcons key={id2} date={props.seveniconsdate} />
    
    </>
  );
}
export async function getServerSideProps() {
  const response = await fetch("http://80.75.14.90:9090/public/mainSlider");
  const mainSlider = await response.json();
  const seveniconsresponse = await fetch("http://80.75.14.90:9090/SevenIcons")
  const seveniconsdate = await seveniconsresponse.json()
  return {
    props: { mainSlider, seveniconsdate }
  }
}