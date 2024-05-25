import React from 'react'
import styles from './Layout.module.scss'
import {Aside} from "../Aside/Aside.tsx";
import {Outlet} from "react-router-dom";

export const Layout: React.FC = ()=>{
  return <div className={styles.layout}>
    <Aside/>
      <Outlet />
  </div>
}