'use client';

import Link from 'next/link';

export default function NotFound() {
    return (
        <main className="min-h-screen flex flex-col items-center justify-center bg-green-base text-white text-center px-4">
            <h1 className="text-6xl font-bold mb-4">404</h1>
            <h2 className="text-2xl mb-6">Página não encontrada</h2>
            <p className="mb-6 text-lg">
                Ops! Parece que a página que você está procurando não existe ou foi movida.
            </p>
            <Link
                href="/"
                className="bg-orange-base hover:bg-orange-600 transition px-6 py-2 rounded-md text-white font-medium"
            >
                Voltar para a página inicial
            </Link>
        </main>
    );
}
