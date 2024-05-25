import React from 'react'
import './App.css'
import {Layout} from "./components/Layout/Layout.tsx";
import {useGetCoursesQuery} from "./redux/api.ts";
import {Loader} from "./components/Loader/Loader.tsx";


export const App: React.FC = () => {

  const {  isLoading, error } = useGetCoursesQuery();

  return (
    <>
      {isLoading ? <Loader/> : <Layout/>}
      {error && <div>Произошла ошибка: {error.status}</div>}
    </>
  )
}


