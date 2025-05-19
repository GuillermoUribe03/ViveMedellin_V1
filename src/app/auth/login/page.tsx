import React from 'react';
import Link from 'next/link';

export default function LoginPage() {
    return (
        <div className="flex flex-col items-center min-h-screen bg-white overflow-hidden">
            {/* Logo y Título */}
            <div className="flex flex-col items-center mt-10 mb-8">
                <div className="w-20 h-12 bg-green-400 rounded-lg mb-2"></div>
                <div className="text-orange-500 text-5xl font-extrabold font-['Inter']">ViveMedellín</div>
            </div>

            {/* Títulos */}
            <div className="text-center mb-8">
                <h1 className="text-sky-900 text-5xl font-bold font-['Instrument_Sans']">Inicia sesión en nuestra comunidad</h1>
                <p className="text-blue-900 text-4xl font-normal font-['Inter'] mt-4">Ingresa con tu usuario y contraseña</p>
            </div>

            {/* Campos de Texto */}
            <div className="flex flex-col gap-4 mb-8">
                <input type="text" placeholder="Nombre de usuario o correo electrónico" className="w-[642px] h-16 px-4 bg-white rounded-md outline outline-1 outline-slate-300 text-xl text-stone-500" />
                <input type="password" placeholder="Contraseña" className="w-[642px] h-16 px-4 bg-white rounded-md outline outline-1 outline-slate-300 text-xl text-stone-500" />
            </div>

            {/* Botón Continuar */}
            <button className="w-[642px] h-16 bg-orange-500 rounded-[10px] shadow-lg text-white text-3xl font-semibold mb-4">Continuar</button>

            {/* Enlace de recuperación de contraseña */}
            <Link href="/forgot-password" className="text-gray-600 text-2xl font-semibold underline mb-8">¿Has olvidado tu contraseña?</Link>

            {/* Separador */}
            <div className="flex items-center w-[640px] mb-8">
                <div className="flex-grow border-t border-gray-600"></div>
                <span className="px-4 text-gray-600 text-xl font-semibold">O BIEN</span>
                <div className="flex-grow border-t border-gray-600"></div>
            </div>

            {/* Botones de Redes Sociales */}
            <button className="w-[642px] h-16 bg-white rounded-[10px] outline outline-[3px] outline-gray-600 mb-4 flex items-center justify-center gap-4">
                <span className="text-emerald-900 text-3xl font-semibold">Iniciar sesión con Google</span>
            </button>
            <button className="w-[642px] h-16 bg-white rounded-[10px] outline outline-[3px] outline-gray-600 mb-4 flex items-center justify-center gap-4">
                <span className="text-emerald-900 text-3xl font-semibold">Iniciar sesión con Facebook</span>
            </button>

            {/* Enlace para registrarse */}
            <div className="text-center">
                <p className="text-gray-600 text-2xl">¿No tienes una cuenta?</p>
                <Link href="/auth/register" className="text-emerald-900 text-2xl font-medium underline">Registrate aquí</Link>
            </div>
        </div>
    );
}

