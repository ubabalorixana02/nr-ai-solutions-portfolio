// Very small in-memory rate limit: resets on cold start and doesn't share
// state across serverless instances, so it's a speed bump against casual
// spam/retries, not a real distributed rate limiter. If a route starts
// getting hammered for real, swap this for Vercel KV / Upstash instead.
const submissions = new Map<string, number[]>();
const RATE_LIMIT = 5;
const WINDOW_MS = 60 * 60 * 1000;

export function isRateLimited(key: string): boolean {
  const now = Date.now();
  const timestamps = (submissions.get(key) ?? []).filter((t) => now - t < WINDOW_MS);
  timestamps.push(now);
  submissions.set(key, timestamps);
  return timestamps.length > RATE_LIMIT;
}

export function getClientIp(request: Request): string {
  return request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ?? "unknown";
}
