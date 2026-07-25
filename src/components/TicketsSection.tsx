"use client";

import React from "react";
import { Ticket, Calendar, MapPin, Clock, ShieldCheck, Mail, Phone, Users, Layers, Award, Coins } from "lucide-react";

interface TicketsSectionProps {
    idEvent: string;
}

export default function TicketsSection({ idEvent }: TicketsSectionProps) {
    // Construct the Giglon url
    const giglonUrl = `https://www.giglon.com/todos?idEvent=${idEvent}`;

    return (
        <section id="entradas" className="py-24 bg-[#FAF9F6] scroll-mt-24 font-sans">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                {/* Section Header */}
                <div className="text-center mb-16">
                    <span className="text-xs uppercase tracking-widest text-[#C5A059] font-bold block mb-2">
                        Reserva de Localidades
                    </span>
                    <h2 className="font-serif text-3xl sm:text-5xl font-bold text-[#800020] uppercase tracking-wide">
                        Adquisición de Entradas
                    </h2>
                    <p className="text-sm text-[#1C1C1C]/60 mt-3 max-w-2xl mx-auto">
                        Asegure su asistencia al concierto "Cantar del Alma" en el emblemático Ateneo de Madrid. Venta oficial y directa gestionada a través de Giglon.
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">

                    {/* Details & Info Column */}
                    <div className="lg:col-span-4 space-y-6">

                        {/* Event Info Card */}
                        <div className="bg-white border border-[#C5A059]/20 rounded-xl p-6 shadow-sm">
                            <h3 className="font-serif text-xl font-bold text-[#800020] mb-4 border-b border-[#C5A059]/10 pb-2">
                                Detalles del Evento
                            </h3>

                            <div className="space-y-4 text-sm text-[#1C1C1C]/80">
                                <div className="flex items-start">
                                    <Calendar className="w-5 h-5 text-[#800020] mr-3 mt-0.5 shrink-0" />
                                    <div>
                                        <span className="block font-semibold">Fecha:</span>
                                        <span>Domingo, 22 de Noviembre de 2026</span>
                                    </div>
                                </div>

                                <div className="flex items-start">
                                    <Clock className="w-5 h-5 text-[#800020] mr-3 mt-0.5 shrink-0" />
                                    <div>
                                        <span className="block font-semibold">Horario:</span>
                                        <span>12:30 h.</span>
                                    </div>
                                </div>

                                <div className="flex items-start">
                                    <MapPin className="w-5 h-5 text-[#800020] mr-3 mt-0.5 shrink-0" />
                                    <div>
                                        <span className="block font-semibold">Lugar:</span>
                                        <span>Sala de Conciertos, Ateneo de Madrid</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* General Conditions / Policies card */}
                        <div className="bg-[#800020]/5 border border-[#800020]/20 rounded-xl p-6">
                            <h3 className="font-serif text-lg font-bold text-[#800020] mb-3 flex items-center">
                                <ShieldCheck className="w-5 h-5 mr-2" />
                                Información de Venta
                            </h3>
                            <ul className="text-xs text-[#1C1C1C]/80 space-y-2 list-disc list-inside">
                                <li>Gastos de gestión online según tarifas de Giglon.</li>
                                <li>Los socios del Ateneo disponen de entradas reservadas en taquilla especial según normativa del centro.</li>
                                <li>Las entradas adquiridas corresponden al evento oficial "Cantar del Alma" de la fecha y hora indicadas.</li>
                                <li>No se admiten cambios ni devoluciones fuera del canal regulado.</li>
                            </ul>
                        </div>

                        {/* Assistance Card */}
                        <div className="bg-white border border-[#C5A059]/20 rounded-xl p-6 shadow-sm">
                            <h4 className="font-serif text-base font-bold text-[#800020] mb-2">
                                ¿Necesita ayuda con la compra?
                            </h4>
                            <p className="text-xs text-[#1C1C1C]/65 mb-4">
                                Si tiene alguna consulta o incidencia técnica durante el proceso de adquisición, contacte con nuestra secretaría:
                            </p>

                            <div className="space-y-2 text-xs font-semibold text-[#1C1C1C]/80">
                                <a
                                    href="mailto:info@ccmfalla.com"
                                    className="flex items-center hover:text-[#800020] transition duration-200"
                                >
                                    <Mail className="w-4 h-4 mr-2 text-[#800020]" />
                                    info@ccmfalla.com
                                </a>
                                <a
                                    href="tel:660957863"
                                    className="flex items-center hover:text-[#800020] transition duration-200"
                                >
                                    <Phone className="w-4 h-4 mr-2 text-[#800020]" />
                                    +34 660 957 863
                                </a>
                            </div>
                        </div>

                    </div>

                    {/* Ticket Widget Column */}
                    <div className="lg:col-span-8">
                        <div className="bg-white border border-[#C5A059]/30 rounded-xl overflow-hidden shadow-lg">

                            {/* Header style widget bar - Granate burgundy color */}
                            <div className="bg-[#800020] px-6 py-4 flex items-center justify-between border-b border-[#C5A059]/20 text-white">
                                <div className="flex items-center space-x-3">
                                    <Ticket className="w-6 h-6 text-[#E9C168]" />
                                    <span className="font-serif text-base sm:text-lg font-bold tracking-wide">
                                        Taquilla Virtual Oficial
                                    </span>
                                </div>
                                <span className="text-[10px] sm:text-xs uppercase bg-[#FAF9F6]/20 px-2 py-1 rounded text-white font-mono">
                                    Transacción Segura
                                </span>
                            </div>

                            {/* Main Ticket Redirection Card - Rich Giglon Preview */}
                            <div className="flex flex-col md:flex-row bg-white group select-none">
                                {/* Left/Top Image Banner */}
                                <div className="md:w-1/2 relative overflow-hidden h-64 md:h-auto min-h-[300px]">
                                    <img
                                        src="/imagenes/imagenes_Laura_fernandez_alcaide/14_laura-fernandez-alcalde-e-irene-de-juan-retrato-duo.jpg"
                                        alt="Laura Fernández Alcalde e Irene de Juan"
                                        className="w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-500"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
                                    <span className="absolute top-4 left-4 bg-[#800020] text-white text-[9px] uppercase font-bold tracking-widest px-3 py-1 rounded shadow-md">
                                        Venta Oficial
                                    </span>
                                </div>

                                {/* Right/Bottom Details Box */}
                                <div className="md:w-1/2 p-6 sm:p-8 flex flex-col justify-between bg-gradient-to-br from-[#FAF9F6] to-white border-t md:border-t-0 md:border-l border-[#C5A059]/15">
                                    <div className="space-y-4">
                                        <div className="text-left">
                                            <span className="text-[9px] uppercase tracking-wider text-[#C5A059] font-bold">
                                                Taquilla Giglon
                                            </span>
                                            <h3 className="font-sans text-sm sm:text-base font-bold text-stone-900 leading-snug mt-1 uppercase tracking-wide">
                                                VENTA DE ENTRADAS | Cantar del Alma | Ateneo de Madrid | GIGLON
                                            </h3>
                                        </div>

                                        <p className="text-xs sm:text-sm text-[#1C1C1C]/75 leading-relaxed text-left italic">
                                            Tenemos planes para ti: Cantar del Alma. ¿Te lo vas a perder?
                                        </p>
                                        <p className="text-[11px] text-[#1C1C1C]/60 leading-relaxed text-left">
                                            Consiga sus localidades de forma rápida y segura en la plataforma de venta oficial de Giglon. Será redirigido al portal de venta en una pestaña nueva.
                                        </p>
                                    </div>

                                    <div className="mt-8 space-y-4">
                                        <a
                                            href={giglonUrl}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="w-full inline-flex items-center justify-center px-6 py-3.5 bg-[#800020] hover:bg-[#800020]/95 text-white text-[10px] font-bold uppercase tracking-widest rounded-md shadow-lg shadow-[#800020]/15 hover:scale-[1.01] transition duration-200 cursor-pointer select-none"
                                        >
                                            <Ticket className="w-4 h-4 mr-2" />
                                            Abrir Taquilla en Giglon
                                        </a>

                                        <div className="flex items-center justify-center gap-1.5 text-[9px] text-stone-400 font-bold uppercase tracking-wider border-t border-[#C5A059]/10 pt-3">
                                            <ShieldCheck className="w-3.5 h-3.5 text-[#C5A059]" />
                                            Transacción 100% Segura
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>

                </div>

                {/* Sale Conditions Grid */}
                <div className="mt-16 border-t border-[#C5A059]/20 pt-16">
                    <h3 className="font-serif text-2xl font-bold text-[#800020] text-center mb-10 uppercase tracking-wider">
                        Modalidades de Venta y Condiciones
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {/* Option 1: Localidades Sueltas */}
                        <div className="bg-white border border-[#C5A059]/20 rounded-xl p-6 shadow-sm text-center flex flex-col items-center">
                            <div className="w-12 h-12 rounded-full bg-[#800020]/5 flex items-center justify-center mb-4 text-[#800020] border border-[#800020]/10">
                                <Users className="w-5 h-5" />
                            </div>
                            <h4 className="font-serif text-sm font-bold text-stone-900 uppercase tracking-widest mb-2 border-b border-[#C5A059]/10 pb-1.5 w-full">
                                Localidades Sueltas
                            </h4>
                            <p className="text-xs text-[#1C1C1C]/75 leading-relaxed">
                                Entradas para cada uno de los 10 conciertos del Ciclo.
                            </p>
                        </div>

                        {/* Option 2: Abonos */}
                        <div className="bg-white border border-[#C5A059]/20 rounded-xl p-6 shadow-sm text-center flex flex-col items-center">
                            <div className="w-12 h-12 rounded-full bg-[#800020]/5 flex items-center justify-center mb-4 text-[#800020] border border-[#800020]/10">
                                <Layers className="w-5 h-5" />
                            </div>
                            <h4 className="font-serif text-sm font-bold text-stone-900 uppercase tracking-widest mb-2 border-b border-[#C5A059]/10 pb-1.5 w-full">
                                Abonos
                            </h4>
                            <p className="text-xs text-[#1C1C1C]/75 leading-relaxed">
                                Existen 4 tipos de abonos. Reserve el suyo y obtenga un mejor precio.
                            </p>
                        </div>

                        {/* Option 3: Socios del Ateneo */}
                        <div className="bg-white border border-[#C5A059]/20 rounded-xl p-6 shadow-sm text-center flex flex-col items-center">
                            <div className="w-12 h-12 rounded-full bg-[#800020]/5 flex items-center justify-center mb-4 text-[#800020] border border-[#800020]/10">
                                <Award className="w-5 h-5" />
                            </div>
                            <h4 className="font-serif text-sm font-bold text-stone-900 uppercase tracking-widest mb-2 border-b border-[#C5A059]/10 pb-1.5 w-full">
                                Socios del Ateneo
                            </h4>
                            <p className="text-xs text-[#1C1C1C]/75 leading-relaxed">
                                Todos los conciertos tendrán 25 entradas reservadas para los socios del Ateneo a un precio de 8€.
                            </p>
                        </div>

                        {/* Option 4: Taquilla del Ateneo */}
                        <div className="bg-white border border-[#C5A059]/20 rounded-xl p-6 shadow-sm text-center flex flex-col items-center">
                            <div className="w-12 h-12 rounded-full bg-[#800020]/5 flex items-center justify-center mb-4 text-[#800020] border border-[#800020]/10">
                                <Coins className="w-5 h-5" />
                            </div>
                            <h4 className="font-serif text-sm font-bold text-stone-900 uppercase tracking-widest mb-2 border-b border-[#C5A059]/10 pb-1.5 w-full">
                                Taquilla del Ateneo
                            </h4>
                            <p className="text-xs text-[#1C1C1C]/75 leading-relaxed">
                                Desde una hora antes del concierto podrá adquirir su localidad de forma presencial. Rogamos pago en efectivo. Entradas hasta completar aforo.
                            </p>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
}
