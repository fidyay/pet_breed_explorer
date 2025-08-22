import z from "zod";

const envSchema = z.object({
  NEXT_PUBLIC_CATS_IMAGES_BASE_URL: z.url(),
  NEXT_PUBLIC_DOGS_IMAGES_BASE_URL: z.url(),
});

export const clientEnvs = envSchema.parse(process.env);
