import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "../utils/cn"

// Headroom Design Button Variants
const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-bold tracking-normal transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-[#161616] focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        // Primary - Black like landing page
        default:
          "bg-[#161616] text-white hover:bg-[#393939] active:bg-[#525252]",
        // Secondary - Gray
        secondary:
          "bg-[#E6E4E1] text-[#161616] hover:bg-[#d0d0d0] active:bg-[#c6c6c6]",
        // Tertiary - Outline black
        tertiary:
          "bg-transparent text-[#161616] border border-[#161616] hover:bg-[#161616] hover:text-white active:bg-[#393939]",
        // Ghost - No background
        ghost:
          "bg-transparent text-[#161616] hover:bg-black/5 active:bg-black/10",
        // Danger - Red
        destructive:
          "bg-[#da1e28] text-white hover:bg-[#ba1b23] active:bg-[#750e13]",
        // Danger Tertiary
        "danger-tertiary":
          "bg-transparent text-[#da1e28] border border-[#da1e28] hover:bg-[#da1e28] hover:text-white active:bg-[#750e13]",
        // Danger Ghost
        "danger-ghost":
          "bg-transparent text-[#da1e28] hover:bg-[#fff1f1] active:bg-[#ffd7d9]",
        // Outline variant
        outline:
          "bg-transparent text-[#161616] border border-black/20 hover:bg-black/5 active:bg-black/10",
        // Link style
        link:
          "bg-transparent text-[#161616] hover:opacity-70 underline decoration-1 underline-offset-4",
      },
      size: {
        sm: "h-8 px-4 text-sm",
        default: "h-10 px-6 text-sm",
        lg: "h-12 px-6 text-sm",
        xl: "h-14 px-8 text-base",
        icon: "h-10 w-10",
        "icon-sm": "h-8 w-8",
        "icon-lg": "h-12 w-12",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, "aria-label": ariaLabel, children, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"

    // Warn in development if icon button lacks aria-label
    if ((import.meta as any).env?.DEV && (size === 'icon' || size === 'icon-sm' || size === 'icon-lg') && !ariaLabel && !props.title) {
      console.warn('Button with size="icon" should have an aria-label or title for accessibility')
    }

    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        aria-label={ariaLabel}
        {...props}
      >
        {children}
      </Comp>
    )
  }
)
Button.displayName = "Button"

export { Button, buttonVariants }
