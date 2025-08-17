import type { ComponentType } from "react"

export interface NavigationItem {
  id: string
  label: string
}

export interface FeatureItem {
  icon: ComponentType<{ className?: string }>
  title: string
  subtitle: string
  description: string
  additionalText: string
  gradient: string
}

export interface StatItem {
  number: string
  label: string
  sublabel?: string
}

export interface ContactItem {
  icon: ComponentType<{ className?: string }>
  title: string
  contact: string
  href: string
}

export interface BusinessArea {
  number: string
  title: string
  description: string
  highlight: string
}
