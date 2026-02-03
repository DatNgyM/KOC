# 🚀 Hướng Dẫn Làm Việc Chi Tiết - KOC Project

## 📋 Quy trình làm việc tổng quan

```
1. Làm feature trên nhánh feature/*
2. Test trên nhánh feature/*
3. Push và tạo PR về develop
4. Merge vào develop
5. Test tổng thể trên develop
6. Tạo release/v1.0.0 từ develop
7. Test cuối cùng trên release
8. Merge release về main (production)
```

---

## 🎯 GIAI ĐOẠN 1: HOÀN THIỆN WEBSITE

### 1️⃣ Nhánh: `feature/product-data-update`

**📍 Vị trí làm việc:**
```bash
git checkout develop
git pull origin develop
git checkout feature/product-data-update
```

**✅ Công việc cần làm:**

1. **Cập nhật file `lib/data/products.ts`:**
   - [ ] Thêm hình ảnh cho các sản phẩm đang `image: null`
   - [ ] Điền link affiliate vào trường `link`
   - [ ] Fix lỗi chính tả trong `description`
   - [ ] Fix lỗi chính tả trong `reviewShort`

2. **Thêm ảnh sản phẩm:**
   - [ ] Thêm ảnh vào `public/assets/product/`
   - [ ] Đảm bảo tên file khớp với tên trong `products.ts`

**🧪 Test:**
```bash
npm run dev
# Mở http://localhost:3001
# Kiểm tra:
# - Ảnh sản phẩm hiển thị đúng
# - Link affiliate hoạt động
# - Nội dung không có lỗi chính tả
```

**📤 Hoàn thành và Push:**
```bash
git add lib/data/products.ts public/assets/product/
git commit -m "feat: update product data with images and affiliate links"
git push origin feature/product-data-update
```

**🔀 Tạo Pull Request:**
- Vào GitHub: https://github.com/DatNgyM/KOC/pulls
- Click "New Pull Request"
- Base: `develop` ← Compare: `feature/product-data-update`
- Tạo PR và Merge

**🧹 Sau khi merge:**
```bash
git checkout develop
git pull origin develop
git branch -d feature/product-data-update  # Xóa nhánh local
```

---

### 2️⃣ Nhánh: `feature/image-optimization`

**📍 Vị trí làm việc:**
```bash
git checkout develop
git pull origin develop
git checkout feature/image-optimization
```

**✅ Công việc cần làm:**

1. **Tối ưu hình ảnh:**
   - [ ] Vào https://tinypng.com hoặc https://squoosh.app
   - [ ] Upload tất cả ảnh trong `public/assets/`
   - [ ] Download ảnh đã tối ưu (WebP hoặc PNG nhẹ hơn)
   - [ ] Replace ảnh cũ

2. **Cập nhật `next.config.js`:**
   - [ ] Thêm config image optimization của Next.js
   ```javascript
   images: {
     formats: ['image/avif', 'image/webp'],
     deviceSizes: [640, 750, 828, 1080, 1200],
   }
   ```

**🧪 Test:**
```bash
npm run dev
# Kiểm tra:
# - Ảnh vẫn hiển thị đúng
# - Website load nhanh hơn
# - Dùng DevTools Network tab để xem dung lượng ảnh
```

**📤 Hoàn thành và Push:**
```bash
git add public/assets/ next.config.js
git commit -m "optimize: reduce image size by 60% using WebP format"
git push origin feature/image-optimization
```

**🔀 Tạo PR về `develop` → Merge → Xóa branch**

---

### 3️⃣ Nhánh: `feature/mobile-responsive`

**📍 Vị trí làm việc:**
```bash
git checkout develop
git pull origin develop
git checkout feature/mobile-responsive
```

**✅ Công việc cần làm:**

1. **Test trên mobile:**
   - [ ] Mở DevTools (F12)
   - [ ] Click icon điện thoại (Responsive mode)
   - [ ] Test trên iPhone 12 Pro, Samsung Galaxy S20
   - [ ] Note lại các lỗi UI

2. **Fix responsive issues:**
   - [ ] Sửa `app/globals.css` nếu cần
   - [ ] Sửa các component trong `components/` nếu bị lỗi
   - [ ] Cập nhật `tailwind.config.ts` nếu cần breakpoint mới

3. **Đặc biệt chú ý:**
   - [ ] Nút "Mua Ngay" không bị che khuất
   - [ ] Menu navigation hoạt động tốt
   - [ ] Ảnh không bị vỡ layout
   - [ ] Text đọc được, không bị nhỏ quá

