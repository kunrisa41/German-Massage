
import React, { useState, useEffect, useCallback } from 'react';
import { 
  Phone, MapPin, Clock, Menu, X, 
  Award, CheckCircle2, ShieldCheck, Info, Thermometer,
  Languages, Sparkles
} from 'lucide-react';
import { SHOP_INFO, TRANSLATIONS, SERVICES_DATA } from './constants';

const App: React.FC = () => {
  const [lang, setLang] = useState<'de' | 'en'>('de');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const t = TRANSLATIONS[lang];
  const services = SERVICES_DATA[lang];

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleLang = () => {
    setLang(prev => prev === 'de' ? 'en' : 'de');
  };

  const scrollToSection = useCallback((id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 60;
      const elementPosition = element.getBoundingClientRect().top + window.pageYOffset - offset;
      window.scrollTo({ top: elementPosition, behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  }, []);

  return (
    <div className="min-h-screen font-sans bg-[#FDF5EF] text-[#2C1810] selection:bg-[#D4AF37] overflow-x-hidden">
      
      {/* Navigation */}
      <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-[#3E2723]/95 backdrop-blur-md shadow-md py-1' : 'bg-transparent py-2'}`}>
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex justify-between items-center h-14 md:h-16">
            <div className="flex items-center space-x-2 cursor-pointer" onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})}>
              <div>
                 <span className={`text-base md:text-lg font-serif font-bold tracking-tight uppercase block transition-colors ${scrolled ? 'text-[#D4AF37]' : 'text-[#720e0e]'}`}>
                    {t.hero.title}
                 </span>
                 <span className={`text-[8px] uppercase tracking-widest font-bold transition-colors ${scrolled ? 'text-white/50' : 'text-[#4B2C20]'}`}>
                    {t.hero.subtitle}
                 </span>
              </div>
            </div>

            <div className="hidden md:flex space-x-6 items-center">
              <button onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})} className={`text-[10px] font-bold tracking-widest uppercase transition-colors ${scrolled ? 'text-white/80 hover:text-[#D4AF37]' : 'text-[#720e0e] hover:opacity-70'}`}>{t.nav.home}</button>
              <button onClick={() => scrollToSection('treatments')} className={`text-[10px] font-bold tracking-widest uppercase transition-colors ${scrolled ? 'text-white/80 hover:text-[#D4AF37]' : 'text-[#720e0e] hover:opacity-70'}`}>{t.nav.treatments}</button>
              <button onClick={() => scrollToSection('contact')} className={`text-[10px] font-bold tracking-widest uppercase transition-colors ${scrolled ? 'text-white/80 hover:text-[#D4AF37]' : 'text-[#720e0e] hover:opacity-70'}`}>{t.nav.contact}</button>
              
              <button 
                onClick={toggleLang}
                className={`flex items-center gap-2 px-3 py-1 rounded-full border text-[9px] font-bold uppercase transition-all ${scrolled ? 'border-[#D4AF37]/40 text-[#D4AF37] hover:bg-[#D4AF37]/10' : 'border-[#720e0e]/20 text-[#720e0e] bg-white/80 hover:bg-white'}`}
              >
                <Languages size={12} />
                {lang === 'de' ? 'DE | EN' : 'EN | DE'}
              </button>

              <a href={SHOP_INFO.phoneLink} className="px-5 py-2 rounded-lg text-[10px] font-black uppercase tracking-widest bg-[#720e0e] text-white hover:bg-[#4a0a0a] transition-all shadow-md">{t.nav.book}</a>
            </div>

            <div className="md:hidden flex items-center gap-3">
              <button onClick={toggleLang} className={`p-1.5 border rounded-lg transition-colors ${scrolled ? 'text-[#D4AF37] border-[#D4AF37]/30' : 'text-[#720e0e] border-[#720e0e]/30 bg-white/80'}`}>
                <Languages size={16} />
              </button>
              <button onClick={() => setIsMenuOpen(!isMenuOpen)} className={scrolled ? 'text-[#D4AF37]' : 'text-[#720e0e]'}>
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>
        
        {isMenuOpen && (
          <div className="md:hidden bg-[#3E2723] py-6 px-6 space-y-4 shadow-2xl border-t border-white/5 animate-fadeIn">
            <button onClick={() => {window.scrollTo({top: 0, behavior: 'smooth'}); setIsMenuOpen(false);}} className="block w-full text-left font-serif font-bold text-xl text-[#D4AF37]">{t.nav.home}</button>
            <button onClick={() => scrollToSection('treatments')} className="block w-full text-left font-serif font-bold text-xl text-[#D4AF37]">{t.nav.treatments}</button>
            <button onClick={() => scrollToSection('contact')} className="block w-full text-left font-serif font-bold text-xl text-[#D4AF37]">{t.nav.contact}</button>
            <div className="pt-4 flex flex-col gap-3">
               <button onClick={toggleLang} className="w-full py-3 border border-[#D4AF37]/30 text-[#D4AF37] text-center font-bold tracking-widest rounded-xl flex items-center justify-center gap-2 bg-[#D4AF37]/5">
                 <Languages size={14} /> {lang === 'de' ? 'ENGLISH' : 'DEUTSCH'}
               </button>
               <a href={SHOP_INFO.phoneLink} className="block w-full py-4 bg-[#720e0e] text-white text-center font-bold tracking-widest rounded-xl uppercase text-[10px]">{t.nav.book}</a>
            </div>
          </div>
        )}
      </nav>

      <main>
        {/* Hero Section - Massage & Spa Themed Flowers (Bright & Fresh) */}
        <section id="hero" className="relative h-[60vh] md:h-[70vh] flex items-center justify-center bg-white overflow-hidden">
          <div className="absolute inset-0">
             <img 
               src="https://images.unsplash.com/photo-1600334089648-b0d9d3028eb2?q=80&w=2070&auto=format&fit=crop" 
               alt="Spa Flowers and Wellness" 
               className="w-full h-full object-cover brightness-105" 
             />
          </div>
          <div className="absolute inset-0 bg-gradient-to-t from-[#2D1810]/40 via-transparent to-white/10"></div>
          
          <div className="relative z-10 text-center px-4 max-w-4xl">
            <h1 className="font-serif mb-3 leading-tight animate-fadeIn text-white drop-shadow-[0_4px_10px_rgba(0,0,0,0.6)]">
               <span className="text-4xl md:text-7xl block tracking-tight font-bold">{t.hero.title}</span>
               <span className="text-lg md:text-2xl block mt-2 opacity-90 font-light italic tracking-wide uppercase">{t.hero.subtitle}</span>
            </h1>
            <p className="text-white text-xs md:text-base mb-6 font-semibold tracking-[0.2em] uppercase animate-fadeIn max-w-xl mx-auto drop-shadow-md">
              {t.hero.tagline}
            </p>
            <div className="flex justify-center animate-fadeIn">
              <button onClick={() => scrollToSection('treatments')} className="px-10 py-3.5 rounded-xl font-bold tracking-widest uppercase text-[10px] shadow-2xl transition-all hover:scale-105 bg-[#720e0e] text-white border border-[#D4AF37]/30">{t.hero.cta}</button>
            </div>
          </div>
        </section>

        {/* Philosophy Section */}
        <section className="py-12 md:py-16 px-6 bg-[#FDF5EF]">
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-[#D4AF37] text-[10px] font-black tracking-[0.4em] uppercase mb-4">{t.philosophy.label}</p>
            <h2 className="text-3xl md:text-5xl font-serif mb-6 text-[#4B2C20]">{t.philosophy.title}</h2>
            
            <div className="space-y-4 text-[#2D1810]/80 text-sm md:text-base leading-relaxed font-light">
              <p className="italic font-medium text-[#4B2C20]">{t.philosophy.p1}</p>
              <div className="max-w-2xl mx-auto">
                <p className="mb-4">
                  {t.philosophy.p2_1} <span className="text-[#720e0e] font-bold border-b-2 border-[#D4AF37] not-italic">{t.philosophy.p2_highlight}</span> {t.philosophy.p2_2}
                </p>
                <p className="leading-relaxed opacity-90">
                  {t.philosophy.p3} Unser Studio im Oerather Mühlenfeld bietet Ihnen die Ruhe, die Sie verdienen. Wir legen Wert auf erstklassige Techniken, um gezielte Entspannung für Ihren Alltag zu schaffen.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Treatments Section - Clean List View (No Nested Boxes) */}
        <section id="treatments" className="py-12 md:py-16 px-4 bg-[#3E2723]">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-10">
              <p className="tracking-[0.4em] uppercase text-[9px] font-black mb-3 text-[#D4AF37]">{t.treatments.label}</p>
              <h2 className="text-4xl md:text-5xl font-serif mb-4 text-white font-bold">{t.treatments.title}</h2>
              <div className="w-12 h-0.5 mx-auto bg-[#D4AF37]"></div>
            </div>

            <div className="grid gap-6">
              {services.map((service) => (
                <div key={service.id} className="rounded-2xl overflow-hidden flex flex-col md:flex-row shadow-lg bg-white border border-[#D4AF37]/10">
                  <div className="md:w-[65%] p-6 md:p-8">
                    <span className="text-[8px] font-bold tracking-widest uppercase py-1 px-3 rounded-full bg-[#3E2723] text-[#D4AF37] mb-4 inline-block">{service.subtitle}</span>
                    <h3 className="text-2xl md:text-3xl font-serif mb-2 text-[#3E2723] leading-tight">{service.title}</h3>
                    <p className="text-[#2D1810]/70 leading-relaxed mb-6 text-xs md:text-sm italic">
                      {service.description}
                    </p>
                    
                    <div className="space-y-6">
                      {/* รายการที่เป็น Clean List (ไม่มีกล่องซ้อน) */}
                      <div>
                        <p className="text-[9px] font-black tracking-widest text-[#D4AF37] mb-3 uppercase border-b border-[#D4AF37]/10 pb-1">
                          {service.isCombo ? t.treatments.stepsTitle : t.treatments.idealFor}
                        </p>
                        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-2">
                          {service.highlights.map((h, i) => (
                            <li key={i} className="flex items-start text-xs text-[#2D1810]/90 font-medium leading-snug">
                              <CheckCircle2 size={12} className="mr-2 text-[#D4AF37] mt-0.5 shrink-0" />
                              {h}
                            </li>
                          ))}
                        </ul>
                      </div>

                      {service.effects && (
                        <div>
                          <p className="text-[9px] font-black tracking-widest text-[#D4AF37] mb-3 uppercase border-b border-[#D4AF37]/10 pb-1">
                            {t.treatments.effectTitle}
                          </p>
                          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-2">
                            {service.effects.map((e, i) => (
                              <li key={i} className="flex items-start text-xs text-[#3E2723] font-bold leading-snug">
                                <Sparkles size={12} className="mr-2 text-[#D4AF37] mt-0.5 shrink-0" />
                                {e}
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}
                    </div>
                  </div>
                  
                  <div className="md:w-[35%] p-6 md:p-8 flex flex-col items-center justify-center text-center border-t md:border-t-0 md:border-l border-stone-100 bg-[#FDF5EF]/60">
                    <div className="text-[8px] uppercase tracking-widest mb-3 text-[#D4AF37] font-black">{t.treatments.price}</div>
                    <div className="space-y-3 mb-6 w-full">
                      {service.options.map((opt, idx) => (
                        <div key={idx} className="flex flex-col items-center">
                          <div className="text-4xl md:text-5xl font-serif text-[#3E2723] flex items-baseline leading-none mb-1">
                             <span className="text-base mr-1 text-[#D4AF37] font-sans font-bold">€</span>{opt.price}
                          </div>
                          <div className="text-[8px] font-bold text-white uppercase tracking-widest bg-[#3E2723] px-4 py-1 rounded-full shadow-sm">{opt.duration}</div>
                        </div>
                      ))}
                    </div>
                    <a href={SHOP_INFO.phoneLink} className="w-full max-w-[160px] py-3 rounded-lg text-[9px] font-bold uppercase tracking-widest text-white shadow-md transition-all hover:scale-105 bg-[#720e0e] hover:bg-[#4a0a0a]">
                      {t.treatments.bookNow}
                    </a>
                  </div>
                </div>
              ))}
            </div>
            
            {/* Notice Section */}
            <div className="mt-10 p-6 md:p-8 rounded-2xl bg-white border border-[#D4AF37]/20 text-center max-w-2xl mx-auto shadow-sm">
              <p className="text-[9px] font-black uppercase tracking-widest text-[#D4AF37] mb-2 flex items-center justify-center gap-2">
                <Info size={14} /> {t.treatments.noticeTitle}
              </p>
              <p className="text-[11px] md:text-xs text-[#2D1810]/70 italic leading-relaxed">{t.treatments.noticeText}</p>
            </div>
          </div>
        </section>

        {/* Quality Section - 4 Boxes Grid */}
        <section className="py-12 px-4 bg-[#FDF5EF]">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-8">
              <h2 className="text-3xl md:text-4xl font-serif text-[#3E2723] mb-4 font-bold">{t.anspruch.title}</h2>
              <div className="w-10 h-0.5 mx-auto bg-[#D4AF37]"></div>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {t.anspruch.items.map((item, i) => (
                <div key={i} className="p-5 rounded-2xl bg-white border border-[#D4AF37]/10 text-center hover:shadow-md transition-all aspect-square flex flex-col justify-center items-center">
                  <div className="text-[#D4AF37] mb-3 flex justify-center">
                    {i === 0 && <Award size={28} />}
                    {i === 1 && <Clock size={28} />}
                    {i === 2 && <Thermometer size={28} />}
                    {i === 3 && <ShieldCheck size={28} />}
                  </div>
                  <h4 className="text-[#3E2723] font-bold uppercase tracking-widest text-[9px] mb-2">{item.title}</h4>
                  <p className="text-[#2D1810]/70 text-[10px] leading-snug font-light line-clamp-3">{item.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-12 md:py-16 px-4 bg-[#2D1810]">
          <div className="max-w-5xl mx-auto">
            <div className="grid md:grid-cols-2 gap-6">
              {/* Address Box */}
              <div className="p-6 md:p-8 rounded-2xl bg-[#FDF5EF] flex flex-col justify-between shadow-lg border-l-4 border-[#D4AF37]">
                <div>
                  <p className="text-[#D4AF37] text-[8px] font-black uppercase tracking-widest mb-4">{t.contact.label}</p>
                  <h3 className="text-2xl font-serif mb-6 text-[#3E2723] font-bold">{t.contact.title}</h3>
                  <div className="flex items-start space-x-3 mb-6">
                    <div className="p-2.5 rounded-lg bg-[#3E2723] text-[#D4AF37] shrink-0 shadow-md">
                      <MapPin size={20} />
                    </div>
                    <div className="cursor-pointer" onClick={() => window.open(SHOP_INFO.googleMapsUrl, '_blank')}>
                      <p className="text-[#3E2723] font-bold text-base leading-tight hover:text-[#720e0e] transition-colors">{SHOP_INFO.address}</p>
                      <p className="mt-1 text-[7px] font-bold uppercase tracking-widest text-[#D4AF37]">{t.contact.germany}</p>
                    </div>
                  </div>
                </div>
                <div 
                  className="relative h-32 rounded-xl overflow-hidden group cursor-pointer border border-[#3E2723]/10 shadow-inner"
                  onClick={() => window.open(SHOP_INFO.googleMapsUrl, '_blank')}
                >
                   <img src="https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?q=80&w=1000&auto=format&fit=crop" alt="Location Map" className="absolute inset-0 w-full h-full object-cover grayscale brightness-75 group-hover:grayscale-0 transition-all duration-500" />
                   <div className="absolute inset-0 flex items-center justify-center">
                         <div className="bg-[#D4AF37]/90 p-2 rounded-full text-white shadow-lg group-hover:scale-110 transition-transform">
                            <MapPin size={16} />
                         </div>
                   </div>
                </div>
              </div>
              
              {/* Phone Box */}
              <div className="p-6 md:p-8 rounded-2xl flex flex-col justify-center items-center text-center bg-white/5 border border-[#D4AF37]/10 shadow-xl">
                <p className="text-[#D4AF37] uppercase tracking-widest text-[8px] font-black mb-4">{t.contact.reservation}</p>
                <div className="bg-[#D4AF37]/10 p-4 rounded-full mb-4 text-[#D4AF37]">
                  <Phone size={36} />
                </div>
                <p className="text-white/30 text-[7px] mb-2 uppercase tracking-widest font-black">{t.contact.callUs}</p>
                <h2 className="text-3xl md:text-5xl font-serif text-white mb-8 tracking-tight font-bold">{SHOP_INFO.phone}</h2>
                <a href={SHOP_INFO.phoneLink} className="w-full max-w-[220px] py-3.5 bg-[#720e0e] text-white rounded-lg font-black uppercase text-[9px] tracking-widest hover:bg-[#4a0a0a] transition-all shadow-lg">{t.contact.callCta}</a>
                <p className="mt-6 text-[7px] text-[#D4AF37]/40 uppercase tracking-widest font-black">{t.contact.note}</p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="py-8 px-4 bg-[#FDF5EF] border-t border-[#D4AF37]/20 text-center">
        <div className="max-w-6xl mx-auto">
          <div className="font-serif text-[#720e0e] text-lg uppercase mb-2 font-bold tracking-tight">
             {t.hero.title}
          </div>
          <p className="text-[8px] tracking-[0.3em] opacity-50 text-[#3E2723] mb-4">{t.footer.tagline}</p>
          <p className="text-[7px] tracking-widest uppercase opacity-40 text-[#2D1810] font-bold">{t.footer.rights}</p>
        </div>
      </footer>
    </div>
  );
};

export default App;
