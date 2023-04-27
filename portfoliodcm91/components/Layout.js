import Head from 'next/head'
import React from 'react'
import { Footer } from './Footer'
import { Navbar } from './navbar'

export const Layout = ({theme, title = "Dcm91Portfolio" , children}) => {
  return (
    <div>
        <Head>
            <title>{title}</title>
            <meta name="description" content="Dcm91 profesional Portfolio" />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <link rel="icon" href="/favicon.ico" />
        </Head>
        <header><Navbar theme={theme}/></header>
        <main>{children}</main>
        <footer><Footer theme={theme} /></footer>
    </div>
  )
}
