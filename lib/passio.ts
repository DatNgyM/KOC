/**
 * Passio Affiliate API — một chỗ gọi API (DRY).
 * Cấu hình theo file api.pdf (base URL, API key, tên endpoint).
 * Doc: https://affiliate.passio.eco/pub-api-document#getting-started
 */

const BASE = process.env.PASSIO_API_BASE_URL?.replace(/\/$/, '');
/** Token (dùng trong query ?token=) — lấy từ Passio doc "Token" */
const TOKEN = process.env.PASSIO_API_KEY ?? process.env.PASSIO_TOKEN;
/** Token Private dùng cho OAuth (nếu endpoint cần). */
const TOKEN_PRIVATE = process.env.PASSIO_TOKEN_PRIVATE;

/** Cập nhật path theo đúng api.pdf (ga.passio.eco dùng /api/v3/...). */
export const PASSIO_ENDPOINTS = {
  products: '/api/v3/products',
  performance: '/api/v3/performance',
  campaigns: '/api/v3/campaigns',
  links: '/api/v3/links',
  reports: '/api/v3/reports',
} as const;

export type PassioResponse = Record<string, unknown>;

export interface PassioFetchError {
  error: string;
  detail?: string;
  status?: number;
}

function isError(
  data: PassioResponse | PassioFetchError | null
): data is PassioFetchError {
  return data !== null && typeof data === 'object' && 'error' in data;
}

/** Query params cho List Datafeed (products): token bắt buộc, còn lại tùy chọn. */
export type PassioProductsParams = {
  keyword?: string;
  limit?: number;
  page?: number;
  cy?: string;
  category_id?: string;
  advertiser_id?: string;
  shop_id?: string;
};

async function passioFetch(
  path: string,
  query?: Record<string, string | number | undefined>
): Promise<PassioResponse | PassioFetchError | null> {
  if (!BASE || !TOKEN) {
    return {
      error: 'Chưa cấu hình Passio API',
      detail: 'Thêm PASSIO_API_BASE_URL và PASSIO_API_KEY (Token) vào .env.local. Xem docs/docs-passio-api.md',
    };
  }

  const params = new URLSearchParams({ token: TOKEN });
  if (query) {
    Object.entries(query).forEach(([k, v]) => {
      if (v !== undefined && v !== '') params.set(k, String(v));
    });
  }
  const qs = params.toString();
  const url = `${BASE}${path.startsWith('/') ? path : `/${path}`}${qs ? `?${qs}` : ''}`;

  try {
    const res = await fetch(url, {
      headers: { 'Content-Type': 'application/json' },
      next: { revalidate: 60 },
    });

    if (!res.ok) {
      const text = await res.text();
      return {
        error: `Passio API error: ${res.status}`,
        detail: text,
        status: res.status,
      };
    }

    return (await res.json()) as PassioResponse;
  } catch (err) {
    const message = err instanceof Error ? err.message : 'Unknown error';
    return {
      error: 'Lỗi khi gọi Passio API',
      detail: message,
    };
  }
}

/** Lấy danh sách products (List Datafeed) — GET /api/v3/products?token=... */
export async function getPassioProducts(params?: PassioProductsParams) {
  return passioFetch(PASSIO_ENDPOINTS.products, params as Record<string, string | number | undefined>);
}

/** Lấy dữ liệu performance (báo cáo hiệu suất). */
export async function getPassioPerformance() {
  return passioFetch(PASSIO_ENDPOINTS.performance);
}

/** Lấy danh sách campaigns. */
export async function getPassioCampaigns() {
  return passioFetch(PASSIO_ENDPOINTS.campaigns);
}

/** Lấy link đã tạo (created links). */
export async function getPassioLinks() {
  return passioFetch(PASSIO_ENDPOINTS.links);
}

/** Lấy reports (báo cáo chi tiết — path có thể đổi theo api.pdf). */
export async function getPassioReports() {
  return passioFetch(PASSIO_ENDPOINTS.reports);
}

export { isError as isPassioError };