import Link from 'next/link';
import Image from 'next/image';



export default function Home() {
  return (
    <main>
      <div className="container grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4
       grid-rows-50 grid-rows-50 place-items-center">
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
              src= '/colors.png'
              alt="colors image"
              priority={true}
              width={768}
              height={300}
            /> 
          </div>
        </Link>
      </div>
      <div>
        <Link href='fruitsquiz'>
          <div className="crusor-pointer inline-block p-2 px-5 bg-blue-500 text-white rounded-lg text-center">
            <Image className="w-64 h-52"
              src= '/fruits.webp'
              alt="fruits image"
              priority={true}
              width={768}
              height={300}
            /> 
          </div>
        </Link>
      </div>
      <div>
        <Link href='alphapetsquiz'>
          <div className="crusor-pointer inline-block p-2 px-5 bg-blue-500 text-white rounded-lg text-center">
            <Image className="w-64 h-52"
              src= '/Arabicalphapets.jpeg'
              alt="arabic alphapets image"
              priority={true}
              width={768}
              height={300}
            /> 
          </div>
        </Link>
      </div>
      <div>
        <Link href='numbersquiz'>
          <div className="crusor-pointer inline-block p-2 px-5 bg-blue-500 text-white rounded-lg text-center">
            <Image className="w-64 h-52"
              src= '/numbers.png'
              alt="numbers image"
              priority={true}
              width={768}
              height={300}
            /> 
          </div>
        </Link>
      </div>
      <div>
        <Link href='insectsquiz'>
          <div className="crusor-pointer inline-block p-2 px-5 bg-blue-500 text-white rounded-lg text-center">
            <Image className="w-64 h-52"
              src= '/insects.jpeg'
              alt="insects image"
              priority={true}
              width={768}
              height={300}
            /> 
          </div>
        </Link>
      </div>
      <div>
        <Link href='transportquiz'>
          <div className="crusor-pointer inline-block p-2 px-5 bg-blue-500 text-white rounded-lg text-center">
            <Image className="w-64 h-52"
              src= '/transport.jpeg'
              alt="transport image"
              priority={true}
              width={768}
              height={300}
            /> 
          </div>
        </Link>
      </div>
      <div>
        <Link href='verbsquiz'>
          <div className="crusor-pointer inline-block p-2 px-5 bg-blue-500 text-white rounded-lg text-center">
            <Image className="w-64 h-52"
              src= '/verbs.webp'
              alt="verbs image"
              priority={true}
              width={768}
              height={300}
            /> 
          </div>
        </Link>
      </div>
      <div>
        <Link href='examplequiz'>
          <div className="crusor-pointer inline-block p-2 px-5 bg-blue-500 text-white rounded-lg text-center">
            <Image className="w-64 h-52"
              src= '/pray.webp'
              alt="pray image"
              priority={true}
              width={768}
              height={300}
            /> 
          </div>
        </Link>
      </div>
      <div>
        <Link href='islamquiz'>
          <div className="crusor-pointer inline-block p-2 px-5 bg-blue-500 text-white rounded-lg text-center">
            <Image className="w-64 h-52"
              src= '/muslimkids.webp'
              alt="muslimkids image"
              priority={true}
              width={768}
              height={300}
            /> 
          </div>
        </Link>
      </div>
      <div>
        <Link href='bodyquiz'>
          <div className="crusor-pointer inline-block p-2 px-5 bg-blue-500 text-white rounded-lg text-center">
            <Image className="w-64 h-52"
              src= '/body.jpeg'
              alt="body image"
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
