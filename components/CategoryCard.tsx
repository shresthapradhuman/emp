'use client'
import React from 'react'
import { Category } from '@/prisma/generated/prisma'
import { Card, CardContent } from '@/components/ui/card'
import { useRouter } from 'next/navigation'
import Image from 'next/image'

const CategoryCard = ({ category }: { category: Category }) => {
  const router = useRouter()
  const onClick = () => {
    router.push(`/events?category=${category.slug}`)
  }
  return (
    <Card className="flex aspect-square border-none shadow bg-primary/50 text-primary-foreground cursor-pointer items-center justify-center rounded-full sm:h-24 sm:w-24 md:h-24 md:w-24 lg:h-36 lg:w-36 xl:h-44 xl:w-44">
      <CardContent
        className="grid justify-items-center sm:gap-2"
        onClick={onClick}
      >
        <Image
          src={`/categories/${category.image}` || '/no-image.svg'}
          alt={category.name}
          height={60}
          width={60}
          quality={90}
          priority={true}
          className="object-cover h-12 w-12 sm:h-8 sm:w-8 md:h-10 md:w-10 lg:h-12 lg:w-12"
        />
        <h3 className="group-hover:text-primary text-center text-xs sm:text-sm lg:text-base line-clamp-1 font-medium">
          {category.name}
        </h3>
      </CardContent>
    </Card>
  )
}

export default CategoryCard
