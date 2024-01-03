import CategoryPost from "./categoryPosts";

function Section2({ data }) {

  let resultData = []

  if (data) {
    for (let x = 0; x < 6; x++) {
     let aux = data[Math.floor(Math.random() * data.length)];
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




return (
  <section className="container mx-auto md:px-20 py-10">
    <h1 className="font-semibold text-4xl py-12 text-center">More Post</h1>
    <div className="grid ml-2 mr-2 justify-self-center md:grid-cols-2 lg:grid-cols-3 gap-14">
      {
        resultData && resultData.map((e) => (
          <CategoryPost key={e.id} data={e} />
        ))
      }
    </div>
  </section>
);
}

export default Section2;
