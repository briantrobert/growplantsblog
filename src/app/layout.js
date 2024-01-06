import './globals.css'
import Script from 'next/script'

export const metadata = {
  metadataBase: new URL(`${process.env.BASE_URL}`), // aqui se define la direccion canonica de la pagina para el SEO, es la direccion final de despliegue
  title: {
    default: 'Grow your plants',
    template: `%s | Grow your plants`,
  },
  description: 'How to grow plants, different methods and recommendations',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
        <Script 
          id="Adsense-id"
          async
          data-ad-client={`${process.env.GOOGLE_ADS_CLIENT_ID}`}
          strategy="afterInteractive"
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"
          crossorigin="anonymous">
        </Script>
    </html>
  )
}
