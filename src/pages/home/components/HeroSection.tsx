import { useEffect, useRef, useState, useCallback } from 'react';

const scrollToSection = (id: string) => {
  const el = document.getElementById(id);
  if (el) el.scrollIntoView({ behavior: 'smooth' });
};

// ── Cursor-tracking Eye ───────────────────────────────────────────────────────
const Eye = ({ size = 120, delay = 0 }: { size?: number; delay?: number }) => {
  const eyeRef = useRef<HTMLDivElement>(null);
  const [pupil, setPupil] = useState({ x: 0, y: 0 });
  const [blink, setBlink] = useState(false);

  useEffect(() => {
    const handleMove = (e: MouseEvent) => {
      if (!eyeRef.current) return;
      const rect = eyeRef.current.getBoundingClientRect();
      const cx = rect.left + rect.width / 2;
      const cy = rect.top + rect.height / 2;
      const dx = e.clientX - cx;
      const dy = e.clientY - cy;
      const angle = Math.atan2(dy, dx);
      const dist = Math.min(Math.hypot(dx, dy), size * 0.22);
      setPupil({ x: Math.cos(angle) * dist, y: Math.sin(angle) * dist });
    };
    window.addEventListener('mousemove', handleMove);
    return () => window.removeEventListener('mousemove', handleMove);
  }, [size]);

  useEffect(() => {
    const blinkLoop = () => {
      const wait = 2500 + Math.random() * 3000 + delay;
      setTimeout(() => {
        setBlink(true);
        setTimeout(() => { setBlink(false); blinkLoop(); }, 160);
      }, wait);
    };
    blinkLoop();
  }, [delay]);

  const r = size / 2;
  const pupilR = size * 0.18;
  const irisR = size * 0.32;

  return (
    <div style={{ position: 'relative', width: size, height: size + 10, flexShrink: 0 }}>
      {/* Lashes above */}
      <div style={{
        position: 'absolute',
        top: 0,
        left: '50%',
        transform: 'translateX(-50%)',
        display: 'flex',
        gap: '5px',
        zIndex: 20,
      }}>
        {[...Array(5)].map((_, i) => (
          <div key={i} style={{
            width: 2,
            height: 7 + (i === 2 ? 3 : i === 1 || i === 3 ? 2 : 0),
            background: '#1e293b',
            borderRadius: 2,
            transform: `rotate(${(i - 2) * 12}deg)`,
            transformOrigin: 'bottom center',
          }} />
        ))}
      </div>

      {/* Eyeball */}
      <div
        ref={eyeRef}
        className="absolute rounded-full bg-white"
        style={{
          width: size,
          height: size,
          bottom: 0,
          left: 0,
          border: '2px solid #e2e8f0',
          boxShadow: '0 4px 20px rgba(16,185,129,0.15), 0 2px 8px rgba(0,0,0,0.08), inset 0 1px 3px rgba(0,0,0,0.05)',
        }}
      >
        {/* iris */}
        <div
          className="absolute rounded-full"
          style={{
            width: irisR * 2,
            height: irisR * 2,
            top: r - irisR + pupil.y,
            left: r - irisR + pupil.x,
            background: 'radial-gradient(circle at 35% 35%, #6ee7b7, #10b981 50%, #065f46)',
            transition: 'top 0.06s ease-out, left 0.06s ease-out',
            boxShadow: '0 0 8px rgba(16,185,129,0.4)',
          }}
        >
          {/* pupil */}
          <div
            className="absolute rounded-full bg-slate-900"
            style={{
              width: pupilR * 2,
              height: pupilR * 2,
              top: irisR - pupilR,
              left: irisR - pupilR,
            }}
          >
            {/* main highlight */}
            <div
              className="absolute rounded-full bg-white"
              style={{ width: pupilR * 0.5, height: pupilR * 0.5, top: '12%', left: '18%' }}
            />
            {/* small secondary highlight */}
            <div
              className="absolute rounded-full bg-white/60"
              style={{ width: pupilR * 0.25, height: pupilR * 0.25, bottom: '18%', right: '18%' }}
            />
          </div>
        </div>

        {/* eyelid blink */}
        <div
          className="absolute inset-0 rounded-full bg-slate-100 origin-top"
          style={{
            transform: blink ? 'scaleY(1)' : 'scaleY(0)',
            transition: 'transform 0.08s ease-in-out',
            zIndex: 10,
          }}
        />
      </div>
    </div>
  );
};

