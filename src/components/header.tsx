'use client';

import { useState } from 'react';
import Image from "next/image";
import Link from "next/link";
import { usePathname } from 'next/navigation';
import LogoImg from '../../public/logo-2.svg';
import { Menu, X } from 'lucide-react';

const arrayMenu = [
    ['Quem somos', '/quem-somos'],
    ['Missão', '/missao'],
    ['Atividades', '/atividades'],
    ['Seja um voluntário', '/seja-voluntario'],
    ['Contato', '/contato']
];

export function Header() {
    const pathname = usePathname();
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <header className="w-full bg-green-base text-white">
            <div className="max-w-[950px] mx-auto flex items-center justify-between px-4 h-24">
                <Link href="/">
                    <Image src={LogoImg} alt="Logo Grupo Suçuarana" className="w-60 h-auto" />
                </Link>

                {/* Botão menu mobile */}
                <button onClick={() => setMenuOpen(true)} className="md:hidden text-white">
                    <Menu size={28} />
                </button>

                {/* Menu desktop */}
                <nav className="hidden md:flex gap-6">
                    {arrayMenu.map(([label, href], index) => {
                        const isActive = pathname === href;
                        return (
                            <Link
                                key={index}
                                href={href}
                                className={`cursor-pointer px-2 py-1 transition-all duration-200 border-b-2 ${isActive
                                    ? "text-orange-base font-semibold border-orange-base"
                                    : "text-white border-transparent hover:text-orange-base"
                                    }`}
                            >
                                {label}
                            </Link>
                        );
                    })}
                </nav>
            </div>

            {/* Overlay escuro */}
            <div
                className={`fixed inset-0 z-40 bg-black/50 transition-opacity duration-300 md:hidden ${menuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}
                onClick={() => setMenuOpen(false)}
            ></div>

            {/* Menu lateral à direita */}
            <aside
                className={`fixed top-0 right-0 z-50 h-full w-64 bg-green-base p-6 flex flex-col gap-6 transform transition-transform duration-300 md:hidden ${menuOpen ? 'translate-x-0' : 'translate-x-full'
                    }`}
            >
                <div className="flex justify-end">
                    <button onClick={() => setMenuOpen(false)} className="text-white">
                        <X size={28} />
                    </button>
                </div>

                {arrayMenu.map(([label, href], index) => {
                    const isActive = pathname === href;
                    return (
                        <Link
                            key={index}
                            href={href}
                            onClick={() => setMenuOpen(false)}
                            className={`text-lg ${isActive ? "text-orange-base font-semibold" : "text-white hover:text-orange-base"}`}
                        >
                            {label}
                        </Link>
                    );
                })}
            </aside>
        </header>
    );
}
