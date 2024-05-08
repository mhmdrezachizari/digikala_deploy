import Card from '@/components/Card'
import React, { useId } from 'react'
import styles from './[category].module.css'

const category = (props) => {
  const id = useId()
  return (
    <div className={styles.outdiv}>
      {
        props.date.map(item=>{
          return <Card product={item} key={id}/>
        })
      }
    </div>
  )
}

export default category
export async function getServerSideProps(context) {
const response = await fetch(`http://80.75.14.90:9090/products/${context.params.category}`) 
const date =  await response.json()
  return {
      props: { date },
  }
}