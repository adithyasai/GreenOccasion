import { useEffect, useRef, useState } from 'react';

const steps = [
  { num: 1, label: 'Measure', icon: 'ri-ruler-line', color: 'bg-teal-600', desc: 'Capture every emission source with precision' },
  { num: 2, label: 'Analyze', icon: 'ri-bar-chart-2-line', color: 'bg-emerald-600', desc: 'Turn raw data into actionable insight' },
  { num: 3, label: 'Optimize', icon: 'ri-settings-3-line', color: 'bg-green-600', desc: 'Smart algorithms find the fastest path to less' },
  { num: 4, label: 'Reduce', icon: 'ri-leaf-line', color: 'bg-lime-600', desc: 'Real-world cuts, verified and reported' },
];

const pillar1Features = [
  { icon: 'ri-flight-takeoff-line', label: 'Travel & transportation calculators' },
  { icon: 'ri-server-line', label: 'Digital infrastructure emission tracking' },
  { icon: 'ri-file-chart-line', label: 'Industry-specific measurement standards' },
];

const pillar2Features = [
  { icon: 'ri-flashlight-line', label: 'Energy optimization algorithms' },
  { icon: 'ri-cpu-line', label: 'Smart grid integration solutions' },
  { icon: 'ri-robot-line', label: 'Automated emission reduction systems' },
];

function AnimatedCounter({ target, suffix = '' }: { target: number; suffix?: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const started = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true;
          let start = 0;
          const duration = 1800;
          const step = (timestamp: number) => {
            if (!start) start = timestamp;
            const progress = Math.min((timestamp - start) / duration, 1);
            const eased = 1 - Math.pow(1 - progress, 3);
            setCount(Math.floor(eased * target));
            if (progress < 1) requestAnimationFrame(step);
          };
          requestAnimationFrame(step);
        }
      },
      { threshold: 0.5 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [target]);

  return <span ref={ref}>{count}{suffix}</span>;
}

