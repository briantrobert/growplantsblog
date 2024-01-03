import Article from "@/components/articles"
import CategoryPost from "@/components/categoryPosts"
import getCategories from "@/components/services/otherServices"
import Error from "@/components/ui/error"
import Spinner from "@/components/ui/spinner"
import Format from "@/layout/format"

export async function generateMetadata({params}){

  try {
    const { data } = await getCategories('/categories/',params.slug)

    if(!data){
         return {
          title:"Not Found",
          description:"The page are you looking do not exist",
         }
    }else if(data.length == 1) {
      return {
        title: data.type,
        description: data.seo2,
        alternates: {
          canonical: `/categories/${data.categories}/${data.type}`,  //aqui va la direccion final de despliegue de nuestra aplicacion
          languages: {                       //en caso de tener varios lenguajes en la app
            'en-US': `/en-US/categories/${data.categories}/${data.type}`,
            'es-Es': `/es-Es/categories/${data.categories}/${data.type}`,
          },
        },
       }
    }else{
        return {
          title: data.categories,
          description: data.seo2,
          alternates: {
            canonical: `/categories/${data.categories}`,  //aqui va la direccion final de despliegue de nuestra aplicacion
            languages: {                       //en caso de tener varios lenguajes en la app
              'en-US': `/en-US/categories/${data.categories}`,
              'es-Es': `/es-Es/categories/${data.categories}`,
            },
          },
         }
    }

   

  } catch (error) {
    return {
      title:"Not Found",
      description:"The page are you looking do not exist",
     }
  }
}

export default async function Page({params}){

    const { data, isLoading, isError } = await getCategories('/categories/',params.slug)
    
    if (isLoading) return <Spinner />
    
    if (isError) return <Error />
    
    if(data && data.length == 1){
        return (
            <Article data={data[0]}></Article>
          )
    }
  
    return(
      <Format>
        <section className="container mx-auto md:px-20 py-10">
          <h1 className="font-semibold text-4xl py-12 text-center">All About {params.slug[0]}</h1>
          <div className="grid ml-2 mr-2 justify-self-center md:grid-cols-2 lg:grid-cols-3 gap-14">
            {
              data.map((e) => (
                <CategoryPost key={e.id} data={e} />
              ))
            }
          </div>
        </section>
      </Format>
      )
  
  }
  
  
   
  