**🧪 Test:**
```bash
npm run dev
# DevTools → Responsive mode
# Test tất cả pages:
# - Homepage (/)
# - Shop (/shop)
# - Product detail (/shop/[slug])
# - Blog (/blog)
```

**📤 Hoàn thành và Push:**
```bash
git add app/globals.css components/ tailwind.config.ts
git commit -m "fix: improve mobile responsiveness across all pages"
git push origin feature/mobile-responsive
```

**🔀 Tạo PR về `develop` → Merge → Xóa branch**

---

### 🧪 TEST TỔNG HỢP SAU GIAI ĐOẠN 1

**Sau khi merge 3 nhánh trên vào `develop`:**

```bash
git checkout develop
git pull origin develop
npm run dev
```

**Checklist test:**
- [ ] Tất cả sản phẩm có ảnh đẹp
- [ ] Link affiliate hoạt động
- [ ] Website load nhanh (< 3s)
- [ ] Mobile responsive hoàn hảo
- [ ] Không có lỗi console

**✅ Nếu OK → Chuyển sang Giai đoạn 2**

---

## 💼 GIAI ĐOẠN 2: TÍNH NĂNG KOC

### 4️⃣ Nhánh: `feature/affiliate-link-management`

**📍 Vị trí làm việc:**
```bash
git checkout develop
git pull origin develop
git checkout feature/affiliate-link-management
```

**✅ Công việc cần làm:**

1. **Tạo file `lib/links.ts`:**
```typescript
export const affiliateLinks = {
  'son-dior': 'https://shopee.vn/...',
  'den-ngu': 'https://shopee.vn/...',
  // ...thêm các link
}

export function getAffiliateLink(slug: string): string | null {
  return affiliateLinks[slug] || null;
}
```

2. **Tạo route redirect `app/go/[slug]/route.ts`:**
```typescript
import { redirect } from 'next/navigation';
import { getAffiliateLink } from '@/lib/links';

export async function GET(
  request: Request,
  { params }: { params: { slug: string } }
) {
  const link = getAffiliateLink(params.slug);
  
  if (!link) {
    redirect('/shop');
  }
  
  redirect(link);
}
```

3. **Cập nhật `lib/data/products.ts`:**
   - [ ] Thay link trực tiếp bằng `/go/[slug]`
   - Ví dụ: `link: '/go/son-dior'` thay vì link Shopee dài

**🧪 Test:**
```bash
npm run dev
# Test:
# - Click nút "Mua Ngay" trên sản phẩm
# - Phải redirect đến Shopee với link affiliate
# - Test tất cả sản phẩm
```

**📤 Hoàn thành và Push:**
```bash
git add lib/links.ts app/go/ lib/data/products.ts
git commit -m "feat: add affiliate link management system with URL shortening"
git push origin feature/affiliate-link-management
```

**🔀 Tạo PR về `develop` → Merge → Xóa branch**

---

### 5️⃣ Nhánh: `feature/google-analytics`

**📍 Vị trí làm việc:**
```bash
git checkout develop
git pull origin develop
git checkout feature/google-analytics
```

**✅ Công việc cần làm:**

1. **Tạo Google Analytics 4:**
   - [ ] Vào https://analytics.google.com
   - [ ] Tạo GA4 property mới
   - [ ] Copy Measurement ID (dạng G-XXXXXXXXXX)

2. **Cập nhật `.env.local` (KHÔNG commit):**
```env
NEXT_PUBLIC_GA_MEASUREMENT_ID=G-XXXXXXXXXX
```

3. **Cập nhật `.env.example`:**
```env
NEXT_PUBLIC_GA_MEASUREMENT_ID=G-XXXXXXXXXX
```

4. **Cập nhật `components/layout/GoogleAnalytics.tsx`:**
   - [ ] Thêm GA4 tracking code
   - [ ] Thêm event tracking cho "Click Mua Ngay"

5. **Tích hợp vào `app/layout.tsx`:**
```typescript
import GoogleAnalytics from '@/components/layout/GoogleAnalytics';

export default function RootLayout({ children }) {
  return (
    <html>
      <body>
        <GoogleAnalytics />
        {children}
      </body>
    </html>
  );
}
```

**🧪 Test:**
```bash
npm run dev
# Test:
# - Mở Google Analytics Real-time
# - Browse website
# - Phải thấy visitor trên GA
# - Click "Mua Ngay" → Check event trên GA
```

