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
      <body>
        {children}
      </body>
    </html>
  )
}
