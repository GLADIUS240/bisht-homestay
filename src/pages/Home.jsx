import { useState, useEffect, useCallback } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const Home = () => {
  return (
    <div className="min-h-screen ">
      {/* Hero Carousel Section */}
      <HeroCarousel />
      
      {/* home page content bg-[#2B1E1A] */}
      <section className="py-20 px-6 flex justify-center  lg:px-12">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-serif font-medium font-roboto text-[#AE9364] pb-6">
            Welcome to Bisht Homestay
          </h2>
          <p className="text-black/70 max-w-2xl mx-auto pb-2">
            Your peaceful retreat in the mountains awaits.
          </p>
          <p className="text-black/70 max-w-2xl mx-auto pb-2">
            Escape from the hustle and hassle of your everyday routine and come away to the Bisht Homestay, where a serene world awaits you. Throw off all your worries and slip into the scenic, relaxed atmosphere and be pampered and rejuvenated.
          </p>
          <button className="mt-8 px-8 py-3 cursor-pointer bg-none border-[#AE9364] border-2 text-brand hover:text-white font-light rounded-lg hover:bg-brand transition-all duration-300 hover:scale-105 opacity-100 translate-y-8 animate-slideUp"
              style={{ animationDelay: '0.6s', animationFillMode: 'forwards' }}>
            Explore Rooms
          </button>
        </div>
      </section>
      <section className="py-20 px-6 flex justify-center bg-[#FAF7F3] lg:px-12">
        <div  className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-['Cinzel'] text-black pb-6">
            Local Places for Exploration
          </h2>
          <h3 className="text-lg md:text-xl text-black/80 max-w-2xl mx-auto">
            All activities at Bisht Homestay
          </h3>
          <div className='grid lg:grid-cols-5 gap-4 md:grid-cols-2 sm:grid-cols-1 mt-8'>
            <img src="./src/assets/kainchi-dham.jpg" alt="Kainchi Dham" className="h-64 object-cover rounded-lg m-4" />
            <img src="./src/assets/ranikhet-binsar.jpg" alt="Ranikhet Binsar" className="h-64 object-cover rounded-lg m-4" />
            <img src="./src/assets/dhokaney-waterfall.jpg" alt="Dhokaney Waterfall" className="h-64 object-cover rounded-lg m-4" />
            <img src="./src/assets/chitai-temple-golu-devta.jpg" alt="Chitai Temple Golu Devta" className="h-64 object-cover rounded-lg m-4" />
            <img src="./src/assets/museum.jpg" alt="Museum" className="h-64 object-cover rounded-lg m-4" />
          </div>
        </div>
      </section>
    </div>
  );
};

// Hero Carousel Component
const HeroCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const slides = [
    {
      image: "./src/assets/hero-carausel-01.jpg",
      alt: "Room interior",
      title: "Experience Tranquility",
      subtitle: "A peaceful retreat in the heart of the mountains"
    },
    {
      image: "./src/assets/hero-carausel-02.jpg",
      alt: "Affordable homestay",
      title: "Affordable Luxury",
      subtitle: "Comfortable stays that fit your budget"
    },
    {
      image: "./src/assets/hero-carausel-03.jpg",
      alt: "Comfortable homestay",
      title: "Feel at Home",
      subtitle: "Warm hospitality and cozy accommodations"
    },
    {
      image: "./src/assets/hero-carausel-04.jpg",
      alt: "Affordable homestay",
      title: "Nature's Embrace",
      subtitle: "Wake up to breathtaking mountain views"
    }
  ];

  const nextSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % slides.length);
  }, [slides.length]);

  const prevSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + slides.length) % slides.length);
  }, [slides.length]);

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  // Auto-play functionality
  useEffect(() => {
    if (isPaused) return;
    
    const interval = setInterval(() => {
      nextSlide();
    }, 3000); // Change slide every 5 seconds

    return () => clearInterval(interval);
  }, [isPaused, nextSlide]);

  return (
    <div 
      className="relative w-full h-[500px] md:h-[600px] lg:h-[700px] overflow-hidden"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Slides Container */}
      <div 
        className="flex h-full transition-transform duration-700 ease-out"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {slides.map((slide, index) => (
          <div key={index} className="relative w-full h-full flex-shrink-0">
            {/* Image */}
            <img 
              src={slide.image} 
              alt={slide.alt}
              className="w-full h-full object-cover"
            />
            
            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
            
            {/* Content */}
            <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif text-white mb-4 drop-shadow-lg"
                  style={{ 
                    opacity: currentIndex === index ? 1 : 0,
                    transform: currentIndex === index ? 'translateY(0)' : 'translateY(30px)',
                    transition: 'all 0.8s ease-out 0.2s'
                  }}>
                {slide.title}
              </h1>
              <p className="text-lg md:text-xl text-white/90 max-w-2xl drop-shadow-md"
                 style={{ 
                   opacity: currentIndex === index ? 1 : 0,
                   transform: currentIndex === index ? 'translateY(0)' : 'translateY(30px)',
                   transition: 'all 0.8s ease-out 0.4s'
                 }}>
                {slide.subtitle}
              </p>
              <button 
                className="mt-8 px-8 py-3 bg-[#D8A23A] text-[#2B1E1A] font-medium rounded-lg hover:bg-[#c4932f] transition-all duration-300 hover:scale-105"
                style={{ 
                  opacity: currentIndex === index ? 1 : 0,
                  transform: currentIndex === index ? 'translateY(0)' : 'translateY(30px)',
                  transition: 'all 0.8s ease-out 0.6s'
                }}
              >
                Book Your Stay
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Navigation Arrows */}
      <button 
        onClick={prevSlide}
        className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 w-12 h-12 flex items-center justify-center rounded-full bg-white/20 backdrop-blur-sm text-white hover:bg-white/30 transition-all duration-300 hover:scale-110"
        aria-label="Previous slide"
      >
        <ChevronLeft size={24} />
      </button>
      
      <button 
        onClick={nextSlide}
        className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 w-12 h-12 flex items-center justify-center rounded-full bg-white/20 backdrop-blur-sm text-white hover:bg-white/30 transition-all duration-300 hover:scale-110"
        aria-label="Next slide"
      >
        <ChevronRight size={24} />
      </button>

      {/* Dot Navigation Pills */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex items-center gap-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`relative h-3 rounded-full transition-all duration-500 ${
              index === currentIndex 
                ? 'w-10 bg-[#D8A23A]' 
                : 'w-3 bg-white/50 hover:bg-white/70'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          >
            {/* Progress indicator for active slide */}
            {index === currentIndex && !isPaused && (
              <span className="absolute inset-0 rounded-full bg-[#D8A23A]/30 animate-pulse" />
            )}
          </button>
        ))}
      </div>

      {/* Slide Counter */}
      <div className="absolute bottom-8 right-8 hidden md:flex items-center gap-2 text-white/80 font-medium">
        <span className="text-2xl text-[#D8A23A]">{String(currentIndex + 1).padStart(2, '0')}</span>
        <span className="text-white/50">/</span>
        <span className="text-white/50">{String(slides.length).padStart(2, '0')}</span>
      </div>
    </div>
  );
};

export default Home;