import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {Provider} from "react-redux";
import {store} from "./redux/configure-store.ts";
import {AppRoutes} from "./routes/appRoutes.tsx";
import {BrowserRouter} from "react-router-dom";

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <AppRoutes/>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
)
