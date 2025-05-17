import React from "react";
import clsx from "clsx";
import Image from "next/image";

type CardProps = {
    children?: React.ReactNode;
    className?: string;
    icone1: string;
    icone2?: string;
    titulo: string;
    texto: string;
}

export default function CardInfo({ children, className, icone1, icone2, titulo, texto}: CardProps) {
    return (
        <div className={clsx("min-w-[300px] max-w-[300px] mx-auto px-4 py-12 min-h-[300px]  max-h-[300px] rounded-2xl shadow-2xl flex flex-col justify-between items-center p-5", className)}>
            <div className="flex gap-4">
                <Image src={icone1} alt="icones" width={88} height={88}></Image>
                {icone2 && (
                    <Image src={icone2} alt="icones" width={88} height={88} />
                )}            </div>
            <br></br>
            <span className="text-white font-bold text-sm">{titulo}</span>
            <p className="text-white font-light text-sm text-justify">{texto}</p>
        </div>
    )
}