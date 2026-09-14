import { useState, useEffect, useRef, useCallback } from 'react';
import {
  Satellite,
  MapPin,
  Loader2,
  ScanLine,
  Layers,
  Sprout,
  CloudRain,
  AlertTriangle,
  CheckCircle2,
  Crosshair,
  Radar,
} from 'lucide-react';

type ScanStatus = 'idle' | 'scanning' | 'complete';

type Parcel = {
  id: number;
  x: number;
  y: number;
  w: number;
  h: number;
  crop: string;
  health: 'healthy' | 'watch' | 'alert';
  area: number;
};

const nigerianStates: Record<string, string[]> = {
  'Ekiti State': ['Ado-Ekiti', 'Ikere', 'Oye', 'Irepodun/Ifelodun', 'Efon', 'Gbonyin', 'Ekiti-East', 'Ekiti-South-West', 'Emure', 'Ido/Osi', 'Ijero', 'Moba', 'Ise/Orun'],
  'Oyo State': ['Ibadan-North', 'Ibadan-South-West', 'Ogbomoso-North', 'Oyo-East', 'Iseyin', 'Atiba', 'Saki-East', 'Afijio', 'Akinyele', 'Egbeda', 'Lagelu', 'Oluyole'],
  'Kano State': ['Kano Municipal', 'Nassarawa', 'Dala', 'Fagge', 'Tarauni', 'Gwale', 'Kumbotso', 'Ungogo', 'Wudil', 'Bichi', 'Dawakin-Tofa', 'Gezawa'],
  'Akwa Ibom State': ['Uyo', 'Nsit-Atai', 'Ibesikpo-Asutan', 'Uruan', 'Itu', 'Ikot-Ekpene', 'Essien-Udim', 'Oron', 'Eket', 'Onna', 'Abak', 'Etinan'],
  'Lagos State': ['Ikeja', 'Surulere', 'Eti-Osa', 'Lagos-Island', 'Ikorodu', 'Badagry', 'Epe', 'Alimosho', 'Agege', 'Ifako-Ijaiye', 'Kosofe', 'Shomolu'],
  'Kaduna State': ['Kaduna-North', 'Kaduna-South', 'Chikun', 'Igabi', 'Zaria', 'Kachia', 'Kafanchan', 'Makarfi', 'Soba', 'Giwa', 'Sabon-Gari'],
  'Enugu State': ['Enugu-North', 'Enugu-South', 'Nsukka', 'Udi', 'Agbani', 'Awgu', 'Oji-River', 'Ezeagu', 'Igbo-Etiti', 'Isi-Uzo'],
  'Delta State': ['Oshimili-South', 'Oshimili-North', 'Bomadi', 'Burutu', 'Ughelli-North', 'Ughelli-South', 'Ethiope-East', 'Ethiope-West', 'Sapele', 'Okpe', 'Uvwie'],
  'Rivers State': ['Port-Harcourt', 'Obio-Akpor', 'Eleme', 'Ikwerre', 'Etche', 'Okrika', 'Oyigbo', 'Khana', 'Gokana', 'Tai', 'Ahoada-East'],
  'Benue State': ['Makurdi', 'Gboko', 'Otukpo', 'Katsina-Ala', 'Vandeikya', 'Konshisha', 'Ushongo', 'Gwer-East', 'Gwer-West', 'Ogbadibo'],
};

