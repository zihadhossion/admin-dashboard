import React from "react";

export default function FormRow({ children, label, divStyle }: { children: any; label?: string; divStyle?: string; }) {

    return (
        <div className={divStyle ? divStyle : ""}>
            <label htmlFor={children?.props?.id} className="block text-sm capitalize ml-2">{label}</label>
            {children}
        </div>
    )
};