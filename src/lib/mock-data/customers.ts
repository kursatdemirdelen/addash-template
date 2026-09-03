import { Locale } from "@/locales/types"

export interface Customer {
  id: string
  name: string
  company: string
  email: string
  status: "Active" | "Churned" | "Trial"
  plan: "Starter" | "Pro" | "Enterprise"
  mrr: number
  lastContact: string
  avatarUrl?: string
  initials: string
  country: string
}

export const mockCustomersTr: Customer[] = [
  { id: "c1", name: "Mehmet Kara",      company: "Kara Yazılım",       email: "mehmet@karayazilim.com",  status: "Active",  plan: "Enterprise", mrr: 2400, lastContact: "2 Eyl",   initials: "MK", country: "TR", avatarUrl: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=64&h=64&fit=crop&crop=faces&q=80" },
  { id: "c2", name: "Laura Schmidt",    company: "Horizon Labs",       email: "laura@horizon.io",        status: "Active",  plan: "Pro",        mrr: 490,  lastContact: "1 Eyl",   initials: "LS", country: "DE", avatarUrl: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=64&h=64&fit=crop&crop=faces&q=80" },
  { id: "c3", name: "Caner Tekin",      company: "Orbital Software",   email: "caner@orbital.dev",       status: "Trial",   plan: "Pro",        mrr: 0,    lastContact: "31 Ağu",  initials: "CT", country: "TR", avatarUrl: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=64&h=64&fit=crop&crop=faces&q=80" },
  { id: "c4", name: "Elif Arslan",      company: "Kova Design",        email: "elif@kova.studio",        status: "Active",  plan: "Starter",    mrr: 99,   lastContact: "29 Ağu",  initials: "EA", country: "TR", avatarUrl: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=64&h=64&fit=crop&crop=faces&q=80" },
  { id: "c5", name: "Ben Whitfield",    company: "PeakMetric",         email: "ben@peakmetric.com",      status: "Churned", plan: "Pro",        mrr: 0,    lastContact: "25 Ağu",  initials: "BW", country: "AU" },
  { id: "c6", name: "Sara Müller",      company: "Stahl Systems GmbH", email: "sara@stahlsys.de",        status: "Active",  plan: "Enterprise", mrr: 1800, lastContact: "2 Eyl",   initials: "SM", country: "DE", avatarUrl: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=64&h=64&fit=crop&crop=faces&q=80" },
  { id: "c7", name: "Julien Moreau",    company: "Lumière Studio",     email: "julien@lumiere.fr",       status: "Trial",   plan: "Starter",    mrr: 0,    lastContact: "30 Ağu",  initials: "JM", country: "FR", avatarUrl: "https://images.unsplash.com/photo-1504257432389-52343af06ae3?w=64&h=64&fit=crop&crop=faces&q=80" },
  { id: "c8", name: "Oğuz Yılmaz",     company: "Kaizen Digital",     email: "oguz@kaizen.dev",         status: "Active",  plan: "Pro",        mrr: 490,  lastContact: "28 Ağu",  initials: "OY", country: "TR" },
]

export const mockCustomersEn: Customer[] = [
  { id: "c1", name: "Mehmet Kara",      company: "Kara Yazılım",       email: "mehmet@karayazilim.com",  status: "Active",  plan: "Enterprise", mrr: 2400, lastContact: "Sep 2",   initials: "MK", country: "TR", avatarUrl: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=64&h=64&fit=crop&crop=faces&q=80" },
  { id: "c2", name: "Laura Schmidt",    company: "Horizon Labs",       email: "laura@horizon.io",        status: "Active",  plan: "Pro",        mrr: 490,  lastContact: "Sep 1",   initials: "LS", country: "DE", avatarUrl: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=64&h=64&fit=crop&crop=faces&q=80" },
  { id: "c3", name: "Caner Tekin",      company: "Orbital Software",   email: "caner@orbital.dev",       status: "Trial",   plan: "Pro",        mrr: 0,    lastContact: "Aug 31",  initials: "CT", country: "TR", avatarUrl: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=64&h=64&fit=crop&crop=faces&q=80" },
  { id: "c4", name: "Elif Arslan",      company: "Kova Design",        email: "elif@kova.studio",        status: "Active",  plan: "Starter",    mrr: 99,   lastContact: "Aug 29",  initials: "EA", country: "TR", avatarUrl: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=64&h=64&fit=crop&crop=faces&q=80" },
  { id: "c5", name: "Ben Whitfield",    company: "PeakMetric",         email: "ben@peakmetric.com",      status: "Churned", plan: "Pro",        mrr: 0,    lastContact: "Aug 25",  initials: "BW", country: "AU" },
  { id: "c6", name: "Sara Müller",      company: "Stahl Systems GmbH", email: "sara@stahlsys.de",        status: "Active",  plan: "Enterprise", mrr: 1800, lastContact: "Sep 2",   initials: "SM", country: "DE", avatarUrl: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=64&h=64&fit=crop&crop=faces&q=80" },
  { id: "c7", name: "Julien Moreau",    company: "Lumière Studio",     email: "julien@lumiere.fr",       status: "Trial",   plan: "Starter",    mrr: 0,    lastContact: "Aug 30",  initials: "JM", country: "FR", avatarUrl: "https://images.unsplash.com/photo-1504257432389-52343af06ae3?w=64&h=64&fit=crop&crop=faces&q=80" },
  { id: "c8", name: "Oğuz Yılmaz",     company: "Kaizen Digital",     email: "oguz@kaizen.dev",         status: "Active",  plan: "Pro",        mrr: 490,  lastContact: "Aug 28",  initials: "OY", country: "TR" },
]

export function getMockCustomers(locale: Locale = "tr"): Customer[] {
  return locale === "en" ? mockCustomersEn : mockCustomersTr
}

export const mockCustomers = mockCustomersTr
