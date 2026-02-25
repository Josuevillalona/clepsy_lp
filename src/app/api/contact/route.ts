import { NextRequest, NextResponse } from "next/server";
import { getRedis } from "@/lib/redis";

const CONTACT_KEY = "contact:messages";

export async function POST(req: NextRequest) {
    try {
        const redis = getRedis();
        const body = await req.json();
        const { firstName, lastName, email, message } = body;

        // Basic validation
        if (!firstName || !lastName || !email || !message) {
            return NextResponse.json(
                { error: "All fields are required" },
                { status: 400 }
            );
        }

        const normalizedEmail = email.trim().toLowerCase();
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(normalizedEmail)) {
            return NextResponse.json(
                { error: "Invalid email address" },
                { status: 400 }
            );
        }

        // Prepare the payload
        const submission = {
            firstName: firstName.trim(),
            lastName: lastName.trim(),
            email: normalizedEmail,
            message: message.trim(),
            timestamp: new Date().toISOString(),
        };

        // Store in a Redis List (lpush adds to the head of the list, so newest are first)
        await redis.lpush(CONTACT_KEY, JSON.stringify(submission));

        return NextResponse.json({ success: true });
    } catch (error) {
        console.error("Contact form error:", error);
        return NextResponse.json(
            { error: "Something went wrong" },
            { status: 500 }
        );
    }
}
