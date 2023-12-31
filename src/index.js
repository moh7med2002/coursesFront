import React, { Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import rtlPlugin from "stylis-plugin-rtl";
import { CacheProvider } from "@emotion/react";
import createCache from "@emotion/cache";
import { prefixer } from "stylis";
import {BrowserRouter} from 'react-router-dom'


  //Create rtl cache
const cacheRtl = createCache({
  key:  "muirtl" ,
  stylisPlugins: [prefixer, rtlPlugin],
});

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <CacheProvider value={cacheRtl}>
    <BrowserRouter>
      <Suspense fallback={<h1></h1>}>
        <App />
      </Suspense>
    </BrowserRouter>
  </CacheProvider>
);
