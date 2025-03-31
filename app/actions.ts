// app/actions.ts
"use server";
import { neon } from "@neondatabase/serverless";
import dotenv from "dotenv";

export async function getData() {
  dotenv.config();
  const sql = neon(process.env.DATABASE_URL);
  const data = await sql`...`;
  return data;
}
