import * as React from "react"

import { cn } from "../utils/cn"

export interface InputProps extends React.ComponentProps<"input"> {
  /** Error message to display below the input */
  error?: string
  /** Hint text to display below the input */
  hint?: string
  /** Label for the input field */
  label?: string
  /** Prefix to display inside the input (e.g., £) */
  prefix?: string
  /** Suffix to display inside the input (e.g., %) */
  suffix?: string
}

// Headroom Design - Text Input component style
const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, error, hint, label, prefix, suffix, id, "aria-describedby": ariaDescribedBy, ...props }, ref) => {
    // Generate IDs for accessibility
    const errorId = error && id ? `${id}-error` : undefined
    const hintId = hint && id ? `${id}-hint` : undefined

    // Combine aria-describedby values
    const describedBy = [ariaDescribedBy, errorId, hintId].filter(Boolean).join(' ') || undefined

    const inputElement = (
      <input
        type={type}
        id={id}
        aria-invalid={error ? "true" : undefined}
        aria-describedby={describedBy}
        className={cn(
          // Headroom text input: 40px height, full border style
          "flex h-10 w-full bg-white px-4 text-sm text-[#161616] tracking-normal transition-all duration-300",
          // Border - full border with subtle color
          "border border-black/20",
          error ? "border-[#da1e28]" : "border-black/20",
          // Placeholder
          "placeholder:text-[#a8a8a8]",
          // Hover state
          error ? "hover:border-[#750e13]" : "hover:border-[#161616]",
          // Focus state - Headroom uses black outline
          error
            ? "focus:outline-none focus:border-[#da1e28] focus:ring-2 focus:ring-[#da1e28]/20"
            : "focus:outline-none focus:border-[#161616] focus:ring-2 focus:ring-[#161616]/10",
          // Disabled state
          "disabled:cursor-not-allowed disabled:bg-[#E6E4E1] disabled:text-[#a8a8a8] disabled:border-black/10",
          // File input styling
          "file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-[#161616]",
          // Add padding for prefix/suffix
          prefix ? "pl-8" : "",
          suffix ? "pr-10" : "",
          className
        )}
        ref={ref}
        {...props}
      />
    )

    const hasAdornment = prefix || suffix

    return (
      <div className="w-full">
        {/* Carbon-style label */}
        {label && (
          <label
            htmlFor={id}
            className="block text-xs text-[#525252] tracking-[0.32px] mb-2"
          >
            {label}
          </label>
        )}
        {hasAdornment ? (
          <div className="relative">
            {prefix && (
              <span className="absolute left-3 top-1/2 -translate-y-1/2 text-sm text-[#525252] pointer-events-none">
                {prefix}
              </span>
            )}
            {inputElement}
            {suffix && (
              <span className="absolute right-3 top-1/2 -translate-y-1/2 text-sm text-[#525252] pointer-events-none">
                {suffix}
              </span>
            )}
          </div>
        ) : (
          inputElement
        )}
        {/* Error message - Carbon style */}
        {error && (
          <p id={errorId} className="mt-1 text-xs text-[#da1e28] tracking-[0.32px]" role="alert">
            {error}
          </p>
        )}
        {/* Helper text - Carbon style */}
        {hint && !error && (
          <p id={hintId} className="mt-1 text-xs text-[#6f6f6f] tracking-[0.32px]">
            {hint}
          </p>
        )}
      </div>
    )
  }
)
Input.displayName = "Input"

export { Input }
