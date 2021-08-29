
import { useRouter } from 'next/router'
import styles from '../styles/marketplace.module.css'
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai"
import IconButton from '@material-ui/core/IconButton'
import { useState } from 'react'
import NumberFormat from 'react-number-format'

export default function ListingItem(props) {
  const router = useRouter();
  const [isCardView, setIsCardView] = useState(true)
  const visible = "cursor-pointer flex flex-col items-center"
  const hidden = "cursor-pointer opacity-30 flex flex-col items-center"

  return (
    <div className={isCardView ? visible : hidden}>
      <img className="pb-5" src={props.image} width="240" height="330" onClick={() => { router.push({ pathname: "/listing/" + `${props.id}`, query: { name: props.name, company: props.company, price: props.price, image: props.image, desc: props.desc, bnpl: props.bnpl } }) }} />
      <div className="flex justify-center">

        <IconButton
          onClick={() => setIsCardView(!isCardView)}>
          {isCardView ? <AiFillEye /> : <AiFillEyeInvisible />}
        </IconButton>

      </div>
      <div className="flex flex-col items-center px-20" onClick={() => { router.push({ pathname: "/listing/" + `${props.id}`, query: { name: props.name, company: props.company, price: props.price, image: props.image, desc: props.desc, bnpl: props.bnpl } }) }}>
        <div className={styles.productName}>{props.name}</div>
        <div className={styles.companyName}>{props.company}</div>
        <NumberFormat className={styles.price} value={props.price} displayType={"text"} thousandSeparator={true} prefix={"S$ "} />
        <div className={styles.bnpl2}>BNPL Scheme offered:</div>
        <div className={styles.bnpl}>Monthly payment across {props.bnpl} months</div>
      </div>
    </div>
  )
}