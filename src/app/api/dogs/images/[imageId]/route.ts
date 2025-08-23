import { getDogImageById } from "@/lib/functions/server";
import { NextResponse } from "next/server";

// for some reason dogs api does not include image url into dog breed data, so I made this proxy request to get it
export async function GET(
  request: Request,
  { params }: { params: Promise<{ imageId: string }> }
) {
  const { imageId } = await params;

  const imgData = await getDogImageById(imageId);

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
