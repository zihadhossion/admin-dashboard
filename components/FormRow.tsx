import React, { ReactNode } from "react";

export default function FormRow({ children, label, divStyle }: { children: ReactNode; label?: string; divStyle?: string; }) {
    const childElement = React.isValidElement(children) ? children : null;

    return (
        <div className={divStyle || undefined}>
            <label htmlFor={childElement?.props?.id || ""} className="block text-sm capitalize ml-2">{label}</label>
            {children}
        </div >
    )
};