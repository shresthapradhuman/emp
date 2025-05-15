import {
  BookIcon,
  BookOpenIcon,
  BriefcaseBusinessIcon,
  CalendarIcon,
  HeartPulseIcon,
  InfoIcon,
  MonitorIcon,
  MusicIcon,
  PartyPopperIcon,
  PizzaIcon,
  TicketIcon,
  TrendingUpIcon,
  UserIcon,
  VolleyballIcon,
} from 'lucide-react'

export const headerItems = [
  {
    label: 'Browse Events',
    url: '/events',
    icon: CalendarIcon,
  },
  {
    label: 'How It Works',
    url: '/how-it-works',
    icon: BookOpenIcon,
  },
  {
    label: 'Help Center',
    url: '/help-center',
    icon: InfoIcon,
  },
]

export const profileItems = [
  {
    label: 'Profile Settings',
    url: 'profile',
    icon: UserIcon,
  },
  {
    label: 'Events Organized',
    url: 'events',
    icon: CalendarIcon,
  },
  {
    label: 'Purchase Tickets',
    url: 'tickets',
    icon: TicketIcon,
  },
  {
    label: 'Sales & Analytics',
    url: 'sales-analytics',
    icon: TrendingUpIcon,
  },
]

export const categoryIconsList = [
  {
    icon: MusicIcon,
    name: 'Music & Concerts',
  },
  {
    icon: BriefcaseBusinessIcon,
    name: 'Business & Networking',
  },
  {
    icon: PartyPopperIcon,
    name: 'Festivals & Celebrations',
  },
  {
    icon: BookIcon,
    name: 'Education & Learning',
  },
  {
    icon: MonitorIcon,
    name: 'Tech & Innovation',
  },
  {
    icon: VolleyballIcon,
    name: 'Sports & Outdoors',
  },
  {
    icon: HeartPulseIcon,
    name: 'Health & Wellness',
  },
  {
    icon: PizzaIcon,
    name: 'Food & Drink',
  },
]
