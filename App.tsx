import React, { useState, useEffect, useCallback } from 'react';
import { 
  Phone, MapPin, Clock, Menu, X, 
  Award, CheckCircle2, ShieldCheck, Info, Thermometer,
  Languages, Sparkles
} from 'lucide-react';
import { SHOP_INFO, TRANSLATIONS, SERVICES_DATA } from './constants.tsx';

const App: React.FC = () => {
  const [lang, setLang] = useState<'de' | 'en'>('de');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const t = TRANSLATIONS[lang];
  const services = SERVICES_DATA[lang];

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
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
      const elementPosition = element.getBoundingClientRect().top + window.pageYOffset - offset;
      window.scrollTo({ top: elementPosition, behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  }, []);

  return (
    <div className="min-h-screen font-sans bg-[#FDF5EF] text-[#2C1810] selection:bg-[#D4AF37] overflow-x-hidden">
      
      {/* Navigation */}
      <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white/95 backdrop-blur-md shadow-sm py-2' : 'bg-transparent py-4'}`}>
        <div className="max-w-6xl mx-auto px-4 md:px-6">
          <div className="flex justify-between items-center h-12">
            <div className="flex flex-col cursor-pointer" onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})}>
               <span className="text-sm md:text-lg font-serif font-bold tracking-tight uppercase text-[#720e0e]">
                  {t.hero.title}
               </span>
               <span className={`text-[8px] md:text-[9px] uppercase tracking-widest font-bold transition-colors ${scrolled ? 'text-[#4B2C20]/60' : 'text-[#4B2C20]'}`}>
                  {t.hero.subtitle}
               </span>
            </div>

            <div className="hidden md:flex space-x-6 items-center">
              <button onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})} className="text-[10px] font-bold tracking-widest uppercase hover:text-[#720e0e] transition-colors">{t.nav.home}</button>
              <button onClick={() => scrollToSection('treatments')} className="text-[10px] font-bold tracking-widest uppercase hover:text-[#720e0e] transition-colors">{t.nav.treatments}</button>
              <button onClick={() => scrollToSection('contact')} className="text-[10px] font-bold tracking-widest uppercase hover:text-[#720e0e] transition-colors">{t.nav.contact}</button>
              
              <button 
                onClick={toggleLang}
                className="flex items-center gap-2 px-3 py-1 rounded-full border border-[#720e0e]/20 text-[9px] font-bold uppercase transition-all hover:bg-white"
              >
                <Languages size={12} />
                {lang === 'de' ? 'DE | EN' : 'EN | DE'}
              </button>

              <a href={SHOP_INFO.phoneLink} className="px-5 py-2 rounded-lg text-[10px] font-black uppercase tracking-widest bg-[#720e0e] text-white hover:bg-[#4a0a0a] transition-all">{t.nav.book}</a>
            </div>

            <div className="md:hidden flex items-center gap-2">
              <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="p-2 text-[#720e0e]">
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>
        
        {/* Mobile Menu Overlay */}
        {isMenuOpen && (
          <div className="md:hidden fixed inset-0 z-40 bg-[#FDF5EF] flex flex-col pt-24 px-8 space-y-8 animate-fadeIn">
            <button onClick={() => {window.scrollTo({top: 0, behavior: 'smooth'}); setIsMenuOpen(false);}} className="text-left font-serif font-bold text-2xl text-[#720e0e]">{t.nav.home}</button>
            <button onClick={() => scrollToSection('treatments')} className="text-left font-serif font-bold text-2xl text-[#720e0e]">{t.nav.treatments}</button>
            <button onClick={() => scrollToSection('contact')} className="text-left font-serif font-bold text-2xl text-[#720e0e]">{t.nav.contact}</button>
            <div className="pt-8 flex flex-col gap-4">
               <button onClick={toggleLang} className="w-full py-4 border border-[#720e0e]/20 text-[#720e0e] font-bold tracking-widest rounded-2xl">
                 {lang === 'de' ? 'ENGLISH' : 'DEUTSCH'}
               </button>
               <a href={SHOP_INFO.phoneLink} className="w-full py-5 bg-[#720e0e] text-white text-center font-bold tracking-widest rounded-2xl uppercase shadow-xl">
                 {t.nav.book}
               </a>
            </div>
          </div>
        )}
      </nav>

      <main>
        {/* Hero Section */}
        <section id="hero" className="relative h-[80vh] flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0">
             <img 
               src="https://images.unsplash.com/photo-1600334089648-b0d9d3028eb2?auto=format&fit=crop&q=80&w=2000" 
               alt="Traditional Thai Massage" 
               className="w-full h-full object-cover object-[75%_center] md:object-center" 
               loading="eager"
             />
             <div className="absolute inset-0 bg-gradient-to-b from-white/10 via-transparent to-[#2D1810]/80"></div>
          </div>
          
          <div className="relative z-10 text-center px-6 max-w-4xl animate-fadeIn">
            <h1 className="font-serif mb-4 leading-tight text-white drop-shadow-[0_2px_15px_rgba(0,0,0,0.6)]">
               <span className="text-3xl sm:text-4xl md:text-7xl block font-bold mb-2">{t.hero.title}</span>
               <span className="text-base sm:text-lg md:text-2xl block opacity-95 font-light italic tracking-wider uppercase">{t.hero.subtitle}</span>
            </h1>
            <p className="text-white text-[10px] md:text-base mb-8 font-medium tracking-[0.2em] uppercase opacity-90">
              {t.hero.tagline}
            </p>
            <button onClick={() => scrollToSection('treatments')} className="px-10 py-4 rounded-full font-bold tracking-widest uppercase text-[10px] shadow-2xl transition-all hover:scale-105 bg-[#720e0e] text-white">
               {t.hero.cta}
            </button>
          </div>
        </section>

        {/* Philosophy */}
        <section className="py-16 md:py-24 px-6 bg-[#FDF5EF]">
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-[#D4AF37] text-[10px] font-black tracking-[0.4em] uppercase mb-4">{t.philosophy.label}</p>
            <h2 className="text-2xl md:text-4xl font-serif mb-10 text-[#4B2C20] font-bold">{t.philosophy.title}</h2>
            <div className="space-y-8 text-[#2D1810]/90 text-sm md:text-lg leading-relaxed font-light">
              <p>{t.philosophy.p1}</p>
              <p className="font-bold text-[#4B2C20]">
                {t.philosophy.p2}
              </p>
              <p>
                {t.philosophy.p3}
              </p>
            </div>
          </div>
        </section>

        {/* Treatments Section */}
        <section id="treatments" className="py-16 md:py-20 px-4 bg-[#3E2723]">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-10">
              <p className="tracking-[0.4em] uppercase text-[10px] font-black mb-2 text-[#D4AF37]">{t.treatments.label}</p>
              <h2 className="text-3xl md:text-5xl font-serif mb-3 text-white font-bold">{t.treatments.title}</h2>
              <div className="w-12 h-0.5 mx-auto bg-[#D4AF37]/40"></div>
            </div>

            <div className="grid gap-8">
              {services.map((service) => (
                <div key={service.id} className="rounded-2xl overflow-hidden flex flex-col md:flex-row shadow-2xl bg-white border border-white/5">
                  <div className="md:w-[65%] p-6 md:p-10">
                    <span className="text-[8px] font-bold tracking-widest uppercase py-1 px-3 rounded-full bg-[#3E2723] text-[#D4AF37] mb-4 inline-block">{service.subtitle}</span>
                    <h3 className="text-xl md:text-3xl font-serif mb-3 text-[#3E2723] leading-tight font-bold">{service.title}</h3>
                    <p className="text-[#2D1810]/70 leading-relaxed mb-6 text-sm italic">
                      {service.description}
                    </p>
                    
                    <div className="space-y-6">
                      <div>
                        <p className="text-[9px] font-black tracking-[0.1em] text-[#D4AF37] uppercase flex items-center mb-3 border-b border-[#D4AF37]/10 pb-1">
                          <CheckCircle2 size={12} className="mr-2" />
                          {service.isCombo ? t.treatments.stepsTitle : t.treatments.idealFor}
                        </p>
                        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs md:text-sm">
                          {service.highlights.map((h, i) => (
                            <li key={i} className="flex items-start text-[#2C1810] font-medium leading-normal">
                              <span className="mr-2 text-[#D4AF37] font-bold">•</span> {h}
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Display Wirkung (Effect) if it exists for the service */}
                      {service.effects && service.effects.length > 0 && (
                        <div className="pt-4 border-t border-stone-100">
                          <p className="text-[9px] font-black tracking-[0.2em] text-[#720e0e] uppercase flex items-center mb-3">
                            <Sparkles size={12} className="mr-2" />
                            {t.treatments.effectTitle}
                          </p>
                          <div className="flex flex-wrap gap-2 md:gap-4">
                            {service.effects.map((e, i) => (
                              <div key={i} className="flex items-center text-[10px] md:text-xs text-[#3E2723] font-bold italic bg-[#FDF5EF] px-3 py-1.5 rounded-full border border-[#D4AF37]/10 whitespace-nowrap">
                                <span className="mr-1 text-[#D4AF37]">✦</span> {e}
                              </div>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                  
                  <div className="md:w-[35%] p-6 md:p-10 flex flex-col items-center justify-center text-center bg-[#FDF5EF]/40 border-t md:border-t-0 md:border-l border-stone-100">
                    <div className="text-[9px] uppercase tracking-widest mb-4 text-[#D4AF37] font-black">{t.treatments.price}</div>
                    <div className="space-y-6 mb-8">
                      {service.options.map((opt, idx) => (
                        <div key={idx} className="flex flex-col items-center">
                          <div className="text-3xl md:text-5xl font-serif text-[#3E2723] flex items-baseline leading-none">
                             <span className="text-base mr-1 text-[#D4AF37] font-sans font-bold">€</span>{opt.price}
                          </div>
                          <div className="text-[8px] font-bold text-[#3E2723]/60 uppercase tracking-[0.1em] mt-1.5 bg-white px-3 py-1 rounded-full shadow-sm">{opt.duration}</div>
                        </div>
                      ))}
                    </div>
                    <a href={SHOP_INFO.phoneLink} className="w-full py-4 rounded-xl text-[10px] font-black uppercase tracking-widest text-white shadow-xl bg-[#720e0e] hover:bg-[#4a0a0a] transition-all transform active:scale-95">
                      {t.treatments.bookNow}
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Quality Section */}
        <section className="py-16 px-4 bg-[#FDF5EF]">
          <div className="max-w-6xl mx-auto text-center mb-10">
            <h2 className="text-2xl md:text-4xl font-serif text-[#3E2723] mb-3 font-bold">{t.anspruch.title}</h2>
            <div className="w-12 h-0.5 mx-auto bg-[#D4AF37]"></div>
          </div>
          <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {t.anspruch.items.map((item, i) => (
              <div key={i} className="p-6 md:p-8 rounded-xl bg-white border border-[#D4AF37]/5 text-center hover:shadow-lg transition-all duration-300">
                <div className="text-[#D4AF37] mb-4 flex justify-center">
                  {i === 0 && <Award size={32} />}
                  {i === 1 && <Clock size={32} />}
                  {i === 2 && <Thermometer size={32} />}
                  {i === 3 && <ShieldCheck size={32} />}
                </div>
                <h4 className="text-[#3E2723] font-bold uppercase tracking-widest text-[9px] mb-2">{item.title}</h4>
                <p className="text-[#2D1810]/70 text-[10px] md:text-xs leading-relaxed font-light">{item.text}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-16 md:py-20 px-4 bg-[#2D1810]">
          <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8">
            <div className="p-8 md:p-12 rounded-2xl bg-[#FDF5EF] shadow-2xl flex flex-col justify-between border-t-8 border-[#D4AF37]">
              <div>
                <p className="text-[#D4AF37] text-[10px] font-black uppercase tracking-widest mb-6">{t.contact.label}</p>
                <h3 className="text-2xl font-serif mb-8 text-[#3E2723] font-bold">{t.contact.title}</h3>
                <div className="flex items-start space-x-5 mb-8">
                  <div className="p-3 rounded-xl bg-[#3E2723] text-[#D4AF37] shrink-0 shadow-lg">
                    <MapPin size={24} />
                  </div>
                  <div className="cursor-pointer" onClick={() => window.open(SHOP_INFO.googleMapsUrl, '_blank')}>
                    <p className="text-[#3E2723] font-bold text-lg md:text-xl leading-tight hover:text-[#720e0e] transition-colors">{SHOP_INFO.address}</p>
                    <p className="mt-1 text-[8px] font-black uppercase tracking-widest text-[#D4AF37]">{t.contact.germany}</p>
                  </div>
                </div>
              </div>
              <div 
                className="relative h-56 rounded-xl overflow-hidden group cursor-pointer border border-[#3E2723]/10 shadow-inner"
                onClick={() => window.open(SHOP_INFO.googleMapsUrl, '_blank')}
              >
                 <img src="https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?auto=format&fit=crop&q=80&w=1000" alt="Location Map" className="absolute inset-0 w-full h-full object-cover grayscale brightness-90 transition-all duration-1000 group-hover:grayscale-0 group-hover:scale-105" />
                 <div className="absolute inset-0 flex items-center justify-center">
                    <div className="bg-[#D4AF37]/90 p-4 rounded-full text-white shadow-2xl transition-transform group-hover:scale-110">
                       <MapPin size={28} />
                    </div>
                 </div>
              </div>
            </div>
            
            <div className="p-8 md:p-12 rounded-2xl flex flex-col justify-center items-center text-center bg-white/5 border border-white/10 shadow-2xl relative overflow-hidden backdrop-blur-sm">
              <div className="absolute -top-12 -right-12 w-48 h-48 bg-[#D4AF37]/10 rounded-full blur-3xl"></div>
              <p className="text-[#D4AF37] uppercase tracking-widest text-[10px] font-black mb-6">{t.contact.reservation}</p>
              <div className="bg-[#D4AF37]/15 p-6 rounded-full mb-6 text-[#D4AF37] shadow-inner">
                <Phone size={44} />
              </div>
              <h2 className="text-2xl sm:text-3xl md:text-5xl font-serif text-white mb-10 tracking-tight font-bold whitespace-nowrap overflow-hidden">{SHOP_INFO.phone}</h2>
              <a href={SHOP_INFO.phoneLink} className="w-full max-w-xs py-5 bg-[#720e0e] text-white rounded-xl font-black uppercase text-[10px] tracking-widest shadow-2xl hover:bg-[#4a0a0a] transition-all hover:scale-[1.03]">
                 {t.contact.callCta}
              </a>
              <p className="mt-8 text-[8px] text-[#D4AF37]/60 uppercase tracking-widest font-black">{t.contact.note}</p>
            </div>
          </div>
        </section>
      </main>

      <footer className="py-16 px-4 bg-[#FDF5EF] border-t border-[#D4AF37]/10 text-center">
        <div className="max-w-6xl mx-auto">
          <div className="font-serif text-[#720e0e] text-2xl uppercase mb-2 font-bold tracking-tight">{t.hero.title}</div>
          <p className="text-[10px] tracking-[0.4em] opacity-50 text-[#3E2723] mb-6 uppercase font-bold">{t.footer.tagline}</p>
          <p className="text-[8px] tracking-widest uppercase opacity-40 text-[#2D1810] font-black">{t.footer.rights}</p>
        </div>
      </footer>
    </div>
  );
};

export default App;