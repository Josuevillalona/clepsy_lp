import { NextRequest, NextResponse } from "next/server";
import { getRedis } from "@/lib/redis";

const WAITLIST_KEY = "waitlist:emails";

export const dynamic = "force-dynamic";

export async function GET() {
  const redis = getRedis();
  const count = await redis.scard(WAITLIST_KEY);
  return NextResponse.json({ count });
}

export async function POST(req: NextRequest) {
  try {
    const redis = getRedis();
    const { email } = await req.json();

    if (!email || typeof email !== "string") {
      return NextResponse.json(
        { error: "Email is required" },
        { status: 400 }
      );
    }

    const normalized = email.trim().toLowerCase();

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(normalized)) {
      return NextResponse.json(
        { error: "Invalid email address" },
        { status: 400 }
      );
    }

    await redis.sadd(WAITLIST_KEY, normalized);
    const count = await redis.scard(WAITLIST_KEY);

    return NextResponse.json({ success: true, count });
  } catch {
    return NextResponse.json(
      { error: "Something went wrong" },
      { status: 500 }
    );
  }
}
