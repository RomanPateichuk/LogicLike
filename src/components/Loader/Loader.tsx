import React from 'react'
import LoaderSvg from './loader.svg'
import styles from './Loader.module.scss'

export const Loader: React.FC = () => {
  return <div className={styles.loader}>
    <img className={styles.image} src={LoaderSvg} alt='loading' />
  </div>
}


