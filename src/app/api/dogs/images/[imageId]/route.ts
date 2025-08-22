import { TDogBreedImgData } from "@/lib/types";
import { serverEnvs } from "@/lib/utils/server";
import { NextResponse } from "next/server";

const MAX_IMAGE_CACHE_TIME = 3600;

// for some reason dogs api does not include image url into dog breed data, so I made this proxy request to get it
export async function GET(
  request: Request,
  { params }: { params: Promise<{ imageId: string }> }
) {
  const { imageId } = await params;

  const resp = await fetch(
    `${serverEnvs.DOGS_API_BASE_URL}/images/${imageId}`,
    {
      headers: {
        "x-api-key": serverEnvs.CATS_API_KEY,
      },
      cache: "force-cache",
      // refresh after 1 hour
      next: {
        revalidate: MAX_IMAGE_CACHE_TIME,
      },
    }
  );

  const imgData: TDogBreedImgData = await resp.json();

  const upstreamResponse = await fetch(imgData.url);

  if (!upstreamResponse.ok) {
    return new NextResponse("Failed to fetch image", { status: 502 });
  }

  const contentType =
    upstreamResponse.headers.get("content-type") || "image/jpeg";

  return new NextResponse(upstreamResponse.body, {
    status: 200,
    headers: {
      "Content-Type": contentType,
    },
  });
}
