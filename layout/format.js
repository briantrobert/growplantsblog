import Footer from "@/components/footer"
import Header from "@/components/header"

function Format({children}) {
  return (
    <>
      <Header />
         <main>{children}</main>
      <Footer />
    </>
  )
}

export default Format
