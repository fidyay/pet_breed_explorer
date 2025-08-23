import z from "zod";

const envSchema = z.object({
  NEXT_PUBLIC_CATS_IMAGES_BASE_URL: z.url(),
  NEXT_PUBLIC_DOGS_IMAGES_BASE_URL: z.url(),
});

// on client side nextjs replaces env variables with their values and they are not accessible at runtime via process.env
const clientEnvsMap = {
  NEXT_PUBLIC_CATS_IMAGES_BASE_URL:
    process.env.NEXT_PUBLIC_CATS_IMAGES_BASE_URL,
  NEXT_PUBLIC_DOGS_IMAGES_BASE_URL:
    process.env.NEXT_PUBLIC_DOGS_IMAGES_BASE_URL,
};

export const clientEnvs = envSchema.parse(clientEnvsMap);
