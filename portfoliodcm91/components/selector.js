import { useRouter } from "next/router"
import en from "@/languages/en"
import es from "@/languages/es"
import fr from "@/languages/fr"

export const Selector = () => {
    const router = useRouter()
    let t
    if (router.locale === 'en') {
      t = en
    } else if (router.locale === 'es') {
      t = es
    } else if (router.locale === 'fr') {
      t = fr
    }    
    const changeLanguage = (e) => {
      router.push(router.pathname, router.pathname, { locale: e.target.value })

      };
      return (
        <select value={router.locale} onChange={changeLanguage}className="h-8 p-1 bg-transparent">
          <option value="en">English</option>
          <option value="es">Español</option>
          <option value="fr">Français</option>
        </select>
      )
    }
