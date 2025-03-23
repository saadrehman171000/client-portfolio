import React from "react"
import styles from "./button.module.css"

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "outline" | "ghost"
  size?: "sm" | "md" | "lg"
  children: React.ReactNode
  className?: string
  asChild?: boolean
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ variant = "primary", size = "md", children, className = "", asChild = false, ...props }, ref) => {
    const Comp = asChild ? React.Fragment : "button"
    const buttonContent = (
      <button className={`${styles.button} ${styles[variant]} ${styles[size]} ${className}`} ref={ref} {...props}>
        {children}
      </button>
    )

    return asChild ? children : buttonContent
  },
)

Button.displayName = "Button"

