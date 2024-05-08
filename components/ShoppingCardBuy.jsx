import React, { useId } from 'react'
import Sabad from './Sabad'
import { useSelector } from 'react-redux'
import Card from './Card'
const ShoppingCardBuy = () => {
  const date = useSelector(state => state.shoppingcard)
  const totalAmount = date.totalAmount
  const totalCount = date.totalCount
  const id1 = useId()
  const id2 = useId()
  return (
    <>
    <div className='container p-5'>
      <div className="row">
        <div className="col-8 d-flex flex-row justify-content-center flex-wrap">
          {
            date.items.map(item => {
              return <Card product={item} key={id1}/>
            })
          }
        </div>
        <div className="col-4">
          <Sabad date={{totalAmount,totalCount}} key={id2}/>
        </div>
      </div>
      </div>
    </>

  )
}
export default ShoppingCardBuy