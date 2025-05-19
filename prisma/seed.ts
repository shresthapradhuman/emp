import { EventStatus, PrismaClient } from './generated/prisma'

const prisma = new PrismaClient()

const categories = [
  {
    name: 'Music',
    slug: 'music',
    order: 1,
    image: 'music.png',
    data: [
      {
        title: 'Summer Beats Festival',
        description: 'A night of electronic dance music with top DJs.',
        status: 'Published',
        date: '2025-07-12T18:00:00.000Z',
        startTime: '18:00',
        endTime: '23:00',
        venue: 'Shibuya Sky Arena',
        capacity: 1000,
        price: 4500,
        category: 'music-concerts',
      },
      {
        title: 'Acoustic Evenings',
        description: 'Live acoustic performances by local artists.',
        status: 'Draft',
        date: '2025-08-05T19:00:00.000Z',
        startTime: '19:00',
        endTime: '21:00',
        venue: 'Cafe Melody, Tokyo',
        capacity: 100,
        price: 1500,
        category: 'music-concerts',
      },
      {
        title: 'Jazz Under the Stars',
        description: 'Smooth jazz in an open-air garden.',
        status: 'Published',
        date: '2025-09-01T20:00:00.000Z',
        startTime: '20:00',
        endTime: '22:30',
        venue: 'Yoyogi Park',
        capacity: 500,
        price: 2000,
        category: 'music-concerts',
      },
      {
        title: 'Rock Revival',
        description: 'Old school rock bands reunite for a one-night-only show.',
        status: 'Cancelled',
        date: '2025-06-28T17:00:00.000Z',
        startTime: '17:00',
        endTime: '22:00',
        venue: 'Tokyo Dome',
        capacity: 3000,
        price: 6000,
        category: 'music-concerts',
      },
      {
        title: 'Classical Symphony Gala',
        description:
          'An evening of classical masterpieces by a full orchestra.',
        status: 'Published',
        date: '2025-10-10T19:30:00.000Z',
        startTime: '19:30',
        endTime: '22:00',
        venue: 'Suntory Hall, Tokyo',
        capacity: 800,
        price: 3500,
        category: 'music-concerts',
      },
    ],
  },
  {
    name: 'Business',
    slug: 'business',
    image: 'business.png',
    order: 2,
    data: [
      {
        title: 'Startup Pitch Night',
        description: 'Early-stage startups pitch their ideas to investors.',
        status: 'Published',
        date: '2025-07-18T17:00:00.000Z',
        startTime: '17:00',
        endTime: '20:00',
        venue: 'WeWork Shinjuku',
        capacity: 200,
        price: 1000,
        category: 'business-networking',
      },
      {
        title: 'Women in Leadership Conference',
        description:
          'Networking and panel discussions with successful female leaders.',
        status: 'Draft',
        date: '2025-08-22T10:00:00.000Z',
        startTime: '10:00',
        endTime: '16:00',
        venue: 'Tokyo International Forum',
        capacity: 500,
        price: 2500,
        category: 'business-networking',
      },
    ],
  },
  {
    name: 'Festivals',
    slug: 'festivals',
    image: 'festival.png',
    order: 3,
    data: [
      {
        title: 'Tokyo Lantern Festival',
        description:
          'A vibrant celebration with lights, music, and food stalls.',
        status: 'Published',
        date: '2025-11-03T15:00:00.000Z',
        startTime: '15:00',
        endTime: '21:00',
        venue: 'Ueno Park',
        capacity: 3000,
        price: 0,
        category: 'festivals-celebrations',
      },
      {
        title: 'International Cultural Day',
        description:
          'A multicultural fair with traditional dances, food, and crafts.',
        status: 'Published',
        date: '2025-09-20T11:00:00.000Z',
        startTime: '11:00',
        endTime: '18:00',
        venue: 'Yokohama Red Brick Warehouse',
        capacity: 1500,
        price: 500,
        category: 'festivals-celebrations',
      },
    ],
  },
  {
    name: 'Food & Drink',
    slug: 'food-drink',
    image: 'food.png',
    order: 6,
    data: [
      {
        title: 'Tokyo Ramen Tasting Tour',
        description:
          "Explore the city's best ramen shops in a guided tasting event.",
        status: 'Published',
        date: '2025-08-02T12:00:00.000Z',
        startTime: '12:00',
        endTime: '15:30',
        venue: 'Shinjuku Station Exit A',
        capacity: 30,
        price: 3500,
        category: 'food-drink',
      },
      {
        title: 'Wine & Cheese Night',
        description:
          'Sample a curated selection of wines and artisanal cheeses.',
        status: 'Draft',
        date: '2025-09-12T18:30:00.000Z',
        startTime: '18:30',
        endTime: '21:00',
        venue: 'Tokyo Midtown Lounge',
        capacity: 100,
        price: 5000,
        category: 'food-drink',
      },
      {
        title: 'Vegan Cooking Class',
        description: 'Learn to cook delicious plant-based Japanese meals.',
        status: 'Published',
        date: '2025-07-25T14:00:00.000Z',
        startTime: '14:00',
        endTime: '17:00',
        venue: 'Shibuya Community Kitchen',
        capacity: 25,
        price: 2500,
        category: 'food-drink',
      },
    ],
  },
  {
    name: 'Hobbies',
    slug: 'hobbies',
    image: 'hobbies.png',
    order: 7,
    data: [
      {
        title: 'Weekend Hiking in Mt. Takao',
        description: 'A guided outdoor trek suitable for beginners.',
        status: 'Published',
        date: '2025-07-19T08:00:00.000Z',
        startTime: '08:00',
        endTime: '15:00',
        venue: 'Mt. Takao Base Station',
        capacity: 40,
        price: 1000,
        category: 'sports-outdoors',
      },
      {
        title: 'Beach Volleyball Tournament',
        description: 'Join or cheer in this fun, casual summer competition.',
        status: 'Draft',
        date: '2025-08-03T10:00:00.000Z',
        startTime: '10:00',
        endTime: '17:00',
        venue: 'Odaiba Beach Park',
        capacity: 150,
        price: 1500,
        category: 'sports-outdoors',
      },
    ],
  },
  {
    name: 'Health & Wellness',
    slug: 'health-wellness',
    image: 'health.png',
    order: 8,
    data: [
      {
        title: 'Sunrise Yoga in the Park',
        description: 'Start your day with a peaceful yoga session in nature.',
        status: 'Published',
        date: '2025-07-05T06:30:00.000Z',
        startTime: '06:30',
        endTime: '08:00',
        venue: 'Yoyogi Park Lawn Area',
        capacity: 50,
        price: 1000,
        category: 'health-wellness',
      },
      {
        title: 'Mental Wellness Seminar',
        description:
          'Learn techniques to reduce stress and improve emotional well-being.',
        status: 'Cancelled',
        date: '2025-09-15T13:00:00.000Z',
        startTime: '13:00',
        endTime: '16:00',
        venue: 'Tokyo Civic Hall',
        capacity: 200,
        price: 0,
        category: 'health-wellness',
      },
      {
        title: 'Healthy Eating for Busy People',
        description:
          'Quick and nutritious meal ideas for working professionals.',
        status: 'Draft',
        date: '2025-08-30T10:30:00.000Z',
        startTime: '10:30',
        endTime: '12:30',
        venue: 'Minato Wellness Studio',
        capacity: 60,
        price: 1200,
        category: 'health-wellness',
      },
    ],
  },
]

export async function main() {
  for (const category of categories) {
    const cat = await prisma.category.create({
      data: {
        name: category.name,
        slug: category.slug,
        order: category.order,
        image: category.image,
      },
    })
    if (category.data) {
      for (const data of category.data) {
        await prisma.event.create({
          data: {
            title: data.title,
            description: data.description,
            status: data.status as EventStatus,
            date: data.date,
            startTime: data.startTime,
            endTime: data.endTime,
            venue: data.venue,
            capacity: data.capacity.toString(),
            price: data.price.toString(),
            image: '/no-image.svg',
            category: {
              connect: {
                id: cat.id,
              },
            },
            organizer: {
              connect: {
                id: 'cmarqyjuj00008o0tld0qzv3h',
              },
            },
          },
        })
      }
    }
  }
  console.log('Seeded categories successfully')
}

main()
