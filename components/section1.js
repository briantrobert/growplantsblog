import SwiperView from "./swiper";

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

async function Section1() {

  let result = await getData()

  return (
    <div>
      <SwiperView data={result}/>
    </div>
  );
}



export default Section1;
