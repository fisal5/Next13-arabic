"use client"
import { useRef, useState } from 'react'

export default function Home() {
  const [images, setImages] = useState([
    { id: 1, src: "/car.webp", alt: 'Image 1' },
    { id: 2, src: "/bus.webp", alt: 'Image 2' },
    { id: 3, src: 'https://via.placeholder.com/150', alt: 'Image 3' },
    { id: 4, src: 'https://via.placeholder.com/150', alt: 'Image 4' },
  ])

  const dragImage = useRef(0)
  const draggedOverImage = useRef(0)

  function handleSort() {
    const imagesClone = [...images]
    const temp = imagesClone[dragImage.current]
    imagesClone[dragImage.current] = imagesClone[draggedOverImage.current]
    imagesClone[draggedOverImage.current] = temp
    setImages(imagesClone)
  }

  return (
    <main className="flex min-h-screen flex-col items-center space-y-4">
      <h1 className="text-xl font-bold mt-4">Image List</h1>
      <div className="grid grid-cols-2 gap-4">
        {images.map((image, index) => (
          <div className="relative flex justify-center items-center border rounded p-2 bg-gray-100"
            key={image.id}
            draggable
            onDragStart={() => (dragImage.current = index)}
            onDragEnter={() => (draggedOverImage.current = index)}
            onDragEnd={handleSort}
            onDragOver={(e) => e.preventDefault()}
          >
            <img src={image.src} alt={image.alt} className="w-32 h-32 object-cover" />
          </div>
        ))}
      </div>
    </main>
  )
}
