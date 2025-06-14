// app/api/updates/route.ts
import { NextResponse } from 'next/server'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

// GET /api/updates
export async function GET() {
  const friend = await prisma.friends.findMany()
  return NextResponse.json(friend)
}

// POST /api/users
export async function POST(req: Request) {
  const body = await req.json()

  const newFriend = await prisma.friends.create({
    data: {
        user_id: body.user_id,
        friend_id: body.friend_id,

    },
  })

  return NextResponse.json(newFriend, { status: 201 })
}