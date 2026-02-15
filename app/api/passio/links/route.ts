import { NextResponse } from 'next/server';
import { getPassioLinks, isPassioError } from '@/lib/passio';

/**
 * GET /api/passio/links
 * Link đã tạo (created links) — cấu hình endpoint trong lib/passio.ts theo api.pdf.
 */
export async function GET() {
  const data = await getPassioLinks();

  if (isPassioError(data)) {
    const status = data.status ?? 503;
    return NextResponse.json(
      { error: data.error, hint: data.detail },
      { status }
    );
  }

  return NextResponse.json(data ?? {});
}
