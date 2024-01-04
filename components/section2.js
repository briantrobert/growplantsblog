import CategoryPost from "./categoryPosts";

async function getData() {
  let json = []
  let resultData = []

  try {

    const data = await fetch(process.env.BASE_URL + "/api/categories", {
      cache: "no-cache",
    })
    json = await data.json()

    if (json) {
    for (let x = 0; x < 6; x++) {
     let aux = json[Math.floor(Math.random() * json.length)];
      if(resultData.length == 0 ){
         resultData.push(aux);       
         }
      else if(resultData.find((e) => e.id == aux.id)){
                x--;
      }else {
          resultData.push(aux);
        }
    }
  } 
    
  } catch (error) {
    return resultData
  }
  return resultData
}

async function Section2() {

  let result = await getData()

return (
  <section className="container mx-auto md:px-20 py-10">
    <h1 className="font-semibold text-4xl py-12 text-center">More Post</h1>
    <div className="grid ml-2 mr-2 justify-self-center md:grid-cols-2 lg:grid-cols-3 gap-14">
      {
        result ? result.map((e) => (
          <CategoryPost key={e.id} data={e} />
        ))
        :
        <div></div>
      }
    </div>
  </section>
);
}

export default Section2;
