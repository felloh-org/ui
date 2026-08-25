import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "../utils/cn"

// IBM Carbon Design System - Tag component style
const badgeVariants = cva(
  "inline-flex items-center px-2 py-0.5 text-xs font-normal tracking-[0.32px] transition-colors focus:outline-none focus:ring-2 focus:ring-[#0f62fe] focus:ring-offset-1",
  {
    variants: {
      variant: {
        // Carbon Blue (default)
        default:
          "bg-[#0f62fe] text-white",
        // Carbon Gray - High contrast
        secondary:
          "bg-[#393939] text-white",
        // Carbon Gray - Cool gray
        neutral:
          "bg-[#e0e0e0] text-[#161616]",
        // Carbon Outline
        outline:
          "bg-transparent border border-[#8d8d8d] text-[#161616]",
        // Carbon Green - Success
        success:
          "bg-[#198038] text-white",
        // Carbon Green - Light
        "success-light":
          "bg-[#defbe6] text-[#198038]",
        // Carbon Red - Error
        destructive:
          "bg-[#da1e28] text-white",
        // Carbon Red - Light
        "destructive-light":
          "bg-[#fff1f1] text-[#da1e28]",
        // Carbon Yellow - Warning
        warning:
          "bg-[#f1c21b] text-[#161616]",
        // Carbon Yellow - Light
        "warning-light":
          "bg-[#fcf4d6] text-[#161616]",
        // Carbon Blue - Info
        info:
          "bg-[#0043ce] text-white",
        // Carbon Blue - Light
        "info-light":
          "bg-[#edf5ff] text-[#0043ce]",
        // Carbon Purple
        purple:
          "bg-[#8a3ffc] text-white",
        // Carbon Purple - Light
        "purple-light":
          "bg-[#f6f2ff] text-[#8a3ffc]",
        // Carbon Teal
        teal:
          "bg-[#007d79] text-white",
        // Carbon Teal - Light
        "teal-light":
          "bg-[#d9fbfb] text-[#007d79]",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
)

export interface BadgeProps
  extends React.HTMLAttributes<HTMLSpanElement>,
    VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, ...props }: BadgeProps) {
  return (
    <span
      className={cn(badgeVariants({ variant }), className)}
      {...props}
    />
  )
}

export { Badge, badgeVariants }
