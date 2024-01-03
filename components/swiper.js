'use client'
import Image from "next/image";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

function SwiperView({data}) {

  return (
    <div>
      <section className="py-10">
        <div className="container mx-auto md:px-20">
          <h1 className="font-semibold text-3xl text-center pb-10">Newest Posts</h1>

          <Swiper
            modules={[Autoplay]}
            slidesPerView={1}
            loop={true}
            autoplay={{
              delay: 3000
            }}
          >
            {
              data && data.map((e) => (
                <SwiperSlide key={e.id}>
                  <Slide data={e} />
                </SwiperSlide>
              ))
            }
          </Swiper>

        </div>
      </section>
    </div>
  )
}

function Slide({data}) {

    const { id, img, published, title, subtitle, categories, type } = data
    
    return (
      <div className="grid lg:grid-cols-2 gap-10 pl-3 pr-3 md:pl-0 md:pr-0">
        <div className="images">
          <Link href={`/categories/${categories}/${type}`}>
            <Image src={img} width={650} height={400} alt="my description photo" />
          </Link>
        </div>
        <div className="info flex flex-col justify-center">
          <div className="cat">
            <Link href={`/categories/${categories}/${type}`} className="text-gray-800 hover:text-gray-600">
              {published}
            </Link>
          </div>
          <div className="title">
            <Link href={`/categories/${categories}/${type}`}>
              <h1 className="md:text-left text-3xl md:text-5xl font-semibold text-justify text-gray-800 hover:text-gray-600">
                {title}
              </h1>
            </Link>
          </div>
          <p className="text-gray-500 text-justify py-3">
            {subtitle}
          </p>
        </div>
      </div>
    );
  }

export default SwiperView
