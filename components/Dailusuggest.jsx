import React, { useState } from 'react'
import style from './Dailusuggest.module.css'
import Card from './Card'
import Link from 'next/link'
const Dailusuggest = (props) => {
    const [flag, setflag] = useState(false)
    const changeflaghandler =()=>{
        setflag(!flag)
    }
  return (
    <div className={style.divContainer}>
      <div className={style.divh5container}><h5 className={style.h5dailysuggesst}>پیشنهاد روزانه </h5></div> 
      <div className={style.divcardcontainer}>
      {
            flag === true ? props.date.map(item=><Card product={item}/>) : 
        
            props.date.map(item=>{
                if(item.id <= 4){
                    return <Card product={item}/>
                }
            })
        }
        {
            flag === false ?        <button onClick={changeflaghandler} className={style.labeletc}>...</button>: <button onClick={changeflaghandler} className={style.labeletc}>close</button>
        }      

      </div>
    </div>
  )
}

export default Dailusuggest