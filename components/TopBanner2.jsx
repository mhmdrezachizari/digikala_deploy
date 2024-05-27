import React, { useId } from "react";
import databaner from "./dateofclintbannerdigikala/dateforbanner";
import Image from "next/image";
import styles from "./TopBanner.module.css";
import Link from "next/link";
const TopBanner2 = () => {
   const id1 = useId()
   const id2 = useId()
   const id3 = useId()
   const id4 = useId()
   const id5 = useId()
  return (
    <div key={id1}>
      
        <Link href="/">
          <div key={id2} style={{ height: "46px" }}>
            {databaner.map((item) => {
              return (
                <Image
                  className={`${styles.image}`}
                  fill
                  alt="digikala"
                  src={item.url}
                  key={id3}
                />
              );
            })}
          </div>
        </Link>
    </div>
  );
};

export default TopBanner2;
