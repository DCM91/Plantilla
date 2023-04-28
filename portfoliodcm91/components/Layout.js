import Head from 'next/head'
import { Footer } from './Footer'
import { Navbar } from './navbar'
import { Selector } from './selector'


export const Layout = ({theme, title = "Dcm91Portfolio" , children}) => {

  return (
    <div data-theme={theme} className='h-full grid overflow-hidden'>
        <Head>
            <title>{title}</title>
            <meta name="description" content="Dcm91 profesional Portfolio" />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <link rel="icon" href="/favicon.ico" />
        </Head>

        <header className='p-2'>
          <Navbar theme={theme}/>
          <Selector />
        </header>

        <main className=''>{children}</main>

        <footer className=''><Footer theme={theme} /></footer>
    </div>
  )
}
