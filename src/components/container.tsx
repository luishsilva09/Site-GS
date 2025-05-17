import React from "react";
import clsx from "clsx";

type ContainerProps = {
    children: React.ReactNode;
    className?:string
}

export default function Container({ children, className }: ContainerProps){
    return(
        <div className={clsx("max-w-[1059px] mx-auto px-4 py-12 min-h-screen", className)}>
            {children}
        </div>
    )
}