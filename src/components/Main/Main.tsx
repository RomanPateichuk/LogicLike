import React from 'react'
import styles from './Main.module.scss'
import {useLocation} from "react-router-dom";
import {api} from "../../redux/api.ts";
import {Card} from "../Card/Card.tsx";

export const Main: React.FC = () => {
  const location = useLocation()
  const {filteredCards} = api.useGetCoursesQuery(undefined,
    {
      selectFromResult: ({data}) => {
        if (location.pathname === '/all') {
          return {
            filteredCards: data
          }
        } else {
          return {
            filteredCards: data?.filter(item => item.tags.includes(location.state.name))
          }
        }
      },
    })

  return <div className={styles.main}>
    {
      filteredCards?.map(item => (<Card key={item.id} name={item.name} image={item.image} bg={item.bgColor}/>))
    }
  </div>
}