const villagesByLGA: Record<string, string[]> = {
  'Ado-Ekiti': ['Ilokun', 'Adebayo', 'Moferere', 'Atikankan', 'Okeyinmi', 'Irona', 'Ajebandele', 'Bolorunduro'],
  'Ikere': ['Uge', 'Odo', 'Ise', 'Oke-Oko', 'Ikere-Ekiti Town', 'Alade', 'Idolofin'],
  'Oye': ['Iludun', 'Oye-Ekiti', 'Itapa', 'Odo-Ora', 'Ayetoro', 'Isaba', 'Ire'],
  'Irepodun/Ifelodun': ['Igede-Ekiti', 'Egosi', 'Omu', 'Ilawe', 'Awo', 'Ido'],
  'Ibadan-North': ['Bodija', 'Mokola', 'Agbowo', 'Sango', 'Ashi', 'Inalende', 'Yemetu'],
  'Ibadan-South-West': ['Challenge', 'Felele', 'Odo-Ona', 'Apata', 'Akinleye', 'Awotan'],
  'Kano Municipal': ['Sabo-Gari', 'Fagge', 'Koki', 'Gyadi-Gyadi', 'Alfindiki', 'Yan-Alawa'],
  'Uyo': ['Ikot-Ebong', 'Nung-Udoe', 'Ekit-Itam', 'Ibiaku', 'Oku', 'Use-Offot', 'Anua'],
  'Ikeja': ['Oregun', 'Opebi', 'Allen', 'Alausa', 'Agidingbi', 'Ojota', 'Maryland'],
  'Port-Harcourt': ['Borokiri', 'Diobu', 'Elekahia', 'Rumuomasi', 'Ogbunabali', 'Mile-One'],
  'Makurdi': ['Wadata', 'Wurukum', 'High-Level', 'North-Bank', 'Kanshio', 'Naka-Road'],
  'Nsukka': ['Obukpa', 'Ede-Oballa', 'Opi', 'Lejja', 'Eha-Alumona', 'Ibagwa'],
};

const crops = ['Maize', 'Cassava', 'Yam', 'Rice', 'Sorghum', 'Millet', 'Cowpea', 'Groundnut', 'Tomatoes', 'Plantain'];

function getVillages(lga: string): string[] {
  return villagesByLGA[lga] || ['Village A', 'Village B', 'Village C', 'Village D', 'Village E'];
}

function generateParcels(): Parcel[] {
  const count = 7 + Math.floor(Math.random() * 5);
  const parcels: Parcel[] = [];
  for (let i = 0; i < count; i++) {
    const w = 60 + Math.random() * 90;
    const h = 50 + Math.random() * 80;
    const x = 15 + Math.random() * (420 - w - 30);
    const y = 15 + Math.random() * (300 - h - 30);
    const healthRoll = Math.random();
    const health: Parcel['health'] = healthRoll > 0.78 ? 'alert' : healthRoll > 0.55 ? 'watch' : 'healthy';
    parcels.push({
      id: i,
      x,
      y,
      w,
      h,
      crop: crops[Math.floor(Math.random() * crops.length)],
      health,
      area: Math.round((w * h) / 12),
    });
  }
  return parcels;
}

const healthConfig = {
  healthy: { color: '#22a85f', label: 'Healthy', icon: CheckCircle2 },
  watch: { color: '#f59e0b', label: 'Watch', icon: AlertTriangle },
  alert: { color: '#ef4444', label: 'Alert', icon: AlertTriangle },
};

