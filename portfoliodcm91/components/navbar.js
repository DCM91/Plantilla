import { useRouter } from "next/router"
import en from "@/languages/en"
import es from "@/languages/es"
import Link from "next/link"

export const Navbar = ({theme}) => {
    const router = useRouter()
    const t = router.locale == "en" ? en : es

  return (
    <div data-theme={theme}>
        <ul>
            {router.locales.map((loc)=>(
                <li key={loc}>
                    <Link href={router.asPath} locale={loc}>
                        {loc}
                    </Link>
                </li>
            ))}
        </ul>
    </div>
  )
}
