import React, { useEffect, useRef } from 'react';
import { Menu, X, Calendar, Clock, MapPin, ArrowRight } from 'lucide-react';

function App() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  
  const observerRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    observerRef.current = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, { threshold: 0.1 });

    document.querySelectorAll('.animate-on-scroll').forEach((element) => {
      observerRef.current?.observe(element);
    });

    return () => observerRef.current?.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-dark text-white">
      {/* Navbar */}
      <nav className="fixed w-full z-50 glass">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            <div className="flex-shrink-0">
              <span className="text-2xl font-bold text-primary">AMP18 <span className="text-white">Events</span></span>
            </div>
            
            <div className="hidden md:block">
              <div className="flex items-center space-x-8">
                <a href="#about" className="hover:text-primary transition-colors">About</a>
                <a href="#event" className="hover:text-primary transition-colors">Event</a>
                <a href="#details" className="hover:text-primary transition-colors">Details</a>
                <button className="bg-primary px-6 py-2 rounded-full hover:bg-opacity-90 transition-all">
                  Book Tickets
                </button>
              </div>
            </div>

            <div className="md:hidden">
              <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden glass">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <a href="#about" className="block px-3 py-2 hover:text-primary transition-colors">About</a>
              <a href="#event" className="block px-3 py-2 hover:text-primary transition-colors">Event</a>
              <a href="#details" className="block px-3 py-2 hover:text-primary transition-colors">Details</a>
              <button className="w-full text-center bg-primary px-6 py-2 rounded-full hover:bg-opacity-90 transition-all">
                Book Tickets
              </button>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="relative h-screen">
      <div 
  className="absolute inset-0 bg-cover bg-center"
  style={{
    backgroundImage: "url('https://variety.com/wp-content/uploads/2023/11/The-Weeknd-2.jpg')"
  }}
>
  <div className="absolute inset-0 hero-gradient" />
</div>

        
        <div className="relative h-full flex items-center">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="animate-on-scroll">
              <h1 className="text-6xl md:text-8xl font-bold mb-6 align-left">The Weeknd</h1>
              <p className="text-2xl md:text-3xl mb-8 text-gray-300">Exclusive Listening Party</p>
              <button className="bg-primary px-8 py-3 rounded-full text-lg hover:bg-opacity-90 transition-all flex items-center gap-2">
                Book Now <ArrowRight size={20} />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Event Details */}
      <section id="event" className="py-20 bg-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="animate-on-scroll">
              <img 
                src="https://phsnews.com/wp-content/uploads/2022/08/Copy-of-Featured-Image-Template-1.png" 
                alt="Event Space" 
                className="rounded-2xl"
              />
            </div>
            <div className="animate-on-scroll">
              <h2 className="text-4xl font-bold mb-6">Experience The Music</h2>
              <p className="text-gray-300 mb-8">
                Join us for an exclusive first listen of The Weeknd's latest album in an immersive audio environment. 
                Be among the first to experience the future of music listening events.
              </p>
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <Calendar className="text-primary" />
                  <span>March 25, 2025</span>
                </div>
                <div className="flex items-center gap-4">
                  <Clock className="text-primary" />
                  <span>6:00 PM IST</span>
                </div>
                <div className="flex items-center gap-4">
                  <MapPin className="text-primary" />
                  <span>TBA</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 bg-black/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="glass p-8 rounded-2xl animate-on-scroll">
              <h3 className="text-2xl font-bold mb-4">Premium Sound</h3>
              <p className="text-gray-300">
                State-of-the-art audio system delivering crystal clear sound quality.
              </p>
            </div>
            <div className="glass p-8 rounded-2xl animate-on-scroll">
              <h3 className="text-2xl font-bold mb-4">VIP Experience</h3>
              <p className="text-gray-300">
                Exclusive access to premium seating and complimentary refreshments.
              </p>
            </div>
            <div className="glass p-8 rounded-2xl animate-on-scroll">
              <h3 className="text-2xl font-bold mb-4">Limited Capacity</h3>
              <p className="text-gray-300">
                Intimate setting with limited tickets for an exclusive experience.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 glass">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <span className="text-xl font-bold text-primary mb-4 md:mb-0">AMP18 <span className="text-white">Events</span></span>
            <div className="text-center md:text-right">
              <p className="text-gray-300">© 2025 AMP18 Events. All rights reserved.</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;