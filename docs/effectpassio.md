## Trạng thái: 1–4 đã làm, 5 chưa

- **1. Pre-warm cache (cron)** — `GET /api/cron/warm-shop`, `vercel.json` crons mỗi 15 phút. Cần set `CRON_SECRET` trên Vercel.
- **2. Cache client** — `sessionStorage` + background revalidate trong `app/shop/page.tsx`.
- **3. Skeleton UI** — `components/product/ShopCardSkeleton.tsx`, trang shop hiển thị grid skeleton khi loading.
- **4. Prefetch Shop** — Header/Footer: hover link Shop gọi `fetch('/api/shop/products')`, Link có `prefetch`.
- **5. Load từng phần** — Chưa làm (sẽ làm sau khi test 1–4 ổn).

---

## 1. Pre-warm cache (cron)

**Ý tưởng:** Dùng cron (Vercel Cron / GitHub Actions) gọi API shop định kỳ (vd 5–15 phút) để “làm nóng” cache. User vào web gần như luôn hit cache, ít phải đợi Passio.

**Áp dụng:**

- Tạo API route kiểu `GET /api/cron/warm-shop` (bảo vệ bằng secret header hoặc Vercel CRON_SECRET).
- Trong route gọi `getShopProducts()` (hoặc fetch `/api/shop/products`).
- Trong `vercel.json` khai báo cron chạy mỗi 10–15 phút.
- Next.js cache (revalidate) sẽ được fill sẵn → user vào trang shop thấy nhanh.

---

## 2. Cache client (sessionStorage + background revalidate)

**Ý tưởng:** Lần đầu load shop → lưu list sản phẩm vào `sessionStorage`. Lần 2 trở đi (trong cùng tab) đọc từ sessionStorage hiển thị ngay, đồng thời fetch mới ở background rồi cập nhật nếu có data mới.

**Áp dụng:**

- Trong `app/shop/page.tsx` (hoặc component gọi `/api/shop/products`):
  - Khi có data: `sessionStorage.setItem('shop_products', JSON.stringify(data))`.
  - Khi mount: đọc `sessionStorage.getItem('shop_products')` → nếu có thì set state hiển thị ngay, sau đó vẫn `fetch('/api/shop/products')` và cập nhật khi response về.
- Kết quả: lần 2 trở đi trong session cảm giác “như instant”.

---

## 3. Skeleton UI

**Ý tưởng:** Trong lúc đang load, không để trắng hay spinner nhỏ, mà hiển thị khung giống layout thẻ sản phẩm (ảnh + title + giá dạng placeholder) → cảm giác nhanh và ổn định hơn.

**Áp dụng:**

- Trong trang shop, khi `loading === true` thay vì chỉ chữ “Đang tải…” thì render grid các thẻ “skeleton” (div/placeholder cùng kích thước với product card, có thể dùng animation pulse).
- Có thể tách component `ShopCardSkeleton` dùng chung cho list và (nếu cần) cho detail.

---

## 4. Prefetch khi hover / link Shop

**Ý tưởng:** Khi user hover vào link “Shop” (header/footer) hoặc sắp vào shop, gọi trước `fetch('/api/shop/products')` hoặc dùng `next/link` prefetch. Khi user click vào thì data đã có hoặc sắp về → giảm thời gian chờ.

**Áp dụng:**

- Header/Footer: link tới `/shop` dùng `<Link href="/shop" prefetch={true}>` (Next mặc định prefetch link trong viewport).
- Hoặc thêm `onMouseEnter` trên link Shop: gọi `fetch('/api/shop/products')` hoặc `router.prefetch('/shop')` để cache sẵn.
- Kết quả: click vào Shop đỡ chờ hơn.

---

## 5. Load từng phần (streaming hoặc 4 request)

**Ý tưởng:** Thay vì 1 request merge 4 keyword rồi mới trả hết, cho user thấy sản phẩm sớm hơn: hoặc streaming (trả từng chunk), hoặc 4 request riêng (mỗi keyword một request) → render từng nhóm khi xong.

**Áp dụng:**

- **Cách 4 request:**
  - Client gọi 4 endpoint (vd `/api/shop/products?section=chill`, `...section=deadline`, v.v.) hoặc 4 query khác nhau.
  - Mỗi khi 1 request xong → append nhóm sản phẩm đó vào list (setState).
  - User thấy từng block sản phẩm xuất hiện dần thay vì đợi hết cả 4.
- **Streaming:** Phức tạp hơn (Server-Sent Events hoặc streaming response); thường 4 request đơn giản đã đủ “thấy sớm”.

---

## Thứ tự làm gợi ý

| Ưu tiên | Cái nào                                  | Lý do                                          |
| --------- | ------------------------------------------ | ----------------------------------------------- |
| 1         | Skeleton UI                                | Nhẹ, làm ngay được, cảm giác nhanh rõ   |
| 2         | Prefetch link Shop                         | Nhẹ, ít code, giảm chờ khi vào shop        |
| 3         | Cache client (sessionStorage + revalidate) | Trung bình, lần 2 “instant”                 |
| 4         | Pre-warm cache (cron)                      | Trung bình, cần Vercel Cron + route bảo vệ  |
| 5         | Load từng phần (4 request)               | Nặng hơn, đổi cách API/client hoạt động |

Bạn muốn đi sâu cách làm (code) từng cái nào trước (vd Skeleton + Prefetch) thì nói rõ, tớ gợi ý từng bước trong repo của bạn.
