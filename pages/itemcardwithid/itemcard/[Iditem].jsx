import Image from "next/image";
import styles from './[Iditem].module.css'
import ModalDescription from "@/components/ModalDescription";
import Buttoonfirst from "@/components/Buttoonfirst";
import { useSelector } from "react-redux";
import AfterClickButton from "@/components/AfterClickButton";
const Iditem = (props) => {
  const reduxdata = useSelector(state=>state.shoppingcard)
  return (
    <div className={styles.divOutainer}>
      <div className={styles.divImage}>
        <Image height={300} width={300} src={props.data.indexImageUrl} alt="digikala" />
        <h5 className={styles.h5name}>{props.data.name}</h5>
        <h5 className={`${styles.h5name} ${styles.h5price}`}> قیمت محصول :{props.data.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") }</h5>
        <ModalDescription data={props.data.description}/>
        {
          reduxdata.items.length === 0 ? <Buttoonfirst date={props.data}/>:<AfterClickButton prd={props.data.id} />
        }
        
      </div>
    </div>
  );
};

export default Iditem;
export async function getServerSideProps(context) {
  const response = await fetch(
    `http://80.75.14.90:9090/products/${context.params.Iditem}`
  );
  const data = await response.json();
  return {
    props: { data },
  };
}
