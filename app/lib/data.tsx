import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

// Returns VisitorCount from the database
export async function getVisitorCount() {
  const visitorCount = await prisma.visitorCount.findFirst();
  return visitorCount;
}

// Check if VisitorCount exists, if yes increment it. Otherwise create a new entry
export async function icrementVisitorCount() {
  try {
    const existingCount = await prisma.visitorCount.findUnique({
      where: { id: 1 },
    });

    if (existingCount) {
      await prisma.visitorCount.update({
        where: { id: 1 },
        data: {
          count: existingCount.count + 1,
        },
      });
    } else {
      await prisma.visitorCount.create({
        data: {
          count: 0,
        },
      });
    }
  } catch (error) {
    console.error("Error incrementing visitor count:", error);
  }
}
