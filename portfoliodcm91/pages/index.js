import { Layout } from "../components/Layout"
import { useState } from "react"

export default function Home() {
  const [theme, setTheme] = useState("luxury")
  const handleTheme = () =>{
    setTheme(theme === "luxury" ? "cupcake" : "luxury")
  }
  const typetheme=["luxury", "cupcake"]


  return (
     <Layout theme={theme} title="portfolio">
        <div data-theme={theme}>
          <h1>issooo</h1>
            <button className="btn btn-primary" onClick={handleTheme} >ClickME</button>

        </div>   
      </Layout>
  )
}
