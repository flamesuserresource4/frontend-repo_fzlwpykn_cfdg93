import Spline from '@splinetool/react-spline';

export default function Hero() {
  return (
    <section className="relative min-h-[80vh] grid place-items-center overflow-hidden bg-gradient-to-b from-pink-50 via-rose-50 to-white">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/Tddl75W6Ij9Qp77j/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="relative z-10 mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-10 items-center">
        <div className="text-center md:text-left">
          <span className="inline-flex items-center gap-2 rounded-full bg-white/70 backdrop-blur px-3 py-1 text-pink-700 text-sm border border-pink-100 shadow-sm">
            Freshly sweet • Daily brewed
          </span>
          <h1 className="mt-4 text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight bg-clip-text text-transparent bg-gradient-to-br from-pink-700 via-fuchsia-600 to-rose-600">
            Sip joy. Bite happy.
          </h1>
          <p className="mt-4 text-pink-900/80 text-lg leading-relaxed">
            Playful bubble teas and yummy treats made with love. Order ahead or swing by our cozy corner for a sugar boost.
          </p>
          <div className="mt-6 flex flex-col sm:flex-row gap-3 justify-center md:justify-start">
            <a href="#menu" className="inline-flex items-center justify-center rounded-full bg-pink-600 px-6 py-3 text-white font-medium shadow-lg shadow-pink-600/20 hover:bg-pink-700 transition-colors">Browse Menu</a>
            <a href="#about" className="inline-flex items-center justify-center rounded-full bg-white px-6 py-3 text-pink-700 font-medium border border-pink-100 shadow-sm hover:bg-pink-50">Learn More</a>
          </div>
        </div>
        <div className="hidden md:block" />
      </div>

      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-white to-transparent" />
    </section>
  );
}
