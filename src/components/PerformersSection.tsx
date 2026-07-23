"use client";

import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, Video, Music, Globe } from "lucide-react";

interface Performer {
    id: string;
    name: string;
    title: string;
    bioParagraphs: string[];
    website: string;
    websiteLabel: string;
    images: string[];
}

const PERFORMERS: Performer[] = [
    {
        id: "laura",
        name: "Laura Fernández Alcalde",
        title: "Soprano",
        bioParagraphs: [
            "Soprano madrileña, realiza sus estudios superiores en la Escuela de Canto de Madrid, paralelamente a su incursión en muy variados mundos interpretativos y estilísticos, desde el Medievo y Renacimiento, pasando por el Barroco, hasta la canción de concierto y ópera de los siglos XVIII, XIX, XX y XXI, trabajando con multitud de maestros, buscando y adaptándose a diferentes técnicas interpretativas a lo largo de su dilatada carrera.",
            "Por ello, es su objetivo primordial dotar a todos sus proyectos de una expresividad personal y sincera, buscando la teatralidad y la expresión a todos los niveles.",
            "Colabora habitualmente con la compañía de danza La Phármaco, ha realizado trabajos audiovisuales con el cineasta británico Tom Skipp, ha participado en teatro clásico como cantante, y en multitud de montajes de diferentes estilos de música. Actualmente es profesora de canto en la RESAD de Madrid.",
            "El Petrarca Ensemble es un proyecto personal, en el que cuenta con la colaboración de muy diferentes artistas que le han acompañado durante toda su carrera, buscando hacer partícipe a un público del siglo XXI de una música bellísima, universal y única, aun desde la distancia temporal que separa una corte renacentista de un teatro o de un salón actual."
        ],
        website: "https://www.laurafernandezsoprano.es",
        websiteLabel: "laurafernandezsoprano.es",
        images: [
            "/imagenes/imagenes_Laura_fernandez_alcaide/01_laura-fernandez-alcalde-cantando-vestido-rojo-microfono-vintage.jpg",
            "/imagenes/imagenes_Laura_fernandez_alcaide/02_laura-fernandez-alcalde-recital-vestido-azul-con-pianista.jpg",
            "/imagenes/imagenes_Laura_fernandez_alcaide/03_laura-fernandez-alcalde-retrato-escenico-blanco-y-negro.jpg",
            "/imagenes/imagenes_Laura_fernandez_alcaide/04_laura-fernandez-alcalde-escena-conjunto-vocal.jpg",
            "/imagenes/imagenes_Laura_fernandez_alcaide/05_laura-fernandez-alcalde-concierto-musica-antigua-clave.jpg",
            "/imagenes/imagenes_Laura_fernandez_alcaide/06_laura-fernandez-alcalde-retrato-vestido-negro-estola-blanca.jpg",
            "/imagenes/imagenes_Laura_fernandez_alcaide/07_laura-fernandez-alcalde-recital-junto-al-piano.jpg",
            "/imagenes/imagenes_Laura_fernandez_alcaide/08_laura-fernandez-alcalde-personaje-barroco-vestuario-escenico.jpg",
            "/imagenes/imagenes_Laura_fernandez_alcaide/09_laura-fernandez-alcalde-recital-con-pianista-escenario.jpg",
            "/imagenes/imagenes_Laura_fernandez_alcaide/10_laura-fernandez-alcalde-cantando-con-mascara-teatral.jpg",
            "/imagenes/imagenes_Laura_fernandez_alcaide/11_laura-fernandez-alcalde-concierto-vestido-rojo-orquesta.jpg",
            "/imagenes/imagenes_Laura_fernandez_alcaide/12_laura-fernandez-alcalde-escena-teatral-con-actor.jpg",
            "/imagenes/imagenes_Laura_fernandez_alcaide/13_laura-fernandez-alcalde-primer-plano-vestuario-escenico.jpg",
            "/imagenes/imagenes_Laura_fernandez_alcaide/14_laura-fernandez-alcalde-e-irene-de-juan-retrato-duo.jpg"
        ]
    },
    {
        id: "irene",
        name: "Irene de Juan Bernabeu",
        title: "Pianista y Musicóloga",
        bioParagraphs: [
            "Pianista y musicóloga versátil, con una destacada carrera en la divulgación musical. Forma parte de la plantilla de Radio Clásica (RNE) en donde dirige y presenta programas como Una tarde en la ópera, Capriccio, o Viaje al centro de la ópera. Colabora con instituciones como la Orquesta y Coro Nacionales de España, la Escuela Reina Sofía, la Fundación Juan March o el Teatro Real presentando conciertos, realizando conferencias, escribiendo programas de mano e impartiendo cursos de formación.",
            "Como pianista, cuenta con una amplia trayectoria especializada en conciertos comentados y didácticos, tanto para público adulto como familiar. Ha actuado en numerosas salas de la geografía española y en festivales como el de Segovia, el Pianino de Valldemossa, o Pamplona Acción Musical, entre otros.",
            "Cursó estudios de piano en el Real Conservatorio Superior de Música de Madrid, la Universität Mozarteum, la Universidad Codarts de Rotterdam o la Schola Cantorum de París, obteniendo títulos de Grado, Máster y Postgrado en piano clásico. Desde 2016 forma dúo con la soprano Laura Fernández Alcalde.",
            "Ha sido profesora del Grado en Musicología de la Universidad Alfonso X El Sabio de Madrid, es co-fundadora de la escuela de música y espacio cultural Urkalia en Las Rozas de Madrid y es autora del ensayo sobre la relación entre música y palabra en el romanticismo Cantar el infinito, publicado en mayo de 2025 por la editorial Medio Tono y alabado por la crítica como uno de los mejores libros de divulgación musical publicados recientemente en castellano."
        ],
        website: "https://www.irenedejuan.com",
        websiteLabel: "irenedejuan.com",
        images: [
            "/imagenes/imagenes_irene_de_juan_bernabeu/Irene_de_Juan.jpeg",
            "/imagenes/imagenes_irene_de_juan_bernabeu/irene_brillando.jpg",
            "/imagenes/imagenes_irene_de_juan_bernabeu/irene_de_juan_en_la_radio.jpg",
            "/imagenes/imagenes_irene_de_juan_bernabeu/irene_pensativa.jpg",
            "/imagenes/imagenes_irene_de_juan_bernabeu/irene_poliedrica.jpg",
            "/imagenes/imagenes_irene_de_juan_bernabeu/irene_profesora.jpg",
            "/imagenes/imagenes_Laura_fernandez_alcaide/14_laura-fernandez-alcalde-e-irene-de-juan-retrato-duo.jpg"
        ]
    }
];