**📤 Hoàn thành và Push:**
```bash
git add components/layout/GoogleAnalytics.tsx app/layout.tsx .env.example
git commit -m "feat: integrate Google Analytics 4 with event tracking"
git push origin feature/google-analytics
```

**⚠️ CHÚ Ý:** KHÔNG commit file `.env.local`

**🔀 Tạo PR về `develop` → Merge → Xóa branch**

---

### 6️⃣ Nhánh: `feature/cms-integration` (TÙY CHỌN)

**📍 Vị trí làm việc:**
```bash
git checkout develop
git pull origin develop
git checkout feature/cms-integration
```

**✅ Công việc cần làm:**

1. **Cài đặt Sanity:**
```bash
npm install @sanity/client next-sanity
```

2. **Tạo file `lib/sanity.ts`:**
   - [ ] Config Sanity client
   - [ ] Thêm functions để fetch data

3. **Tạo schemas:**
   - [ ] `schemas/product.ts`
   - [ ] `schemas/blog.ts`

**📤 Hoàn thành và Push:**
```bash
git add lib/sanity.ts schemas/ package.json package-lock.json
git commit -m "feat: integrate Sanity CMS for content management"
git push origin feature/cms-integration
```

**🔀 Tạo PR về `develop` → Merge → Xóa branch**

**💡 Lưu ý:** Có thể skip nhánh này nếu tiếp tục dùng file `products.ts`

---

## 🌐 GIAI ĐOẠN 3: SEO & DEPLOY

### 7️⃣ Nhánh: `feature/seo-optimization`

**📍 Vị trí làm việc:**
```bash
git checkout develop
git pull origin develop
git checkout feature/seo-optimization
```

**✅ Công việc cần làm:**

1. **Tạo `public/robots.txt`:**
```txt
User-agent: *
Allow: /
Disallow: /api/

Sitemap: https://your-domain.com/sitemap.xml
```

2. **Tạo `app/sitemap.ts`:**
```typescript
import { MetadataRoute } from 'next';
import { products } from '@/lib/data/products';

export default function sitemap(): MetadataRoute.Sitemap {
  const productUrls = products.map((product) => ({
    url: `https://your-domain.com/shop/${product.slug}`,
    lastModified: new Date(),
  }));

  return [
    {
      url: 'https://your-domain.com',
      lastModified: new Date(),
    },
    {
      url: 'https://your-domain.com/shop',
      lastModified: new Date(),
    },
    ...productUrls,
  ];
}
```

3. **Cập nhật metadata các page:**
   - [ ] `app/page.tsx` - Homepage metadata
   - [ ] `app/shop/page.tsx` - Shop metadata
   - [ ] `app/shop/[slug]/page.tsx` - Product metadata

**🧪 Test:**
```bash
npm run build
npm start
# Test:
# - Truy cập http://localhost:3001/robots.txt
# - Truy cập http://localhost:3001/sitemap.xml
# - Check meta tags trong DevTools
```

**📤 Hoàn thành và Push:**
```bash
git add public/robots.txt app/sitemap.ts app/**/page.tsx
git commit -m "feat: add SEO optimization with sitemap and meta tags"
git push origin feature/seo-optimization
```

**🔀 Tạo PR về `develop` → Merge → Xóa branch**

---

## 🧪 TEST TỔNG HỢP TRÊN DEVELOP

**Sau khi merge TẤT CẢ features vào `develop`:**

```bash
git checkout develop
git pull origin develop

# Xóa node_modules và reinstall
rm -rf node_modules package-lock.json
npm install

# Build production
npm run build
npm start
```

**Checklist test đầy đủ:**
- [ ] Tất cả trang load không lỗi
- [ ] Ảnh hiển thị đúng, load nhanh
- [ ] Mobile responsive tốt
- [ ] Link affiliate hoạt động (`/go/[slug]`)
- [ ] Google Analytics tracking (check Real-time)
- [ ] SEO: robots.txt, sitemap.xml
- [ ] Meta tags đầy đủ
- [ ] Không có lỗi console
- [ ] Performance tốt (Lighthouse > 90)

**✅ Nếu test OK → Chuyển sang Release**

---

## 🚀 RELEASE & DEPLOY

### 8️⃣ Tạo Release Branch

**📍 Tạo release từ develop:**
```bash
git checkout develop
git pull origin develop
git checkout -b release/v1.0.0
```

**✅ Công việc cần làm:**

1. **Cập nhật version trong `package.json`:**
```json
{
  "version": "1.0.0"
}
```

2. **Tạo `CHANGELOG.md`:**
```markdown
# Changelog

## [1.0.0] - 2026-02-03

