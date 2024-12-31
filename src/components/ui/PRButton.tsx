'use client'
import { Button } from "@nextui-org/react";

export default function PRButton({txt,type,variant,}:
    {
        txt: string, 
        type?:  "submit" | "reset" | "button"| undefined,
        variant?:"solid" | "bordered" | "light" | "flat" | "faded" | "shadow" | "ghost"| undefined
       
    } 
    ) {
    return (
        <Button type={type} variant={variant} className="bg-gradient-to-bl from-amber-100/45 dark:from-sky-500/75  dark:to-slate-900/45">
        {txt}
        
        </Button>
    );
}