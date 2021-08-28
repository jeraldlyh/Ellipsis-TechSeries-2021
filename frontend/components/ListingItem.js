
import { useRouter } from 'next/router'
import styles from '../styles/marketplace.module.css'

export default function ListingItem(props) {
  const router = useRouter();

  return (
    <div className="cursor-pointer" onClick={() => { router.push({ pathname: "/listing/" + `${props.id}`, query: { name: props.name, company: props.company, price: props.price, image: props.image, desc: props.desc, bnpl: props.bnpl } }) }}
    >
      <img className="pb-5" src={props.image} width="240" height="330" />
      <div className={styles.productName}>{props.name}</div>
      <div className={styles.companyName}>{props.company}</div>
      <div className={styles.price}>{props.price}</div>
      <div className={styles.bnpl}>{props.bnpl}</div>
    </div>
  )
}