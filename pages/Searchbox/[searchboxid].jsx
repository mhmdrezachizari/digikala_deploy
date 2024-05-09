
import Card from '@/components/Card'
import { useRouter } from 'next/router'
import React from 'react'

const searchboxid = (props) => {
   
  return (
    <div className='d-flex flex-wrap-wrap'>
    {
     props.res.length===0 ? <h1 className='my-5'>محصولی یافت نشد  🤐</h1> : props.res.map(item=><Card product={item}/>)
    }
    </div>
  )
}

export default searchboxid
export async function getServerSideProps(context){
    const data = await fetch(`http://80.75.14.90:9090/products/search/${context.params.searchboxid}`)
    const res = await data.json()
return{
    props:{res}
}

}