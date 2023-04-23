import Head from 'next/head'
import React from 'react'
import { Footer } from './Footer'

export const Layout = ({theme, title = "TypedNextCinema" , children}) => {
  return (
    <div>
        <Head>
            <title>{title}</title>
            <meta name="description" content="TypedNextCinema app" />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <link rel="icon" href="/favicon.ico" />
        </Head>
        <header></header>
        <main>{children}</main>
        <footer><Footer theme={theme} /></footer>
    </div>
  )
}
