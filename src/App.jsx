import React, { useEffect, useMemo, useRef, useState } from 'react'

// Single-file POC for Ivy R. portfolio
export default function App() {
  const works = useMemo(
    () => [
      {
        id: 'orbits',
        title: 'Orbital Tessellations',
        year: '2025',
        role: 'Abstract 3D Loop',
        palette: ['#00F5D4', '#0EA5E9'],
        video:
          'https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4',
        tags: ['3D', 'Loop', 'Shading'],
      },
      {
        id: 'noisefield',
        title: 'Noise Field Bloom',
        year: '2024',
        role: 'Procedural Motion',
        palette: ['#F72585', '#B5179E'],
        video: 'https://media.w3.org/2010/05/video/movie_300.mp4',
        tags: ['Procedural', 'Noise', 'Loop'],
      },
      {
        id: 'hyperprism',
        title: 'Hyperprism Study',
        year: '2024',
        role: 'Shatter Simulation',
        palette: ['#FFD700', '#FF7A00'],
        video: 'https://media.w3.org/2010/05/bunny/trailer.mp4',
        tags: ['Shatter', 'Refraction'],
      },
      {
        id: 'waveform',
        title: 'Waveform Glass',
        year: '2025',
        role: 'Material R&D',
        palette: ['#22D3EE', '#A78BFA'],
        video:
          'https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4',
        tags: ['Glass', 'Caustics'],
      },
      {
        id: 'axis',
        title: 'Axis Drift',
        year: '2023',
        role: 'Loop System',
        palette: ['#00FF87', '#00C2FF'],
        video: 'https://media.w3.org/2010/05/video/movie_300.mp4',
        tags: ['Loop', 'Repeatability'],
      },
      {
        id: 'subdivide',
        title: 'Subdivide-Remesh',
        year: '2023',
        role: 'Topo Study',
        palette: ['#FF4D4D', '#F97316'],
        video: 'https://media.w3.org/2010/05/bunny/trailer.mp4',
        tags: ['Topology', 'Mesh'],
      },
    ],
    []
  )

  useEffect(() => {
    const root = document.documentElement
    root.classList.add('bg-black')
  }, [])

  return (
    <div className="min-h-screen text-white bg-black selection:bg-white selection:text-black">
      <StyleInjector />
      <Nav />
      <Hero />
      <Marquee text="Abstract 3D — Motion Systems — Shader R&D — Loops — Expressions — Simulations" />
      <WorkGrid works={works} />
      <About />
      <Contact />
      <Footer />
    </div>
  )
}

function StyleInjector() {
  return (
    <style>{`
      @import url('https://fonts.googleapis.com/css2?family=Unbounded:wght@400;600;800&family=Space+Grotesk:wght@300;400;500;700&display=swap');

      :root {
        --ivy-acc: #00f5d4;
        --ivy-acc-2: #a78bfa;
      }

      .font-exp { font-family: 'Unbounded', system-ui, -apple-system, Segoe UI, Roboto, Ubuntu, Cantarell, 'Helvetica Neue', Arial, 'Noto Sans', 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji'; }
      .font-gro { font-family: 'Space Grotesk', ui-sans-serif, system-ui; }

      .text-outline {
        color: transparent;
        -webkit-text-stroke: 2px #fff;
        text-stroke: 2px #fff;
      }

      .text-glow {
        text-shadow: 0 0 16px rgba(255,255,255,0.25), 0 0 40px rgba(167,139,250,0.3);
      }

      .grad-text {
        background: linear-gradient(90deg, #fff, var(--ivy-acc), var(--ivy-acc-2), #fff);
        -webkit-background-clip: text;
        background-clip: text;
        color: transparent;
        animation: gradShift 12s ease-in-out infinite;
        background-size: 300% 100%;
      }

      @keyframes gradShift { 0%{background-position:0% 50%}50%{background-position:100% 50%}100%{background-position:0% 50%} }

      .soft-shadow { box-shadow: 0 20px 60px rgba(0,0,0,0.6), inset 0 0 0 1px rgba(255,255,255,0.06); }

      .mix-diff { mix-blend-mode: difference; }

      .grain::before {
        content: '';
        position: fixed;
        inset: 0;
        pointer-events: none;
        background-image: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAAAI0lEQVQoU2NkwAT/Gf7//58BDAwMDCMGEgYGiBkwIggD2uQABj0R0Qp8tZ3wAAAAAElFTkSuQmCC');
        opacity: 0.06;
        mix-blend-mode: soft-light;
        z-index: 5;
      }

      .card-tilt { transition: transform 300ms ease, box-shadow 300ms ease, opacity 300ms ease; }

      .card-overlay { background: radial-gradient(120% 120% at 50% 0%, rgba(0,0,0,0.0), rgba(0,0,0,0.55) 60%, rgba(0,0,0,0.8)); }

      .hover-reveal::after {
        content: '';
        position: absolute; inset: 0; pointer-events: none;
        background: linear-gradient(120deg, rgba(255,255,255,0.1), rgba(255,255,255,0) 20%);
        opacity: 0; transition: opacity .4s ease;
      }

      .hover-reveal:hover::after { opacity: 1; }

      .ring-sheen {
        position: relative;
        overflow: hidden;
      }
      .ring-sheen::after {
        content: '';
        position: absolute; inset: -200% -200% 0 0;
        background: conic-gradient(from 180deg, rgba(167,139,250,0.0), rgba(167,139,250,0.22), rgba(0,245,212,0.15), rgba(167,139,250,0.0));
        animation: spinSheen 12s linear infinite;
        mix-blend-mode: overlay;
        pointer-events: none;
      }
      @keyframes spinSheen { to { transform: rotate(360deg) } }
    `}</style>
  )
}

