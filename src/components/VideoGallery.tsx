"use client";

import { useState } from "react";
import { Play, Video, Film, CheckCircle2, ChevronRight, CornerDownRight } from "lucide-react";

interface VideoDetail {
    title: string;
    description: string;
    filePath: string;
    duration?: string;
    transcriptionSnippet?: string;
}

interface VideoCategory {
    id: string;
    title: string;
    label: string;
    image: string;
    description: string;
    videos: VideoDetail[];
}

const VIDEO_CATEGORIES: VideoCategory[] = [
    {
        id: "cantar-del-alma",
        title: "Cantar del Alma",
        label: "Música Española (Siglos XX & XXI)",
        image: "/imagenes/imagenes_Laura_fernandez_alcaide/09_laura-fernandez-alcalde-recital-con-pianista-escenario.jpg",
        description: "Recital para voz y piano de música lírica española contemporánea, adaptando versos clásicos y composiciones modernas.",
        videos: [
            {
                title: "Cantar del Alma - Concierto para Voz y Piano",
                description: "Presentación en directo del proyecto central, hilando la voz de la soprano con interpretaciones pianísticas emotivas.",
                filePath: "/videos/Cantar_del_Alma,_concierto_para_voz_y_piano_de_música_española_del_siglo_XX_y_XXI.mp4",
                duration: "03:12",
                transcriptionSnippet: "...Que la coraje esperanta se me ha convertido en verano, verano amor. Sube, sube, valdón mío..."
            },
            {
                title: "Mompou - Cantar del alma (San Juan de la Cruz)",
                description: "Pieza intimista al piano inspirada en el canto litúrgico medieval y los poemas de misticismo español.",
                filePath: "/videos/Mompou-Cantar_del_alma_San_Juan_de_la_Cruz.mp4",
                duration: "05:12",
                transcriptionSnippet: "...Aqueste eterno fuente que nace de esta fuente bien se que están capaz y tan potente, aunque este noche..."
            }
        ]
    },
    {
        id: "conciertos-medievales",
        title: "Conciertos Medievales",
        label: "Música Antigua, Renacentista & Sacra",
        image: "/imagenes/imagenes_Laura_fernandez_alcaide/05_laura-fernandez-alcalde-concierto-musica-antigua-clave.jpg",
        description: "Ciclos dedicados a evocar la acústica sagrada de los templos medievales y la polifonía del renacimiento europeo.",
        videos: [
            {
                title: "Chi vi dará più luce",
                description: "Interpretación renacentista italiana de corte sacra y amor cortés, centrada en la búsqueda y expresión mística.",
                filePath: "/videos/Chi_vi_dará_più_luce.mp4",
                duration: "01:50",
                transcriptionSnippet: "...Que vino la più lucha o que me lasi... Y tu mi alma y tu língua y tu mano no tiene que decir, ni pensar..."
            },
            {
                title: "Concierto Día de la Arquitectura (F. Varoter 1502)",
                description: "Extracto en acústica en directo, reflexionando sobre la dualidad entre el espacio arquitectónico, el sonido y el silencio.",
                filePath: "/videos/Concierto_Dia_de_la_Arquitectura_2011_F._Varoter_1502.mp4",
                duration: "04:15",
                transcriptionSnippet: "...El silencio no existe, siendo la tarea del compositor el descubrir los medios que consienten a los sonidos..."
            },
            {
                title: "A Canción da Auga - Recital de Canción y Poesía",
                description: "Una interpretación poética que emula la caída del agua y los sonidos del viento a través de la métrica gallega.",
                filePath: "/videos/A_Canción_da_Auga_recital_de_canción_y_poesía.mp4",
                duration: "02:45",
                transcriptionSnippet: "Préstame, chuvias, tuas palabras, etí, vento, asideas tan longas, déjame ote un rezo breve, río..."
            },
            {
                title: "O meu corasón che mando",
                description: "Tema tradicional gallego con acompañamiento al piano de Aurelio Viribay, repleto de melancolía y lirismo.",
                filePath: "/videos/O_meu_corasón_che_mando_Aurelio_Viribay).mp4",
                duration: "03:01",
                transcriptionSnippet: "O meu corazón che mando... cantando con cariño e verbas de amor..."
            }
        ]
    }
];

