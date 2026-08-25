import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { AlertCircle, CheckCircle, Info, AlertTriangle, X } from "lucide-react"

import { cn } from "../utils/cn"

const alertVariants = cva(
  "relative w-full rounded-xl p-4 flex gap-3 items-start",
  {
    variants: {
      variant: {
        // Felloh Neutral - general information (WCAG AA 7.1:1)
        default:
          "bg-[#f5f5f7] text-[#374151] border border-[#d1d5db]",
        // Success messages (WCAG AA 4.7:1)
        success:
          "bg-[#dcfce7] text-[#166534] border border-[#86efac]",
        // Error messages (WCAG AA 4.5:1)
        destructive:
          "bg-[#fee2e2] text-[#b91c1c] border border-[#fca5a5]",
        // Warning messages (WCAG AA 4.5:1)
        warning:
          "bg-[#fef3c7] text-[#92400e] border border-[#fcd34d]",
        // Info - Felloh Purple tint (WCAG AA 7.2:1)
        info:
          "bg-[#f3e8ff] text-[#670399] border border-[#c084fc]",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
)

const alertIconMap = {
  default: Info,
  success: CheckCircle,
  destructive: AlertCircle,
  warning: AlertTriangle,
  info: Info,
}

// Screen reader announcements for each variant
const alertAriaLive = {
  default: "polite" as const,
  success: "polite" as const,
  destructive: "assertive" as const,
  warning: "polite" as const,
  info: "polite" as const,
}

export interface AlertProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof alertVariants> {
  dismissible?: boolean
  onDismiss?: () => void
}

const Alert = React.forwardRef<HTMLDivElement, AlertProps>(
  ({ className, variant = "default", dismissible, onDismiss, children, ...props }, ref) => {
    const IconComponent = alertIconMap[variant || "default"]
    const ariaLive = alertAriaLive[variant || "default"]

    return (
      <div
        ref={ref}
        role="alert"
        aria-live={ariaLive}
        className={cn(alertVariants({ variant }), className)}
        {...props}
      >
        <IconComponent className="h-5 w-5 shrink-0 mt-0.5" aria-hidden="true" />
        <div className="flex-1 min-w-0">{children}</div>
        {dismissible && (
          <button
            type="button"
            onClick={onDismiss}
            className="shrink-0 p-1.5 rounded-lg hover:bg-black/5 transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-current"
            aria-label="Dismiss alert"
          >
            <X className="h-4 w-4" aria-hidden="true" />
          </button>
        )}
      </div>
    )
  }
)
Alert.displayName = "Alert"

const AlertTitle = React.forwardRef<
  HTMLHeadingElement,
  React.HTMLAttributes<HTMLHeadingElement>
>(({ className, ...props }, ref) => (
  <h5
    ref={ref}
    className={cn("font-semibold leading-tight tracking-tight", className)}
    {...props}
  />
))
AlertTitle.displayName = "AlertTitle"

const AlertDescription = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLParagraphElement>
>(({ className, ...props }, ref) => (
  <p
    ref={ref}
    className={cn("text-sm mt-1 opacity-90", className)}
    {...props}
  />
))
AlertDescription.displayName = "AlertDescription"

export { Alert, AlertTitle, AlertDescription, alertVariants }
