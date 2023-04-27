import Head from 'next/head'
import { Footer } from './Footer'
import { Navbar } from './navbar'
import { useRouter } from "next/router"
import en from "@/languages/en"
import es from "@/languages/es"
import Link from "next/link"


export const Layout = ({theme, title = "Dcm91Portfolio" , children}) => {
  const router = useRouter()
  const t = router.locale == "en" ? en : es
  return (
    <div data-theme={theme}>
        <Head>
            <title>{title}</title>
            <meta name="description" content="Dcm91 profesional Portfolio" />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <link rel="icon" href="/favicon.ico" />
        </Head>
        <header>
          <Navbar theme={theme}/>
          <ul>
            {router.locales.map((loc)=>(
                <li key={loc}>
                    <Link href={router.asPath} locale={loc}>
                        {loc}
                    </Link>
                </li>
            ))}
        </ul>
        </header>
        <main>{children}</main>
        <footer><Footer theme={theme} /></footer>
    </div>
  )
}
