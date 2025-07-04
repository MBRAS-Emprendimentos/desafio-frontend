import { PrismaClient } from '@prisma/client'


type GlobalThisWithPrisma = typeof globalThis & {
  __prisma?: PrismaClient
}

const prismaInstance = () => {
  const instance = new PrismaClient({
    log: process.env.NODE_ENV === 'development' ? ['query'] : ['error']
  })
  

  instance.$connect()
  return instance
}

const globalPrisma = (globalThis as GlobalThisWithPrisma)


export const prisma = globalPrisma.__prisma ?? prismaInstance()


if (process.env.NODE_ENV !== 'production') {
  globalPrisma.__prisma = prisma
}