const Index = () => {
  return (
    <div className="min-h-screen bg-[#1a0a0a] text-white font-sans overflow-auto">
      {/* Background gradient overlay */}
      <div className="fixed inset-0 pointer-events-none" style={{
        background: 'radial-gradient(ellipse at 60% 40%, rgba(180,30,30,0.15) 0%, transparent 70%)'
      }} />

      <div className="relative z-10 w-full max-w-[1200px] mx-auto px-8 py-10">
        {/* Title */}
        <h1 className="text-2xl font-bold text-center mb-10 tracking-wide">
          Схема интеграции CI/CD с PT BlackBox
        </h1>

        {/* Main diagram area */}
        <div className="relative" style={{ height: 520 }}>
          {/* SVG arrows layer */}
          <svg className="absolute inset-0 w-full h-full" style={{ zIndex: 0 }}>
            <line x1="280" y1="80" x2="430" y2="80" stroke="#fff" strokeWidth="2" strokeDasharray="8 4" />
            <line x1="262" y1="220" x2="788" y2="220" stroke="#fff" strokeWidth="2" strokeDasharray="8 4" />
            <line x1="800" y1="80" x2="680" y2="80" stroke="#fff" strokeWidth="2" strokeDasharray="8 4" />
            <line x1="280" y1="310" x2="430" y2="310" stroke="#fff" strokeWidth="2" strokeDasharray="8 4" />
            <line x1="800" y1="310" x2="680" y2="310" stroke="#fff" strokeWidth="2" strokeDasharray="8 4" />
          </svg>

          {/* Number badges on arrows */}
          <NumberBadge n={1} x={350} y={68} />
          <NumberBadge n={2} x={508} y={206} />
          <NumberBadge n={3} x={730} y={68} />
          <NumberBadge n={4} x={350} y={298} />
          <NumberBadge n={5} x={730} y={298} />
          <NumberBadge n={6} x={858} y={418} />
          <NumberBadge n={6} x={988} y={418} />

          {/* CI/CD Block */}
          <div className="absolute rounded-2xl border border-white/20 bg-white/5 backdrop-blur-sm flex flex-col items-center justify-center gap-3"
            style={{ left: 40, top: 30, width: 220, height: 300 }}>
            <span className="text-xl font-bold tracking-wider">CI / CD</span>
            {/* GitLab icon */}
            <svg width="60" height="56" viewBox="0 0 380 360">
              <path d="M190 350L30 220L60 120L100 220H280L320 120L350 220Z" fill="#e24329" />
              <path d="M190 350L100 220H280Z" fill="#fc6d26" />
              <path d="M30 220L10 280L100 220Z" fill="#fca326" />
              <path d="M350 220L370 280L280 220Z" fill="#fca326" />
              <path d="M60 120L30 220L100 220Z" fill="#e24329" />
              <path d="M320 120L350 220L280 220Z" fill="#e24329" />
            </svg>
            {/* Jenkins icon */}
            <div className="w-14 h-14 rounded-full bg-[#d33833] flex items-center justify-center">
              <span className="text-white font-bold text-lg">J</span>
            </div>
          </div>

          {/* Тестовый контур */}
          <div className="absolute rounded-xl border border-white/30 bg-white/5 backdrop-blur-sm p-4"
            style={{ left: 440, top: 20, width: 230, height: 170 }}>
            <span className="text-sm font-semibold text-white/80 block mb-3">Тестовый контур</span>
            <div className="space-y-2">
              <div className="rounded-lg bg-white/10 border border-white/20 px-4 py-2 text-sm text-center">Microservice</div>
              <div className="rounded-lg bg-white/10 border border-white/20 px-4 py-2 text-sm text-center">Web application</div>
            </div>
          </div>

          {/* Продуктивный контур */}
          <div className="absolute rounded-xl border border-white/30 bg-white/5 backdrop-blur-sm p-4"
            style={{ left: 440, top: 250, width: 230, height: 170 }}>
            <span className="text-sm font-semibold text-white/80 block mb-3">Продуктивный контур</span>
            <div className="space-y-2">
              <div className="rounded-lg bg-white/10 border border-white/20 px-4 py-2 text-sm text-center">Microservice</div>
              <div className="rounded-lg bg-white/10 border border-white/20 px-4 py-2 text-sm text-center">Web application</div>
            </div>
          </div>

          {/* PT BlackBox */}
          <div className="absolute rounded-xl border border-white/30 bg-white/5 backdrop-blur-sm p-5"
            style={{ left: 790, top: 20, width: 260, height: 360 }}>
            <div className="flex items-center gap-3 mb-5">
              <div className="w-10 h-10 rounded-full bg-[#d33833] flex items-center justify-center">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5">
                  <path d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  <path d="M9 12l2 2 4-4" />
                </svg>
              </div>
              <span className="font-bold text-lg">PT BlackBox</span>
            </div>
            <div className="space-y-3">
              <div className="rounded-lg bg-white/10 border border-white/20 px-4 py-3 text-sm text-center font-medium">DAST</div>
              <div className="rounded-lg bg-white/10 border border-white/20 px-4 py-3 text-sm text-center">Сигнатурный анализ</div>
              <div className="rounded-lg bg-white/10 border border-white/20 px-4 py-3 text-sm text-center">Эвристический анализ</div>
            </div>
          </div>

          {/* Разработчик */}
          <div className="absolute flex flex-col items-center gap-1" style={{ left: 840, top: 440 }}>
            <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.5">
              <circle cx="12" cy="7" r="4" />
              <path d="M5.5 21c0-4.5 3-7 6.5-7s6.5 2.5 6.5 7" />
            </svg>
            <span className="text-xs text-white/80 mt-1">Разработчик</span>
          </div>

          {/* Офицер ИБ */}
          <div className="absolute flex flex-col items-center gap-1" style={{ left: 970, top: 440 }}>
            <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.5">
              <circle cx="12" cy="7" r="4" />
              <path d="M5.5 21c0-4.5 3-7 6.5-7s6.5 2.5 6.5 7" />
            </svg>
            <span className="text-xs text-white/80 mt-1">Офицер ИБ</span>
          </div>
        </div>

        {/* Legend */}
        <div className="mt-4 space-y-1.5 text-sm text-white/70">
          <LegendItem n={1} text="Развертывание приложений и микросервисов в тестовом контуре" />
          <LegendItem n={2} text="Интеграция с DAST" />
          <LegendItem n={3} text="Динамический анализ приложений и микросервисов в тестовом контуре" />
          <LegendItem n={4} text="Разворачивание приложений и микросервисов в продуктивном контуре" />
          <LegendItem n={5} text="Динамический анализ приложений и микросервисов в продуктивном контуре" />
          <LegendItem n={6} text="Триаж уязвимостей и работа с отчетами" />
        </div>
      </div>
    </div>
  );
};

const NumberBadge = ({ n, x, y }: { n: number; x: number; y: number }) => (
  <div
    className="absolute w-7 h-7 rounded-full bg-[#d33833] flex items-center justify-center text-white text-xs font-bold shadow-lg"
    style={{ left: x, top: y, zIndex: 2 }}
  >
    {n}
  </div>
);

const LegendItem = ({ n, text }: { n: number; text: string }) => (
  <div className="flex items-center gap-3">
    <span className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-[#d33833] text-[10px] font-bold text-white flex-shrink-0">
      {n}
    </span>
    <span>{text}</span>
  </div>
);

export default Index;
