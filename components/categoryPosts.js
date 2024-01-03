import Image from "next/image";
import Link from "next/link";

export default function CategoryPost({data}) { 

    const {img, published, title, subtitle, slug, categories, type} = data
    
    return (
      <div className="item">
        <div className="flex justify-center">
          <Link href={`/categories/${categories}/${type}`}>
            <Image
              src={img}
              className="rounded"
              width={500}
              height={350}
              alt="my description photo"
            />
          </Link>
        </div>
        <div className="info flex justify-center flex-col py-4">
          <div className="cat">
            <Link href={`/categories/${categories}/${type}`} className="text-gray-800 hover:text-gray-600">
             {published}
            </Link>
          </div>
          <div className="title">
            <Link href={`/categories/${categories}/${type}`}>
              <h1 className="text-left text-xl font-semibold text-gray-800 hover:text-gray-600">
                {title}
              </h1>
            </Link>
          </div>
          <p className="text-gray-500 py-3">
            {subtitle}
          </p>
        </div>
      </div>
    );
  }