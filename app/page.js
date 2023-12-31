import Link from 'next/link';
import Image from 'next/image';



export default function Home() {
  return (
    <main>
      <div className="container">
        <h1>Quiz Age</h1>
        <Link href='quiz'>
          <div className="crusor-pointer inline-block p-2 px-5 bg-blue-500 text-white rounded-lg text-center">
            <Image className="max-w-full h-auto"
              src= '/animals.jpeg'
              alt="animals image"
              width={500}
              height={300}
            /> 
          </div>
        </Link>
      </div>
      
         
    </main>
  )
}
