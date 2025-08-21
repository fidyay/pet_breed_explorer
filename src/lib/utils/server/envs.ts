"use server";

import z from "zod";

const envSchema = z.object({
  CATS_API_KEY: z.string(),
  CATS_API_BASE_URL: z.url(),
  DOGS_API_KEY: z.string(),
  DOGS_API_BASE_URL: z.url(),
});

export const serverEnvs = envSchema.parse(process.env);
