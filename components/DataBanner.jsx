import React from 'react'
import data from './dateofclintbannerdigikala/date'
import Image from 'next/image'
import styles from './DataBanner.module.css'
const DataBanner = () => {
  return (
    <div className={styles.divoutainer}>
        {
            data.map(item=>{
               return <div className={styles.imgbanner}><Image src={item.url} height={90} width={90} /></div>
            })
        }
    </div>
  )
}

export default DataBanner