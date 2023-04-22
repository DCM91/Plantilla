import Image from 'next/image'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const typetheme=["luxury", "cupcake"]


  return (
    <>
      <div data-theme="luxury">
        <h1>issooo</h1>
      </div>   
      <div data-themw="cupcake">
        <h1>issooo</h1>
      </div>
    </>
  )
}
