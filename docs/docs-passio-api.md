# Kết nối Passio / Ecomobi Affiliate API

Tài liệu tóm tắt cách lấy API key và cấu hình project để kéo sản phẩm từ **affiliate.passio.eco** (Ecomobi).

---

## 1. Tài liệu tham khảo (trên mạng)

| Nguồn | Nội dung |
|-------|----------|
| [Ecomobi API Overview](https://ecomobi.com/api-overview/) | Giới thiệu API, đăng ký, tạo API key |
| [Ecomobi – Unlock API for Affiliate](https://ecomobi.com/id/indo-api/) | Tính năng API, bước Getting Started |
| [affiliate.passio.eco](https://affiliate.passio.eco) | Dashboard publisher — **Tools → API** để xem doc & API key |
| [Passio Docs (GitBook)](https://passio.gitbook.io/passio-docs) | Tài liệu Passio (có thể có phần affiliate) |

---

## 2. Cách lấy API key (Ecomobi / Passio)

1. **Đăng ký / đăng nhập**  
   - Vào [affiliate.passio.eco](https://affiliate.passio.eco) (hoặc [account.passio.eco](https://account.passio.eco/register)).

2. **Vào mục API**  
   - Trên dashboard: **Tools → API** (icon `<>`).  
   - Hoặc theo Ecomobi: **Publisher dashboard → API Settings**.

3. **Tạo API key**  
   - Trong trang API / API Settings, tạo **API key** (generate key).  
   - Copy key và **không share** key này (coi như mật khẩu).

4. **Hai loại token trong doc**  
   - **Token** (ví dụ trong mục "Token"): dùng cho **List Datafeed** — gửi qua **query**: `GET /api/v3/products?token=...`.  
   - **Token Private** (mục "Token Private"): dùng cho **OAuth** với tài khoản (một số endpoint có thể yêu cầu).  
   - Trong project này, List Datafeed chỉ cần **Token** (điền vào `PASSIO_API_KEY`).

---

## 3. Cấu hình trong project

### Bước 1: Tạo `.env.local`

Copy từ `.env.example` và điền giá trị thật:

```env
PASSIO_API_BASE_URL=https://ga.passio.eco
# Token (mục "Token" trong doc Passio) — được gửi trong URL: ?token=...
PASSIO_API_KEY=your_token_here
```

**Token Private** (nếu sau này dùng OAuth): thêm `PASSIO_TOKEN_PRIVATE=...` vào `.env.local`.

### Bước 2: Kiểm tra endpoint trong doc

Trong **api.pdf** hoặc trang **Pub API Document** trên Passio, xem:

- Base URL có đúng `https://ga.passio.eco` không.  
- Endpoint products có đúng `/api/v3/products` không (hoặc `/v3/products`, `/api/products`…).  
- Nếu khác, sửa trong `lib/passio.ts` → `PASSIO_ENDPOINTS.products`.

### Bước 3: Chạy và test

```bash
npm run dev
```

- Mở **http://localhost:3001/shop** → trang sẽ gọi `GET /api/passio/products`.  
- Hoặc gọi trực tiếp: **http://localhost:3001/api/passio/products**.

- Nếu trả **503**:
  - Kiểm tra đã có `.env.local` và đúng `PASSIO_API_BASE_URL`, `PASSIO_API_KEY`.  
  - Kiểm tra API key còn hiệu lực (chưa thu hồi / đổi).  
  - Thử đổi cách auth (Bearer vs X-API-Key) theo mục 4 bên dưới.

---

## 4. Cách gửi token (theo doc Passio)

**List Datafeed** (lấy danh sách sản phẩm) dùng **query parameter**:

- URL: `GET https://ga.passio.eco/api/v3/products?token={token}&keyword=...&limit=...&page=...` (các tham số khác tùy chọn).
- Trong project: `PASSIO_API_KEY` được tự động thêm vào URL dạng `?token=...`. Không dùng header Authorization.

---

## 5. Luồng dữ liệu trong project

```
affiliate.passio.eco (ga.passio.eco)
        ↓ GET /api/v3/products (+ API key)
   lib/passio.ts → getPassioProducts()
        ↓
   app/api/passio/products/route.ts → GET /api/passio/products
        ↓
   app/shop/page.tsx (fetch) → mapPassioResponseToProducts()
        ↓
   Hiển thị grid sản phẩm trên /shop
```

---

## 6. Lỗi thường gặp

| Triệu chứng | Cách xử lý |
|-------------|------------|
| 503 từ `/api/passio/products` | Kiểm tra `.env.local` có đủ `PASSIO_API_BASE_URL`, `PASSIO_API_KEY`. Restart `npm run dev`. |
| 401 Unauthorized | Sai Token. Kiểm tra `PASSIO_API_KEY` đúng với mục "Token" trong doc Passio. |
| 404 Not Found | Sai path. So lại endpoint trong api.pdf và sửa `PASSIO_ENDPOINTS` trong `lib/passio.ts`. |
| Response không phải JSON / format lạ | Có thể endpoint khác hoặc API trả HTML lỗi. Mở trực tiếp URL (Postman/curl) với cùng header để xem body trả về. |

---

*Cập nhật theo Ecomobi API Overview và hướng dẫn affiliate.passio.eco. Nếu Passio đổi base URL hoặc tên header, chỉnh lại `.env.local` và `lib/passio.ts` cho đúng.*