export default function PerformersSection() {
    const [selectedPerformer, setSelectedPerformer] = useState<string>("laura");
    const [carouselIndexes, setCarouselIndexes] = useState<{ [key: string]: number }>({
        laura: 0,
        irene: 0
    });

    const activePerformer = PERFORMERS.find(p => p.id === selectedPerformer) || PERFORMERS[0];
    const currentIndex = carouselIndexes[activePerformer.id] || 0;

    const handlePrev = (perfId: string, maxLen: number) => {
        setCarouselIndexes(prev => {
            const current = prev[perfId] || 0;
            const newIndex = current === 0 ? maxLen - 1 : current - 1;
            return { ...prev, [perfId]: newIndex };
        });
    };

    const handleNext = (perfId: string, maxLen: number) => {
        setCarouselIndexes(prev => {
            const current = prev[perfId] || 0;
            const newIndex = current === maxLen - 1 ? 0 : current + 1;
            return { ...prev, [perfId]: newIndex };
        });
    };

    return (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Elegant Tab Selectors */}
            <div className="flex justify-center space-x-6 border-b border-[#C5A059]/20 pb-4 mb-10 select-none">
                {PERFORMERS.map((perf) => (
                    <button
                        key={perf.id}
                        onClick={() => setSelectedPerformer(perf.id)}
                        className={`text-sm sm:text-base tracking-widest uppercase font-bold transition duration-300 relative py-2 ${selectedPerformer === perf.id
                            ? "text-[#800020] font-black"
                            : "text-stone-500 hover:text-[#800020]"
                            }`}
                    >
                        {perf.name}
                        {selectedPerformer === perf.id && (
                            <span className="absolute bottom-0 left-0 right-0 h-[2.5px] bg-[#800020] rounded-full animate-fadeIn" />
                        )}
                    </button>
                ))}
            </div>

            {/* Split Content Layout */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch">
                {/* Biography Text Column (col-span-7) */}
                <div className="lg:col-span-7 flex flex-col justify-between space-y-6">
                    <div className="space-y-4">
                        <div className="border-l-4 border-[#800020] pl-4 py-1">
                            <span className="text-xs tracking-widest text-[#C5A059] uppercase font-bold">
                                {activePerformer.title}
                            </span>
                            <h3 className="font-serif text-2xl sm:text-3xl font-black text-stone-900 mt-1">
                                {activePerformer.name}
                            </h3>
                        </div>

                        <div className="space-y-4 text-[#1C1C1C]/80 text-sm sm:text-base leading-relaxed text-justify">
                            {activePerformer.bioParagraphs.map((para, i) => (
                                <p key={i}>{para}</p>
                            ))}
                        </div>
                    </div>

                    <div className="pt-6 border-t border-stone-100 flex flex-col sm:flex-row gap-4 items-center justify-between">
                        {/* Performer Website Link */}
                        <a
                            href={activePerformer.website}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center text-xs tracking-wider uppercase font-bold text-[#C5A059] hover:text-[#800020] transition duration-200"
                        >
                            <Globe className="w-4 h-4 mr-2" />
                            {activePerformer.websiteLabel}
                        </a>
                    </div>
                </div>

                {/* Carousel Column (col-span-5) */}
                <div className="lg:col-span-5 flex flex-col justify-between bg-white p-4 sm:p-5 rounded-xl border border-[#C5A059]/25 shadow-lg shadow-[#800020]/5">
                    {/* Carousel Container */}
                    <div className="relative aspect-[4/5] sm:aspect-[4/3] lg:aspect-[4/5] rounded-lg overflow-hidden bg-stone-100 border border-stone-200 shadow-inner group">
                        <img
                            src={activePerformer.images[currentIndex]}
                            alt={`${activePerformer.name} - Imagen ${currentIndex + 1}`}
                            className="w-full h-full object-cover transition duration-300 select-none animate-fadeIn"
                        />

                        {/* Navigation Arrows (visible on hover) */}
                        <button
                            onClick={() => handlePrev(activePerformer.id, activePerformer.images.length)}
                            className="absolute left-3 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-black/45 text-white flex items-center justify-center hover:bg-[#800020]/90 hover:scale-105 transition duration-200 pointer-events-auto"
                            aria-label="Imagen anterior"
                        >
                            <ChevronLeft className="w-5 h-5" />
                        </button>
                        <button
                            onClick={() => handleNext(activePerformer.id, activePerformer.images.length)}
                            className="absolute right-3 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-black/45 text-white flex items-center justify-center hover:bg-[#800020]/90 hover:scale-105 transition duration-200 pointer-events-auto"
                            aria-label="Siguiente imagen"
                        >
                            <ChevronRight className="w-5 h-5" />
                        </button>

                        {/* Index indicator */}
                        <div className="absolute bottom-3 right-3 bg-black/60 text-white text-[9px] px-2 py-0.5 rounded-full font-sans tracking-wide">
                            {currentIndex + 1} / {activePerformer.images.length}
                        </div>
                    </div>

                    <div className="pt-5 mt-4 border-t border-stone-100 flex flex-col items-center select-none text-center">
                        <p className="font-serif italic font-bold text-[#800020] text-[11px] mb-4">
                            Galería Fotográfica de {activePerformer.name}
                        </p>

                        {/* Carousel Video button */}
                        <a
                            href="#videos"
                            className="w-full inline-flex items-center justify-center px-6 py-2.5 bg-[#800020] hover:bg-[#800020]/90 rounded text-xs font-bold uppercase tracking-widest text-white shadow-md transition duration-200"
                        >
                            <Video className="w-3.5 h-3.5 mr-2" />
                            Ver vídeos en acción
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}
