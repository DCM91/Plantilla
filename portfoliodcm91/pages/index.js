import { useRouter } from "next/router"
import { Layout } from "../components/Layout"
import { useState } from "react"
import en from "@/languages/en"
import es from "@/languages/es"

export default function Home() {
  const router = useRouter()
  const t = router.locale == "en" ? en : es

  const [theme, setTheme] = useState("luxury")
  const handleTheme = () =>{
    setTheme(theme === "luxury" ? "cupcake" : "luxury")
  }
  const typetheme=["luxury", "cupcake"]


  return (
     <Layout theme={theme} title="Dcm91Portfolio - Home">
        <div className="grid p-2" data-theme={theme}>
          <div>
            <h1 className=" h-56">{t.home.title}</h1>
            <button className="btn btn-primary" onClick={handleTheme} >ClickME</button>
          </div>
        </div>   
      </Layout>
  )
}
