// app/api/updates/route.ts
import { NextResponse } from 'next/server'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

// GET /api/updates
export async function GET() {
  const book = await prisma.books.findMany()
  return NextResponse.json(book)
}

// POST /api/users
export async function POST(req: Request) {
  const body = await req.json()

  const newBook = await prisma.books.create({
    data: {
        title: body.title,
        author: body.author,
        description: body.description,
    },
  })

  return NextResponse.json(newBook, { status: 201 })
}