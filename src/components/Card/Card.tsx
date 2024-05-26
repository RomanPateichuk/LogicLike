import React from 'react'
import styles from './Card.module.scss'

type CardPropType = {
  name: string
  image : string
  bg : string
}

export const Card: React.FC<CardPropType> = React.memo((props)=>{

  const {name, image, bg} = props

  return <div className={styles.card} >
    <div className={styles.image} style={{backgroundColor: bg}}>
      <img src={image} alt={name} />
    </div>

    <p className={styles.description}>{name}</p>
  </div>
})