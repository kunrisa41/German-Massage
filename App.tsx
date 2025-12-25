
import React, { useState, useEffect, useCallback } from 'react';
import { 
  Phone, MapPin, Clock, Menu, X, 
  Award, CheckCircle2, ShieldCheck, Info, Thermometer,
  Languages, Sparkles
} from 'lucide-react';
import { COLORS, SHOP_INFO, TRANSLATIONS, SERVICES_DATA } from './constants';

const App: React.FC = () => {
  const [lang, setLang] = useState<'de' | 'en'>('de');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const t = TRANSLATIONS[lang];
  const services = SERVICES_DATA[lang];

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleLang = () => {
    setLang(prev => prev === 'de' ? 'en' : 'de');
  };

  const scrollToSection = useCallback((id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 70;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
    setIsMenuOpen(false);
  }, []);

  return (
    <div className="min-h-screen font-sans bg-[#FDF5EF] text-[#2C1810] selection:bg-[#D4AF37]">
      
      {/* Navigation */}
      <nav className={`fixed w-full z-50 transition-all duration-500 ${scrolled ? 'bg-[#3E2723] shadow-lg py-1' : 'bg-transparent py-2'}`}>
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2 cursor-pointer" onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})}>
              <div>
                 <span className={`text-base md:text-lg font-serif font-bold tracking-tight uppercase block transition-colors duration-500 ${scrolled ? 'text-[#D4AF37]' : 'text-[#720e0e]'}`}>
                    {t.hero.title}
                 </span>
                 <span className={`text-[8px] md:text-[9px] uppercase tracking-[0.2em] font-bold transition-colors duration-500 ${scrolled ? 'text-white/40' : 'text-[#4B2C20]'}`}>
                    {t.hero.subtitle}
                 </span>
              </div>
            </div>

            <div className="hidden md:flex space-x-6 items-center">
              <button onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})} className={`text-[10px] font-black tracking-widest uppercase transition-all duration-300 ${scrolled ? 'text-white/80 hover:text-[#D4AF37]' : 'text-[#720e0e] hover:opacity-70'}`}>{t.nav.home}</button>
              <button onClick={() => scrollToSection('treatments')} className={`text-[10px] font-black tracking-widest uppercase transition-all duration-300 ${scrolled ? 'text-white/80 hover:text-[#D4AF37]' : 'text-[#720e0e] hover:opacity-70'}`}>{t.nav.treatments}</button>
              <button onClick={() => scrollToSection('contact')} className={`text-[10px] font-black tracking-widest uppercase transition-all duration-300 ${scrolled ? 'text-white/80 hover:text-[#D4AF37]' : 'text-[#720e0e] hover:opacity-70'}`}>{t.nav.contact}</button>
              
              <button 
                onClick={toggleLang}
                className={`flex items-center gap-2 px-3 py-1.5 rounded-full border text-[9px] font-black uppercase tracking-widest transition-all ${scrolled ? 'border-[#D4AF37]/30 text-[#D4AF37] bg-[#D4AF37]/5 hover:bg-[#D4AF37]/20' : 'border-[#720e0e]/20 text-[#720e0e] bg-white/60 hover:bg-white'}`}
              >
                <Languages size={12} />
                {lang === 'de' ? 'DE | EN' : 'EN | DE'}
              </button>

              <a href={SHOP_INFO.phoneLink} className="px-5 py-2 rounded-lg text-[10px] font-black uppercase tracking-widest shadow-md transition-all hover:scale-105 bg-[#720e0e] text-white hover:bg-[#4a0a0a]">{t.nav.book}</a>
            </div>

            <div className="md:hidden flex items-center gap-2">
              <button onClick={toggleLang} className={`p-1.5 border rounded-lg transition-colors ${scrolled ? 'text-[#D4AF37] border-[#D4AF37]/30' : 'text-[#720e0e] border-[#720e0e]/20 bg-white/50'}`}>
                <Languages size={16} />
              </button>
              <button onClick={() => setIsMenuOpen(!isMenuOpen)} className={scrolled ? 'text-[#D4AF37]' : 'text-[#720e0e]'}>
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>
        
        {isMenuOpen && (
          <div className="md:hidden bg-[#3E2723] py-6 px-6 space-y-4 shadow-xl border-t border-white/5">
            <button onClick={() => {window.scrollTo({top: 0, behavior: 'smooth'}); setIsMenuOpen(false);}} className="block w-full text-left font-serif font-bold text-xl text-[#D4AF37]">{t.nav.home}</button>
            <button onClick={() => scrollToSection('treatments')} className="block w-full text-left font-serif font-bold text-xl text-[#D4AF37]">{t.nav.treatments}</button>
            <button onClick={() => scrollToSection('contact')} className="block w-full text-left font-serif font-bold text-xl text-[#D4AF37]">{t.nav.contact}</button>
            <div className="pt-4 flex flex-col gap-3">
               <button onClick={toggleLang} className="w-full py-3 border border-[#D4AF37]/30 text-[#D4AF37] text-center font-bold tracking-widest rounded-xl flex items-center justify-center gap-2 bg-[#D4AF37]/5">
                 <Languages size={14} /> {lang === 'de' ? 'ENGLISH' : 'DEUTSCH'}
               </button>
               <a href={SHOP_INFO.phoneLink} className="block w-full py-3.5 bg-[#720e0e] text-white text-center font-bold tracking-widest rounded-xl uppercase text-[10px]">{t.nav.book}</a>
            </div>
          </div>
        )}
      </nav>

      <main>
        {/* Hero Section - Bright, Floral, and Professional */}
        <section id="hero" className="relative h-[70vh] md:h-[80vh] flex items-center justify-center bg-[#FDF5EF] overflow-hidden">
          <div className="absolute inset-0">
             {/* Brighter, floral background */}
             <img 
               src="https://images.unsplash.com/photo-1540555700478-4be289fbecef?q=80&w=2070&auto=format&fit=crop" 
               alt="Thai Floral Spa" 
               className="w-full h-full object-cover brightness-110" 
             />
          </div>
          {/* Subtle gold/warm gradient instead of dark brown */}
          <div className="absolute inset-0 bg-gradient-to-b from-white/30 via-transparent to-[#2D1810]/60"></div>
          
          <div className="relative z-10 text-center px-4 max-w-4xl">
            <h1 className="font-serif mb-4 leading-tight animate-fadeIn text-white drop-shadow-[0_2px_15px_rgba(0,0,0,0.5)]">
               <span className="text-4xl md:text-7xl block tracking-tight font-bold">{t.hero.title}</span>
               <span className="text-lg md:text-2xl block mt-2 opacity-90 font-light italic tracking-wide uppercase">{t.hero.subtitle}</span>
            </h1>
            <p className="text-white text-sm md:text-lg mb-8 font-medium tracking-[0.3em] uppercase animate-fadeIn max-w-xl mx-auto drop-shadow-md">
              {t.hero.tagline}
            </p>
            <div className="flex justify-center animate-fadeIn">
              <button onClick={() => scrollToSection('treatments')} className="px-10 py-4 rounded-xl font-black tracking-[0.2em] uppercase text-[11px] shadow-2xl transition-all hover:scale-105 bg-[#720e0e] text-white border border-[#D4AF37]/40">{t.hero.cta}</button>
            </div>
          </div>
        </section>

        {/* Philosophy Section - Restored full content with balanced layout */}
        <section className="py-16 md:py-20 px-6 bg-[#FDF5EF]">
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-[#D4AF37] text-[10px] font-black tracking-[0.4em] uppercase mb-6">{t.philosophy.label}</p>
            <h2 className="text-3xl md:text-5xl font-serif mb-8 text-[#4B2C20]">{t.philosophy.title}</h2>
            
            <div className="space-y-6 text-[#2D1810] text-base md:text-lg leading-relaxed font-light opacity-90">
              <p className="italic">{t.philosophy.p1}</p>
              
              <div className="bg-white/50 p-6 md:p-8 rounded-2xl border border-[#D4AF37]/10 shadow-sm">
                <p className="mb-4">
                  {t.philosophy.p2_1} <span className="text-[#720e0e] font-bold border-b-2 border-[#D4AF37] not-italic">{t.philosophy.p2_highlight}</span> {t.philosophy.p2_2}
                </p>
                <p className="font-medium text-[#4B2C20]">
                  {t.philosophy.p3}
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Treatments Section - Compact and Clean */}
        <section id="treatments" className="py-16 md:py-20 px-4 bg-[#3E2723]">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <p className="tracking-[0.4em] uppercase text-[10px] font-black mb-4 text-[#D4AF37]">{t.treatments.label}</p>
              <h2 className="text-4xl md:text-6xl font-serif mb-6 text-white font-bold">{t.treatments.title}</h2>
              <div className="w-16 h-1 mx-auto bg-[#D4AF37]"></div>
            </div>

            <div className="grid gap-10">
              {services.map((service) => (
                <div key={service.id} className="rounded-3xl overflow-hidden flex flex-col md:flex-row shadow-xl border border-[#D4AF37]/20 bg-white group">
                  <div className="md:w-3/5 p-8 md:p-10">
                    <span className="text-[9px] font-black tracking-[0.1em] uppercase py-1.5 px-4 rounded-full bg-[#3E2723] text-[#D4AF37] mb-5 inline-block">{service.subtitle}</span>
                    <h3 className="text-2xl md:text-3xl font-serif mb-4 text-[#3E2723] leading-tight">{service.title}</h3>
                    <p className="text-[#2D1810]/70 leading-relaxed mb-6 text-sm italic">
                      {service.description}
                    </p>
                    
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
                      <div className="bg-[#FDF5EF]/50 p-4 rounded-xl border border-[#D4AF37]/5">
                        <p className="text-[9px] font-black tracking-widest text-[#D4AF37] mb-3 uppercase border-b border-[#D4AF37]/10 pb-1">
                          {service.isCombo ? t.treatments.stepsTitle : t.treatments.idealFor}
                        </p>
                        <ul className="space-y-2">
                          {service.highlights.map((h, i) => (
                            <li key={i} className="flex items-start text-xs text-[#2D1810]/80">
                              <CheckCircle2 size={14} className="mr-2 text-[#D4AF37] mt-0.5 shrink-0" />
                              {h}
                            </li>
                          ))}
                        </ul>
                      </div>

                      {service.effects && (
                        <div className="bg-[#FDF5EF]/50 p-4 rounded-xl border border-[#D4AF37]/5">
                          <p className="text-[9px] font-black tracking-widest text-[#D4AF37] mb-3 uppercase border-b border-[#D4AF37]/10 pb-1">
                            {t.treatments.effectTitle}
                          </p>
                          <ul className="space-y-2">
                            {service.effects.map((e, i) => (
                              <li key={i} className="flex items-start text-xs text-[#3E2723] font-bold">
                                <Sparkles size={14} className="mr-2 text-[#D4AF37] mt-0.5 shrink-0" />
                                {e}
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}
                    </div>

                    <div className="flex items-center text-[9px] font-black tracking-[0.1em] uppercase text-[#3E2723]/40 pt-4 border-t border-stone-100">
                      <Clock size={16} className="mr-2 text-[#D4AF37]" />
                      {t.treatments.duration}: {service.duration}
                    </div>
                  </div>
                  
                  <div className="md:w-2/5 p-8 md:p-10 flex flex-col items-center justify-center text-center border-t md:border-t-0 md:border-l border-stone-100 bg-[#FDF5EF]">
                    <div className="text-[9px] uppercase tracking-[0.3em] mb-4 text-[#D4AF37] font-black">{t.treatments.price}</div>
                    <div className="space-y-5 mb-8 w-full">
                      {service.options.map((opt, idx) => (
                        <div key={idx} className="flex flex-col items-center">
                          <div className="text-4xl md:text-5xl font-serif text-[#3E2723] flex items-baseline leading-none mb-2">
                             <span className="text-lg mr-1.5 text-[#D4AF37] font-sans font-bold">€</span>{opt.price}
                          </div>
                          <div className="text-[9px] font-black text-white uppercase tracking-[0.1em] bg-[#3E2723] px-5 py-1.5 rounded-full shadow-md">{opt.duration}</div>
                        </div>
                      ))}
                    </div>
                    <a href={SHOP_INFO.phoneLink} className="w-full py-4 rounded-xl text-[10px] font-black uppercase tracking-[0.1em] text-white shadow-lg transition-all hover:scale-105 bg-[#720e0e] hover:bg-[#4a0a0a]">
                      {t.treatments.bookNow}
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Quality Section - Compact Icons */}
        <section className="py-16 px-4 bg-[#FDF5EF]">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-10">
              <h2 className="text-3xl md:text-4xl font-serif text-[#3E2723] mb-4 font-bold">{t.anspruch.title}</h2>
              <div className="w-12 h-0.5 mx-auto bg-[#D4AF37]"></div>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
              {t.anspruch.items.map((item, i) => (
                <div key={i} className="p-5 rounded-2xl bg-white border border-[#D4AF37]/10 text-center hover:shadow-md transition-all group">
                  <div className="text-[#D4AF37] mb-3 flex justify-center group-hover:scale-110 transition-transform">
                    {i === 0 && <Award size={28} />}
                    {i === 1 && <Clock size={28} />}
                    {i === 2 && <Thermometer size={28} />}
                    {i === 3 && <ShieldCheck size={28} />}
                  </div>
                  <h4 className="text-[#3E2723] font-black uppercase tracking-[0.1em] text-[9px] mb-2 border-b border-[#D4AF37]/5 pb-2">{item.title}</h4>
                  <p className="text-[#2D1810]/60 text-[11px] leading-snug font-light">{item.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section - Balanced Grid */}
        <section id="contact" className="py-16 md:py-20 px-4 bg-[#2D1810]">
          <div className="max-w-5xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8">
              {/* Address Box */}
              <div className="p-8 rounded-3xl bg-[#FDF5EF] flex flex-col justify-between shadow-xl border-l-8 border-[#D4AF37]">
                <div>
                  <p className="text-[#D4AF37] text-[9px] font-black uppercase tracking-[0.4em] mb-6">{t.contact.label}</p>
                  <h3 className="text-3xl font-serif mb-6 text-[#3E2723] font-bold">{t.contact.title}</h3>
                  <div className="flex items-start space-x-4 mb-6">
                    <div className="p-3 rounded-xl bg-[#3E2723] text-[#D4AF37] shrink-0">
                      <MapPin size={22} />
                    </div>
                    <div className="cursor-pointer" onClick={() => window.open(SHOP_INFO.googleMapsUrl, '_blank')}>
                      <p className="text-[#3E2723] font-bold text-lg leading-tight hover:text-[#720e0e] transition-colors">{SHOP_INFO.address}</p>
                      <p className="mt-1.5 text-[8px] font-black uppercase tracking-[0.2em] text-[#D4AF37]">{t.contact.germany}</p>
                    </div>
                  </div>
                </div>
                <div 
                  className="relative h-40 rounded-2xl overflow-hidden group cursor-pointer border-2 border-[#3E2723]/5"
                  onClick={() => window.open(SHOP_INFO.googleMapsUrl, '_blank')}
                >
                   <img src="https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?q=80&w=1000&auto=format&fit=crop" alt="Map" className="absolute inset-0 w-full h-full object-cover grayscale brightness-75 group-hover:grayscale-0 transition-all duration-700" />
                   <div className="absolute inset-0 flex items-center justify-center">
                         <div className="bg-[#D4AF37] p-3 rounded-full text-white group-hover:scale-110 transition-transform shadow-lg">
                            <MapPin size={20} />
                         </div>
                   </div>
                </div>
              </div>
              
              {/* Phone Box */}
              <div className="p-8 rounded-3xl flex flex-col justify-center items-center text-center shadow-xl bg-white/5 border border-[#D4AF37]/10">
                <p className="text-[#D4AF37] uppercase tracking-[0.3em] text-[9px] font-black mb-6">{t.contact.reservation}</p>
                <div className="bg-[#D4AF37]/10 p-5 rounded-full mb-6 text-[#D4AF37] shadow-inner">
                  <Phone size={44} />
                </div>
                <p className="text-white/30 text-[8px] mb-3 uppercase tracking-[0.2em] font-black">{t.contact.callUs}</p>
                <h2 className="text-4xl md:text-5xl font-serif text-white mb-10 tracking-tight font-bold">{SHOP_INFO.phone}</h2>
                <a href={SHOP_INFO.phoneLink} className="w-full max-w-[240px] py-4 bg-[#720e0e] text-white rounded-xl font-black uppercase text-[10px] tracking-[0.1em] hover:bg-[#4a0a0a] transition-all shadow-lg border border-[#D4AF37]/20">{t.contact.callCta}</a>
                <p className="mt-8 text-[8px] text-[#D4AF37]/40 uppercase tracking-[0.1em] font-black">{t.contact.note}</p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="py-12 px-4 bg-[#FDF5EF] border-t-2 border-[#D4AF37] text-center">
        <div className="max-w-6xl mx-auto">
          <div className="font-serif text-[#720e0e] tracking-[0.05em] text-xl uppercase mb-3 font-bold">
             {t.hero.title}
          </div>
          <p className="text-[9px] tracking-[0.3em] opacity-40 text-[#3E2723] mb-6">{t.footer.tagline}</p>
          <p className="text-[8px] tracking-[0.1em] uppercase opacity-30 text-[#2D1810] font-black">{t.footer.rights}</p>
        </div>
      </footer>
    </div>
  );
};

export default App;
