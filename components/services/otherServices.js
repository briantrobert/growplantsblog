
const baseUrl = process.env.BASE_URL;

export default async function getCategories(url, slug) {

  let data = []
  let res = ''

  if(slug){
    if (slug.length == 1) {
      res = await fetch(`${baseUrl}/api/${url}${slug[0]}`)
      data = await res.json()
  
      if (!res.ok) {
        return {
          data,
          isLoading: false,
          isError: true,
        }
      }
  
    }
  
    if (slug.length == 2) {
      res = await fetch(`${baseUrl}/api/${url}${slug[0]}/${slug[1]}`)
      data = await res.json()
  
      if (!res.ok) {
        return {
          data,
          isLoading: false,
          isError: true,
        }
      }
  
    }
  }else{
    res = await fetch(`${baseUrl}${url}`)
    // The return value is *not* serialized
    // You can return Date, Map, Set, etc.
     data = await res.json()

     
  }
  // The return value is *not* serialized
  // You can return Date, Map, Set, etc.


  // if (slug) {
  //   newSlug = slug.replaceAll("%20", " ")
  // }
  return {
    data,
    isLoading: false && !data,
    isError: false,
  }
 
}
