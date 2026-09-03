export interface Customer {
  id: string;
  name: string;
  company: string;
  email: string;
  status: "Active" | "Churned" | "Trial";
  plan: "Starter" | "Pro" | "Enterprise";
  mrr: number;
  lastContact: string;
  avatarUrl?: string;
  initials: string;
  country: string;
}

export const mockCustomers: Customer[] = [
  { id: "c1", name: "Elena Rostova",    company: "Acme Corp.",        email: "elena@acme.com",       status: "Active",  plan: "Enterprise", mrr: 2400, lastContact: "Sep 2",  initials: "ER", country: "US", avatarUrl: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=64&h=64&fit=crop&crop=faces&q=80" },
  { id: "c2", name: "Marcus Vance",     company: "Horizon Labs",       email: "marcus@horizon.io",    status: "Active",  plan: "Pro",        mrr: 490,  lastContact: "Sep 1",  initials: "MV", country: "UK", avatarUrl: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=64&h=64&fit=crop&crop=faces&q=80" },
  { id: "c3", name: "Yuki Tanaka",      company: "Orbital Software",   email: "yuki@orbital.dev",     status: "Trial",   plan: "Pro",        mrr: 0,    lastContact: "Aug 31", initials: "YT", country: "JP", avatarUrl: "https://images.unsplash.com/photo-1542385921-a8b1f3490ba0?w=64&h=64&fit=crop&crop=faces&q=80" },
  { id: "c4", name: "Priya Nair",       company: "Kova Design",        email: "priya@kova.studio",    status: "Active",  plan: "Starter",    mrr: 99,   lastContact: "Aug 29", initials: "PN", country: "IN", avatarUrl: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=64&h=64&fit=crop&crop=faces&q=80" },
  { id: "c5", name: "Ben Whitfield",    company: "PeakMetric",         email: "ben@peakmetric.com",   status: "Churned", plan: "Pro",        mrr: 0,    lastContact: "Aug 25", initials: "BW", country: "AU" },
  { id: "c6", name: "Sara Müller",      company: "Stahl Systems GmbH", email: "sara@stahlsys.de",     status: "Active",  plan: "Enterprise", mrr: 1800, lastContact: "Sep 2",  initials: "SM", country: "DE", avatarUrl: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=64&h=64&fit=crop&crop=faces&q=80" },
  { id: "c7", name: "Julien Moreau",    company: "Lumière Studio",     email: "julien@lumiere.fr",    status: "Trial",   plan: "Starter",    mrr: 0,    lastContact: "Aug 30", initials: "JM", country: "FR", avatarUrl: "https://images.unsplash.com/photo-1504257432389-52343af06ae3?w=64&h=64&fit=crop&crop=faces&q=80" },
  { id: "c8", name: "Aiko Yamamoto",    company: "Kaizen Digital",     email: "aiko@kaizen.jp",       status: "Active",  plan: "Pro",        mrr: 490,  lastContact: "Aug 28", initials: "AY", country: "JP" },
];