function Nav() {
  return (
    <header className="fixed top-0 left-0 right-0 z-40">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mt-6 mb-4 rounded-full border border-white/10 bg-black/40 backdrop-blur-xl ring-1 ring-white/10 ring-offset-0">
          <div className="flex items-center justify-between px-4 py-3">
            <a href="#top" className="flex items-center gap-3 group">
              <div className="h-6 w-6 rounded-full bg-gradient-to-tr from-fuchsia-500 to-emerald-300 shadow-lg" />
              <span className="font-exp text-sm tracking-wider"></span>
              <span className="font-exp text-white/90 group-hover:text-white transition">IVY R.</span>
            </a>
            <nav className="flex items-center gap-6 text-sm font-gro">
              <a href="#work" className="text-white/70 hover:text-white transition">Work</a>
              <a href="#about" className="text-white/70 hover:text-white transition">About</a>
              <a href="#contact" className="text-white/70 hover:text-white transition">Contact</a>
            </nav>
          </div>
        </div>
      </div>
    </header>
  )
}

function Hero() {
  return (
    <section id="top" className="relative pt-32 pb-20 grain">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-10">
          <h1 className="font-exp text-6xl sm:text-7xl md:text-8xl leading-[0.9]">
            <span className="block text-outline">ABSTRACT</span>
            <span className="block grad-text text-glow">3D MOTION</span>
            <span className="block text-white/90 mt-2 text-3xl md:text-4xl font-gro tracking-tight">by Ivy R.</span>
          </h1>

          <p className="max-w-2xl text-white/70 font-gro text-lg">
            I design looping systems, shader-driven visuals and simulation-based narratives for music, brands and live performance.
          </p>

          <div className="flex flex-wrap items-center gap-3">
            <Badge>Loops</Badge>
            <Badge>Procedural</Badge>
            <Badge>Simulation</Badge>
            <Badge>Shaders</Badge>
            <Badge>Experimental Type</Badge>
          </div>
        </div>
      </div>
    </section>
  )
}

function Marquee({ text }) {
  return (
    <div className="relative overflow-hidden border-y border-white/10 bg-black/60">
      <div className="whitespace-nowrap py-4 font-exp text-sm tracking-[0.35em] text-white/60">
        <div className="inline-block animate-[marquee_26s_linear_infinite] will-change-transform">
          {Array.from({ length: 6 }).map((_, i) => (
            <span key={i} className="mx-8">{text} •</span>
          ))}
        </div>
      </div>
      <style>{`
        @keyframes marquee { from { transform: translateX(0%)} to { transform: translateX(-50%)} }
      `}</style>
    </div>
  )
}

function WorkGrid({ works }) {
  return (
    <section id="work" className="py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-8 flex items-end justify-between">
          <h2 className="font-exp text-2xl tracking-widest text-white/70">SELECTED LOOPS</h2>
          <span className="font-gro text-white/50 text-sm">Hover to reveal • Click to focus</span>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {works.map((w, idx) => (
            <WorkCard key={w.id} work={w} priority={idx < 3} />
          ))}
        </div>
      </div>
    </section>
  )
}

function WorkCard({ work, priority }) {
  const ref = useRef(null)
  const [hover, setHover] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const onMove = (e) => {
      const rect = el.getBoundingClientRect()
      const x = e.clientX - rect.left
      const y = e.clientY - rect.top
      const rx = ((y - rect.height / 2) / rect.height) * -6
      const ry = ((x - rect.width / 2) / rect.width) * 6
      el.style.transform = `perspective(900px) rotateX(${rx}deg) rotateY(${ry}deg) scale(${hover ? 1.02 : 1})`
    }
    const reset = () => {
      el.style.transform = 'perspective(900px) rotateX(0deg) rotateY(0deg) scale(1)'
    }

    el.addEventListener('mousemove', onMove)
    el.addEventListener('mouseleave', reset)
    return () => {
      el.removeEventListener('mousemove', onMove)
      el.removeEventListener('mouseleave', reset)
    }
  }, [hover])

  const grad = `linear-gradient(120deg, ${work.palette[0]}, ${work.palette[1]})`

  return (
    <article
      ref={ref}
      className="group relative overflow-hidden rounded-3xl soft-shadow card-tilt hover-reveal ring-1 ring-white/10 bg-zinc-900"
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <div className="absolute inset-0" style={{ background: grad, opacity: 0.15 }} />

      <VideoLoop src={work.video} priority={priority} />

      <div className="absolute inset-0 card-overlay opacity-80 group-hover:opacity-40 transition-opacity duration-500" />

      <div className="absolute inset-0 p-4 md:p-5 flex flex-col justify-between">
        <div className="flex items-center justify-between">
          <span className="text-xs font-gro px-2 py-1 rounded-full bg-white/10 text-white/80 ring-1 ring-white/15">{work.year}</span>
          <div className="flex gap-1.5 opacity-80">
            {work.tags.slice(0, 3).map((t) => (
              <span key={t} className="text-[10px] font-gro px-2 py-1 rounded-full bg-black/30 ring-1 ring-white/10">{t}</span>
            ))}
          </div>
        </div>

        <div className="flex items-end justify-between">
          <div>
            <h3 className="font-exp text-xl md:text-2xl mix-diff">{work.title}</h3>
            <p className="text-white/70 text-xs font-gro">{work.role}</p>
          </div>
          <button className="hidden sm:inline-flex items-center gap-2 rounded-full bg-white/10 ring-1 ring-white/15 px-3 py-1.5 text-xs font-gro text-white/90 hover:bg-white/20 transition">
            View
            <ArrowIcon />
          </button>
        </div>
      </div>
    </article>
  )
}

