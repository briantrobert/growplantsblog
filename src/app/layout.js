import Head from 'next/head'
import './globals.css'

export const metadata = {
  metadataBase: new URL("http://localhost:3000"), // aqui se define la direccion canonica de la pagina para el SEO, es la direccion final de despliegue
  title:{
    default: 'Grow your plants',
    template: `%s | Grow your plants`,
  },
  description: 'How to grow plants, different methods and recommendations',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
      <script async 
        src={`https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${process.env.GOOGLE_ADS_CLIENT_ID}`}
        strategy="lazyOnload"
        crossorigin="anonymous"></script>
      </Head>
      <body>
        {children}
      </body>
    </html>
  )
}
