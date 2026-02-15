import { NextResponse } from 'next/server';
import { getPassioPerformance, isPassioError } from '@/lib/passio';

/**
 * GET /api/passio/performance
 * Báo cáo performance — cấu hình endpoint trong lib/passio.ts theo api.pdf.
 */
export async function GET() {
  const data = await getPassioPerformance();

  if (isPassioError(data)) {
    const status = data.status ?? 503;
    return NextResponse.json(
      { error: data.error, hint: data.detail },
      { status }
    );
  }

  return NextResponse.json(data ?? {});
}
