import { NextResponse } from "next/server";
import { metrics } from "@/lib/metrics";

export function GET() {
  return NextResponse.json({
    ok: true,
    timestamp: new Date().toISOString(),
    metrics,
  });
}
