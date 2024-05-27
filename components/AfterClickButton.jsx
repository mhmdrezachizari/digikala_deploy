import { decreaseitem, increaseitem, removeitem } from '@/redux/shoppingCartReducer';
import React from 'react'
import Button from "react-bootstrap/Button";
import { useDispatch, useSelector } from 'react-redux';
import styles from './AfterClickButton.module.css'
import { FaTrashAlt  } from "react-icons/fa";


const AfterClickButton = (props) => {
    const data = useSelector(state=>state.shoppingcard)
    const afterdata = data.items.filter(item=>item.id === props.prd)[0].count
    const dispatch = useDispatch()
    const incresehandler =(id)=>{
        dispatch(increaseitem(id))
    }

    const decresehandler =(id)=>{
        dispatch(decreaseitem(id))
        
    }
  return (
    <div className={styles.outainerdiv}>
        
        <Button onClick={()=>incresehandler(props.prd)}>+</Button>
        <label className={styles.labelin}>{afterdata}</label>
        {
            afterdata === 1 ? <Button onClick={()=>dispatch(removeitem(props.prd))}> <FaTrashAlt/></Button> :<Button onClick={()=>decresehandler(props.prd)} >-</Button>
        }
        
    </div>
  )
}

export default AfterClickButton