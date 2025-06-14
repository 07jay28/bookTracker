// app/api/updates/route.ts
import { NextResponse } from 'next/server'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

// GET /api/updates
export async function GET() {
  const update = await prisma.updates.findMany()
  return NextResponse.json(update)
}

// POST /api/users
export async function POST(req: Request) {
  const body = await req.json()

  const newUpdate = await prisma.updates.create({
    data: {
      book_id: body.book_id,
      user_id: body.user_id,
    },
  })

  return NextResponse.json(newUpdate, { status: 201 })
}