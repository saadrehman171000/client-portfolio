import type React from "react"
import styles from "./badge.module.css"

interface BadgeProps {
  children: React.ReactNode
  variant?: "default" | "outline"
  className?: string
}

export function Badge({ children, variant = "default", className = "" }: BadgeProps) {
  return <span className={`${styles.badge} ${styles[variant]} ${className}`}>{children}</span>
}

