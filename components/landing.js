import Image from "next/image"


function Landing() {
  return (
    <div className="w-full relative h-[580px] flex flex-col justify-center">
          <Image 
          src={'/images/background.jpg'}
          className="rounded"
          fill
          style={{
            objectFit: "cover"
          }}
          alt="my description photo" />
        <div className="absolute w-full bg-black/70 backdrop-blur-sm h-72 bottom-0">
               <div className="flex items-center justify-center flex-col pt-10 text-gray-200">
                     <h1 className="md:text-5xl text-2xl font-bold text-center">Planting.... has never been so easy</h1>
                     <div className="pt-10">
                     <h1 className="md:text-2xl text-xl text-center">"If you put faith and effort and with the blessings of God</h1>
                     <h1 className="md:text-2xl text-xl text-center">it will grow."</h1>
                     </div>
               </div>
        </div>
    </div>
  )
}

export default Landing
