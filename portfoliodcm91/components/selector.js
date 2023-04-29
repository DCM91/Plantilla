import { useRouter } from "next/router"
import Link from "next/link"
import en from "@/languages/en"
import es from "@/languages/es"
import fr from "@/languages/fr"

export const Selector = () => {
    const router = useRouter()
    const t = router.locale == "en" ? en : es
    const changeLanguage = (language) => {
        router.push(router.pathname, router.asPath, { locale: language });
      };
  return (
    <div>
        <ul className='flex'>
            {router.locales.map((loc)=>(
           <li key={loc}className='pr-4'>
                <Link href={router.asPath} locale={loc}>
                    {loc}
                </Link>
            </li>
           ))}
      </ul>
    </div>
  )
}
