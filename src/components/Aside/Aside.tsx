import React from 'react'
import {api} from '../../redux/api.ts'
import {NavLink} from 'react-router-dom'
import styles from './Aside.module.scss'

export const Aside: React.FC = () => {

  const {topics} = api.useGetCoursesQuery(undefined,
    {
      selectFromResult: ({data}) => {
        const tags = new Set()
        const uniqueTags: Array<{ id: number, name: string }> = []
        let id = 0
        uniqueTags.push({id: ++id, name: 'Все темы'})
        data?.forEach(course => {
          course.tags.forEach(tag => {
            if (!tags.has(tag)) {
              tags.add(tag);
              uniqueTags.push({id: ++id, name: tag})
            }
          })
        })

        return {
          topics: uniqueTags
        }
      },
    })

  return <nav className={styles.aside}>

      {
        topics && topics.map(item => (
            <NavLink
              to={item.name === 'Все темы' ? '/all' : `/${item.id}`}
              state={{name: item.name}}
              className={({isActive}) => isActive ? styles.active : ''}
              key={item.id}
            >
              {item.name}
            </NavLink>
        ))
      }
  </nav>
}