'use client'
import React from 'react'
import { Category } from '@/prisma/generated/prisma'
import { Card, CardContent } from '@/components/ui/card'
import { categoryIconsList } from '@/constants'
import { useRouter } from 'next/navigation'

const CategoryCard = ({ category }: { category: Category }) => {
  const Icon = categoryIconsList.find(
    (icon) => icon.name === category.name,
  )?.icon
  const router = useRouter()
  const onClick = () => {
    router.push(`/events?slug=${category.slug}`)
  }
  return (
    <Card>
      <CardContent
        className="group flex cursor-pointer items-center gap-4"
        onClick={onClick}
      >
        <div className="bg-primary/10 border-primary/10 group-hover:bg-primary/50 rounded-full border p-3">
          {Icon && (
            <Icon
              size={32}
              className="stroke-accent group-hover:stroke-foreground"
            />
          )}
        </div>
        <div className="flex-1">
          <h3 className="group-hover:text-primary text-base font-medium">
            {category.name}
          </h3>
          <p className="text-sm">No events</p>
        </div>
      </CardContent>
    </Card>
  )
}

export default CategoryCard
