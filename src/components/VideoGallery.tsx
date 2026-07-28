"use client";

import { useState } from "react";
import { Play } from "lucide-react";

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
                filePath: "/videos/cantar_del_alma_concierto.mp4",
                duration: "03:12",
                transcriptionSnippet: "...Que la coraje esperanta se me ha convertido en verano, verano amor. Sube, sube, valdón mío..."
            }
        ]
    }
];

export default function VideoGallery() {
    const [playingVideoPath, setPlayingVideoPath] = useState<string | null>(null);

    const activeCategory = VIDEO_CATEGORIES[0];

    return (
        <div className="space-y-12">
            {/* List and Player Section */}
            <div className="bg-[#FAF9F6] border border-[#C5A059]/30 rounded-2xl p-6 sm:p-8 shadow-xl shadow-[#800020]/5 animate-fadeIn">
                <div className="border-b border-[#C5A059]/20 pb-4 mb-6">
                    <span className="text-xs uppercase font-bold tracking-widest text-[#C5A059]">
                        Auditorio Digital
                    </span>
                    <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#800020] mt-1">
                        Cantar del Alma
                    </h3>
                </div>

                {/* Videos centered layout */}
                <div className="max-w-4xl mx-auto flex flex-col space-y-4">
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
                    <div className="bg-white p-5 rounded-lg border border-[#C5A059]/20 shadow-sm transition duration-300">
                        <h4 className="font-serif text-lg font-bold text-[#800020] mb-2">
                            {activeCategory.videos[0].title}
                        </h4>
                        <p className="text-xs sm:text-sm text-[#1C1C1C]/75 leading-relaxed">
                            {activeCategory.videos[0].description}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}
