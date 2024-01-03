import mockData from "./api/mockData";
const categoryData = ['Bulbs','Leaves','Roots','Flowers','Fruits','Legumes']
const baseUrl = process.env.BASEURL;


export default async function sitemap() {

  const { Post } = mockData

   let categoryURL = [];
   let categoryURL2 = [];

  categoryURL = categoryData.map((e) =>  {
            return {
              url: `${baseUrl}/categories/${e}`,
              lastModified: new Date(),
            };
  })?? [];

  categoryURL2 = Post.map((e) => {
      return {
        url: `${baseUrl}/categories/${e.categories}/${e.type}`,
        lastModified: new Date(),
      };
  })?? [];



  return [
    {
      url: `${baseUrl}`,
      lastModified: new Date(),
    },
    ...categoryURL,
    ...categoryURL2
  ]
}