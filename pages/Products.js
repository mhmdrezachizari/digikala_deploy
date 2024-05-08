import Card from '@/components/Card';
import React, { useId } from 'react'
import styles from './Products.module.css'

const Products = (props) => {
  const id = useId()
  return (
    <div className={styles.outdiv}>
      {
        props.data.map(item => {
          return <Card product={item} key={id} />
        })
      }

    </div>
  )
}

export default Products
export async function getServerSideProps() {
  const response = await fetch("http://80.75.14.90:9090/products");
  const data = await response.json()

  return {
    props: { data }
  }
}