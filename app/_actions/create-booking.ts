"use server"

import { db } from "../_lib/prisma"

interface CreateBookingParams {
  serviceId: string
  date: Date
  userId: string
}

export const createBooking = async (params: CreateBookingParams) => {
  await db.booking.create({
    data: params,
  })
}