// ── Animated counter ──────────────────────────────────────────────────────────
const useCounter = (target: number, duration = 1800) => {
  const [val, setVal] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const started = useRef(false);
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !started.current) {
          started.current = true;
          let start = 0;
          const steps = 60;
          const inc = target / steps;
          const timer = setInterval(() => {
            start += inc;
            if (start >= target) { setVal(target); clearInterval(timer); }
            else setVal(Math.floor(start));
          }, duration / steps);
        }
      },
      { threshold: 0.5 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [target, duration]);
  return { val, ref };
};

// ── Source Pill ───────────────────────────────────────────────────────────────
const SourcePill = ({
  icon, label, pct, delay,
}: { icon: string; label: string; pct: string; delay: number }) => (
  <div
    className="flex flex-col items-center gap-2 bg-white rounded-2xl px-4 py-4 border border-slate-100 hover:-translate-y-1 hover:border-emerald-200 hover:shadow-md transition-all duration-300 cursor-default"
    style={{ animation: `fadeSlideUp 0.7s ease both ${delay}s` }}
  >
    <div className="w-10 h-10 rounded-xl bg-slate-50 border border-slate-100 flex items-center justify-center text-emerald-600 text-lg">
      <i className={icon} />
    </div>
    <p className="text-xs font-bold text-slate-700 leading-none">{label}</p>
    <p className="text-xs text-slate-400">{pct}</p>
  </div>
);

