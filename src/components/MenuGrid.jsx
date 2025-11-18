const items = [
  { id: 1, name: "Classic Milk Tea", desc: "Black tea, milk, boba pearls", price: 4.5, tag: "Best Seller", color: "from-amber-200 to-rose-200" },
  { id: 2, name: "Taro Boba", desc: "Purple taro, creamy, sweet", price: 5.0, tag: "Popular", color: "from-purple-200 to-pink-200" },
  { id: 3, name: "Matcha Latte", desc: "Ceremonial matcha, oat milk", price: 5.5, tag: "New", color: "from-emerald-200 to-teal-200" },
  { id: 4, name: "Strawberry Yakult", desc: "Yogurt drink, fruity", price: 4.8, color: "from-rose-200 to-pink-200" },
  { id: 5, name: "Brown Sugar Boba", desc: "Caramel, creamy, chewy", price: 5.8, color: "from-amber-200 to-orange-200" },
  { id: 6, name: "Mango Smoothie", desc: "Sunshine in a cup", price: 5.2, color: "from-yellow-200 to-amber-200" },
];

export default function MenuGrid() {
  return (
    <section id="menu" className="relative py-16 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-pink-800">Our Favorites</h2>
          <p className="mt-2 text-pink-900/70">Sweet sips and snacks, crafted for cravings.</p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((it) => (
            <div key={it.id} className="group rounded-2xl bg-gradient-to-br p-1 from-pink-100 to-rose-100">
              <div className="rounded-xl bg-white p-5 h-full">
                <div className={`h-36 rounded-xl bg-gradient-to-br ${it.color} mb-4 shadow-inner`} />
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <h3 className="font-semibold text-pink-900">{it.name}</h3>
                    <p className="text-sm text-pink-900/70">{it.desc}</p>
                  </div>
                  {it.tag && (
                    <span className="text-[10px] uppercase tracking-wide bg-pink-100 text-pink-700 px-2 py-1 rounded-full border border-pink-200">{it.tag}</span>
                  )}
                </div>
                <div className="mt-4 flex items-center justify-between">
                  <span className="font-bold text-pink-800">${it.price.toFixed(2)}</span>
                  <button className="rounded-full bg-pink-600 text-white px-4 py-2 text-sm font-medium hover:bg-pink-700 transition-colors">Add</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
