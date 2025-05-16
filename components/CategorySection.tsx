import React from 'react'
import CategoryCard from './CategoryCard'
import { Category } from '@/prisma/generated/prisma'

const CategorySection = ({ categories }: { categories: Category[] }) => {
  return (
    <section className="bg-primary/10 w-full py-12 md:py-16 lg:py-24">
      <div className="container mx-auto max-w-screen-xl px-4 md:px-16">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">
              Browse Events By Category
            </h2>
            <p className="text-foreground max-w-[900px] md:text-xl">
              Discover events that match your interests and passions
            </p>
          </div>
        </div>
        <div className="mx-auto mt-8 grid grid-cols-1 justify-center gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 lg:gap-8">
          {categories.map((category, key) => (
            <CategoryCard key={key} category={category} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default CategorySection
