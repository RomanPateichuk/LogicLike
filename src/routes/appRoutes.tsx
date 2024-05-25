import {App} from '../App.tsx'
import {Navigate, useRoutes} from 'react-router-dom'
import {Main} from "../components/Main/Main.tsx";



export const AppRoutes = () => {
  return useRoutes([
      {
        path: '/',
        element: <App/>,
        children: [
          {index: true, element: <Navigate to="/all" replace/>},
          {
            path: '/all',
            element: <Main/>
          },
          {
            path: '/:id',
            element: <Main/>
          },
        ]
      },
    ]
  );
}