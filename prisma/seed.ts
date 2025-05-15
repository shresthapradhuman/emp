import { PrismaClient } from './generated/prisma'

const prisma = new PrismaClient()

const categories = [
  { name: 'Music & Concerts', slug: 'music-concerts', order: 1 },
  { name: 'Business & Networking', slug: 'business-networking', order: 2 },
  {
    name: 'Festivals & Celebrations',
    slug: 'festivals-celebrations',
    order: 3,
  },
  { name: 'Education & Learning', slug: 'education-learning', order: 4 },
  { name: 'Tech & Innovation', slug: 'tech-innovation', order: 5 },
  { name: 'Food & Drink', slug: 'food-drink', order: 6 },
  { name: 'Sports & Outdoors', slug: 'sports-outdoors', order: 7 },
  { name: 'Health & Wellness', slug: 'health-wellness', order: 8 },
]

export async function main() {
  for (const category of categories) {
    await prisma.category.create({
      data: {
        name: category.name,
        slug: category.slug,
        order: category.order,
      },
    })
  }
  console.log('Seeded categories successfully')
}

main()
