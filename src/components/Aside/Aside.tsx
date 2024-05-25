import React, {useState} from 'react'
import {api} from '../../redux/api.ts'
import {useNavigate} from "react-router-dom";

export const Aside: React.FC = () => {
  const navigate = useNavigate()
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

  const [selectedItemId, setSelectedItemId] = useState(topics && topics.length > 0 ? topics[0].id : null)

  const onClickHandler = (id: number, name: string) => {
    setSelectedItemId(id)
    if (name === 'Все темы') {
      navigate(`/all`, {state: {name}})
    } else {
      navigate(`/${id}`, {state: {name}})
    }
  }

  return <nav>
    <ul>
      {
        topics && topics.map(item => (
          <li
            onClick={() => {onClickHandler(item.id, item.name)}}
            style={{ fontWeight: selectedItemId === item.id ? 'bold' : 'normal' }}
            key={item.id}>{item.name}</li>
        ))
      }
    </ul>
  </nav>
}