export default function LiveDemo() {
  const [selectedState, setSelectedState] = useState('Ekiti State');
  const [selectedLGA, setSelectedLGA] = useState('Ado-Ekiti');
  const [selectedVillage, setSelectedVillage] = useState('Ilokun');
  const [scanStatus, setScanStatus] = useState<ScanStatus>('idle');
  const [parcels, setParcels] = useState<Parcel[]>([]);
  const [scanProgress, setScanProgress] = useState(0);
  const [selectedParcel, setSelectedParcel] = useState<Parcel | null>(null);
  const scanRef = useRef<number | null>(null);

  const lgas = nigerianStates[selectedState] || [];

  const handleStateChange = (state: string) => {
    setSelectedState(state);
    const newLgas = nigerianStates[state];
    if (newLgas && newLgas.length > 0) {
      setSelectedLGA(newLgas[0]);
      setSelectedVillage(getVillages(newLgas[0])[0]);
    }
    setScanStatus('idle');
    setParcels([]);
    setSelectedParcel(null);
  };

  const handleLGAChange = (lga: string) => {
    setSelectedLGA(lga);
    setSelectedVillage(getVillages(lga)[0]);
    setScanStatus('idle');
    setParcels([]);
    setSelectedParcel(null);
  };

  const handleVillageChange = (village: string) => {
    setSelectedVillage(village);
    setScanStatus('idle');
    setParcels([]);
    setSelectedParcel(null);
  };

  const startScan = useCallback(() => {
    setScanStatus('scanning');
    setParcels([]);
    setSelectedParcel(null);
    setScanProgress(0);

    const newParcels = generateParcels();
    let progress = 0;

    const interval = window.setInterval(() => {
      progress += 3 + Math.random() * 5;
      if (progress >= 100) {
        progress = 100;
        setScanProgress(100);
        setParcels(newParcels);
        setScanStatus('complete');
        if (scanRef.current) window.clearInterval(scanRef.current);
      } else {
        setScanProgress(progress);
        if (progress > 40 && parcels.length === 0) {
          setParcels(newParcels.slice(0, Math.ceil((progress / 100) * newParcels.length)));
        }
      }
    }, 80);

    scanRef.current = interval;
  }, [parcels.length]);

  useEffect(() => {
    return () => {
      if (scanRef.current) window.clearInterval(scanRef.current);
    };
  }, []);

  const healthyCount = parcels.filter((p) => p.health === 'healthy').length;
  const watchCount = parcels.filter((p) => p.health === 'watch').length;
  const alertCount = parcels.filter((p) => p.health === 'alert').length;
  const totalArea = parcels.reduce((sum, p) => sum + p.area, 0);

  return (
    <section id="live-demo" className="relative overflow-hidden bg-gradient-to-b from-stone-50 to-white py-24 lg:py-32">
      <div className="container-x">
        {/* Header */}
        <div className="reveal mx-auto max-w-3xl text-center">
          <span className="section-eyebrow">
            <Radar className="h-3.5 w-3.5" />
            Live Demo · From Orbit
          </span>
          <h2 className="mt-5 font-display text-3xl font-extrabold tracking-tight text-stone-900 sm:text-4xl lg:text-5xl">
            Scan Any Nigerian Village{' '}
            <span className="gradient-text">From Orbit</span>
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-stone-600">
            Select a state, local government area, and village — then watch AgroPulse Fix
            detect crop parcels, assess plant health, and flag disease risks in real time.
          </p>
        </div>

        {/* Demo interface */}
        <div className="reveal mt-16 overflow-hidden rounded-3xl border border-stone-200 bg-white shadow-2xl shadow-stone-300/40">
          {/* Controls bar */}
          <div className="border-b border-stone-100 bg-stone-50 p-5 lg:p-6">
            <div className="grid gap-4 md:grid-cols-3">
              <div>
                <label className="mb-1.5 flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-stone-500">
                  <MapPin className="h-3.5 w-3.5" />
                  State
                </label>
                <select
                  value={selectedState}
                  onChange={(e) => handleStateChange(e.target.value)}
                  className="w-full rounded-xl border border-stone-300 bg-white px-4 py-2.5 text-sm font-medium text-stone-800 outline-none transition-all focus:border-brand-500 focus:ring-2 focus:ring-brand-500/20"
                >
                  {Object.keys(nigerianStates).map((state) => (
                    <option key={state} value={state}>{state}</option>
                  ))}
                </select>
              </div>
              <div>
                <label className="mb-1.5 flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-stone-500">
                  <Layers className="h-3.5 w-3.5" />
                  Local Government Area
                </label>
                <select
                  value={selectedLGA}
                  onChange={(e) => handleLGAChange(e.target.value)}
                  className="w-full rounded-xl border border-stone-300 bg-white px-4 py-2.5 text-sm font-medium text-stone-800 outline-none transition-all focus:border-brand-500 focus:ring-2 focus:ring-brand-500/20"
                >
                  {lgas.map((lga) => (
                    <option key={lga} value={lga}>{lga}</option>
                  ))}
                </select>
              </div>
              <div>
                <label className="mb-1.5 flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-stone-500">
                  <Crosshair className="h-3.5 w-3.5" />
                  Village
                </label>
                <select
                  value={selectedVillage}
                  onChange={(e) => handleVillageChange(e.target.value)}
                  className="w-full rounded-xl border border-stone-300 bg-white px-4 py-2.5 text-sm font-medium text-stone-800 outline-none transition-all focus:border-brand-500 focus:ring-2 focus:ring-brand-500/20"
                >
                  {getVillages(selectedLGA).map((village) => (
                    <option key={village} value={village}>{village}</option>
                  ))}
                </select>
              </div>
            </div>

            <div className="mt-4 flex flex-col items-center gap-3 sm:flex-row sm:justify-between">
              <div className="flex items-center gap-2 text-sm text-stone-500">
                <Satellite className="h-4 w-4 text-brand-600" />
                <span>Target: <span className="font-semibold text-stone-700">{selectedVillage}, {selectedLGA}, {selectedState}</span></span>
              </div>
              <button
                onClick={startScan}
                disabled={scanStatus === 'scanning'}
                className="btn-primary w-full text-sm sm:w-auto"
              >
                {scanStatus === 'scanning' ? (
                  <>
                    <Loader2 className="h-4 w-4 animate-spin" />
                    Scanning from orbit...
                  </>
                ) : scanStatus === 'complete' ? (
                  <>
                    <ScanLine className="h-4 w-4" />
                    Re-scan Region
                  </>
                ) : (
                  <>
                    <Satellite className="h-4 w-4" />
                    Launch Satellite Scan
                  </>
                )}
              </button>
            </div>
          </div>

          {/* Satellite viewport */}
          <div className="grid lg:grid-cols-3">
            {/* Map area */}
            <div className="relative lg:col-span-2">
              <div className="relative aspect-[4/3] overflow-hidden bg-brand-950">
                {/* Satellite image background */}
                <img
                  src="https://images.pexels.com/photos/3637891/pexels-photo-3637891.jpeg?auto=compress&cs=tinysrgb&w=1200"
                  alt="Satellite view of farmland"
                  className="absolute inset-0 h-full w-full object-cover opacity-60"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-br from-brand-950/70 via-brand-900/50 to-brand-950/70" />

                {/* Grid overlay */}
                <div
                  className="absolute inset-0 opacity-20"
                  style={{
                    backgroundImage:
                      'linear-gradient(rgba(34,168,95,0.4) 1px, transparent 1px), linear-gradient(90deg, rgba(34,168,95,0.4) 1px, transparent 1px)',
                    backgroundSize: '40px 40px',
                  }}
                />

                {/* Scanning sweep effect */}
                {scanStatus === 'scanning' && (
                  <div className="absolute inset-0 overflow-hidden">
                    <div
                      className="absolute inset-x-0 h-1 bg-gradient-to-r from-transparent via-brand-400 to-transparent shadow-[0_0_20px_4px_rgba(34,168,95,0.5)]"
                      style={{
                        top: `${scanProgress}%`,
                        transition: 'top 0.08s linear',
                      }}
                    />
                    <div
                      className="absolute inset-x-0 bg-gradient-to-b from-brand-400/10 to-transparent"
                      style={{ height: `${scanProgress}%`, transition: 'height 0.08s linear' }}
                    />
                  </div>
                )}

                {/* Parcels */}
                <svg className="absolute inset-0 h-full w-full" viewBox="0 0 420 300" preserveAspectRatio="none">
                  {parcels.map((parcel) => {
                    const cfg = healthConfig[parcel.health];
                    const isSelected = selectedParcel?.id === parcel.id;
                    return (
                      <g key={parcel.id} onClick={() => setSelectedParcel(parcel)} className="cursor-pointer">
                        <rect
                          x={parcel.x}
                          y={parcel.y}
                          width={parcel.w}
                          height={parcel.h}
                          rx="4"
                          fill={cfg.color}
                          fillOpacity={isSelected ? 0.35 : 0.18}
                          stroke={cfg.color}
                          strokeWidth={isSelected ? 2.5 : 1.5}
                          strokeDasharray={isSelected ? '0' : '4 3'}
                          className="transition-all duration-300"
                        />
                        {isSelected && (
                          <rect
                            x={parcel.x}
                            y={parcel.y}
                            width={parcel.w}
                            height={parcel.h}
                            rx="4"
                            fill="none"
                            stroke="#ffffff"
                            strokeWidth="1"
                            strokeOpacity="0.6"
                          />
                        )}
                      </g>
                    );
                  })}
                </svg>

                {/* Scan progress bar */}
                {scanStatus === 'scanning' && (
                  <div className="absolute bottom-0 left-0 right-0 bg-brand-950/80 p-3 backdrop-blur-sm">
                    <div className="flex items-center gap-3">
                      <Loader2 className="h-4 w-4 animate-spin text-brand-400" />
                      <div className="h-1.5 flex-1 overflow-hidden rounded-full bg-white/10">
                        <div
                          className="h-full rounded-full bg-gradient-to-r from-brand-400 to-brand-300 transition-all duration-100"
                          style={{ width: `${scanProgress}%` }}
                        />
                      </div>
                      <span className="text-xs font-semibold text-brand-200">{Math.round(scanProgress)}%</span>
                    </div>
                  </div>
                )}

                {/* Idle overlay */}
                {scanStatus === 'idle' && (
                  <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
                    <div className="relative">
                      <div className="absolute inset-0 animate-pulse-ring rounded-full bg-brand-400/30" />
                      <div className="relative flex h-20 w-20 items-center justify-center rounded-full bg-brand-600/90 shadow-2xl shadow-brand-600/50">
                        <Satellite className="h-10 w-10 text-white" />
                      </div>
                    </div>
                    <p className="mt-5 font-display text-lg font-bold text-white">Ready to Scan</p>
                    <p className="mt-1 text-sm text-stone-300">Press "Launch Satellite Scan" to begin</p>
                  </div>
                )}

                {/* Complete badge */}
                {scanStatus === 'complete' && (
                  <div className="absolute right-4 top-4 flex items-center gap-2 rounded-full bg-brand-600/90 px-3 py-1.5 text-xs font-semibold text-white backdrop-blur-sm">
                    <CheckCircle2 className="h-3.5 w-3.5" />
                    Scan Complete
                  </div>
                )}

                {/* Corner labels */}
                {scanStatus !== 'idle' && (
                  <>
                    <div className="absolute left-3 top-3 text-[10px] font-mono font-semibold text-brand-300/80">
                      LAT: {(7.6 + Math.random() * 0.1).toFixed(4)}°N
                    </div>
                    <div className="absolute right-3 top-3 text-[10px] font-mono font-semibold text-brand-300/80">
                      LON: {(5.2 + Math.random() * 0.1).toFixed(4)}°E
                    </div>
                    <div className="absolute bottom-3 left-3 text-[10px] font-mono font-semibold text-brand-300/80">
                      ALT: 512km · SENTINEL-2
                    </div>
                  </>
                )}
              </div>
            </div>

            {/* Side panel — results */}
            <div className="border-l border-stone-100 bg-stone-50/50 p-5 lg:p-6">
              {scanStatus === 'idle' && (
                <div className="flex h-full flex-col items-center justify-center py-12 text-center">
                  <ScanLine className="h-10 w-10 text-stone-300" />
                  <p className="mt-4 text-sm font-medium text-stone-400">
                    Parcel data will appear here after the scan completes.
                  </p>
                </div>
              )}

              {scanStatus === 'scanning' && (
                <div className="flex h-full flex-col items-center justify-center py-12 text-center">
                  <Loader2 className="h-10 w-10 animate-spin text-brand-500" />
                  <p className="mt-4 text-sm font-medium text-stone-500">
                    AI is analyzing satellite imagery and detecting crop parcels...
                  </p>
                </div>
              )}

              {scanStatus === 'complete' && (
                <div className="space-y-5">
                  <div>
                    <h3 className="font-display text-sm font-bold uppercase tracking-wider text-stone-500">
                      Scan Results
                    </h3>
                    <p className="mt-1 text-xs text-stone-400">{selectedVillage}, {selectedLGA}</p>
                  </div>

                  {/* Summary stats */}
                  <div className="grid grid-cols-2 gap-3">
                    <div className="rounded-xl border border-stone-200 bg-white p-3">
                      <div className="font-display text-2xl font-extrabold text-stone-900">{parcels.length}</div>
                      <div className="text-xs font-medium text-stone-500">Parcels Detected</div>
                    </div>
                    <div className="rounded-xl border border-stone-200 bg-white p-3">
                      <div className="font-display text-2xl font-extrabold text-stone-900">{totalArea.toLocaleString()}</div>
                      <div className="text-xs font-medium text-stone-500">Hectares Mapped</div>
                    </div>
                  </div>

                  {/* Health breakdown */}
                  <div className="space-y-2">
                    <div className="flex items-center justify-between rounded-lg border border-stone-200 bg-white px-3 py-2">
                      <div className="flex items-center gap-2">
                        <span className="h-2.5 w-2.5 rounded-full bg-brand-500" />
                        <span className="text-sm font-medium text-stone-700">Healthy</span>
                      </div>
                      <span className="text-sm font-bold text-brand-600">{healthyCount}</span>
                    </div>
                    <div className="flex items-center justify-between rounded-lg border border-stone-200 bg-white px-3 py-2">
                      <div className="flex items-center gap-2">
                        <span className="h-2.5 w-2.5 rounded-full bg-amber-500" />
                        <span className="text-sm font-medium text-stone-700">Watch</span>
                      </div>
                      <span className="text-sm font-bold text-amber-600">{watchCount}</span>
                    </div>
                    <div className="flex items-center justify-between rounded-lg border border-stone-200 bg-white px-3 py-2">
                      <div className="flex items-center gap-2">
                        <span className="h-2.5 w-2.5 rounded-full bg-red-500" />
                        <span className="text-sm font-medium text-stone-700">Disease Alert</span>
                      </div>
                      <span className="text-sm font-bold text-red-600">{alertCount}</span>
                    </div>
                  </div>

                  {/* Selected parcel detail */}
                  {selectedParcel ? (
                    <div className="rounded-xl border border-brand-200 bg-brand-50 p-4">
                      <div className="flex items-center justify-between">
                        <span className="text-xs font-semibold uppercase tracking-wider text-brand-700">Parcel #{selectedParcel.id + 1}</span>
                        <span
                          className="flex items-center gap-1 rounded-full px-2 py-0.5 text-xs font-semibold"
                          style={{ backgroundColor: `${healthConfig[selectedParcel.health].color}20`, color: healthConfig[selectedParcel.health].color }}
                        >
                          {healthConfig[selectedParcel.health].label}
                        </span>
                      </div>
                      <div className="mt-3 space-y-2 text-sm">
                        <div className="flex items-center gap-2 text-stone-600">
                          <Sprout className="h-4 w-4 text-brand-600" />
                          Crop: <span className="font-semibold text-stone-800">{selectedParcel.crop}</span>
                        </div>
                        <div className="flex items-center gap-2 text-stone-600">
                          <Layers className="h-4 w-4 text-brand-600" />
                          Area: <span className="font-semibold text-stone-800">{selectedParcel.area} ha</span>
                        </div>
                        <div className="flex items-center gap-2 text-stone-600">
                          <CloudRain className="h-4 w-4 text-brand-600" />
                          Rainfall: <span className="font-semibold text-stone-800">{800 + Math.floor(Math.random() * 400)} mm/yr</span>
                        </div>
                        {selectedParcel.health === 'alert' && (
                          <div className="mt-2 flex items-start gap-2 rounded-lg bg-red-50 p-2.5 text-xs text-red-700">
                            <AlertTriangle className="h-4 w-4 flex-shrink-0" />
                            <span>Leaf discoloration detected. Recommend field inspection within 48 hours.</span>
                          </div>
                        )}
                        {selectedParcel.health === 'watch' && (
                          <div className="mt-2 flex items-start gap-2 rounded-lg bg-amber-50 p-2.5 text-xs text-amber-700">
                            <AlertTriangle className="h-4 w-4 flex-shrink-0" />
                            <span>Growth slightly behind model. Monitor over next 7 days.</span>
                          </div>
                        )}
                      </div>
                    </div>
                  ) : (
                    <p className="text-center text-xs text-stone-400">
                      Click any parcel on the map to view crop details.
                    </p>
                  )}
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Disclaimer */}
        <p className="reveal mt-6 text-center text-xs text-stone-400">
          Prototype demonstration — parcel boundaries, crop types, and health assessments are simulated for illustration.
        </p>
      </div>
    </section>
  );
}
