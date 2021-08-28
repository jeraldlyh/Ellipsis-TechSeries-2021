
import { useRouter } from 'next/router'
import styles from '../styles/marketplace.module.css'
import NumberFormat from 'react-number-format'

export default function ProductItem(props) {
    const router = useRouter();

    return (
        <div className="cursor-pointer" onClick={() => { router.push({ pathname: "/product/" + `${props.id}`, query: { name: props.name, company: props.company, price: props.price, image: props.image, desc: props.desc, bnpl: props.bnpl } }) }}
        >
            <img className="pb-5" src={props.image} width="240" height="330" />
            <div className={styles.productName}>{props.name}</div>
            <div className={styles.companyName}>{props.company}</div>
            <NumberFormat value={props.price} displayType={"text"} thousandSeparator={true} prefix={"S$"} />
        </div>
    )
}