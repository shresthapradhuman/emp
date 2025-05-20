import config from '@/lib/config'
import { PrismaClient } from './generated/prisma'

const globalForPrisma = globalThis as unknown as { prisma: PrismaClient }

const prisma = globalForPrisma.prisma || new PrismaClient()

if (config.nodeEnv !== 'production') globalForPrisma.prisma = prisma

export default prisma
