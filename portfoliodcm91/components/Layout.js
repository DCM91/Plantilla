import Head from 'next/head'
import { Footer } from './Footer'
import { Navbar } from './navbar'
import { Selector } from './selector'
import { useState } from "react"
import { BsFillSunFill, BsFillMoonStarsFill } from "react-icons/bs";




export const Layout = ({ title = "Dcm91Portfolio" , children}) => {
  const [theme, setTheme] = useState("luxury")
  const handleTheme = () =>{
    setTheme(theme === "luxury" ? "cupcake" : "luxury")
  }
  const typetheme=["luxury", "cupcake"]


  return (
    <div data-theme={theme} className='h-full grid overflow-hidden'>
        <Head>
            <title>{title}</title>
            <meta name="description" content="Dcm91 profesional Portfolio" />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <link rel="icon" href="/favicon.ico" />
        </Head>

        <header className='w-full px-4'>
          <div>
            <Navbar theme={theme}/>
            <div className='w-full flex items-center justify-end'>
              <BsFillSunFill className='mx-1 text-lg'/>
              <input type="checkbox" className="toggle toggle-md" id="luxury" checked={theme === "luxury"} onChange={handleTheme} />
              <BsFillMoonStarsFill className='mx-1 mr-4' />
              <Selector />
            </div>
          </div>
        </header>

        <main className='border-4 border-orange-700'>{children}</main>

        <footer className=''><Footer theme={theme} /></footer>
    </div>
  )
}
