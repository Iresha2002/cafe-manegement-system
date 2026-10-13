import { Link } from 'react-router-dom';

const Home = () => {
  const menuHighlights = [
    { icon: '☕', name: 'Premium Coffee', desc: 'Freshly brewed daily', price: 'Rs. 350+' },
    { icon: '🍰', name: 'Delicious Cakes', desc: 'Baked with love', price: 'Rs. 650+' },
    { icon: '🥪', name: 'Fresh Sandwiches', desc: 'Made to order', price: 'Rs. 750+' },
    { icon: '🍹', name: 'Cool Beverages', desc: 'Refresh your day', price: 'Rs. 400+' },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 to-orange-100">
      {/* Navigation Bar */}
      <nav className="bg-white/80 backdrop-blur-md shadow-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <span className="text-3xl">☕</span>
            <span className="text-xl font-bold text-gray-800">Cafe Bliss</span>
          </div>
          <div className="flex gap-3">
            <Link 
              to="/login" 
              className="px-5 py-2 text-amber-700 font-medium hover:text-amber-800 transition"
            >
              Login
            </Link>
            <Link 
              to="/register" 
              className="px-5 py-2 bg-amber-600 hover:bg-amber-700 text-white font-medium rounded-lg transition shadow-md"
            >
              Sign Up
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-6 py-16 md:py-24">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <span className="inline-block px-4 py-2 bg-amber-100 text-amber-700 rounded-full text-sm font-semibold mb-4">
              ✨ Welcome to Cafe Bliss
            </span>
            <h1 className="text-4xl md:text-6xl font-bold text-gray-800 leading-tight mb-6">
              Where Every Sip <br />
              <span className="text-amber-600">Tells a Story</span>
            </h1>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Experience the finest coffee, delicious food, and warm hospitality. 
              Manage your cafe effortlessly with our modern management system.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link 
                to="/register" 
                className="px-8 py-3 bg-amber-600 hover:bg-amber-700 text-white font-semibold rounded-lg transition shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
              >
                Get Started →
              </Link>
              <Link 
                to="/login" 
                className="px-8 py-3 border-2 border-amber-600 text-amber-700 font-semibold rounded-lg hover:bg-amber-50 transition"
              >
                Staff Login
              </Link>
            </div>
          </div>

          {/* Hero Image / Coffee Cup Illustration */}
          <div className="flex justify-center">
            <div className="relative">
              <div className="w-80 h-80 bg-gradient-to-br from-amber-400 to-orange-500 rounded-full shadow-2xl flex items-center justify-center">
                <span className="text-[200px]">☕</span>
              </div>
              <div className="absolute -bottom-4 -right-4 bg-white rounded-full p-4 shadow-xl">
                <span className="text-3xl">🌟</span>
              </div>
              <div className="absolute -top-4 -left-4 bg-white rounded-full p-4 shadow-xl">
                <span className="text-3xl">🍰</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-3">
              Our Menu Highlights
            </h2>
            <p className="text-gray-500">Handpicked favorites from our cafe</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {menuHighlights.map((item, i) => (
              <div 
                key={i}
                className="bg-gradient-to-br from-amber-50 to-white border border-amber-100 rounded-2xl p-6 text-center hover:shadow-xl transition-all cursor-pointer transform hover:-translate-y-1"
              >
                <div className="text-5xl mb-4">{item.icon}</div>
                <h3 className="font-bold text-lg text-gray-800 mb-1">{item.name}</h3>
                <p className="text-sm text-gray-500 mb-3">{item.desc}</p>
                <span className="inline-block px-3 py-1 bg-amber-100 text-amber-700 rounded-full text-sm font-semibold">
                  {item.price}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-gradient-to-r from-amber-600 to-orange-500 py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center text-white">
            <div>
              <div className="text-4xl md:text-5xl font-bold mb-2">50+</div>
              <p className="text-amber-100">Menu Items</p>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold mb-2">1000+</div>
              <p className="text-amber-100">Happy Customers</p>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold mb-2">5★</div>
              <p className="text-amber-100">Rated Service</p>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold mb-2">24/7</div>
              <p className="text-amber-100">Open Hours</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-gray-400 py-8">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <div className="flex items-center justify-center gap-2 mb-3">
            <span className="text-2xl">☕</span>
            <span className="text-lg font-bold text-white">Cafe Bliss</span>
          </div>
          <p className="text-sm">© 2026 Cafe Bliss Management System. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Home;