// ── Main HeroSection ──────────────────────────────────────────────────────────
const HeroSection = () => {
  const { val: counted, ref: statRef } = useCounter(78);
  const [mousePos, setMousePos] = useState({ x: 0.5, y: 0.5 });

  const handleMouseMove = useCallback((e: React.MouseEvent<HTMLElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setMousePos({
      x: (e.clientX - rect.left) / rect.width,
      y: (e.clientY - rect.top) / rect.height,
    });
  }, []);

  const sources = [
    { icon: 'ri-flight-takeoff-line', label: 'Aviation',    pct: '2.5%',  delay: 0.6 },
    { icon: 'ri-building-2-line',     label: 'Industry',    pct: '21%',   delay: 0.72 },
    { icon: 'ri-car-line',            label: 'Transport',   pct: '16%',   delay: 0.84 },
    { icon: 'ri-server-line',         label: 'Digital',     pct: '4%',    delay: 0.96 },
    { icon: 'ri-home-3-line',         label: 'Buildings',   pct: '13%',   delay: 1.08 },
    { icon: 'ri-seedling-line',       label: 'Agriculture', pct: '18%',   delay: 1.20 },
  ];

  return (
    <section
      id="hero"
      className="relative min-h-screen bg-white flex flex-col items-center justify-center overflow-hidden pt-24 pb-16"
      onMouseMove={handleMouseMove}
    >
      <style>{`
        @keyframes fadeSlideUp {
          from { opacity: 0; transform: translateY(24px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes pulseGlow {
          0%, 100% { box-shadow: 0 0 0 0 rgba(16,185,129,0.3); }
          50%       { box-shadow: 0 0 0 16px rgba(16,185,129,0); }
        }
        @keyframes spinSlow {
          from { transform: rotate(0deg); }
          to   { transform: rotate(360deg); }
        }
        @keyframes bounceY {
          0%, 100% { transform: translateY(0) translateX(-50%); }
          50%       { transform: translateY(-10px) translateX(-50%); }
        }
        @keyframes gradientShift {
          0%, 100% { background-position: 0% 50%; }
          50%       { background-position: 100% 50%; }
        }
        @keyframes floatDot {
          0%, 100% { transform: translateY(0); opacity: 0.4; }
          50%       { transform: translateY(-18px); opacity: 0.15; }
        }
        .gradient-text {
          background: linear-gradient(135deg, #059669, #10b981, #34d399, #059669);
          background-size: 300% 300%;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          animation: gradientShift 4s ease infinite;
        }
      `}</style>

      {/* ── Subtle dot grid background ── */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: 'radial-gradient(circle, #d1fae5 1px, transparent 1px)',
          backgroundSize: '36px 36px',
          transform: `translate(${(mousePos.x - 0.5) * -8}px, ${(mousePos.y - 0.5) * -8}px)`,
          transition: 'transform 0.4s ease-out',
          opacity: 0.6,
        }}
      />

      {/* ── Soft radial glow center ── */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse 70% 60% at 50% 40%, rgba(209,250,229,0.5) 0%, transparent 70%)',
        }}
      />

      {/* ── Badge ── */}
      <div
        className="relative z-10 mb-8"
        style={{ animation: 'fadeSlideUp 0.6s ease both 0.1s' }}
      >
        <span className="inline-flex items-center gap-2 text-xs font-bold tracking-widest text-emerald-700 uppercase bg-emerald-50 border border-emerald-200 px-5 py-2 rounded-full">
          <i className="ri-leaf-line" /> India&apos;s Carbon Intelligence Collective
        </span>
      </div>

      {/* ── EYES + HEADLINE ── */}
      <div
        className="relative z-10 flex flex-col items-center gap-0 mb-6"
        style={{ animation: 'fadeSlideUp 0.7s ease both 0.2s' }}
      >
        {/* Eyes row — close together, no text between */}
        <div className="flex items-end justify-center gap-2 mb-3">
          <Eye size={90} delay={0} />
          <Eye size={90} delay={400} />
        </div>

        {/* Tagline below eyes */}
        <p className="text-xs font-black tracking-[0.25em] uppercase text-emerald-600 mb-5 flex items-center gap-2">
          <span className="inline-block w-8 h-px bg-emerald-300" />
          Every ton of CO₂ has nowhere to hide
          <span className="inline-block w-8 h-px bg-emerald-300" />
        </p>

        {/* Main headline */}
        <h1 className="text-5xl md:text-7xl font-black text-slate-900 leading-tight tracking-tight text-center max-w-4xl px-4">
          Engineering a{' '}
          <span className="gradient-text">Cooler Planet</span>
          <br />
          <span className="text-2xl md:text-3xl font-semibold text-slate-400 mt-2 block">
            One Metric at a Time
          </span>
        </h1>
      </div>

      {/* ── Sub-headline ── */}
      <p
        className="relative z-10 text-base md:text-lg text-slate-500 max-w-2xl mx-auto text-center px-6 leading-relaxed mb-10"
        style={{ animation: 'fadeSlideUp 0.7s ease both 0.35s' }}
      >
        <strong className="text-emerald-600">Green Occasion</strong> is an Indian non-profit collective of volunteers building open standards and tech solutions to{' '}
        <span className="text-slate-800 font-semibold">measure, track, and eliminate</span> global carbon emissions.
      </p>

      {/* ── CTA Buttons ── */}
      <div
        className="relative z-10 flex flex-col sm:flex-row items-center justify-center gap-4 mb-16"
        style={{ animation: 'fadeSlideUp 0.7s ease both 0.45s' }}
      >
        <button
          onClick={() => scrollToSection('what-we-do')}
          className="group relative px-8 py-4 bg-emerald-600 hover:bg-emerald-500 text-white text-sm font-black rounded-full transition-all hover:scale-105 whitespace-nowrap cursor-pointer overflow-hidden"
          style={{ animation: 'pulseGlow 3s ease-in-out infinite' }}
        >
          <div className="absolute inset-0 bg-white/10 -translate-x-full group-hover:translate-x-full transition-transform duration-500 skew-x-12" />
          <span className="relative flex items-center gap-2">
            <i className="ri-rocket-line" /> Explore Our Solutions
          </span>
        </button>
        <button
          onClick={() => scrollToSection('get-involved')}
          className="px-8 py-4 border-2 border-slate-200 text-slate-700 text-sm font-bold rounded-full hover:border-emerald-400 hover:text-emerald-600 transition-all hover:scale-105 whitespace-nowrap cursor-pointer flex items-center gap-2"
        >
          <i className="ri-team-line" /> Join as a Volunteer
        </button>
      </div>

      {/* ── Emission Sources Grid ── */}
      <div
        className="relative z-10 w-full max-w-4xl mx-auto px-6 mb-12"
        style={{ animation: 'fadeSlideUp 0.7s ease both 0.5s' }}
      >
        <p className="text-center text-xs font-bold text-slate-400 uppercase tracking-widest mb-5">
          Carbon Emission Sources We Track &amp; Measure
        </p>
        <div className="grid grid-cols-3 md:grid-cols-6 gap-3">
          {sources.map((s) => (
            <SourcePill key={s.label} {...s} />
          ))}
        </div>
      </div>

      {/* ── Stat Banner ── */}
      <div
        ref={statRef}
        className="relative z-10 w-full max-w-3xl mx-auto px-6"
        style={{ animation: 'fadeSlideUp 0.7s ease both 0.65s' }}
      >
        <div className="relative rounded-3xl overflow-hidden border border-slate-100 bg-slate-50 px-8 py-7 flex flex-col md:flex-row items-center gap-6">
          {/* spinning ring decoration */}
          <div className="absolute -top-6 -right-6 pointer-events-none" style={{ width: 100, height: 100 }}>
            {/* outer ring */}
            <div
              className="absolute inset-0 rounded-full border-2 border-dashed border-emerald-300"
              style={{ animation: 'spinSlow 12s linear infinite' }}
            />
            {/* middle ring */}
            <div
              className="absolute rounded-full border-2 border-dotted border-teal-400/60"
              style={{ inset: 12, animation: 'spinSlow 8s linear infinite reverse' }}
            />
            {/* inner filled circle */}
            <div
              className="absolute rounded-full bg-emerald-100 flex items-center justify-center"
              style={{ inset: 26 }}
            >
              <i className="ri-leaf-line text-emerald-600 text-sm" />
            </div>
            {/* orbit dot */}
            <div
              className="absolute w-2.5 h-2.5 rounded-full bg-emerald-400 shadow-md"
              style={{
                top: '50%',
                left: '50%',
                marginTop: -5,
                marginLeft: -5,
                transformOrigin: '5px 5px',
                transform: 'translateX(44px)',
                animation: 'spinSlow 12s linear infinite',
              }}
            />
          </div>

          <div className="flex items-end gap-1 shrink-0">
            <span className="text-7xl font-black text-emerald-600 tabular-nums leading-none">{counted}</span>
            <span className="text-4xl font-black text-emerald-600 mb-1">%</span>
          </div>

          <div className="hidden md:block w-px h-16 bg-slate-200" />

          <div className="flex-1 text-center md:text-left">
            <p className="text-slate-800 text-xl font-bold leading-snug">
              of global emissions could be reduced
            </p>
            <p className="text-slate-500 text-sm mt-1">
              with <span className="text-emerald-600 font-semibold">better measurement</span> &amp; data-driven action — yet most go completely untracked today.
            </p>
            <div className="mt-4 h-1.5 bg-slate-200 rounded-full overflow-hidden">
              <div
                className="h-full rounded-full transition-all duration-1500"
                style={{
                  width: `${counted}%`,
                  background: 'linear-gradient(90deg, #34d399, #059669)',
                }}
              />
            </div>
          </div>

          <div className="shrink-0 flex flex-col items-center gap-1">
            <div className="w-14 h-14 rounded-2xl bg-emerald-50 border border-emerald-100 flex items-center justify-center">
              <i className="ri-bar-chart-grouped-line text-2xl text-emerald-600" />
            </div>
            <span className="text-xs text-slate-400 font-semibold">Green Occasion</span>
          </div>
        </div>
      </div>

      {/* ── Scroll indicator ── */}
      <button
        onClick={() => scrollToSection('north-star')}
        className="absolute bottom-8 left-1/2 cursor-pointer"
        style={{ animation: 'bounceY 2s ease-in-out infinite' }}
      >
        <div className="w-10 h-10 rounded-full border-2 border-slate-200 text-slate-400 hover:border-emerald-400 hover:text-emerald-500 transition-all flex items-center justify-center">
          <i className="ri-arrow-down-line text-xl" />
        </div>
      </button>
    </section>
  );
};

export default HeroSection;
