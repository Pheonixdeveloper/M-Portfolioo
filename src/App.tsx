import { useState, useEffect, useRef, type FormEvent } from "react";
import {
  Code2,
  ExternalLink,
  Github,
  Linkedin,
  Mail,
  Menu,
  Send,
  Twitter,
  User,
  X,
  ChevronDown,
  Sparkles,
  Terminal,
  // Layers,
  Database,
  // Globe,
  ArrowRight,
  MessageSquare,
  MapPin,
  Phone,
} from "lucide-react";

/* ─── Intersection Observer Hook ──────────────────────── */
function useInView(threshold = 0.15) {
  const ref = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { setInView(true); obs.unobserve(el); } },
      { threshold }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [threshold]);
  return { ref, inView };
}

/* ─── Navbar ──────────────────────────────────────────── */
function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const h = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", h);
    return () => window.removeEventListener("scroll", h);
  }, []);

  const links = ["About", "Projects", "Skills", "Contact"];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled ? "glass shadow-lg shadow-black/20" : "bg-transparent"}`}>
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <a href="#hero" className="flex items-center gap-2 group">
          <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-to-br from-electric to-electric-dim shadow-lg shadow-electric/20 transition-transform group-hover:scale-110">
            <Terminal className="h-5 w-5 text-dark-900" strokeWidth={2.5} />
          </div>
          <span className="text-lg font-bold tracking-tight text-white">
            Meetva Khunt<span className="text-electric">.</span>
          </span>
        </a>

        {/* Desktop */}
        <div className="hidden items-center gap-1 md:flex">
          {links.map((l) => (
            <a key={l} href={`#${l.toLowerCase()}`} className="rounded-lg px-4 py-2 text-sm font-medium text-dark-100 transition-colors hover:bg-dark-700/60 hover:text-electric">
              {l}
            </a>
          ))}
          <a href="#contact" className="ml-3 rounded-lg bg-electric/10 px-5 py-2 text-sm font-semibold text-electric ring-1 ring-electric/20 transition-all hover:bg-electric/20 hover:ring-electric/40">
            Let's Talk
          </a>
        </div>

        {/* Mobile Toggle */}
        <button onClick={() => setMenuOpen(!menuOpen)} className="rounded-lg p-2 text-dark-100 transition-colors hover:bg-dark-700 md:hidden">
          {menuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="glass border-t border-dark-600/50 md:hidden">
          <div className="flex flex-col gap-1 px-6 py-4">
            {links.map((l) => (
              <a key={l} href={`#${l.toLowerCase()}`} onClick={() => setMenuOpen(false)} className="rounded-lg px-4 py-3 text-sm font-medium text-dark-100 transition-colors hover:bg-dark-700/60 hover:text-electric">
                {l}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}

/* ─── Hero ────────────────────────────────────────────── */
function Hero() {
  const techStack = [
    "React", "TypeScript", "Node.js", "Next.js", "MongoDB", "PostgreSQL",
    "GraphQL", "Docker", "AWS", "Tailwind CSS", "Redis", "Python",
    "Express.js", "Prisma", "Kubernetes", "CI/CD",
  ];
  const doubled = [...techStack, ...techStack];

  return (
    <section id="hero" className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden bg-grid">
      {/* Ambient glow orbs */}
      <div className="pointer-events-none absolute -top-40 left-1/4 h-[500px] w-[500px] rounded-full bg-electric/5 blur-[120px]" />
      <div className="pointer-events-none absolute -bottom-40 right-1/4 h-[400px] w-[400px] rounded-full bg-electric-dim/5 blur-[100px]" />

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-5xl px-6 pt-28 pb-10 text-center">
        {/* Badge */}
        <div className="animate-fade-in-up mb-8 inline-flex items-center gap-2 rounded-full border border-electric/20 bg-electric/5 px-4 py-1.5">
          <Sparkles className="h-3.5 w-3.5 text-electric" />
          <span className="text-xs font-medium tracking-wide text-electric">Available for Freelance Projects</span>
        </div>

        <h1 className="animate-fade-in-up text-5xl leading-tight font-extrabold tracking-tight text-white sm:text-6xl md:text-7xl lg:text-8xl" style={{ animationDelay: "0.1s" }}>
          Hi, I'm{" "}
          <span className="text-gradient">Meetva Khunt</span>
        </h1>

        <p className="animate-fade-in-up mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-dark-200 sm:text-xl" style={{ animationDelay: "0.25s" }}>
          Full Stack Developer crafting <span className="text-dark-100 font-medium">performant</span>,{" "}
          <span className="text-dark-100 font-medium">scalable</span>, and{" "}
          <span className="text-dark-100 font-medium">beautiful</span> web experiences
          from front-end pixels to back-end APIs.
        </p>

        {/* CTA Buttons */}
        <div className="animate-fade-in-up mt-10 flex flex-wrap items-center justify-center gap-4" style={{ animationDelay: "0.4s" }}>
          <a href="#projects" className="group relative inline-flex items-center gap-2 overflow-hidden rounded-xl bg-electric px-7 py-3.5 text-sm font-semibold text-dark-900 shadow-lg shadow-electric/25 transition-all hover:shadow-electric/40 hover:brightness-110">
            View My Work
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </a>
          <a href="#contact" className="inline-flex items-center gap-2 rounded-xl border border-dark-500 bg-dark-800/60 px-7 py-3.5 text-sm font-semibold text-white backdrop-blur transition-all hover:border-electric/30 hover:bg-dark-700/60">
            <Mail className="h-4 w-4" />
            Get in Touch
          </a>
        </div>

        {/* Scroll Indicator */}
        <div className="animate-fade-in-up mt-16 flex flex-col items-center gap-2 text-dark-300" style={{ animationDelay: "0.6s" }}>
          <span className="text-[11px] font-medium uppercase tracking-widest">Scroll</span>
          <ChevronDown className="h-4 w-4 animate-bounce" />
        </div>
      </div>

      {/* Tech Stack Marquee */}
      <div className="absolute bottom-0 left-0 right-0 border-t border-dark-700/60 bg-dark-900/60 backdrop-blur-sm">
        <div className="overflow-hidden whitespace-nowrap py-4">
          <div className="animate-marquee inline-flex">
            {doubled.map((tech, i) => (
              <span key={i} className="mx-5 inline-flex items-center gap-2 text-sm font-medium text-dark-300 transition-colors hover:text-electric">
                <span className="h-1.5 w-1.5 rounded-full bg-electric/40" />
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─── About ───────────────────────────────────────────── */
function About() {
  const { ref, inView } = useInView();
  return (
    <section id="about" className="relative py-28" ref={ref}>
      <div className="pointer-events-none absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-dark-900 to-transparent" />
      <div className={`mx-auto max-w-6xl px-6 transition-all duration-700 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
        <div className="grid gap-16 lg:grid-cols-2 lg:items-center">
          {/* Left: Image Area */}
          <div className="relative flex justify-center">
            <div className="relative">
              <div className="glass-card glow-border flex h-72 w-72 items-center justify-center rounded-3xl sm:h-80 sm:w-80">
                <div className="flex flex-col items-center gap-4">
                  <div className="flex h-24 w-24 items-center justify-center rounded-2xl bg-gradient-to-br from-electric/20 to-electric-dim/10">
                    <User className="h-12 w-12 text-electric" />
                  </div>
                  <div className="text-center">
                    <p className="text-lg font-bold text-white">Meetva Khunt</p>
                    <p className="text-sm text-dark-200">A Full Stack Developer</p>
                  </div>
                </div>
              </div>
              {/* Decorative floating badges */}


            </div>
          </div>

          {/* Right: Content */}
          <div>
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-electric/15 bg-electric/5 px-3 py-1">
              <span className="h-1.5 w-1.5 rounded-full bg-electric" />
              <span className="text-xs font-medium tracking-wide text-electric uppercase">About Me</span>
            </div>
            <h2 className="text-3xl font-bold text-white sm:text-4xl">
              Turning ideas into{" "}
              <span className="text-gradient">digital reality</span>
            </h2>
            <p className="mt-6 text-base leading-relaxed text-dark-200">
              Aspiring Full Stack Developer and Engineering Student passionate about building scalable, high-performance web applications. I am focused on mastering both front-end and back-end technologies, including modern JavaScript frameworks, responsive UI/UX design, server-side development, and database management. My goal is to develop strong fundamentals in data structures, system design, APIs, and cloud deployment while gaining practical experience through real-world projects and collaborative development.
            </p>
            <p className="mt-6 text-base leading-relaxed text-dark-200">
              I believe full stack development is not just about writing code, but about understanding the complete architecture — from user experience to database optimization — and solving problems with both creativity and engineering discipline. I continuously challenge myself to learn new technologies, improve code quality, and build efficient, secure, and maintainable systems. My long-term objective is to work on impactful products that combine innovation, scalability, and performance.
            </p>
            <p className="mt-4 text-base leading-relaxed text-dark-200">
              When I’m not coding, I explore emerging technologies, contribute to open-source projects, experiment with new frameworks, and mentor aspiring developers. I believe great software is created at the intersection of technical precision, user-centered design, and continuous learning.
            </p>
            <div className="mt-8 grid grid-cols-3 gap-6">
              {[
                { num: "4+", label: "Projects" },
                { num: "1", label: "Years Experience in web development" },
              ].map((s) => (
                <div key={s.label} className="text-center lg:text-left">
                  <p className="text-2xl font-bold text-gradient">{s.num}</p>
                  <p className="mt-1 text-xs font-medium text-dark-300 uppercase tracking-wider">{s.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─── Projects ────────────────────────────────────────── */
const projects = [
  {
    title: "Portfolio Website",
    desc: "A responsive portfolio website showcasing my projects and skills.",
    tags: ["React", "TypeScript", "Tailwind CSS"],
    image: "/images/portfolio.jpg",
    github: "https://github.com/Meetva247/portfolio-web",
    link: "https://your-portfolio-url.com",
    gradient: "from-blue-500/20 to-cyan-500/20",
    accent: "blue",
  },
  {
    title: "Caption website",
    desc: "A website for fun website.",
    tags: ["React", "Tailwind"],
    image: "/images/repair.jpg",
    github: "https://github.com/Meetva247/repair-website",
    link: "https://your-caption-website-url.com",
    gradient: "from-green-500/20 to-emerald-500/20",
    accent: "green",
  },
  {
    title: "XAIR Robotics API",
    desc: "A RESTful API for managing robotics data, built with Node.js and MongoDB.",
    tags: ["TypeScript", "GraphQL", "MongoDB", "Docker"],
    icon: <Database className="h-6 w-6" />,
    gradient: "from-emerald-500/20 to-teal-500/20",
    accent: "emerald",
    github: "https://github.com/Meetva247/xair-robotics",
  },
];

function Projects() {
  const { ref, inView } = useInView();
  return (
    <section id="projects" className="relative py-28" ref={ref}>
      <div className="pointer-events-none absolute -left-40 top-1/3 h-[400px] w-[400px] rounded-full bg-electric/3 blur-[120px]" />
      <div className="mx-auto max-w-6xl px-6">
        <div className={`text-center transition-all duration-700 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-electric/15 bg-electric/5 px-3 py-1">
            <Code2 className="h-3.5 w-3.5 text-electric" />
            <span className="text-xs font-medium tracking-wide text-electric uppercase">Featured Work</span>
          </div>
          <h2 className="text-3xl font-bold text-white sm:text-4xl">
            Selected <span className="text-gradient">Projects</span>
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-base text-dark-200">
            A curated collection of recent work that showcases my expertise across the full stack.
          </p>
        </div>

        <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((p, i) => (
            <div
              key={p.title}
              className={`group glass-card hover-lift glow-border cursor-pointer overflow-hidden rounded-2xl transition-all duration-700 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                }`}
              style={{ transitionDelay: `${i * 150}ms` }}
            >
              {/* Card top gradient */}
              <div className={`h-44 bg-gradient-to-br ${p.gradient} flex items-center justify-center relative overflow-hidden`}>
                <div className="absolute inset-0 bg-grid opacity-30" />
                <div className="relative flex h-16 w-16 items-center justify-center rounded-2xl bg-dark-800/80 text-electric shadow-lg backdrop-blur transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3">
                  {p.icon}
                </div>
                {/* Hover overlay */}
                <div className="absolute inset-0 flex items-center justify-center gap-3 bg-dark-900/80 opacity-0 backdrop-blur-sm transition-opacity duration-300 group-hover:opacity-100">
                  {p.github && (
                    <a
                      href={p.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`${p.title} GitHub`}
                      className="flex h-10 w-10 items-center justify-center rounded-full bg-electric/20 text-electric ring-1 ring-electric/30 transition-colors hover:bg-electric/30"
                    >
                      <Github className="h-4 w-4" />
                    </a>
                  )}
                  {p.link && (
                    <a
                      href={p.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`${p.title} Live`}
                      className="flex h-10 w-10 items-center justify-center rounded-full bg-electric/20 text-electric ring-1 ring-electric/30 transition-colors hover:bg-electric/30"
                    >
                      <ExternalLink className="h-4 w-4" />
                    </a>
                  )}
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-lg font-bold text-white transition-colors group-hover:text-electric">
                  {p.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-dark-200">
                  {p.desc}
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {p.tags.map((t) => (
                    <span key={t} className="rounded-md bg-dark-700/80 px-2.5 py-1 text-[11px] font-medium text-dark-100 ring-1 ring-dark-500/50">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── Skills ──────────────────────────────────────────── */
function ReactIcon() {
  return (
    <svg viewBox="0 0 128 128" className="h-10 w-10">
      <g fill="#00BFFF">
        <circle cx="64" cy="64" r="11.4" />
        <path d="M107.3 45.2c-2.2-.8-4.5-1.6-6.9-2.3.6-2.4 1.1-4.8 1.5-7.1 2.1-13.2-.2-22.5-6.6-26.1-1.9-1.1-4-1.6-6.4-1.6-7 0-15.9 5.2-24.9 13.9-9-8.7-17.9-13.9-24.9-13.9-2.4 0-4.5.5-6.4 1.6-6.4 3.7-8.7 13-6.6 26.1.4 2.3.9 4.7 1.5 7.1-2.4.7-4.7 1.4-6.9 2.3C8.2 50 1.4 56.6 1.4 64s6.9 14 19.3 18.8c2.2.8 4.5 1.6 6.9 2.3-.6 2.4-1.1 4.8-1.5 7.1-2.1 13.2.2 22.5 6.6 26.1 1.9 1.1 4 1.6 6.4 1.6 7.1 0 16-5.2 24.9-13.9 9 8.7 17.9 13.9 24.9 13.9 2.4 0 4.5-.5 6.4-1.6 6.4-3.7 8.7-13 6.6-26.1-.4-2.3-.9-4.7-1.5-7.1 2.4-.7 4.7-1.4 6.9-2.3 12.5-4.8 19.3-11.4 19.3-18.8s-6.8-14-19.3-18.8zM92.5 14.7c4.1 2.4 5.5 9.8 3.8 20.3-.3 2.1-.8 4.3-1.4 6.6-5.2-1.2-10.7-2-16.5-2.5-3.4-4.8-6.9-9.1-10.4-13 7.4-7.3 14.9-12.3 21-12.3 1.3 0 2.5.3 3.5.9zM81.3 74c-1.8 3.2-3.9 6.4-6.1 9.6-3.7.3-7.4.4-11.2.4-3.9 0-7.6-.1-11.2-.4-2.2-3.2-4.2-6.4-6-9.6-1.9-3.3-3.7-6.7-5.3-10 1.6-3.3 3.4-6.7 5.3-10 1.8-3.2 3.9-6.4 6.1-9.6 3.7-.3 7.4-.4 11.2-.4 3.9 0 7.6.1 11.2.4 2.2 3.2 4.2 6.4 6 9.6 1.9 3.3 3.7 6.7 5.3 10-1.7 3.3-3.4 6.6-5.3 10zm8.3-3.3c1.5 3.5 2.7 6.9 3.8 10.3-3.4.8-7 1.4-10.8 1.9 1.2-1.9 2.5-3.9 3.6-6 1.2-2 2.3-4.1 3.4-6.2zM64 97.8c-2.4-2.6-4.7-5.4-6.9-8.3 2.3.1 4.6.2 6.9.2s4.6-.1 6.9-.2c-2.2 2.9-4.5 5.7-6.9 8.3zm-18.6-15c-3.8-.5-7.4-1.1-10.8-1.9 1.1-3.3 2.3-6.8 3.8-10.3 1.1 2 2.2 4.1 3.4 6.1 1.2 2.1 2.4 4.1 3.6 6.1zm-7-25.5c-1.5-3.5-2.7-6.9-3.8-10.3 3.4-.8 7-1.4 10.8-1.9-1.2 1.9-2.5 3.9-3.6 6-1.2 2-2.3 4.1-3.4 6.2zM64 30.2c2.4 2.6 4.7 5.4 6.9 8.3-2.3-.1-4.6-.2-6.9-.2s-4.6.1-6.9.2c2.2-2.9 4.5-5.7 6.9-8.3zm22.2 21l-3.6-6c3.8.5 7.4 1.1 10.8 1.9-1.1 3.3-2.3 6.8-3.8 10.3-1.1-2.1-2.2-4.2-3.4-6.2zm-29.1-30.5c-1.7-10.5-.3-17.9 3.8-20.3 1-.6 2.2-.9 3.5-.9 6 0 13.5 4.9 21 12.3-3.5 3.8-7 8.2-10.4 13-5.8.5-11.3 1.4-16.5 2.5-.6-2.3-1-4.5-1.4-6.6zM12.1 64c0-4.5 5.5-9.7 15-13.4 2.1-.8 4.3-1.5 6.5-2.1 1.8 5.4 4.1 11.2 6.9 17-.9 1.5-1.7 3.1-2.5 4.7-1.6 3.1-3 6.1-4.2 9-2.3-.6-4.5-1.3-6.6-2.1-9.6-3.7-15.1-8.9-15.1-13.1zm73.4 33.3c1.7 10.5.3 17.9-3.8 20.3-1 .6-2.2.9-3.5.9-6 0-13.5-4.9-21-12.3 3.5-3.8 7-8.2 10.4-13 5.8-.5 11.3-1.4 16.5-2.5.5 2.3 1 4.5 1.4 6.6zm9.6-11.7c-2.1.8-4.3 1.5-6.5 2.1-1.2-2.9-2.7-6-4.2-9-.8-1.5-1.6-3.1-2.5-4.6 2.8-5.7 5.1-11.5 6.9-17 2.3.6 4.5 1.3 6.5 2.1 9.5 3.6 15.1 8.8 15.1 13.1 0 4.6-5.5 9.8-15.3 13.3z" />
      </g>
    </svg>
  );
}

function NodeIcon() {
  return (
    <svg viewBox="0 0 128 128" className="h-10 w-10">
      <path fill="#00BFFF" d="M112.771 30.334L68.674 4.729c-2.781-1.584-6.402-1.584-9.205 0L14.901 30.334C12.031 31.985 10 35.088 10 38.407v51.142c0 3.319 2.084 6.423 4.954 8.083l11.775 6.688c5.628 2.772 7.617 2.772 10.178 2.772 8.333 0 13.093-5.039 13.093-13.828v-50.49c0-.713-.371-1.774-1.071-1.774h-5.623c-.712 0-2.306 1.061-2.306 1.773v50.49c0 3.896-3.524 7.773-10.11 4.48L18.723 91.73c-.424-.23-.723-.693-.723-1.181V38.407c0-.482.555-.966.982-1.213l44.424-25.561c.415-.235 1.025-.235 1.439 0l43.882 25.555c.42.253.272.722.272 1.219v51.142c0 .488.183.963-.232 1.198l-44.086 25.576c-.378.227-.847.227-1.261 0l-11.307-6.749c-.341-.198-.746-.269-1.073-.086-3.146 1.783-3.726 2.02-6.677 3.043-.726.253-1.797.692.41 1.929l14.798 8.754a9.294 9.294 0 004.647 1.246c1.642 0 3.25-.426 4.667-1.246l43.885-25.582c2.87-1.672 4.23-4.764 4.23-8.083V38.407c0-3.319-1.36-6.414-4.229-8.073zM77.91 81.445c-11.726 0-14.309-3.235-15.17-9.066-.1-.628-.633-1.379-1.272-1.379h-5.731c-.71 0-1.279.86-1.279 1.566 0 7.466 4.059 16.512 23.453 16.512 14.039 0 22.088-5.455 22.088-15.109 0-9.572-6.467-12.084-20.082-13.886-13.762-1.819-15.16-2.738-15.16-5.962 0-2.658 1.184-6.203 11.374-6.203 9.105 0 12.461 1.954 13.842 8.091.118.577.645 1.006 1.235 1.006h5.764c.354 0 .694-.143.94-.396.24-.272.367-.613.335-.979-.891-10.568-7.912-15.493-22.112-15.493-12.631 0-20.166 5.334-20.166 14.275 0 9.698 7.497 12.378 19.622 13.577 14.505 1.422 15.633 3.542 15.633 6.395 0 4.955-3.978 7.066-13.309 7.066z" />
    </svg>
  );
}

function MongoIcon() {
  return (
    <svg viewBox="0 0 128 128" className="h-10 w-10">
      <path fillRule="evenodd" clipRule="evenodd" fill="#00BFFF" d="M90.491 57.282c-.37-4.79-1.896-9.077-4.614-12.791-2.0-2.74-4.46-5.09-6.86-7.43-3.07-2.97-6.21-5.88-8.62-9.54-1.37-2.09-2.52-4.31-3.37-6.64-.24-.67-.48-1.34-.72-2.01-.29-.84-1.31-1.36-2.01-.61-.16.16-.3.35-.44.55-2.55 3.47-3.95 7.46-4.75 11.67-.58 3.04-.74 6.1-.37 9.19.4 3.34 1.46 6.45 3.42 9.22.52.73.99 1.49 1.55 2.19.54.67 1.13 1.29 1.75 1.89.41.4 1.14 1.07 1.14 1.07l.18 56.72c.19 1.03.63 1.64 1.64 1.64s1.43-.63 1.64-1.64l.18-56.72s.73-.67 1.14-1.07c.62-.6 1.21-1.22 1.75-1.89.56-.7 1.03-1.46 1.55-2.19 1.96-2.77 3.02-5.88 3.42-9.22.37-3.09.21-6.15-.37-9.19-.8-4.21-2.2-8.2-4.75-11.67-.14-.2-.28-.39-.44-.55-.7-.75-1.72-.23-2.01.61-.24.67-.48 1.34-.72 2.01-.85 2.33-2 4.55-3.37 6.64-2.41 3.66-5.55 6.57-8.62 9.54-2.4 2.34-4.86 4.69-6.86 7.43-2.718 3.714-4.244 8.001-4.614 12.791-.228 2.948-.158 5.905.209 8.84.612 4.896 2.251 9.468 4.987 13.627 1.416 2.155 3.088 4.104 4.93 5.896 1.12 1.088 2.257 2.262 2.764 3.794.098.297.128.517.128.517l.15 10.68c.019 1.03.633 1.64 1.64 1.64s1.619-.61 1.64-1.64l.15-10.68s.03-.22.128-.517c.507-1.532 1.644-2.706 2.764-3.794 1.842-1.792 3.514-3.741 4.93-5.896 2.736-4.159 4.375-8.731 4.987-13.627.367-2.935.437-5.892.209-8.84z" />
    </svg>
  );
}

const skills = [
  {
    name: "React",
    icon: <ReactIcon />,
    desc: "Building dynamic UIs with component-driven architecture, hooks, and state management.",
    level: 95,
  },
  {
    name: "Node.js",
    icon: <NodeIcon />,
    desc: "Scalable server-side apps with Express, REST APIs, authentication, and real-time features.",
    level: 90,
  },
  {
    name: "MongoDB",
    icon: <MongoIcon />,
    desc: "NoSQL database design, aggregation pipelines, indexing, and data modeling at scale.",
    level: 85,
  },
];

const additionalSkills = [
  "TypeScript", "Next.js", "PostgreSQL", "GraphQL", "Docker",
  "AWS", "Redis", "Tailwind CSS", "Git", "CI/CD", "Python", "Prisma",
];

function Skills() {
  const { ref, inView } = useInView();
  return (
    <section id="skills" className="relative py-28 bg-dark-800/30" ref={ref}>
      <div className="pointer-events-none absolute -right-40 top-1/4 h-[400px] w-[400px] rounded-full bg-electric/3 blur-[120px]" />
      <div className="mx-auto max-w-6xl px-6">
        <div className={`text-center transition-all duration-700 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-electric/15 bg-electric/5 px-3 py-1">
            <Sparkles className="h-3.5 w-3.5 text-electric" />
            <span className="text-xs font-medium tracking-wide text-electric uppercase">Core Expertise</span>
          </div>
          <h2 className="text-3xl font-bold text-white sm:text-4xl">
            Technical <span className="text-gradient">Skills</span>
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-base text-dark-200">
            My core technology stack that I use to build production-ready applications.
          </p>
        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-3">
          {skills.map((s, i) => (
            <div
              key={s.name}
              className={`group glass-card glow-border rounded-2xl p-8 text-center hover-lift transition-all duration-700 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                }`}
              style={{ transitionDelay: `${i * 150}ms` }}
            >
              <div className="mx-auto mb-5 flex h-20 w-20 items-center justify-center rounded-2xl bg-electric/5 ring-1 ring-electric/10 transition-all group-hover:bg-electric/10 group-hover:ring-electric/25 group-hover:scale-110">
                {s.icon}
              </div>
              <h3 className="text-xl font-bold text-white">{s.name}</h3>
              <p className="mt-3 text-sm leading-relaxed text-dark-200">{s.desc}</p>

              {/* Skill bar */}
              <div className="mt-6">
                <div className="flex items-center justify-between text-xs mb-2">
                  <span className="text-dark-300 font-medium">Proficiency</span>
                  <span className="text-electric font-semibold">{s.level}%</span>
                </div>
                <div className="h-1.5 w-full rounded-full bg-dark-700/80 overflow-hidden">
                  <div
                    className="h-full rounded-full bg-gradient-to-r from-electric to-electric-glow transition-all duration-1000 ease-out"
                    style={{ width: inView ? `${s.level}%` : "0%" }}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Additional Skills */}
        <div className={`mt-16 text-center transition-all duration-700 delay-300 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
          <p className="mb-6 text-sm font-medium text-dark-300 uppercase tracking-wider">Also proficient in</p>
          <div className="flex flex-wrap justify-center gap-3">
            {additionalSkills.map((s) => (
              <span key={s} className="rounded-xl border border-dark-500/50 bg-dark-700/40 px-4 py-2 text-sm font-medium text-dark-100 transition-all hover:border-electric/30 hover:text-electric hover:bg-electric/5">
                {s}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─── Contact ─────────────────────────────────────────── */
function Contact() {
  const { ref, inView } = useInView();
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: "", email: "", message: "" });
    }, 3000);
  };

  return (
    <section id="contact" className="relative py-28" ref={ref}>
      <div className="pointer-events-none absolute left-1/2 -translate-x-1/2 top-0 h-[500px] w-[600px] rounded-full bg-electric/3 blur-[150px]" />
      <div className="mx-auto max-w-6xl px-6">
        <div className={`text-center transition-all duration-700 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-electric/15 bg-electric/5 px-3 py-1">
            <MessageSquare className="h-3.5 w-3.5 text-electric" />
            <span className="text-xs font-medium tracking-wide text-electric uppercase">Get in Touch</span>
          </div>
          <h2 className="text-3xl font-bold text-white sm:text-4xl">
            Let's Build Something{" "}
            <span className="text-gradient">Amazing</span>
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-base text-dark-200">
            Have a project in mind? I'd love to hear about it. Send me a message and let's create something extraordinary.
          </p>
        </div>

        <div className="mt-16 grid gap-12 lg:grid-cols-5">
          {/* Info cards */}
          <div className={`lg:col-span-2 space-y-6 transition-all duration-700 delay-150 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
            {[
              { icon: <Mail className="h-5 w-5" />, label: "Email", value: "hello@phoenix.dev" },
              { icon: <MapPin className="h-5 w-5" />, label: "Location", value: "Ganpat University , Mehsana" },
              { icon: <Phone className="h-5 w-5" />, label: "Phone", value: "+91 9876543210" },
            ].map((c) => (
              <div key={c.label} className="glass-card glow-border flex items-center gap-4 rounded-xl p-5">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-electric/10 text-electric ring-1 ring-electric/20">
                  {c.icon}
                </div>
                <div>
                  <p className="text-xs font-medium text-dark-300 uppercase tracking-wider">{c.label}</p>
                  <p className="mt-0.5 text-sm font-semibold text-white">{c.value}</p>
                </div>
              </div>
            ))}

            {/* Social Links */}
            <div className="flex gap-3 pt-2">
              {[
                { icon: <Github className="h-5 w-5" />, label: "GitHub", link: "https://github.com/Meetva247" },
                { icon: <Linkedin className="h-5 w-5" />, label: "LinkedIn", link: "https://www.linkedin.com/in/meetva-khunt-13181731a?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" },
                { icon: <Twitter className="h-5 w-5" />, label: "Twitter", link: "https://twitter.com/your-handle" },
              ].map((s) => (
                <a key={s.label} href={s.link} target="_blank" rel="noopener noreferrer" className="flex h-11 w-11 items-center justify-center rounded-xl border border-dark-500/50 bg-dark-700/40 text-dark-200 transition-all hover:border-electric/30 hover:text-electric hover:bg-electric/5" aria-label={s.label}>
                  {s.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Contact Form */}
          <form
            onSubmit={handleSubmit}
            className={`lg:col-span-3 glass-card glow-border rounded-2xl p-8 transition-all duration-700 delay-300 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
          >
            {submitted ? (
              <div className="flex h-full min-h-[300px] flex-col items-center justify-center text-center">
                <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-electric/10 ring-1 ring-electric/30">
                  <Send className="h-7 w-7 text-electric" />
                </div>
                <h3 className="text-xl font-bold text-white">Message Sent!</h3>
                <p className="mt-2 text-sm text-dark-200">Thank you for reaching out. I'll get back to you soon.</p>
              </div>
            ) : (
              <div className="space-y-6">
                <div className="grid gap-6 sm:grid-cols-2">
                  <div>
                    <label className="mb-2 block text-xs font-medium text-dark-300 uppercase tracking-wider">
                      Your Name
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="John Doe"
                      className="w-full rounded-xl border border-dark-500/50 bg-dark-700/40 px-4 py-3 text-sm text-white placeholder-dark-400 outline-none transition-all focus:border-electric/50 focus:ring-2 focus:ring-electric/10"
                    />
                  </div>
                  <div>
                    <label className="mb-2 block text-xs font-medium text-dark-300 uppercase tracking-wider">
                      Email Address
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="john@example.com"
                      className="w-full rounded-xl border border-dark-500/50 bg-dark-700/40 px-4 py-3 text-sm text-white placeholder-dark-400 outline-none transition-all focus:border-electric/50 focus:ring-2 focus:ring-electric/10"
                    />
                  </div>
                </div>

                <div>
                  <label className="mb-2 block text-xs font-medium text-dark-300 uppercase tracking-wider">
                    Your Message
                  </label>
                  <textarea
                    required
                    rows={5}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Tell me about your project..."
                    className="w-full resize-none rounded-xl border border-dark-500/50 bg-dark-700/40 px-4 py-3 text-sm text-white placeholder-dark-400 outline-none transition-all focus:border-electric/50 focus:ring-2 focus:ring-electric/10"
                  />
                </div>

                <button
                  type="submit"
                  className="group inline-flex w-full items-center justify-center gap-2 rounded-xl bg-electric px-6 py-3.5 text-sm font-semibold text-dark-900 shadow-lg shadow-electric/20 transition-all hover:shadow-electric/40 hover:brightness-110 sm:w-auto"
                >
                  Send Message
                  <Send className="h-4 w-4 transition-transform group-hover:translate-x-1" />

                </button>
              </div>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}

/* ─── Footer ──────────────────────────────────────────── */
function Footer() {
  return (
    <footer className="border-t border-dark-700/50 bg-dark-800/30">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-6 py-8 sm:flex-row">
        <div className="flex items-center gap-2">
          <div className="flex h-7 w-7 items-center justify-center rounded-md bg-gradient-to-br from-electric to-electric-dim">
            <Terminal className="h-4 w-4 text-dark-900" strokeWidth={2.5} />
          </div>
          <span className="text-sm font-bold text-white">
            Phoenix<span className="text-electric">.</span>
          </span>
        </div>
        <p className="text-xs text-dark-300">
          © {new Date().getFullYear()} Phoenix. Crafted with passion & precision.
        </p>
        <div className="flex gap-3">
          {[
           { icon: <Github className="h-5 w-5" />, label: "GitHub", link: "https://github.com/Meetva247" },
           { icon: <Linkedin className="h-5 w-5" />, label: "LinkedIn", link: "https://www.linkedin.com/in/meetva-khunt-13181731a?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" },
           { icon: <Twitter className="h-5 w-5" />, label: "Twitter", link: "https://twitter.com/your-handle" },
          ].map((icon, i) => (
            <a key={i} href={icon.link} target="_blank" rel="noopener noreferrer" className="flex h-8 w-8 items-center justify-center rounded-lg text-dark-300 transition-colors hover:text-electric hover:bg-dark-700/60">
              {icon.icon}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}

/* ─── App ─────────────────────────────────────────────── */
export function App() {
  return (
    <div className="min-h-screen bg-dark-900 text-white antialiased">
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Skills />
      <Contact />
      <Footer />
    </div>
  );
}