function PillarCard({
  pillar,
  title,
  subtitle,
  description,
  outcome,
  outcomeDetail,
  features,
  accentColor,
  iconBg,
  iconColor,
  outcomeBg,
  checkBg,
  checkColor,
  borderColor,
  icon,
}: {
  pillar: string;
  title: string;
  subtitle: string;
  description: string;
  outcome: string;
  outcomeDetail: string;
  features: { icon: string; label: string }[];
  accentColor: string;
  iconBg: string;
  iconColor: string;
  outcomeBg: string;
  checkBg: string;
  checkColor: string;
  borderColor: string;
  icon: string;
}) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      className="relative group cursor-default"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Animated border glow */}
      <div
        className={`absolute inset-0 rounded-3xl transition-all duration-500 ${borderColor}`}
        style={{
          background: hovered
            ? undefined
            : undefined,
          boxShadow: hovered ? `0 0 0 2px currentColor` : '0 0 0 1px #e5e7eb',
        }}
      />

      <div className="relative bg-white rounded-3xl p-10 border border-gray-100 shadow-sm hover:shadow-xl transition-shadow duration-500 overflow-hidden">
        {/* Subtle background pattern */}
        <div
          className="absolute top-0 right-0 w-48 h-48 rounded-full opacity-5 -translate-y-12 translate-x-12 transition-all duration-500"
          style={{ background: hovered ? 'currentColor' : 'transparent' }}
        />
        <div className={`absolute top-0 right-0 w-48 h-48 rounded-full opacity-[0.04] -translate-y-12 translate-x-12 ${iconBg}`} />

        {/* Header */}
        <div className="flex items-start justify-between mb-8">
          <div className="flex items-start space-x-4">
            <div className={`w-14 h-14 flex items-center justify-center ${iconBg} rounded-2xl flex-shrink-0 transition-transform duration-300 group-hover:scale-110`}>
              <i className={`${icon} text-2xl ${iconColor}`} />
            </div>
            <div>
              <div className={`text-xs font-bold tracking-widest uppercase ${iconColor} mb-1`}>{pillar}</div>
              <h3 className="text-2xl font-bold text-gray-900">{title}</h3>
            </div>
          </div>
          <div className={`w-8 h-8 flex items-center justify-center rounded-full ${iconBg} opacity-60`}>
            <i className={`ri-arrow-right-up-line text-sm ${iconColor}`} />
          </div>
        </div>

        {/* Divider */}
        <div className={`h-px w-full ${outcomeBg} mb-8`} />

        {/* Subtitle + description */}
        <h4 className="text-lg font-bold text-gray-900 mb-3">{subtitle}</h4>
        <p className="text-sm text-gray-600 leading-relaxed mb-8">{description}</p>

        {/* Outcome box */}
        <div className={`${outcomeBg} rounded-2xl p-5 mb-8 border border-gray-100`}>
          <div className="flex items-center space-x-2 mb-2">
            <div className={`w-5 h-5 flex items-center justify-center ${accentColor} rounded-full`}>
              <i className="ri-sparkling-line text-xs text-white" />
            </div>
            <span className="text-xs font-bold text-gray-500 uppercase tracking-widest">Key Outcome</span>
          </div>
          <p className="text-sm font-semibold text-gray-800">{outcome}</p>
          <p className="text-xs text-gray-500 mt-1">{outcomeDetail}</p>
        </div>

        {/* Features */}
        <div className="space-y-3">
          {features.map((f) => (
            <div key={f.label} className="flex items-center space-x-3 group/item">
              <div className={`w-8 h-8 flex items-center justify-center ${checkBg} rounded-xl flex-shrink-0 transition-transform duration-200 group-hover/item:scale-110`}>
                <i className={`${f.icon} text-sm ${checkColor}`} />
              </div>
              <span className="text-sm text-gray-700">{f.label}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function WhatWeDoSection() {
  const [activeStep, setActiveStep] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % steps.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="what-we-do" className="py-28 bg-white">
      <div className="max-w-7xl mx-auto px-6">

        {/* Section header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center space-x-2 px-4 py-2 bg-emerald-50 border border-emerald-200 text-emerald-700 rounded-full text-xs font-bold tracking-widest uppercase mb-5">
            <i className="ri-focus-3-line text-sm" />
            <span>What We Do</span>
          </div>
          <h2 className="text-5xl font-bold text-gray-900 mb-5 leading-tight">
            Two Pillars.<br />
            <span className="text-emerald-600">One Mission.</span>
          </h2>
          <p className="text-base text-gray-500 max-w-2xl mx-auto leading-relaxed">
            We tackle the climate crisis from two angles — understanding the problem through precise measurement, and solving it through innovative technology.
          </p>
        </div>

        {/* Stats row */}
        <div className="grid grid-cols-3 gap-6 max-w-3xl mx-auto mb-20">
          {[
            { value: 78, suffix: '%', label: 'Emission sources tracked', icon: 'ri-pie-chart-line' },
            { value: 120, suffix: '+', label: 'Organizations onboarded', icon: 'ri-building-line' },
            { value: 40, suffix: 'k', label: 'Tons CO₂ reduced', icon: 'ri-leaf-line' },
          ].map((stat) => (
            <div key={stat.label} className="text-center p-6 rounded-2xl bg-gray-50 border border-gray-100">
              <div className="w-10 h-10 flex items-center justify-center bg-emerald-100 rounded-xl mx-auto mb-3">
                <i className={`${stat.icon} text-lg text-emerald-600`} />
              </div>
              <div className="text-3xl font-bold text-gray-900 mb-1">
                <AnimatedCounter target={stat.value} suffix={stat.suffix} />
              </div>
              <div className="text-xs text-gray-500">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Pillar cards */}
        <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto mb-20">
          <PillarCard
            pillar="Pillar 1"
            title="Carbon Awareness"
            subtitle="Measuring the Invisible"
            description="We are developing global standards and digital platforms that allow individuals and organizations to calculate their carbon metrics with precision. From travel emissions to digital infrastructure, we make the invisible visible."
            outcome="Transparency & Data"
            outcomeDetail="Empowering decision-makers with accurate, real-time carbon footprint information"
            features={pillar1Features}
            accentColor="bg-teal-600"
            iconBg="bg-teal-50"
            iconColor="text-teal-600"
            outcomeBg="bg-teal-50"
            checkBg="bg-teal-50"
            checkColor="text-teal-600"
            borderColor="border-teal-200"
            icon="ri-bar-chart-box-line"
          />
          <PillarCard
            pillar="Pillar 2"
            title="Emission Reduction"
            subtitle="Coding the Solution"
            description="Measurement is just the start. We build and deploy proprietary tech solutions designed to optimize energy use and cut emissions at the source. Our tools turn data into action."
            outcome="Real-world Impact"
            outcomeDetail="Tangible reduction in carbon emissions through automated optimization and smart technology"
            features={pillar2Features}
            accentColor="bg-emerald-600"
            iconBg="bg-emerald-50"
            iconColor="text-emerald-600"
            outcomeBg="bg-emerald-50"
            checkBg="bg-emerald-50"
            checkColor="text-emerald-600"
            borderColor="border-emerald-200"
            icon="ri-code-box-line"
          />
        </div>

        {/* The Complete Cycle — animated stepper */}
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-10">
            <h3 className="text-2xl font-bold text-gray-900">The Complete Cycle</h3>
            <p className="text-sm text-gray-500 mt-2">Every step feeds the next — a continuous loop of improvement</p>
          </div>

          {/* Step indicators */}
          <div className="relative flex items-start justify-between">
            {/* Connecting line */}
            <div className="absolute top-6 left-0 right-0 h-px bg-gray-200 z-0" />
            <div
              className="absolute top-6 left-0 h-px bg-emerald-500 z-0 transition-all duration-700 ease-in-out"
              style={{ width: `${(activeStep / (steps.length - 1)) * 100}%` }}
            />

            {steps.map((step, i) => (
              <div
                key={step.num}
                className="relative z-10 flex flex-col items-center cursor-pointer group"
                style={{ width: `${100 / steps.length}%` }}
                onClick={() => setActiveStep(i)}
              >
                <div
                  className={`w-12 h-12 flex items-center justify-center rounded-full border-2 transition-all duration-500 mb-4 ${
                    i <= activeStep
                      ? 'bg-emerald-600 border-emerald-600 text-white shadow-lg shadow-emerald-200'
                      : 'bg-white border-gray-200 text-gray-400'
                  }`}
                >
                  <i className={`${step.icon} text-lg`} />
                </div>
                <span className={`text-sm font-bold transition-colors duration-300 ${i <= activeStep ? 'text-gray-900' : 'text-gray-400'}`}>
                  {step.label}
                </span>
                <span className={`text-xs text-center mt-1 max-w-[120px] transition-colors duration-300 ${i <= activeStep ? 'text-gray-500' : 'text-gray-300'}`}>
                  {step.desc}
                </span>
              </div>
            ))}
          </div>

          {/* Active step detail card */}
          <div className="mt-10 bg-gradient-to-r from-teal-50 to-emerald-50 rounded-3xl p-8 border border-emerald-100 transition-all duration-500">
            <div className="flex items-center space-x-4">
              <div className="w-14 h-14 flex items-center justify-center bg-emerald-600 rounded-2xl flex-shrink-0">
                <i className={`${steps[activeStep].icon} text-2xl text-white`} />
              </div>
              <div>
                <div className="text-xs font-bold text-emerald-600 uppercase tracking-widest mb-1">Step {steps[activeStep].num} of {steps.length}</div>
                <h4 className="text-xl font-bold text-gray-900">{steps[activeStep].label}</h4>
                <p className="text-sm text-gray-600 mt-1">{steps[activeStep].desc}</p>
              </div>
              <div className="ml-auto flex space-x-2">
                {steps.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setActiveStep(i)}
                    className={`w-2 h-2 rounded-full transition-all duration-300 cursor-pointer ${i === activeStep ? 'bg-emerald-600 w-6' : 'bg-gray-300'}`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
