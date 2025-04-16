require('dotenv').config()
const { PrismaClient } = require('@prisma/client')
const prisma = new PrismaClient()

async function test() {
  try {
    await prisma.$connect()
    console.log('Database connected successfully!')
  } catch (err) {
    console.error('Connection error:', err)
  } finally {
    await prisma.$disconnect()
  }
}
test()