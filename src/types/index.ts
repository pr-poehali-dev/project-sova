import type { ReactNode } from "react"

export interface PricingPlan {
  name: string
  price: string
  period: string
  features: string[]
  highlighted?: boolean
}

export interface Section {
  id: string
  title: string
  subtitle?: ReactNode
  content?: string
  showButton?: boolean
  buttonText?: string
  pricing?: PricingPlan[]
}

export interface SectionProps extends Section {
  isActive: boolean
}