import Image from "next/image"

function Error() {
  return (
    <div className="text-center py-10 flex justify-center">
       <Image src={'/images/sww.png'} width={500} height={500} alt="my description photo"></Image>
    </div>
  )
}

export default Error
