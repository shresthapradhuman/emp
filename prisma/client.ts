import config from '@/lib/config'
import { PrismaClient } from './generated/prisma'
import { withAccelerate } from '@prisma/extension-accelerate'

const globalForPrisma = globalThis as unknown as { prisma: PrismaClient }

const prisma =
  globalForPrisma.prisma || new PrismaClient().$extends(withAccelerate())

if (config.nodeEnv !== 'production') globalForPrisma.prisma = prisma

export default prisma
