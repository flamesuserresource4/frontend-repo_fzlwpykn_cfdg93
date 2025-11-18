import Navbar from './components/Navbar';
import Hero from './components/Hero';
import MenuGrid from './components/MenuGrid';
import CTA from './components/CTA';

function App() {
  return (
    <div className="min-h-screen bg-white text-pink-900">
      <Navbar />
      <Hero />
      <MenuGrid />
      <CTA />
      <footer id="contact" className="border-t border-pink-100 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10 grid sm:grid-cols-2 md:grid-cols-3 gap-6">
          <div>
            <h4 className="font-semibold text-pink-800">Boba & Bites</h4>
            <p className="text-sm text-pink-900/70 mt-2">Sweet drinks and snacks made daily. Come say hi!</p>
          </div>
          <div>
            <h5 className="font-semibold text-pink-800 mb-2">Hours</h5>
            <p className="text-sm text-pink-900/70">Mon–Fri: 10am–8pm</p>
            <p className="text-sm text-pink-900/70">Sat–Sun: 11am–9pm</p>
          </div>
          <div>
            <h5 className="font-semibold text-pink-800 mb-2">Find us</h5>
            <p className="text-sm text-pink-900/70">123 Sweet St, Dessert City</p>
            <p className="text-sm text-pink-900/70">(123) 456-7890</p>
          </div>
        </div>
        <div className="text-center text-xs text-pink-900/50 py-4">© {new Date().getFullYear()} Boba & Bites — All rights reserved.</div>
      </footer>
    </div>
  )
}

export default App