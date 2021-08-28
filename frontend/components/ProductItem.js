
import { useRouter } from 'next/router'
import styles from '../styles/marketplace.module.css'

export default function ProductItem({name}) {
  const router = useRouter();

  return (
    <div className="cursor-pointer" onClick={() => { router.push("/product/" + {name}) }}>
      <img className="pb-5" src="/photos/marketplace/flour.jpeg" width="240" height="330" />
      <div className={styles.productName}>{name}</div>
      <div className={styles.companyName}>{company}</div>
      <div className={styles.price}>{price}</div>
    </div>
  )
}