function VideoLoop({ src, priority }) {
  const vRef = useRef(null)

  useEffect(() => {
    const v = vRef.current
    if (!v) return
    const play = () => {
      v.play().catch(() => {})
    }
    if (priority) play()
    const onIntersect = (entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) play()
      })
    }
    const io = new IntersectionObserver(onIntersect, { threshold: 0.25 })
    io.observe(v)
    return () => io.disconnect()
  }, [priority])

  return (
    <video
      ref={vRef}
      className="absolute inset-0 h-full w-full object-cover"
      src={src}
      muted
      loop
      playsInline
      autoPlay
      preload="metadata"
    />
  )
}

function About() {
  return (
    <section id="about" className="py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-12 gap-10 items-start">
          <div className="md:col-span-5">
            <div className="ring-sheen rounded-3xl p-8 ring-1 ring-white/10 bg-gradient-to-b from-white/5 to-transparent">
              <h3 className="font-exp text-3xl">Studio Notes</h3>
              <p className="mt-4 font-gro text-white/75">
                I develop modular motion systems that prioritize loopability, material character and rhythm. Deliverables include show packages, music visuals, and experimental identities.
              </p>
              <ul className="mt-6 space-y-2 font-gro text-white/70 text-sm">
                <li>• Abstract 3D animation</li>
                <li>• Shader & material R&D</li>
                <li>• Simulation-driven design</li>
                <li>• Live performance packs</li>
              </ul>
            </div>
          </div>
          <div className="md:col-span-7">
            <h2 className="font-exp text-2xl tracking-widest text-white/70">APPROACH</h2>
            <p className="mt-4 font-gro text-white/75 max-w-2xl">
              My practice merges proceduralism with graphic sensitivity. I build systems in Houdini, Blender Geometry Nodes and GLSL, then collage timing and type in After Effects or TouchDesigner. The result: crisp, evolving loops with attitude.
            </p>
            <div className="mt-8 flex flex-wrap gap-2">
              <Pill>Houdini</Pill>
              <Pill>Blender GN</Pill>
              <Pill>Redshift</Pill>
              <Pill>Octane</Pill>
              <Pill>GLSL</Pill>
              <Pill>AE</Pill>
              <Pill>TD</Pill>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function Contact() {
  return (
    <section id="contact" className="py-16 border-t border-white/10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8 items-center">
          <div className="md:col-span-2">
            <h2 className="font-exp text-4xl">Let’s build a loop that never gets old.</h2>
            <p className="mt-3 font-gro text-white/70 max-w-2xl">Available for commissions, visual packs and collaborations worldwide.</p>
          </div>
          <div className="flex flex-col items-start md:items-end gap-3">
            <a href="mailto:hello@ivyr.studio" className="font-exp text-lg underline decoration-dashed underline-offset-4 hover:text-white/80">hello@ivyr.studio</a>
            <div className="flex gap-4 text-white/70">
              <a className="hover:text-white" href="#" aria-label="Instagram">IG</a>
              <a className="hover:text-white" href="#" aria-label="Behance">BE</a>
              <a className="hover:text-white" href="#" aria-label="Vimeo">VI</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function Footer() {
  return (
    <footer className="py-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 text-white/50 font-gro text-sm">
          <p>© {new Date().getFullYear()} Ivy R. All rights reserved.</p>
          <p>Built with React + Tailwind</p>
        </div>
      </div>
    </footer>
  )
}

function Badge({ children }) {
  return (
    <span className="inline-flex items-center rounded-full bg-white/10 px-3 py-1 text-xs font-gro ring-1 ring-white/15 text-white/80">
      {children}
    </span>
  )
}

function Pill({ children }) {
  return (
    <span className="inline-flex items-center rounded-full bg-gradient-to-r from-white/10 to-transparent px-3 py-1 text-xs font-gro ring-1 ring-white/15 text-white/80">
      {children}
    </span>
  )
}

function ArrowIcon(props) {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path d="M5 12h12M13 5l7 7-7 7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}
