import React from 'react'
import ReactDOM from 'react-dom/client'
import {HashRouter} from 'react-router-dom'
import './index.css'
import {Provider} from "react-redux";
import {store} from "./redux/configure-store.ts";
import {AppRoutes} from "./routes/appRoutes.tsx";

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Provider store={store}>
      <HashRouter>
 <AppRoutes/>
      </HashRouter>
    </Provider>
  </React.StrictMode>,
)
