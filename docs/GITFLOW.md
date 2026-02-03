# 🌳 Gitflow Workflow - KOC Project

## 📋 Cấu trúc nhánh

```
main (production) ← Code đang chạy thật
├── develop (integration) ← Nhánh phát triển chính
│   ├── feature/product-data-update
│   ├── feature/image-optimization
│   ├── feature/mobile-responsive
│   ├── feature/ui-ux-improvements
│   ├── feature/affiliate-link-management
│   ├── feature/google-analytics
│   ├── feature/cms-integration
│   └── feature/seo-optimization
└── hotfix/* (emergency fixes) ← Fix lỗi khẩn cấp từ main
```

---

## 🎯 Chi tiết các nhánh và files tương ứng

### 1️⃣ `feature/product-data-update`
**Mục đích**: Cập nhật dữ liệu sản phẩm, link affiliate, fix lỗi chính tả

**Files cần commit**:
```
lib/data/products.ts          # Cập nhật thông tin sản phẩm
public/assets/product/*       # Thêm ảnh sản phẩm mới
```

**Workflow**:
```bash
git checkout feature/product-data-update
# Sửa file products.ts, thêm ảnh
git add lib/data/products.ts public/assets/product/
git commit -m "update: cập nhật thông tin 10 sản phẩm mới với link affiliate"
git push origin feature/product-data-update
# Tạo Pull Request về develop
```

---

### 2️⃣ `feature/image-optimization`
**Mục đích**: Tối ưu hình ảnh, chuyển sang WebP, giảm dung lượng

**Files cần commit**:
```
public/assets/**/*            # Ảnh đã tối ưu (WebP)
next.config.js                # Config image optimization
```

**Workflow**:
```bash
git checkout feature/image-optimization
# Tối ưu ảnh bằng TinyPNG hoặc Squoosh
# Thêm config vào next.config.js
git add public/assets/ next.config.js
git commit -m "optimize: giảm 60% dung lượng ảnh, chuyển sang WebP"
git push origin feature/image-optimization
# Tạo Pull Request về develop
```

---

### 3️⃣ `feature/mobile-responsive`
**Mục đích**: Kiểm tra và fix responsive trên mobile

**Files cần commit**:
```
app/globals.css               # CSS fixes cho mobile
components/**/*.tsx           # Component responsive fixes
tailwind.config.ts            # Responsive breakpoints
```

**Workflow**:
```bash
git checkout feature/mobile-responsive
# Test trên DevTools mobile mode
# Fix các bug responsive
git add app/globals.css components/ tailwind.config.ts
git commit -m "fix: responsive issues trên iPhone và Samsung"
git push origin feature/mobile-responsive
# Tạo Pull Request về develop
```

---

### 4️⃣ `feature/ui-ux-improvements`
**Mục đích**: Cải thiện giao diện, trải nghiệm người dùng, animations

**Files cần commit**:
```
components/ui/**/*.tsx        # UI components mới/cải tiến
components/home/**/*.tsx      # Home page improvements
app/globals.css               # Styling updates
tailwind.config.ts            # Theme customization
components/layout/Header.tsx  # Navigation improvements
components/layout/Footer.tsx  # Footer updates
```

**Workflow**:
```bash
git checkout feature/ui-ux-improvements
# Cải thiện UI/UX
git add components/ app/globals.css
git commit -m "enhance: cải thiện animation và màu sắc button CTA"
git push origin feature/ui-ux-improvements
# Tạo Pull Request về develop
```

---

### 5️⃣ `feature/affiliate-link-management`
**Mục đích**: Quản lý link affiliate, link cloaking (rút gọn link)

**Files cần commit**:
```
lib/links.ts                  # NEW - Link management system
app/go/[slug]/route.ts        # NEW - Redirect handler
middleware.ts                 # NEW - Link tracking middleware
lib/data/products.ts          # Update với link mới
```

**Workflow**:
```bash
git checkout feature/affiliate-link-management
# Tạo file lib/links.ts
# Tạo app/go/[slug]/route.ts
# Tạo middleware.ts
git add lib/links.ts app/go/ middleware.ts lib/data/products.ts
git commit -m "feat: thêm hệ thống rút gọn link affiliate /go/[slug]"
git push origin feature/affiliate-link-management
# Tạo Pull Request về develop
```

---

### 6️⃣ `feature/google-analytics`
**Mục đích**: Tích hợp GA4, tracking events (click, view)

**Files cần commit**:
```
components/layout/GoogleAnalytics.tsx  # Update GA component
app/layout.tsx                         # Integrate GA
lib/utils/analytics.ts                 # NEW - Analytics helpers
.env.local                             # GA tracking ID (KHÔNG COMMIT)
.env.example                           # NEW - Template cho .env
```

**Workflow**:
```bash
git checkout feature/google-analytics
# Cập nhật GoogleAnalytics.tsx
# Thêm GA vào app/layout.tsx
# Tạo lib/utils/analytics.ts
git add components/layout/GoogleAnalytics.tsx app/layout.tsx lib/utils/analytics.ts .env.example
git commit -m "feat: tích hợp Google Analytics 4 với event tracking"
git push origin feature/google-analytics
# Tạo Pull Request về develop
```

⚠️ **Lưu ý**: KHÔNG commit file `.env.local` (chứa API keys)

---

### 7️⃣ `feature/cms-integration`
**Mục đích**: Tích hợp CMS (Sanity/Contentful) để quản lý content dễ dàng

