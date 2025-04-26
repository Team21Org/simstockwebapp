import { auth } from "../../auth";
import { redirect } from "next/navigation";
import { MarketSchedule } from "@prisma/client";
import prisma from "../lib/prisma";
import bcrypt from "bcryptjs";

// lib/marketUtils.ts

/**
 * Check if the current time is between the openTime and closeTime.
 * Assumes schedule times are provided in "HH:mm" 24-hour format and that
 * the server time is in the appropriate time zone.
 */
export function isMarketOpen(schedule: MarketSchedule): boolean {
  const now = new Date();
  const day = now.getDay(); // 0 = Sunday, 6 = Saturday

  // Market is closed on weekends
  if (day === 0 || day === 6) {
    return false;
  }

  const currentMinutes = now.getHours() * 60 + now.getMinutes();

  const [openHour, openMinute] = schedule.startTime.split(":").map(Number);
  const [closeHour, closeMinute] = schedule.endTime.split(":").map(Number);

  const openingMinutes = openHour * 60 + openMinute;
  const closingMinutes = closeHour * 60 + closeMinute;

  return currentMinutes >= openingMinutes && currentMinutes <= closingMinutes;
}

export async function registerUser({
  email,
  password,
  confirmPassword,
  name,
  userName,
}: {
  email: string;
  confirmEmail: string;
  password: string;
  confirmPassword: string;
  name: string;
  userName: string;
}) {
  const authSecret = process.env.AUTH_SECRET;

  if (password !== confirmPassword) {
    throw new Error("Passwords do not match.");
  }
  if (email !== confirmEmail) {
    throw new Error("Email addresses do not match.");
  }

  const hashedPassword = bcrypt.hashSync(password + authSecret, 10);

  return prisma.user.create({
    data: {
      email,
      password: hashedPassword,
      name,
      userName,
      role: "USER",
      profile: {
        create: {
          email,
          bio: "",
          Portfolio: {
            create: {
              cash: 0.0,
              totalValue: 0.0,
            },
          },
        },
      },
    },
  });
}