### Added
- Product data with affiliate links
- Image optimization (WebP)
- Mobile responsive design
- Affiliate link management system
- Google Analytics 4 integration
- SEO optimization (sitemap, robots.txt)

### Fixed
- Mobile UI issues
- Performance improvements
```

3. **Test lần cuối:**
```bash
npm run build
npm start
# Test toàn bộ lại
```

**📤 Commit:**
```bash
git add package.json CHANGELOG.md
git commit -m "chore: prepare release v1.0.0"
git push origin release/v1.0.0
```

---

### 9️⃣ Merge Release về Main

**📍 Merge vào main (production):**
```bash
# 1. Merge vào main
git checkout main
git pull origin main
git merge release/v1.0.0

# 2. Tạo tag
git tag -a v1.0.0 -m "Release version 1.0.0"

# 3. Push lên GitHub
git push origin main
git push origin v1.0.0
```

**📍 Merge về develop (để develop có version mới):**
```bash
git checkout develop
git merge release/v1.0.0
git push origin develop
```

**🧹 Xóa release branch:**
```bash
git branch -d release/v1.0.0
git push origin --delete release/v1.0.0
```

---

### 🔟 Deploy lên Vercel

**✅ Các bước deploy:**

1. **Đẩy code lên GitHub:**
   - ✅ Đã xong (code đang ở main)

2. **Kết nối Vercel:**
   - [ ] Vào https://vercel.com
   - [ ] Login bằng GitHub
   - [ ] Click "New Project"
   - [ ] Import repo: `DatNgyM/KOC`
   - [ ] Framework: Next.js (auto-detect)
   - [ ] Click "Deploy"

3. **Cấu hình Environment Variables:**
   - [ ] Vào Project Settings → Environment Variables
   - [ ] Thêm: `NEXT_PUBLIC_GA_MEASUREMENT_ID=G-XXX`
   - [ ] (Thêm các env khác nếu có)

4. **Test trên Vercel:**
   - [ ] Vercel sẽ cho URL: `koc-xxx.vercel.app`
   - [ ] Test toàn bộ website
   - [ ] Check GA hoạt động

5. **Mua tên miền (optional):**
   - [ ] Mua domain: `disancungto.com`
   - [ ] Vào Vercel → Project Settings → Domains
   - [ ] Add domain
   - [ ] Cấu hình DNS theo hướng dẫn Vercel

---

## 📊 TÓM TẮT QUY TRÌNH

```
feature/product-data-update ─┐
feature/image-optimization   ─┤
feature/mobile-responsive    ─┤
feature/affiliate-link       ─┼──► develop ──► release/v1.0.0 ──┬──► main (production)
feature/google-analytics     ─┤                                   │
feature/cms-integration      ─┤                                   └──► develop (sync back)
feature/seo-optimization     ─┘
```

**Nguyên tắc:**
1. Mỗi feature làm riêng trên nhánh `feature/*`
2. Test OK → PR về `develop`
3. Tất cả features xong → `develop` test tổng thể
4. OK → tạo `release/v1.0.0`
5. Release test cuối → merge về `main` + `develop`
6. `main` → Deploy lên Vercel

---

## ⚠️ LƯU Ý QUAN TRỌNG

1. **KHÔNG BAO GIỜ commit trực tiếp lên `main`**
2. **LUÔN pull develop trước khi checkout feature mới**
3. **KHÔNG commit file `.env.local`** (chứa secrets)
4. **Test kỹ trên local trước khi push**
5. **Commit message rõ ràng, có prefix (feat/fix/docs/...)**
6. **Xóa branch sau khi merge**
7. **Backup database/content trước khi deploy production**

---

## 🆘 KHI GẶP VẤN ĐỀ

**Conflict khi merge:**
```bash
git checkout develop
git pull origin develop
git checkout feature/abc
git merge develop  # Merge develop vào feature để fix conflict
# Fix conflicts trong editor
git add .
git commit -m "fix: resolve merge conflicts"
git push origin feature/abc
```

**Cần revert commit:**
```bash
git log --oneline  # Xem commit hash
git revert <commit-hash>
git push origin branch-name
```

**Cần làm hotfix khẩn cấp:**
```bash
git checkout main
git checkout -b hotfix/ten-loi
# Fix lỗi
git commit -m "hotfix: fix critical bug"
git checkout main
git merge hotfix/ten-loi
git push origin main
git checkout develop
git merge hotfix/ten-loi
git push origin develop
```

---

**Made with ❤️ for KOC Project**
**Last updated: 2026-02-03**
