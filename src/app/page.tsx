import fs from "fs";
import path from "path";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import PerformersSection from "@/components/PerformersSection";
import VideoGallery from "@/components/VideoGallery";
import TicketsSection from "@/components/TicketsSection";
import HeroMedia from "@/components/HeroMedia";

export const dynamic = "force-dynamic";
import {
  Calendar, MapPin, Shield, Compass, FileText, CheckCircle2,
  HelpCircle, Mail, Phone, Clock, Award, Users, Music
} from "lucide-react";

export default async function Home() {

  const idEvent = "cantar-del-alma";

  return (
    <div className="bg-[#FAF9F6] text-[#1C1C1C] min-h-screen selection:bg-[#800020] selection:text-white">
      {/* 1. Header Fijo */}
      <Navbar />

      {/* 2. Hero Section Editorial con Vídeo de Fondo Enmarcado */}
      <section className="relative bg-[#FAF9F6] pt-24 sm:pt-28 pb-8 sm:pb-10 border-b border-[#C5A059]/15 flex flex-col items-center justify-center overflow-hidden">
        {/* Subtle decorative background elements */}
        <div className="absolute inset-0 opacity-[0.02] bg-[radial-gradient(#800020_1px,transparent_1px)] [background-size:16px_16px] pointer-events-none" />

        {/* Hero Content */}
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center z-10 w-full">
          <div className="text-[10px] sm:text-[12px] tracking-widest text-[#C5A059] uppercase font-bold mb-2">
            Ciclo de conciertos Manuel de Falla
          </div>

          <h1 className="font-serif text-3xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-[#800020] uppercase leading-[1.1] mb-2 sm:mb-3 select-none">
            Cantar del Alma
          </h1>

          <div className="font-serif text-xs sm:text-base md:text-lg text-stone-500 max-w-4xl mb-3 sm:mb-4 italic tracking-wide leading-relaxed">
            <p className="block">Recital lírico de canto y piano • Ateneo de Madrid</p>
            <p className="block mt-0.5 sm:mt-1">Domingo, 22 de Noviembre de 2026 — 12:30 h.</p>
          </div>

          {/* Framed Media Block mimicking ccmfalla.com Paintings */}
          <div className="max-w-6xl w-full bg-white p-2 sm:p-3 rounded-lg border border-[#C5A059]/25 shadow-xl shadow-[#800020]/5 mb-4 hover:shadow-2xl transition duration-500">
            <HeroMedia />
            {/* Caption in the ccmfalla.com Painting Style */}
            <div className="mt-4 text-center space-y-1 select-none border-t border-[#C5A059]/10 pt-4">
              <p className="font-serif italic font-bold text-[#800020] text-sm sm:text-base">
                "Cantar del Alma"
              </p>
              <p className="tracking-widest uppercase text-[9px] sm:text-[10px] text-stone-500 font-semibold">
                Ciclo de Conciertos Manuel de Falla • Auditorio Virtual
              </p>
              <p className="text-[9px] text-stone-400">
                Copyright © Ciclo de Conciertos Manuel de Falla. Todos los derechos reservados.
              </p>
            </div>
          </div>

          {/* Call to Actions in Editorial Style */}
          <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto items-center justify-center mt-6">
            <a
              href="#entradas"
              className="inline-flex items-center justify-center px-8 py-3.5 border border-transparent text-xs font-bold uppercase tracking-widest rounded-md text-white bg-[#800020] hover:bg-[#800020]/95 shadow-md shadow-[#800020]/15 hover:scale-102 transition duration-200"
            >
              Adquirir Entradas
            </a>
            <a
              href="/docs/Concierto 22 de Noviembre de 2026.pdf"
              download="Concierto 22 de Noviembre de 2026.pdf"
              className="inline-flex items-center justify-center px-8 py-3.5 border border-[#C5A059] text-xs font-bold uppercase tracking-widest rounded-md text-[#800020] hover:text-white bg-white hover:bg-[#800020] shadow-sm hover:scale-102 transition duration-250"
            >
              <FileText className="w-4 h-4 mr-2" />
              Descargar programa PDF
            </a>
          </div>
        </div>

        {/* Scroll indicator - refined */}
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-stone-400 text-[10px] tracking-widest uppercase flex flex-col items-center gap-1.5 animate-bounce select-none">
          <svg className="w-3.5 h-3.5 text-stone-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </section>

      {/* 3. Bloque de Confianza / Resumen Rápido */}
      <section id="viaje" className="py-16 bg-white border-y border-[#C5A059]/25 scroll-mt-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">

            {/* Card 1 */}
            <div className="bg-[#FAF9F6] p-5 rounded-lg border border-[#C5A059]/20 text-center hover:shadow-md transition">
              <span className="block text-2xl font-serif font-black text-[#800020] mb-1">22 Nov</span>
              <span className="block text-xs uppercase tracking-widest text-[#1C1C1C]/60 font-semibold">Domingo, 12:30h</span>
            </div>

            {/* Card 2 */}
            <div className="bg-[#FAF9F6] p-5 rounded-lg border border-[#C5A059]/20 text-center hover:shadow-md transition">
              <span className="block text-2xl font-serif font-black text-[#800020] mb-1">Ateneo</span>
              <span className="block text-xs uppercase tracking-widest text-[#1C1C1C]/60 font-semibold">Madrid</span>
            </div>

            {/* Card 3 */}
            <div className="bg-[#FAF9F6] p-5 rounded-lg border border-[#C5A059]/20 text-center hover:shadow-md transition">
              <span className="block text-2xl font-serif font-black text-[#800020] mb-1">Lírica</span>
              <span className="block text-xs uppercase tracking-widest text-[#1C1C1C]/60 font-semibold">Canto y Piano</span>
            </div>

            {/* Card 4 */}
            <div className="bg-[#FAF9F6] p-5 rounded-lg border border-[#C5A059]/20 text-center hover:shadow-md transition">
              <span className="block text-xl font-serif font-bold text-[#800020] mb-2 leading-none">L. Fernández</span>
              <span className="block text-xs uppercase tracking-widest text-[#1C1C1C]/60 font-semibold">Soprano</span>
            </div>

            {/* Card 5 */}
            <div className="bg-[#FAF9F6] p-5 rounded-lg border border-[#C5A059]/20 text-center hover:shadow-md transition">
              <span className="block text-xl font-serif font-bold text-[#800020] mb-2 leading-none">I. de Juan</span>
              <span className="block text-xs uppercase tracking-widest text-[#1C1C1C]/60 font-semibold">Pianista</span>
            </div>

            {/* Card 6 */}
            <div className="bg-[#FAF9F6] p-5 rounded-lg border border-[#c5a059]/25 text-center hover:shadow-md transition">
              <span className="block text-2xl font-serif font-black text-[#2E5A44] mb-1">Giglon</span>
              <span className="block text-xs uppercase tracking-widest text-[#1C1C1C]/60 font-semibold">Taquilla Oficial</span>
            </div>

          </div>
        </div>
      </section>

      {/* 4. Introducción Emocional */}
      <section className="py-24 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center scroll-mt-24">
        <span className="text-xs uppercase tracking-widest text-[#C5A059] font-bold block mb-3">
          Cantar del Alma
        </span>
        <h2 className="font-serif text-3xl sm:text-5xl font-bold text-[#800020] uppercase tracking-wide mb-8">
          El Arte de la Canción Española
        </h2>

        <div className="space-y-6 text-base sm:text-lg text-[#1C1C1C]/80 leading-relaxed text-justify sm:text-center">
          <p>
            El recital lírico "Cantar del Alma" propone un viaje sonoro singular que conecta la hondura espiritual de la canción medieval y del Renacimiento con la brillantez folclórica y expresiva de la canción lírica española del siglo XX.
          </p>
          <p>
            A través de la voz de Laura Fernández Alcalde y el piano de Irene de Juan Bernabeu, el programa hilvana piezas íntimas de Federico García Lorca, Manuel de Falla, Joaquín Turina y Enrique Granados, estableciendo un diálogo atemporal de gran belleza y poesía en la histórica Sala de Conciertos del Ateneo de Madrid.
          </p>
        </div>

        <blockquote className="mt-12 p-8 border border-[#E9C168] bg-[#E9C168]/5 rounded-xl text-left relative overflow-hidden">
          <span className="absolute -top-10 -left-6 font-serif text-[180px] text-[#E9C168]/15 leading-none select-none">“</span>
          <p className="font-serif italic text-lg sm:text-xl text-[#800020] relative z-10">
            Las canciones son el resumen del sentimiento de un pueblo y de la historia lírica de su alma.
          </p>
          <cite className="block text-xs uppercase tracking-wider text-[#C5A059] font-bold mt-4 font-sans not-italic">
            — Federico García Lorca
          </cite>
        </blockquote>
      </section>

      {/* 5. El Espacio de Concierto */}
      <section className="py-24 bg-white border-y border-[#C5A059]/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

            {/* Text description */}
            <div className="space-y-6">
              <span className="text-xs uppercase tracking-widest text-[#C5A059] font-bold block">
                El Escenario Histórico
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#800020] uppercase tracking-wide">
                La Sala de Conciertos del Ateneo
              </h2>
              <div className="space-y-4 text-sm sm:text-base text-[#1C1C1C]/75 leading-relaxed">
                <p>
                  Fundado en 1835, el Ateneo de Madrid ha sido un faro de la vida intelectual, cultural y artística de España, albergando a algunas de las figuras más ilustres de la Generación del 98, la Generación del 14 y la Generación del 27.
                </p>
                <p>
                  Su histórica Sala de Conciertos posee una acústica excepcional y un ambiente íntimo idóneo para la lírica española de cámara. Entre sus muros, poetas y compositores han compartido y alumbrado obras emblemáticas de nuestra literatura musical.
                </p>
                <p>
                  En este entorno inigualable, "Cantar del Alma" revive los cancioneros renacentistas y las canciones populares transcritas por Lorca bajo la resonancia de los acordes de Falla y Granados.
                </p>
              </div>
            </div>

            {/* Visual aspect */}
            <div className="relative rounded-2xl overflow-hidden shadow-2xl group border border-[#C5A059]/30">
              <img
                src="/imagenes/04_salon_conciertos.jpg"
                alt="Sala de Conciertos del Ateneo de Madrid"
                className="w-full h-[400px] object-cover group-hover:scale-105 transition duration-700"
              />
              {/* Dark red gradient cover at the bottom */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#800020]/95 via-black/20 to-transparent pointer-events-none" />

              {/* Rounded crown overlay style */}
              <div className="absolute bottom-6 left-6 right-6 flex items-center gap-4 text-white">
                <div className="flex-shrink-0 w-11 h-11 rounded-full border border-[#E9C168] bg-[#800020]/60 flex items-center justify-center text-[#E9C168] shadow-md">
                  <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                    <path d="M12 2l2.5 5.5L20 8.5l-4.5 4 1.5 6-5-3-5 3 1.5-6-4.5-4 5.5-1z" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-serif text-xl sm:text-2xl font-bold tracking-wide">Salón de Actos</h4>
                  <p className="text-[9px] sm:text-[10px] tracking-[0.15em] text-[#E9C168] uppercase font-semibold font-sans mt-0.5">
                    Sala de Conciertos, Ateneo de Madrid
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 6. Intérpretes */}
      <section id="interpretes" className="py-24 bg-[#FAF9F6] scroll-mt-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-xs uppercase tracking-widest text-[#C5A059] font-bold block mb-2">
              Artistas del Concierto
            </span>
            <h2 className="font-serif text-3xl sm:text-5xl font-bold text-[#800020] uppercase tracking-wide">
              Intérpretes
            </h2>
            <p className="text-sm text-[#1C1C1C]/60 mt-3 max-w-xl mx-auto">
              Biografía y galería fotográfica de las artistas del concierto.
            </p>
          </div>

          <PerformersSection />
        </div>
      </section>

      {/* 9. Sección de Vídeos */}
      <section id="videos" className="py-24 bg-white border-y border-[#C5A059]/20 scroll-mt-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-xs uppercase tracking-widest text-[#C5A059] font-bold block mb-2">
              Auditorio Virtual
            </span>
            <h2 className="font-serif text-3xl sm:text-5xl font-bold text-[#800020] uppercase tracking-wide">
              Vídeos Relacionados
            </h2>
            <p className="text-sm text-[#1C1C1C]/60 mt-3 max-w-xl mx-auto">
              Grabaciones de conciertos medievales e interpretaciones líricas de Cantar del Alma.
            </p>
          </div>

          <VideoGallery />
        </div>
      </section>

      {/* 10. Sección de Entradas */}
      <TicketsSection idEvent={idEvent} />

      {/* 13. Datos Directos de Contacto */}
      <section className="py-24 bg-white border-t border-[#C5A059]/25 text-center font-sans">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <span className="text-xs uppercase tracking-widest text-[#D4AF37] font-bold block mb-2">
            Atención Especializada
          </span>
          <h2 className="font-serif text-2xl sm:text-4xl font-bold text-[#800020] mb-4">
            ¿Tiene alguna consulta antes de reservar?
          </h2>
          <p className="text-xs sm:text-sm text-[#1C1C1C]/70 max-w-xl mx-auto mb-10">
            Póngase en contacto directamente con la secretaría organizadora del Ciclo de Conciertos Manuel de Falla. Estaremos encantados de resolver sus preguntas sobre el concierto.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-8 text-sm sm:text-base font-semibold">

            <a
              href="mailto:jose_manuel_hdezblanco@hotmail.com"
              className="inline-flex items-center justify-center px-6 py-3.5 border border-[#800020]/20 rounded-md text-[#800020] bg-[#800020]/5 hover:bg-[#800020]/10 transition shadow-sm"
            >
              <Mail className="w-5 h-5 mr-2 text-[#800020]" />
              jose_manuel_hdezblanco@hotmail.com
            </a>

            <a
              href="tel:660957863"
              className="inline-flex items-center justify-center px-6 py-3.5 border border-[#2E5A44]/20 rounded-md text-[#2E5A44] bg-[#2E5A44]/5 hover:bg-[#2E5A44]/10 transition shadow-sm"
            >
              <Phone className="w-5 h-5 mr-2 text-[#2E5A44]" />
              +34 660 957 863
            </a>

          </div>
        </div>
      </section>

      {/* 14. Footer Elegante */}
      <footer className="bg-[#1C1C1C] text-white py-12 font-sans border-t-2 border-[#C5A059]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-8 pb-10 border-b border-white/10">

            {/* Left brand column */}
            <div className="text-center md:text-left">
              <h3 className="font-serif text-lg font-bold text-[#E9C168]">
                Cantar del Alma
              </h3>
              <p className="text-xs text-white/50 mt-1 max-w-sm">
                Concierto lírico de canto y piano organizado por el Ciclo de Conciertos Manuel de Falla. Domingo, 22 de Noviembre de 2026.
              </p>
            </div>

            {/* Right actions links */}
            <div className="flex flex-wrap justify-center gap-4 text-xs font-semibold uppercase tracking-wider">
              <a
                href="/docs/Concierto 22 de Noviembre de 2026.pdf"
                download="Concierto 22 de Noviembre de 2026.pdf"
                className="px-4 py-2 border border-white/20 hover:border-[#E9C168] rounded text-white/80 hover:text-[#E9C168] transition"
              >
                Descargar programa PDF
              </a>
              <a
                href="#entradas"
                className="px-4 py-2 bg-[#800020] hover:bg-[#800020]/90 border border-transparent rounded text-white transition"
              >
                Adquirir Entradas
              </a>
            </div>

          </div>

          {/* Bottom rights info */}
          <div className="pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-white/40">
            <p>
              © {new Date().getFullYear()} Ciclo de conciertos Manuel de Falla. Todos los derechos reservados.
            </p>
            <div className="flex space-x-6">
              <span className="hover:text-white transition cursor-pointer">Inscripción</span>
              <span className="hover:text-white transition cursor-pointer">Privacidad y Cookies</span>
              <span className="hover:text-white transition cursor-pointer">Términos Generales</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