export default function VideoGallery() {
    const [selectedCategory, setSelectedCategory] = useState<string>("cantar-del-alma");
    const [playingVideoPath, setPlayingVideoPath] = useState<string | null>(null);

    const activeCategory = VIDEO_CATEGORIES.find(c => c.id === selectedCategory) || VIDEO_CATEGORIES[0];

    const handleSelectCategory = (catId: string) => {
        setSelectedCategory(catId);
        setPlayingVideoPath(null);
    };

    return (
        <div className="space-y-12">
            {/* Category Cards Selector */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto select-none">
                {VIDEO_CATEGORIES.map((cat) => {
                    const isSelected = selectedCategory === cat.id;
                    return (
                        <div
                            key={cat.id}
                            onClick={() => handleSelectCategory(cat.id)}
                            className={`relative aspect-[16/10] rounded-xl overflow-hidden cursor-pointer group shadow-lg border transition-all duration-300 ${isSelected
                                ? "border-[#800020] ring-4 ring-[#800020]/20 scale-102"
                                : "border-[#C5A059]/25 hover:border-[#800020]/50 hover:scale-101"
                                }`}
                        >
                            {/* Poster Image */}
                            <img
                                src={cat.image}
                                alt={cat.title}
                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                            />

                            {/* Mask overlay */}
                            <div className={`absolute inset-0 transition-all duration-300 flex flex-col justify-end p-6 ${isSelected
                                ? "bg-gradient-to-t from-[#800020]/95 via-[#800020]/40 to-black/10"
                                : "bg-gradient-to-t from-stone-900/90 via-black/35 to-transparent group-hover:from-[#800020]/80"
                                }`}>
                                <span className="text-[10px] font-bold tracking-[0.2em] text-[#E9C168] uppercase mb-1">
                                    {cat.label}
                                </span>
                                <h4 className="font-serif text-xl sm:text-2xl font-bold text-white tracking-wide leading-snug">
                                    {cat.title}
                                </h4>
                                <p className="text-stone-200 text-xs mt-1.5 line-clamp-2 font-serif italic font-light">
                                    {cat.description}
                                </p>

                                <div className="mt-4 flex items-center justify-between border-t border-white/10 pt-3">
                                    <span className="text-[10px] text-stone-300 font-sans tracking-wide">
                                        {cat.videos.length} vídeos disponibles
                                    </span>
                                    <span className="text-xs text-[#E9C168] font-bold flex items-center gap-1 group-hover:translate-x-1 transition duration-200">
                                        Explorar
                                        <ChevronRight className="w-3.5 h-3.5" />
                                    </span>
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>

            {/* List and Player Section */}
            <div className="bg-[#FAF9F6] border border-[#C5A059]/30 rounded-2xl p-6 sm:p-8 shadow-xl shadow-[#800020]/5 animate-fadeIn">
                <div className="border-b border-[#C5A059]/20 pb-4 mb-6">
                    <span className="text-xs uppercase font-bold tracking-widest text-[#C5A059]">
                        Auditorio Digital • Selección Activa
                    </span>
                    <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#800020] mt-1">
                        Vídeos de: {activeCategory.title}
                    </h3>
                </div>

                {/* Videos grid */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                    {/* Main Video Player Area (col-span-7) */}
                    <div className="lg:col-span-7 flex flex-col space-y-4">
                        <div className="relative aspect-video bg-black rounded-lg overflow-hidden border border-stone-200 shadow-lg">
                            {playingVideoPath ? (
                                <video
                                    key={playingVideoPath}
                                    src={playingVideoPath}
                                    controls
                                    autoPlay
                                    className="w-full h-full object-contain"
                                />
                            ) : (
                                <div
                                    onClick={() => setPlayingVideoPath(activeCategory.videos[0].filePath)}
                                    className="relative w-full h-full cursor-pointer group flex items-center justify-center bg-stone-900"
                                >
                                    <img
                                        src={activeCategory.image}
                                        alt="Reproducir"
                                        className="absolute inset-0 w-full h-full object-cover filter brightness-[0.4] group-hover:brightness-[0.45] transition duration-500"
                                    />

                                    <div className="relative z-10 text-center px-6">
                                        <button
                                            className="w-16 h-16 rounded-full bg-[#800020]/95 hover:bg-[#800020] text-white flex items-center justify-center shadow-lg group-hover:scale-110 active:scale-95 transition-all border border-[#E9C168] mx-auto mb-4"
                                            aria-label="Reproducir primer vídeo"
                                        >
                                            <Play className="w-7 h-7 fill-current translate-x-0.5" />
                                        </button>
                                        <p className="text-xs uppercase tracking-wider text-[#E9C168] font-bold">
                                            Reproducir primer corte
                                        </p>
                                        <p className="text-[#FAF9F6]/85 font-serif italic text-sm mt-1">
                                            {activeCategory.videos[0].title}
                                        </p>
                                    </div>
                                </div>
                            )}
                        </div>

                        {/* Selected Video Metadata Details */}
                        {(() => {
                            const currentVid = activeCategory.videos.find(v => v.filePath === playingVideoPath) || activeCategory.videos[0];
                            return (
                                <div className="bg-white p-5 rounded-lg border border-[#C5A059]/20 shadow-sm transition duration-300">
                                    <h4 className="font-serif text-lg font-bold text-[#800020] mb-2">
                                        {currentVid.title}
                                    </h4>
                                    <p className="text-xs sm:text-sm text-[#1C1C1C]/75 leading-relaxed mb-4">
                                        {currentVid.description}
                                    </p>

                                    {currentVid.transcriptionSnippet && (
                                        <div className="bg-[#FAF9F6] border-l-4 border-[#C5A059] p-3 rounded-r-md">
                                            <div className="flex items-center text-[10px] tracking-wider uppercase font-bold text-stone-500 mb-1">
                                                <CornerDownRight className="w-3.5 h-3.5 mr-1" />
                                                Transcripción / Lírica:
                                            </div>
                                            <p className="font-serif text-xs italic text-stone-700 leading-relaxed text-justify">
                                                "{currentVid.transcriptionSnippet}"
                                            </p>
                                        </div>
                                    )}
                                </div>
                            );
                        })()}
                    </div>

                    {/* Sidebar Playlist selection (col-span-5) */}
                    <div className="lg:col-span-5 space-y-3">
                        <div className="text-[10px] font-bold tracking-widest text-[#C5A059] uppercase mb-1 flex items-center">
                            <Film className="w-3.5 h-3.5 mr-1.5" />
                            Lista de reproducción
                        </div>

                        {activeCategory.videos.map((vid, index) => {
                            const isPlaying = playingVideoPath === vid.filePath || (!playingVideoPath && index === 0);
                            return (
                                <button
                                    key={index}
                                    onClick={() => setPlayingVideoPath(vid.filePath)}
                                    className={`w-full text-left p-4 rounded-xl border transition-all duration-300 flex items-start gap-4 ${isPlaying
                                        ? "bg-[#800020]/5 border-[#800020] shadow-sm"
                                        : "bg-white border-stone-200 hover:border-[#800020]/50"
                                        }`}
                                >
                                    {/* Number / Play indicator */}
                                    <div className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 text-xs font-bold ${isPlaying
                                        ? "bg-[#800020] text-white"
                                        : "bg-stone-100 text-stone-600"
                                        }`}>
                                        {isPlaying ? (
                                            <Play className="w-3 h-3 fill-current translate-x-0.5" />
                                        ) : (
                                            index + 1
                                        )}
                                    </div>

                                    {/* Title & Desc */}
                                    <div className="flex-1 min-w-0">
                                        <div className="flex items-center justify-between gap-2">
                                            <h5 className={`font-serif text-sm font-bold truncate ${isPlaying ? "text-[#800020]" : "text-stone-900"
                                                }`}>
                                                {vid.title}
                                            </h5>
                                            {vid.duration && (
                                                <span className="text-[10px] text-stone-400 font-mono">
                                                    {vid.duration}
                                                </span>
                                            )}
                                        </div>
                                        <p className="text-xs text-stone-500 mt-1 line-clamp-2">
                                            {vid.description}
                                        </p>
                                    </div>
                                </button>
                            );
                        })}
                    </div>
                </div>
            </div>
        </div>
    );
}
