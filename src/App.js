import React from 'react'
import { useState } from 'react';
import './App.css';
import { BsChevronDoubleRight, BsChevronDoubleLeft} from 'react-icons/bs';
import { RxDotFilled } from 'react-icons/rx'

function App() {
  const slides = [
    {
      url: "https://images.unsplash.com/photo-1688733962404-557e69853f87?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDl8TThqVmJMYlRSd3N8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
    },
    {
      url: "https://plus.unsplash.com/premium_photo-1684863506867-4a33a434e940?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDIxfE04alZiTGJUUndzfHxlbnwwfHx8fHw%3D&auto=format&fit=crop&w=500&q=60"
    },
    {
      url: "https://images.unsplash.com/photo-1685719730785-256ba3187893?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDQ3fE04alZiTGJUUndzfHxlbnwwfHx8fHw%3D&auto=format&fit=crop&w=500&q=60"
    },
    {
      url: "https://images.unsplash.com/photo-1602364557801-8908351b0c7e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDU1fE04alZiTGJUUndzfHxlbnwwfHx8fHw%3D&auto=format&fit=crop&w=500&q=60"
    },
    {
      url: "https://images.unsplash.com/photo-1676136449197-babffb1125f0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDU3fE04alZiTGJUUndzfHxlbnwwfHx8fHw%3D&auto=format&fit=crop&w=500&q=60"
    },
  ]
    const [currentIndex, setCurrentIndex] = useState(0);

    const prevSlide = () =>{
      const isFirstSlide = currentIndex === 0;
      const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1
      setCurrentIndex(newIndex)
      
    }
    const nextSlide = () =>{
      const isLastSlide = currentIndex === slides.length - 1
      const newIndex = isLastSlide ? 0 : currentIndex + 1
      setCurrentIndex(newIndex)
    }
    
     const gotoSlide = (slideIndex) =>{
      setCurrentIndex(slideIndex)
     }
  return (
    <div className=' max-w-[1400px] h-[750px] w-full m-auto py-16 px-4 relative group'>
      <div style={{backgroundImage: `url(${slides[currentIndex].url})`}} className=' w-full h-full rounded-2xl bg-cover bg-center duration-500'>
      </div>
      <div className=' hidden group-hover:block absolute top-[50%] -translate-x-0 -translate-y-[-50%] left-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer'>
      <BsChevronDoubleLeft onClick={prevSlide} size={30} />
      </div>
      <div className=' hidden group-hover:block absolute top-[50%] -translate-x-0 -translate-y-[-50%] right-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer'>
        <BsChevronDoubleRight onClick={nextSlide} size={30} />
      </div>
      <div className=' flex top-4 justify-center py-2'>
        {slides.map((slide, slideIndex) => (
          <div key={slideIndex} onClick={() => gotoSlide(slideIndex)} className=' text-2xl cursor-pointer'>
          <RxDotFilled />
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
