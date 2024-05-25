import React from 'react'
import styles from './Card.module.scss'

type CardPropType = {
  name: string
  image : string
  bg : string
}

export const Card: React.FC<CardPropType> = (props)=>{

  const {name, image, bg} = props

  return <div className={styles.card} style={{backgroundColor: bg}}>
    <img src={image} alt={name}/>
    <p>{name}</p>
  </div>
}