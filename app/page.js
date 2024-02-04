import Link from 'next/link';
import Image from 'next/image';



export default function Home() {
  return (
    <main>
      <div className="container grid grid-cols-4 grid-rows-50 grid-rows-50 place-items-center">
       <div>
        <Link href='quiz'>
          <div className="crusor-pointer inline-block p-2 px-5 bg-blue-500 text-white rounded-lg text-center">
            <Image className="w-64 h-52"
              src= '/animals.jpeg'
              alt="animals image"
              priority={true}
              width={768}
              height={300}
            /> 
          </div>
        </Link>
        </div>
       
      <div>
        <Link href='colorsquiz'>
          <div className="crusor-pointer inline-block p-2 px-5 bg-blue-500 text-white rounded-lg text-center">
            <Image className="w-64 h-52"
              src= '/Colors.jpeg'
              alt="colors image"
              priority={true}
              width={768}
              height={300}
            /> 
          </div>
        </Link>
      </div>
    </div>
      
         
    </main>
  )
}
