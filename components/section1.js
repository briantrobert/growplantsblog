import SwiperView from "./swiper";

async function Section1({data}) {

  let resultData = []

  if (data) {
    for (let x = 0; x < 3; x++) {
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
    <div>
      <SwiperView data={resultData}/>
    </div>
  );
}



export default Section1;
