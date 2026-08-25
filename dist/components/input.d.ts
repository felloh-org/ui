import * as React from "react";
export interface InputProps extends React.ComponentProps<"input"> {
    /** Error message to display below the input */
    error?: string;
    /** Hint text to display below the input */
    hint?: string;
    /** Label for the input field */
    label?: string;
    /** Prefix to display inside the input (e.g., £) */
    prefix?: string;
    /** Suffix to display inside the input (e.g., %) */
    suffix?: string;
}
declare const Input: React.ForwardRefExoticComponent<Omit<InputProps, "ref"> & React.RefAttributes<HTMLInputElement>>;
export { Input };
