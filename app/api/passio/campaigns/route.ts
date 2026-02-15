import { NextResponse } from 'next/server';
import { getPassioCampaigns, isPassioError } from '@/lib/passio';

/**
 * GET /api/passio/campaigns
 * Danh sách campaigns — cấu hình endpoint trong lib/passio.ts theo api.pdf.
 */
export async function GET() {
  const data = await getPassioCampaigns();

  if (isPassioError(data)) {
    const status = data.status ?? 503;
    return NextResponse.json(
      { error: data.error, hint: data.detail },
      { status }
    );
  }

  return NextResponse.json(data ?? {});
}
