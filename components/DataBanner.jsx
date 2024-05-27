import React, { memo } from 'react'
import data from './dateofclintbannerdigikala/date'
import Image from 'next/image'
import styles from './DataBanner.module.css'
const DataBanner = () => {
  return (
    <div className={styles.divoutainer}>
        {
            data.map(item=>{
               return <div key={item.id} className={styles.imgbanner}><Image src={item.url} height={90} width={90} alt='salam' /></div>
            })
        }
    </div>
  )
}

export default memo(DataBanner)