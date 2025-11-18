export default function CTA() {
  return (
    <section id="about" className="relative py-16 bg-gradient-to-b from-white to-rose-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-10 items-center">
        <div className="order-2 md:order-1">
          <h3 className="text-3xl font-bold text-pink-800 tracking-tight">Handmade treats. Happy vibes.</h3>
          <p className="mt-3 text-pink-900/80 leading-relaxed">
            We craft drinks and desserts with playful flavors and quality ingredients. Whether you crave a classic milk tea or want to explore fruity blends, we've got a sweet sip for every mood.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <a href="#contact" className="inline-flex items-center justify-center rounded-full bg-pink-600 px-6 py-3 text-white font-medium shadow-lg shadow-pink-600/20 hover:bg-pink-700 transition-colors">Visit Us</a>
            <a href="#menu" className="inline-flex items-center justify-center rounded-full bg-white px-6 py-3 text-pink-700 font-medium border border-pink-100 shadow-sm hover:bg-pink-50">See Menu</a>
          </div>
        </div>
        <div className="order-1 md:order-2">
          <div className="rounded-2xl border border-pink-100 bg-white p-5 shadow-sm">
            <div className="aspect-[4/3] rounded-xl bg-gradient-to-br from-pink-200 via-rose-200 to-fuchsia-200" />
          </div>
        </div>
      </div>
    </section>
  );
}
