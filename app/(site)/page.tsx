import CategorySection from '@/components/CategorySection'
import HeroSection from '@/components/HeroSection'
import UpcomingEventsSection from '@/components/UpcomingEventsSection'
import { prisma } from '@/prisma/client'

export default async function Home() {
  const categories = await prisma.category.findMany({
    orderBy: {
      order: 'asc',
    },
  })
  const upcomingEvents = await prisma.event.findMany({
    where: {
      date: {
        gte: new Date(),
        lt: new Date(new Date().setFullYear(new Date().getFullYear() + 1)),
      },
    },
    include: {
      category: true,
    },
    take: 6,
  })
  return (
    <>
      <HeroSection />
      <CategorySection categories={categories} />
      <UpcomingEventsSection events={upcomingEvents} />
    </>
  )
}
