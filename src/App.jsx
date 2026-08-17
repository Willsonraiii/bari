import { useState } from 'react'

const brewSteps = [
  {
    n: '01',
    title: 'Bloom',
    time: '0:00',
    body: 'Pour twice the coffee weight in water. Wait thirty seconds — this releases trapped CO2 so the grounds extract evenly.',
  },
  {
    n: '02',
    title: 'First Pour',
    time: '0:30',
    body: 'Pour to 60% of total water in slow concentric circles, keeping the bed saturated without flooding it.',
  },
  {
    n: '03',
    title: 'Second Pour',
    time: '1:15',
    body: 'Top up to full water weight. Let the level drop steadily — this is where the body of the cup is built.',
  },
  {
    n: '04',
    title: 'Drawdown',
    time: '2:30',
    body: 'Let the last of the water filter through. A clean drawdown means an even grind and a balanced extraction.',
  },
]

const menu = [
  { name: 'Pour Over', desc: 'Single origin, rotating', price: 'Rs 250' },
  { name: 'Cortado', desc: 'Equal parts espresso & steamed milk', price: 'Rs 220' },
  { name: 'Cold Brew', desc: '18-hour steep, served over ice', price: 'Rs 280' },
  { name: 'Espresso', desc: 'Double shot, house blend', price: 'Rs 180' },
]

export default function App() {
  const [active, setActive] = useState(0)

  return (
    <div className="min-h-screen bg-espresso text-crema font-body">
      {/* Nav */}
      <header className="flex items-center justify-between px-6 md:px-12 py-6">
        <span className="font-display text-xl tracking-tight">bari.</span>
        <nav className="hidden sm:flex gap-8 text-sm text-crema/70">
          <a href="#process" className="hover:text-gold transition-colors">Process</a>
          <a href="#menu" className="hover:text-gold transition-colors">Menu</a>
          <a href="#contact" className="hover:text-gold transition-colors">Visit</a>
        </nav>
      </header>

      {/* Hero */}
      <section className="px-6 md:px-12 pt-10 pb-24 md:pt-16 md:pb-32">
        <p className="text-gold text-sm tracking-[0.2em] uppercase mb-4">Specialty coffee, brewed to order</p>
        <h1 className="font-display text-[13vw] sm:text-7xl md:text-8xl leading-[0.95] tracking-tight max-w-4xl">
          Every cup starts
          <br />
          with a <span className="text-clay italic">bloom</span>.
        </h1>
        <p className="mt-8 max-w-md text-crema/70 text-lg">
          Bari is a slow-bar for people who want to taste the difference
          between a rushed pour and a deliberate one.
        </p>
      </section>

      {/* Process */}
      <section id="process" className="px-6 md:px-12 py-20 border-t border-crema/10">
        <h2 className="font-display text-3xl md:text-4xl mb-2">The pour</h2>
        <p className="text-crema/60 mb-12">Four stages, roughly three minutes, no shortcuts.</p>

        <div className="grid md:grid-cols-[240px_1fr] gap-10">
          <div className="flex md:flex-col gap-2 overflow-x-auto">
            {brewSteps.map((s, i) => (
              <button
                key={s.n}
                onClick={() => setActive(i)}
                className={`text-left shrink-0 px-4 py-3 rounded-md border transition-colors ${
                  active === i
                    ? 'border-gold bg-gold/10 text-crema'
                    : 'border-crema/10 text-crema/50 hover:text-crema/80'
                }`}
              >
                <span className="font-display text-lg mr-2">{s.n}</span>
                {s.title}
              </button>
            ))}
          </div>

          <div className="border-l-2 border-gold/40 pl-8">
            <span className="text-clay text-sm tracking-widest uppercase">{brewSteps[active].time}</span>
            <h3 className="font-display text-2xl md:text-3xl mt-2 mb-4">{brewSteps[active].title}</h3>
            <p className="text-crema/70 max-w-lg leading-relaxed">{brewSteps[active].body}</p>
          </div>
        </div>
      </section>

      {/* Menu */}
      <section id="menu" className="px-6 md:px-12 py-20 border-t border-crema/10">
        <h2 className="font-display text-3xl md:text-4xl mb-12">On the bar</h2>
        <div className="grid sm:grid-cols-2 gap-x-12 gap-y-6 max-w-3xl">
          {menu.map((item) => (
            <div key={item.name} className="flex justify-between items-baseline border-b border-crema/10 pb-3">
              <div>
                <p className="font-display text-lg">{item.name}</p>
                <p className="text-crema/50 text-sm">{item.desc}</p>
              </div>
              <span className="text-gold font-display">{item.price}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Contact / Footer */}
      <section id="contact" className="px-6 md:px-12 py-20 border-t border-crema/10">
        <h2 className="font-display text-3xl md:text-4xl mb-4">Visit the bar</h2>
        <p className="text-crema/70 max-w-md mb-8">
          Open daily, 7am – 6pm. Kathmandu, Nepal.
        </p>
        <a
          href="mailto:hello@bari.coffee"
          className="inline-block border border-gold text-gold px-6 py-3 rounded-md hover:bg-gold hover:text-espresso transition-colors"
        >
          Say hello
        </a>
      </section>

      <footer className="px-6 md:px-12 py-8 border-t border-crema/10 text-crema/40 text-sm">
        © {new Date().getFullYear()} bari.
      </footer>
    </div>
  )
}
