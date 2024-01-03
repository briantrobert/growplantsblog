import Format from "@/layout/format";
import Image from "next/image";

export default function Article({data}) {
  const { title, subtitle2, img, img2, soil_preparation, climate_and_soil,
       watering, fertilizing, harvesting, description2 } = data


    return (
      <Format>
        <section className="w-full flex flex-col md:px-2 py-10">
          <div className="py-10">
            <h1 className="font-semibold text-3xl text-center pb-5">
              {title}
            </h1>
            <p className="text-gray-500 text-lg text-center px-4 py-4">
              {subtitle2}
            </p>
            <div className="py-10 flex justify-center w-full">
              <Image src={img} width={500} height={200} alt="imagen posts"></Image>
            </div>
  
            <div className="text-gray-600 md:text-lg text-base flex flex-col gap-4 px-4 py-4">
              <p>
                {soil_preparation}
              </p>
              <p>
                {climate_and_soil}
              </p>
              <p>
                {watering}
              </p>
              <p>
                {fertilizing}
              </p>
              <p>
                {harvesting}
              </p>
            </div>
            <div className="flex items-center justify-center">
              <Image src={img2} width={700} height={400} alt="imagen posts"></Image>
            </div>
          </div>
        </section>
      </Format>
  
    )
  
  }