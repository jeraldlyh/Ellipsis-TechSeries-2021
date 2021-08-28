
import { useRouter } from 'next/router'
import styles from '../styles/marketplace.module.css'
import { AiFillEye } from "react-icons/ai"
import { AiFillEyeInvisible } from "react-icons/ai"
import IconButton from '@material-ui/core/IconButton';
import { useState } from 'react'

export default function ListingItem(props) {
  const router = useRouter();
  const [isCardView, setIsCardView] = useState(true)
  const visible = "cursor-pointer"
  const hidden = "cursor-pointer opacity-30"

  return (
    <div className={isCardView ? visible : hidden}>
      <img className="pb-5" src={props.image} width="240" height="330" onClick={() => { router.push({ pathname: "/listing/" + `${props.id}`, query: { name: props.name, company: props.company, price: props.price, image: props.image, desc: props.desc, bnpl: props.bnpl } }) }} />
      <div className="flex justify-center">

        <IconButton
          onClick={() => setIsCardView(!isCardView)}>
          {isCardView ? <AiFillEye /> : <AiFillEyeInvisible />}
        </IconButton>

      </div>
      <div onClick={() => { router.push({ pathname: "/listing/" + `${props.id}`, query: { name: props.name, company: props.company, price: props.price, image: props.image, desc: props.desc, bnpl: props.bnpl } }) }}>
        <div className={styles.productName}>{props.name}</div>
        <div className={styles.companyName}>{props.company}</div>
        <div className={styles.price}>{props.price}</div>
        <div className={styles.bnpl2}>BNPL Scheme offered:</div>
        <div className={styles.bnpl}>{props.bnpl}</div>
      </div>
    </div>
  )
}