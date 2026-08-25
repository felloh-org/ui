import * as React from "react"

import { cn } from "../utils/cn"

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Make the card interactive/clickable with focus states */
  interactive?: boolean
  /** Use article element for semantic content cards */
  asArticle?: boolean
}

// Headroom Design - Card component style
const Card = React.forwardRef<HTMLDivElement, CardProps>(
  ({ className, interactive, asArticle, ...props }, ref) => {
    const Component = asArticle ? 'article' : 'div'
    return (
      <Component
        ref={ref}
        className={cn(
          "bg-white text-[#161616] border border-black/10 shadow-sm min-h-[4rem]",
          interactive && [
            "cursor-pointer transition-all duration-300",
            "hover:shadow-md hover:-translate-y-0.5",
            "focus:outline-none focus:ring-2 focus:ring-[#161616] focus:ring-offset-2",
            "active:translate-y-0"
          ],
          className
        )}
        tabIndex={interactive ? 0 : undefined}
        {...props}
      />
    )
  }
)
Card.displayName = "Card"

const CardHeader = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("flex flex-col space-y-1 p-4", className)}
    {...props}
  />
))
CardHeader.displayName = "CardHeader"

export interface CardTitleProps extends React.HTMLAttributes<HTMLHeadingElement> {
  /** Heading level for accessibility (default h3) */
  as?: 'h2' | 'h3' | 'h4' | 'h5' | 'h6'
}

const CardTitle = React.forwardRef<HTMLHeadingElement, CardTitleProps>(
  ({ className, as: Component = 'h3', ...props }, ref) => (
    <Component
      ref={ref}
      className={cn("text-sm font-semibold leading-tight tracking-[0.16px] text-[#161616]", className)}
      {...props}
    />
  )
)
CardTitle.displayName = "CardTitle"

const CardDescription = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLParagraphElement>
>(({ className, ...props }, ref) => (
  <p
    ref={ref}
    className={cn("text-xs text-[#525252] tracking-[0.32px]", className)}
    {...props}
  />
))
CardDescription.displayName = "CardDescription"

const CardContent = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div ref={ref} className={cn("p-4 pt-0", className)} {...props} />
))
CardContent.displayName = "CardContent"

const CardFooter = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("flex items-center p-4 pt-0", className)}
    {...props}
  />
))
CardFooter.displayName = "CardFooter"

export { Card, CardHeader, CardFooter, CardTitle, CardDescription, CardContent }
