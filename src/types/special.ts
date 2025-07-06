import type { LucideIcon } from "lucide-react"

export interface PropertyData {
  name: string
  code: string
  tagline: string
  location: string
  summary: {
    details: string
    parking: string
  }
  images: string[]
  about: {
    description: string
    highlights: string[]
  }
  characteristics: Array<{
    icon: LucideIcon
    label: string
    value: string
  }>
  neighborhoodDifferentials: Array<{
    icon: LucideIcon
    iconColor: string
    iconBackground: string
    title: string
    description: string
  }>
  walkDistanceStats: Array<{
    value: string
    label: string
  }>
  contact: {
    whatsappNumber: string
    formId: string
  }
}
