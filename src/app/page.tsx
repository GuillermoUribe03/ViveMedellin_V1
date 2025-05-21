// src/app/page.tsx
'use client';
import React from 'react';
import Link from 'next/link';

export default function ExploreGroups() {
  return (
    <div className="w-[1440px] h-[1024px] relative bg-white overflow-hidden font-['Instrument_Sans']">
      {/* Header */}
      <div className="w-[1440px] h-28 left-0 top-0 absolute shadow outline outline-1 outline-zinc-300 overflow-hidden">
        <div className="left-[1175px] top-[43px] absolute text-sky-900 text-2xl font-bold">Username</div>
        <div className="left-[345px] top-[10px] absolute inline-flex gap-4 items-center">
          <div className="w-36 h-24 py-5 rounded-[20px] flex justify-center items-center">
            <div className="w-14 h-14 bg-orange-500 rounded-full"></div>
          </div>
        </div>
        <div className="w-28 h-16 left-[30px] top-[26.91px] absolute bg-green-400 rounded-lg" />
      </div>

      {/* Sidebar */}
      <div className="w-[520px] h-[904px] left-0 top-[120px] absolute border-r border-zinc-300 overflow-hidden">
        <div className="px-5 pt-6 flex flex-col gap-4">
          <h2 className="text-3xl font-bold text-sky-900">Grupos y comunidades</h2>

          <div className="h-16 pl-3 pr-14 py-2 bg-white rounded-[30px] outline outline-1 outline-slate-300 flex items-center gap-3.5">
            <div className="w-4 h-4 outline outline-[3px] outline-stone-500" />
            <span className="text-stone-500 text-xl">Buscar Grupos</span>
          </div>

          <div className="h-28 bg-green-400 rounded-[20px] relative">
            <span className="absolute left-[99px] top-[40px] text-2xl font-bold text-sky-900">Últimas publicaciones</span>
          </div>

          <div className="h-28 bg-gray-50 rounded-[20px] relative">
            <span className="absolute left-[99px] top-[40px] text-2xl font-medium text-sky-900">Sugerencias de comunidades</span>
          </div>

          <Link
            href="/groups/create"
            className="h-20 px-4 py-2 bg-orange-500 rounded-[10px] shadow-md flex justify-center items-center gap-2.5"
          >
            <div className="text-center text-white text-3xl font-semibold font-['Inter'] leading-normal">
              + Crear nuevo grupo
            </div>
          </Link>
        </div>
      </div>

      {/* Main Section */}
      <div className="w-[918px] h-[899px] left-[522px] top-[120px] absolute overflow-y-scroll">
        {[1, 2].map((post) => (
          <div key={post} className="w-[821px] mb-12 ml-[34px] rounded-[30px] shadow outline outline-1 outline-slate-300 overflow-hidden relative">
            <div className="bg-gray-50 rounded-t-[20px] p-4 flex items-center gap-4">
              <div className="w-16 h-16 bg-gray-300 rounded-[10px]" />
              <div>
                <div className="text-xl font-bold text-sky-900">Nombre Grupo</div>
                <div className="text-lg text-sky-900">Autor - Fecha</div>
              </div>
            </div>
            <div className="px-6 pt-4 text-sky-900 text-2xl font-semibold">
              Publicación de texto – Línea 1<br />Línea 2<br />Línea 3
            </div>
            <div className="w-full h-[400px] bg-gray-200 my-4 rounded-[20px]" />
            <div className="flex justify-between items-center px-6 py-2 border-t border-slate-300 text-orange-500 text-2xl">
              <span>👍 Me gusta</span>
              <span>👎 No me gusta</span>
              <span>💬 Comentar</span>
            </div>
            <div className="px-6 py-4 flex gap-4 items-start">
              <div className="w-12 h-12 bg-green-400 rounded-full" />
              <div className="bg-gray-50 rounded-[20px] p-3 w-full">
                <p className="text-xl font-semibold text-sky-900">Autor</p>
                <p className="text-lg text-sky-900">Comentario - Línea 1<br />Línea 2</p>
              </div>
            </div>
            <div className="text-sm text-sky-900 flex gap-6 pl-[80px] pb-6">
              <span className="font-normal">15h</span>
              <span className="font-semibold">Me gusta</span>
              <span className="font-semibold">No me gusta</span>
              <span className="font-semibold">Responder</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

