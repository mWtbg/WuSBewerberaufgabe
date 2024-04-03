import { PrismaClient } from '@prisma/client'

// daten die nach restart da sein seollen + crud funktionen für diese daten

const prisma = new PrismaClient()
export async function getUsers() {
  const users = await prisma.user.findMany()
  console.log(users)
  console.log("users")
}

export async function createUsers() {
    console.log("create")
  const user = await prisma.user.create({
    data: {
      name: 'yooo',
      email: 'ae@p.io',
    },
  })
  console.log(user)

}