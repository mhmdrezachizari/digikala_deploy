import React, { useEffect, useState } from "react";
import Image from "next/image";
import styles from "./TopBanner.module.css";
import Link from "next/link";
const TopBanner = () => {
  const [topBannerObject, setTopBannerObject] = useState({});
  useEffect(() => {
    fetch("http://80.75.14.90:9090/topBanner").then(respone=>respone.json()).then(date=>setTopBannerObject(date))
    .catch(error=>console.log(error))
  }, []);
  return (
<Link href='/'>
    <div style={{ height: "46px" }}>
      <Image
        className={`${styles.image}`}
        fill
        alt="digikala"
        src={topBannerObject.imageUrl}
      />
    </div>
    </Link>
  );
};

export default TopBanner;
