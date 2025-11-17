import React from 'react'
import { Link } from 'react-router-dom'
import ImageSlider from '../components/ImageSlider'
import ManualSlider from '../components/manualSlider'
import ContactForm from '../components/Contact'
import FlipCard from '../components/FlippingCard'
import Footer from '../components/Footer'

const Home = ({error, user}) => {
  return (
    <div className="min-h-[80vh]">

      {/* THe First Slider(auto slider) */}
    <div className="bg-gray-100 rounded-t-3xl w-full">
      <ImageSlider />
    </div>

    {/* The one section with the big name(SOCIAL REPUBLIC MEDIA) */}
  <section className="bg-[#fbf6ec] w-full rounded-b-3xl py-12 sm:py-16 px-4 mt-0">
    <div className="max-w-6xl mx-auto text-center">
      <h1 className="font-serif text-4xl sm:text-6xl md:text-8xl text-[#d4a11c] tracking-widest uppercase">
        SOCIAL REPUBLIC MEDIA
      </h1>
      <p className="mt-6 sm:mt-8 text-sm sm:text-base md:text-2xl leading-relaxed text-gray-800 max-w-4xl mx-auto px-2 sm:px-4">
        At Social Republic Media, our mission goes beyond photography — it's about helping brands communicate who they truly are. We partner with businesses that value detail, authenticity, and creativity, transforming their vision into high-quality visuals that tell meaningful stories. Whether it's food, lifestyle, or commercial photography, our process blends strategy with art direction to create work that connects emotionally and visually. We believe in crafting experiences that build trust, strengthen identity, and leave a lasting impression across every platform.
      </p>
    </div>
  </section>

    {/* Second Slider of the page(The one that you have to slide manually) */}
      <div className="w-full">
        <ManualSlider />
      </div>

    {/* Our Value Partner Section */}
    <section className="bg-[#fbf6ec] w-full rounded-b-3xl py-12 sm:py-16 px-4 mt-0">
      <div className="max-w-6xl mx-auto text-center">
        <h1 className="font-serif text-2xl sm:text-4xl md:text-5xl text-[#000000] tracking-widest uppercase">
          Our Valued Partners
        </h1>
        <p className="mt-6 sm:mt-8 text-xs sm:text-sm md:text-base leading-relaxed text-gray-800 max-w-4xl mx-auto px-2 sm:px-4">
          We've had the privilege of working with a wide range of clients, from renowned international hotel groups to thriving local businesses. Our core expertise lies in transforming your brand's story into powerful visuals. We specialize in professional photography for food and products, as well as dynamic videos for brand campaigns and social media.
        </p>

        {/* Partner Logos Container */}
        <div className='flex justify-center flex-wrap gap-2 sm:gap-4 mt-8 sm:mt-12'>
          
          {/* 1. Craft Bread - Beige Background */}
          <div className="w-24 h-24 md:w-36 md:h-36 p-2 bg-[#e0d0b9] flex items-center justify-center shadow-lg">
            <img src="../../assets/Partners/Craft.jpg" alt="Craft Bread Logo" className='max-w-full max-h-full object-contain'/>
          </div>
          
          {/* 2. James Boulangerie - White Background */}
          <div className="w-24 h-24 md:w-36 md:h-36 p-2 bg-white flex items-center justify-center shadow-lg">
            <img src="../../assets/Partners/James.jpg" alt="James Boulangerie Logo" className='max-w-full max-h-full object-contain'/>
          </div>
          
          {/* 3. Kler Baker - White Background */}
          <div className="w-24 h-24 md:w-36 md:h-36 p-2 bg-white flex items-center justify-center shadow-lg">
            <img src="../../assets/Partners/kler.jpg" alt="Kler Baker Logo" className='max-w-full max-h-full object-contain'/>
          </div>
          
          {/* 4. Landhaus Bakery - White Background */}
          <div className="w-24 h-24 md:w-36 md:h-36 p-2 bg-white flex items-center justify-center shadow-lg">
            <img src="../../assets/Partners/Landhaus.jpg" alt="Landhaus Bakery Logo" className='max-w-full max-h-full object-contain'/>
          </div>
          
          {/* 5. Nathong - Dark Teal Background */}
          <div className="w-24 h-24 md:w-36 md:h-36 p-2 bg-[#1b4e54] flex items-center justify-center shadow-lg">
            <img src="../../assets/Partners/Nathong.jpg" alt="Nathong Logo" className='max-w-full max-h-full object-contain'/>
          </div>
          
          {/* 6. NB Toast Shop - Pink Background */}
          <div className="w-24 h-24 md:w-36 md:h-36 p-2 bg-[#f4a1a5] flex items-center justify-center shadow-lg">
            <img src="../../assets/Partners/Neighbourhood.jpg" alt="NB Toast Shop Logo" className='max-w-full max-h-full object-contain'/>
          </div>
          
          {/* 7. Pengyou - Olive Green Background */}
          <div className="w-24 h-24 md:w-36 md:h-36 p-2 bg-[#8c9135] flex items-center justify-center shadow-lg">
            <img src="../../assets/Partners/PengYou.jpg" alt="PengYou Logo" className='max-w-full max-h-full object-contain'/>
          </div>
        </div>
      </div>
    </section>

    {/* Services Section */}
    <section className="bg-black py-12 sm:py-16 md:py-24">
      <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Content (Services & View Packages) */}
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif text-white tracking-wider mb-2">
            Services
          </h2>
        </div>

        {/* 2. Two-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-8">

          {/* LEFT COLUMN: Business Photography */}
          <div className="flex flex-col items-center">
            <div className="w-full sm:w-lg h-80 sm:h-120 overflow-hidden bg-gray-900 border-b border-yellow-500 rounded-xl">
              <FlipCard
                image="../../assets/Food-20251113T081516Z-1-001/Food/beef_01.jpg"
                title={"Product Photography"}
                details={`• 40–50 premium images
                          • 5 lifestyle shots
                          • Advanced retouching
                          • Creative compositions
                          • Add-ons available`}
              />
            </div>
            {/* Label */}
            <h3 className="text-white text-lg sm:text-xl uppercase tracking-widest mt-3 sm:mt-4 px-2">
              Product Photography
            </h3>
          </div>

          {/* Middle COLUMN: Business Photography */}
          <div className="flex flex-col items-center">
            <div className="w-full sm:w-lg h-80 sm:h-120 overflow-hidden bg-gray-900 border-b border-yellow-500 rounded-xl">
              <FlipCard
                image="../../assets/Restaurant-20251113T081548Z-1-001/Restaurant/architecture_01.jpg"
                details="We offer professional business, food, and product photography with studio lighting and high-quality retouching."
              />
            </div>
            {/* Label */}
            <h3 className="text-white text-lg sm:text-xl uppercase tracking-widest mt-3 sm:mt-4 px-2">
              Lifestyle & Interior Photography
            </h3>
          </div>

          {/* RIGHT COLUMN: Business Videography */}
          <div className="flex flex-col items-center">
            <div className="w-full sm:w-lg h-80 sm:h-120 overflow-hidden bg-gray-900 border-b border-yellow-500 rounded-xl">
              <FlipCard
                image="../../assets/Drinks & Cocktail-20251112T095416Z-1-001/Drinks & Cocktail/beverage_01.jpg"
                details="We offer professional business, food, and product photography with studio lighting and high-quality retouching."
              />
            </div>
            {/* Label */}
            <h3 className="text-white text-lg sm:text-xl uppercase tracking-widest mt-3 sm:mt-4 px-2">
              Food & Beverage Photography
            </h3>
          </div>

        </div>
      </div>
    </section>

    {/* Our Work Section */}
    <section className="bg-black py-12 sm:py-16 md:py-24">
      <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Content (Our Work & View Work) */}
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif text-white tracking-wider mb-2">
            Our Work
          </h2>
          <p className="text-base sm:text-lg text-yellow-500 hover:text-yellow-400 cursor-pointer">
            View Work
          </p>
        </div>

        {/* 3. Three-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3 sm:gap-4">

          {/* COLUMN 1: Drinks & Cocktails */}
          <div className="flex flex-col items-center">
            <div className="w-full h-60 sm:h-150 overflow-hidden bg-gray-900 border-b border-yellow-500">
              <img 
                src="../../assets/Drinks & Cocktail-20251112T095416Z-1-001/Drinks & Cocktail/alcohol_03.jpg"
                alt="Drinks & Cocktails"
                className="w-full h-full object-cover transition duration-300 hover:scale-105"
              />
            </div>
            {/* Label */}
            <h3 className="text-white text-lg sm:text-xl uppercase tracking-widest mt-3 sm:mt-4 px-2">
              Drinks & Cocktails
            </h3>
          </div>

          {/* COLUMN 2: Food */}
          <div className="flex flex-col items-center">
            <div className="w-full h-60 sm:h-150 overflow-hidden bg-gray-900 border-b border-yellow-500">
              <img 
                src="../../assets/Food-20251113T081516Z-1-001/Food/beef_03.jpg"
                alt="Food"
                className="w-full h-full object-cover transition duration-300 hover:scale-105"
              />
            </div>
            {/* Label */}
            <h3 className="text-white text-lg sm:text-xl uppercase tracking-widest mt-3 sm:mt-4 px-2">
              Food
            </h3>
          </div>

          {/* COLUMN 3: Restaurant */}
          <div className="flex flex-col items-center">
            {/* Image/Video Container - Replace with your actual media */}
            <div className="w-full h-60 sm:h-150 overflow-hidden bg-gray-900 border-b border-yellow-500">
              <img 
                src="../../assets/Restaurant-20251113T081548Z-1-001/Restaurant/bakery_01.jpg" 
                alt="Restaurant"
                className="w-full h-full object-cover transition duration-300 hover:scale-105"
              />
            </div>
            {/* Label */}
            <h3 className="text-white text-lg sm:text-xl uppercase tracking-widest mt-3 sm:mt-4 px-2">
              Restaurant
            </h3>
          </div>
        </div>
      </div>
    </section>

    {/*I have no idea how to name this*/}
    <section className="bg-[#F5F0E8] py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          
          {/* Left Column: Image */}
          <div className="w-full h-full order-2 lg:order-1">
            <img 
              src="https://images.unsplash.com/photo-1555992336-fb0d29498b13?q=80&w=1964&auto=format&fit=crop"
              alt="Restaurant storefront"
              className="w-full h-80 sm:h-96 lg:h-full object-cover rounded-lg shadow-lg"
              style={{ minHeight: '400px' }}
            />
          </div>

          {/* Content */}
          <div className="flex flex-col justify-center order-1 lg:order-2">
            <h2 className="text-2xl sm:text-3xl lg:text-5xl font-serif text-yellow-700 mb-4 sm:mb-6">
              What Our Clients Are Saying
            </h2>
            
            <p className="text-gray-600 mb-8 sm:mb-12 text-sm sm:text-base lg:text-lg">
              A great visual story creates a lasting impression. Our clients have seen firsthand how professional photos and videos can transform their business, from increasing traffic to building a loyal community. Their feedback shows the real-world impact of our work.
            </p>

            {/* List */}
            <div className="space-y-6 sm:space-y-12">
              
              {/* --- 1 --- */}
              <div className="flex flex-col sm:flex-row items-start gap-3 sm:gap-4">
                <div className="shrink-0">
                  <img 
                    src="https://i.pravatar.cc/150?img=1" 
                    alt="Parichat"
                    className="w-16 h-16 sm:w-20 sm:h-20 rounded-full object-cover shadow-md"
                  />
                </div>
                <div className="grow">
                  <div className="bg-black text-white p-4 sm:p-6 rounded-lg shadow-lg">
                    <p className="font-bold text-base sm:text-lg mb-2">"Worth every penny."</p>
                    <p className="italic text-gray-300 text-sm sm:text-base">"Initially, we weren't sure if investing in brand visuals was the right choice for us. But Social Republic Media delivered tangible results. The photos turned out beautiful and so natural. Most importantly, they truly understood our brand, giving us evergreen content that we can use for a long time and helping us build credibility with new customers."</p>
                    <p className="text-right mt-4 text-gray-400 text-sm">— Parichat</p>
                  </div>
                </div>
              </div>

              {/* --- 2 --- */}
              <div className="flex flex-col sm:flex-row items-start gap-3 sm:gap-4">
                <div className="shrink-0">
                  <img 
                    src="https://i.pravatar.cc/150?img=32"
                    alt="Sam"
                    className="w-16 h-16 sm:w-20 sm:h-20 rounded-full object-cover shadow-md"
                  />
                </div>
                <div className="grow">
                  <div className="bg-black text-white p-4 sm:p-6 rounded-lg shadow-lg">
                    <p className="font-bold text-base sm:text-lg mb-2">"Our sales saw a noticeable increase."</p>
                    <p className="italic text-gray-300 text-sm sm:text-base">"We never thought that food photography could make such a difference. After Social Republic Media came in to shoot our photos and videos, our reservations and social media followers skyrocketed. The team was incredibly professional and made the entire process comfortable and fun for everyone. Thank you for helping our restaurant reach a wider audience!"</p>
                    <p className="text-right mt-4 text-gray-400 text-sm">— Sam</p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Read More Link */}
            <div className="mt-12">
              <a 
                href="#" 
                className="text-gray-800 font-semibold tracking-widest text-sm uppercase border-b-2 border-gray-800 pb-1 hover:text-yellow-700 hover:border-yellow-700 transition-colors"
              >
                Read More Testimonials
              </a>
            </div>
          </div>
        </div>
      </section>

      
      {/* --- Section 1: Statistics Bar --- */}
      <section className="bg-black py-12 sm:py-16 lg:py-20 border-b border-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-12 text-center">
            
            {/* Stat 1 */}
            <div>
              <div className="text-4xl sm:text-5xl md:text-6xl font-serif text-yellow-500 mb-2">
                10+
              </div>
              <div className="text-white text-lg sm:text-xl tracking-wide">
                Experience
              </div>
            </div>

            {/* Stat 2 */}
            <div>
              <div className="text-4xl sm:text-5xl md:text-6xl font-serif text-yellow-500 mb-2">
                1,500+
              </div>
              <div className="text-white text-lg sm:text-xl tracking-wide">
                Projects Completed
              </div>
            </div>

            {/* Stat 3 */}
            <div>
              <div className="text-4xl sm:text-5xl md:text-6xl font-serif text-yellow-500 mb-2">
                1,500+
              </div>
              <div className="text-white text-lg sm:text-xl tracking-wide">
                Happy Businesses
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* --- Section 2: "Why Us" with Background Image --- */}
      <section className="relative min-h-screen sm:h-[700px] w-full overflow-hidden flex items-center justify-center py-12 sm:py-20">
        
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <img 
            src="../../assets/Restaurant-20251113T081548Z-1-001/Restaurant/restaurant_07.jpg" 
            alt="Busy Kitchen" 
            className="w-full h-full object-cover"
          />
          {/* Dark Overlay (to make text readable) */}
          <div className="absolute inset-0 bg-black opacity-70"></div>
        </div>

        {/* Content */}
        <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-serif text-white mb-6 sm:mb-8 tracking-tight">
            Why Us
          </h2>
          
          <p className="text-gray-100 text-sm sm:text-base md:text-lg lg:text-xl leading-relaxed">
            We specialize in helping small and medium businesses grow with affordable, professional visuals. Our team combines photography, videography, editing, and creative direction to make your business stand out. High-quality images and videos increase traffic, improve search rankings, and boost sales, while regular updates keep your content fresh and your audience engaged. We help you tell your story, showcase your products, and build trust with your clients. With us, professional visuals are no longer just for big companies — they’re accessible to everyone.
          </p>
        </div>
        </section>
    
        {/* Blog Section */}
        <section className="bg-black py-12 sm:py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-serif text-yellow-500 mb-4">
              Blog
            </h2>
            <a href="#" className="text-white text-base sm:text-lg tracking-wider underline hover:text-yellow-500 transition-colors">
              Read More
            </a>
          </div>
          {/* Blog Posts Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            {/* Blog Post 1 */}
            <div className="group">
              <a href="#">
                <div className="overflow-hidden mb-4 sm:mb-5">
                  <img 
                    src="../../assets/Food-20251113T081516Z-1-001/Food/breakfast_05.jpg"
                    alt="Why Food Photos Drive Engagement"
                    className="w-full h-60 sm:h-80 object-cover transform group-hover:scale-105 transition-transform duration-300 ease-in-out"
                  />
                </div>
                <h3 className="text-white text-lg sm:text-xl leading-snug">
                  Why Food Photos Drive Engagement
                </h3>
              </a>
            </div>
            {/* Blog Post 2 */}
            <div className="group">
              <a href="#">
                <div className="overflow-hidden mb-4 sm:mb-5">
                  <img 
                    src="../../assets/Restaurant-20251113T081548Z-1-001/Restaurant/cooking_02.jpg"
                    alt="Why Presentation Matters More Than Ever Online"
                    className="w-full h-60 sm:h-80 object-cover transform group-hover:scale-105 transition-transform duration-300 ease-in-out"
                  />
                </div>
                <h3 className="text-white text-lg sm:text-xl leading-snug">
                  Why Presentation Matters More Than Ever Online
                </h3>
              </a>
            </div>
            {/* Blog Post 3 */}
            <div className="group">
              <a href="#">
                <div className="overflow-hidden mb-4 sm:mb-5">
                  <img 
                    src="../../assets/Drinks & Cocktail-20251112T095416Z-1-001/Drinks & Cocktail/cocktail_10.jpg"
                    alt="Turning Everyday Meals into Viral Content"
                    className="w-full h-60 sm:h-80 object-cover transform group-hover:scale-105 transition-transform duration-300 ease-in-out"
                  />
                </div>
                <h3 className="text-white text-lg sm:text-xl leading-snug">
                  Turning Everyday Meals into Viral Content
                </h3>
              </a>
            </div>
          </div>
        </div>
      </section>

    {/* Contact Form Section */}
      <div>
        <ContactForm />
      </div>

      {/* Footer Section */}
      <div>
        <Footer/>
      </div>
    </div>

    // 
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