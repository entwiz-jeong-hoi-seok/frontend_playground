import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Header from '@/components/Header';

import {Provider, useSelector, useDispatch } from "react-redux";
import store from "@/store/index";


export default function App({ Component, pageProps }: AppProps) {
  return(
    <Provider store={store}>
        <Header>
          <Component {...pageProps} />
        </Header>
    </Provider>
    )
}
