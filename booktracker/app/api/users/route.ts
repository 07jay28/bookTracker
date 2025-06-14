// app/api/users/route.ts
import { NextResponse } from 'next/server'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

// GET /api/users
export async function GET() {
  const users = await prisma.users.findMany()
  return NextResponse.json(users)
}

// POST /api/users
export async function POST(req: Request) {
  const body = await req.json()

  const newUser = await prisma.users.create({
    data: {
      email: body.email,
      username: body.username,
      password_hash: body.password_hash,
    },
  })

  return NextResponse.json(newUser, { status: 201 })
}