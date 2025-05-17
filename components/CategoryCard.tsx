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
    <Card className="flex aspect-square cursor-pointer items-center justify-center rounded-full">
      <CardContent
        className="grid justify-items-center gap-4"
        onClick={onClick}
      >
        <Image
          src={`/categories/${category.image}` || '/no-image.svg'}
          alt={category.name}
          height={60}
          width={60}
          quality={90}
          priority={true}
          className="object-cover"
        />
        <h3 className="group-hover:text-primary text-center text-sm font-medium">
          {category.name}
        </h3>
      </CardContent>
    </Card>
  )
}

export default CategoryCard
