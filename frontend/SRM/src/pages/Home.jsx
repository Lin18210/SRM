import React from 'react'
import { Link } from 'react-router-dom'
import ImageSlider from '../components/ImageSlider'
import ManualSlider from '../components/manualSlider'
import ContactForm from '../components/Contact'

const Home = ({error, user}) => {
  return (
    <div className="min-h-[80vh]">
  <div className="bg-gray-100 rounded-t-3xl w-full">
    <ImageSlider />
  </div>

  <section className="bg-[#fbf6ec] w-full rounded-b-3xl py-16 px-4 mt-0">
    <div className="max-w-6xl mx-auto text-center">
      <h1 className="font-serif text-5xl md:text-8xl text-[#d4a11c] tracking-widest uppercase">
        SOCIAL REPUBLIC MEDIA
      </h1>
      <p className="mt-8 text-base md:text-2xl leading-relaxed text-gray-800 max-w-4xl mx-auto px-4">
        At Social Republic Media, our mission goes beyond photography — it's about helping brands communicate who they truly are. We partner with businesses that value detail, authenticity, and creativity, transforming their vision into high-quality visuals that tell meaningful stories. Whether it's food, lifestyle, or commercial photography, our process blends strategy with art direction to create work that connects emotionally and visually. We believe in crafting experiences that build trust, strengthen identity, and leave a lasting impression across every platform.
      </p>
    </div>
  </section>

    <div className="min-h-screen w-full">
      <ManualSlider />
    </div>

    <div>
      <ContactForm />
    </div>

    </div>



  )
}

export default Home
{/* <div className='bg-white p-8 rounded-lg shadow-md w-full max-w-lg text-center'>
  {error && <p className='text-red-500'>{error}</p>}
  {user ? (
    <div>
      <h2 className='text-2xl font-bold mb-4 text-gray-800'>Welcome, {user.name}!</h2>
      <p className='text-gray-700'>Email: {user.email}</p>
    </div>
  ) : (
    <div className='flex flex-col gap-y-4'>
    <h2 className='text-2xl font-bold mb-4 text-gray-800'>Please login or register.</h2>
    <Link
      to="/login"
      className='w-full text-white bg-blue-500 p-3 rounded-md hover:bg-blue-600 font-medium'
    >
    Login
    </Link>
    <Link
      to="/register"
      className='w-full text-gray-800 bg-gray-200 p-3 rounded-md hover:bg-gray-300 font-medium'
    >
    Register
    </Link>
    </div>
  )}      
</div> */}