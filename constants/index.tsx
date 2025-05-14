import {
  BookOpenIcon,
  CalendarIcon,
  InfoIcon,
  TicketIcon,
  TrendingUpIcon,
  UserIcon,
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
