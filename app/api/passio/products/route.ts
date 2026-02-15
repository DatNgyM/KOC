import { NextResponse } from 'next/server';
import { getPassioProducts, isPassioError } from '@/lib/passio';

/**
 * GET /api/passio/products
 * Query: keyword (vd: ban phim, chuot gaming), limit (mặc định 20).
 */
export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const keyword = searchParams.get('keyword') ?? undefined;
  const limit = Math.min(Number(searchParams.get('limit')) || 20, 100);
  const data = await getPassioProducts({ keyword, limit });

  if (isPassioError(data)) {
    const status = data.status ?? 503;
    const isConfigError = data.error === 'Chưa cấu hình Passio API';
    return NextResponse.json(
      {
        error: data.error,
        hint: data.detail,
        ...(isConfigError && { docs: '/docs/docs-passio-api.md' }),
      },
      { status }
    );
  }

  return NextResponse.json(data ?? {});
}
