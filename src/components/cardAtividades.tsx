import React from "react";
import clsx from "clsx";
import Image from "next/image";

type CardProps = {
    children?: React.ReactNode;
    className?: string;
    icone: string;
    titulo: string;
    texto: string;
}

export default function CardAtividades({ children, className, icone, titulo, texto}: CardProps) {
    return (
        <div className={clsx("max-w-[580px] min-h-[280px] max-h-[280px] bg-orange-card rounded-2xl flex gap-4 p-5", className)}>
            <div className="flex gap-4 w-1/3 justify-center items-center">
                <Image src={icone} alt="icones" width={200} height={200}></Image>
            </div>
            <br></br>
            <div className="w-2/3">
                <span className="text-2xl text-[#FFC401] font-bold md:text-3xl">{titulo}</span>
                <p className="text-lg text-white font-light md:text-xl text-justify">{texto}</p>
            </div>
        </div>
    )
}