**Files cần commit**:
```
lib/sanity.ts                 # NEW - Sanity config
schemas/**/*                  # NEW - Content schemas
components/admin/**/*         # NEW - Admin components
sanity.config.ts              # NEW - Sanity config file
```

**Workflow**:
```bash
git checkout feature/cms-integration
# Cài Sanity: npm install @sanity/client next-sanity
# Tạo schemas cho products, blog
git add lib/sanity.ts schemas/ sanity.config.ts package.json
git commit -m "feat: tích hợp Sanity CMS cho quản lý sản phẩm"
git push origin feature/cms-integration
# Tạo Pull Request về develop
```

---

### 8️⃣ `feature/seo-optimization`
**Mục đích**: Tối ưu SEO, tạo sitemap, robots.txt

**Files cần commit**:
```
public/robots.txt             # NEW - Robots.txt config
app/sitemap.ts                # NEW - Dynamic sitemap
app/layout.tsx                # Meta tags update
app/**/page.tsx               # SEO metadata cho các page
app/manifest.ts               # NEW - PWA manifest
```

**Workflow**:
```bash
git checkout feature/seo-optimization
# Tạo public/robots.txt
# Tạo app/sitemap.ts
# Cập nhật metadata cho các page
git add public/robots.txt app/sitemap.ts app/layout.tsx app/**/page.tsx
git commit -m "feat: thêm sitemap, robots.txt và tối ưu meta tags"
git push origin feature/seo-optimization
# Tạo Pull Request về develop
```

---

## 🔄 Workflow chuẩn Gitflow

### **Khi làm feature mới:**

```bash
# 1. Checkout develop (luôn bắt đầu từ develop)
git checkout develop
git pull origin develop

# 2. Tạo/checkout feature branch
git checkout feature/ten-feature

# 3. Code & commit
git add .
git commit -m "type: mô tả ngắn gọn"

# 4. Push lên remote
git push origin feature/ten-feature

# 5. Tạo Pull Request trên GitHub
# feature/ten-feature → develop

# 6. Sau khi merge, xóa branch local
git checkout develop
git pull origin develop
git branch -d feature/ten-feature
```

---

### **Commit message chuẩn:**

```
feat:     # Tính năng mới
update:   # Cập nhật tính năng cũ
fix:      # Sửa bug
enhance:  # Cải thiện hiệu năng
optimize: # Tối ưu hóa
refactor: # Refactor code
docs:     # Cập nhật docs
style:    # Format code
test:     # Thêm test
```

**Ví dụ**:
```bash
git commit -m "feat: thêm chức năng rút gọn link affiliate"
git commit -m "fix: lỗi responsive nút CTA trên mobile"
git commit -m "optimize: giảm 50% dung lượng ảnh sản phẩm"
```

---

### **Khi chuẩn bị Release:**

```bash
# 1. Từ develop tạo release branch
git checkout develop
git checkout -b release/v1.0.0

# 2. Test kỹ, fix bug nhỏ
git commit -m "fix: lỗi nhỏ trước release"

# 3. Merge về main
git checkout main
git merge release/v1.0.0
git tag -a v1.0.0 -m "Release version 1.0.0"
git push origin main --tags

# 4. Merge về develop (để develop có code mới nhất)
git checkout develop
git merge release/v1.0.0
git push origin develop

# 5. Xóa release branch
git branch -d release/v1.0.0
```

---

### **Khi có lỗi khẩn cấp trên Production:**

```bash
# 1. Từ main tạo hotfix
git checkout main
git checkout -b hotfix/loi-can-fix

# 2. Fix lỗi
git commit -m "hotfix: sửa lỗi button bị vỡ"

# 3. Merge về main
git checkout main
git merge hotfix/loi-can-fix
git tag -a v1.0.1 -m "Hotfix v1.0.1"
git push origin main --tags

# 4. Merge về develop
git checkout develop
git merge hotfix/loi-can-fix
git push origin develop

# 5. Xóa hotfix branch
git branch -d hotfix/loi-can-fix
```

---

## 📊 Trạng thái hiện tại các nhánh

| Nhánh | Trạng thái | Ghi chú |
|-------|-----------|---------|
| `main` | ✅ Stable | Production code |
| `develop` | ✅ Active | Nhánh tích hợp chính |
| `feature/product-data-update` | 🟡 Pending | Chưa bắt đầu |
| `feature/image-optimization` | 🟡 Pending | Chưa bắt đầu |
| `feature/mobile-responsive` | 🟡 Pending | Chưa bắt đầu |
| `feature/ui-ux-improvements` | 🟡 Pending | Chưa bắt đầu |
| `feature/affiliate-link-management` | 🟡 Pending | Chưa bắt đầu |
| `feature/google-analytics` | 🟡 Pending | Chưa bắt đầu |
| `feature/cms-integration` | 🟡 Pending | Chưa bắt đầu |
| `feature/seo-optimization` | 🟡 Pending | Chưa bắt đầu |

---

## 🎯 Tips

1. **Luôn pull develop trước khi bắt đầu feature mới**
   ```bash
   git checkout develop
   git pull origin develop
   ```

2. **Commit thường xuyên với message rõ ràng**
   ```bash
   git add .
   git commit -m "feat: thêm X"
   ```

3. **KHÔNG BAO GIỜ push trực tiếp lên main**
   - Luôn qua Pull Request
   - Code review trước khi merge

4. **Xóa branch sau khi merge**
   ```bash
   git branch -d feature/ten-branch
   ```

5. **Check branch hiện tại**
   ```bash
   git branch        # Local branches
   git branch -a     # Tất cả branches
   ```

---

**Made with ❤️ for KOC Project**
