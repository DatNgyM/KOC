# 🚀 Gitflow Quick Reference

## 📌 Các lệnh thường dùng

### Bắt đầu làm feature mới:
```bash
git checkout develop
git pull origin develop
git checkout feature/ten-feature
# Code...
git add .
git commit -m "feat: mô tả"
git push origin feature/ten-feature
# Tạo PR trên GitHub: feature → develop
```

### Kiểm tra nhánh hiện tại:
```bash
git branch          # Local
git branch -a       # Tất cả (local + remote)
```

### Chuyển nhánh:
```bash
git checkout ten-nhanh
```

### Xem thay đổi:
```bash
git status          # Files đã sửa
git diff            # Chi tiết thay đổi
```

### Commit chuẩn:
```bash
feat:     # Tính năng mới
update:   # Cập nhật feature cũ
fix:      # Sửa bug
enhance:  # Cải thiện
optimize: # Tối ưu
docs:     # Tài liệu
```

---

## 📋 Danh sách nhánh & mục đích

| Nhánh | Mục đích | Files chính |
|-------|----------|-------------|
| **develop** | Tích hợp chính | Merge từ features |
| **feature/product-data-update** | Cập nhật sản phẩm | `lib/data/products.ts` |
| **feature/image-optimization** | Tối ưu ảnh | `public/assets/*`, `next.config.js` |
| **feature/mobile-responsive** | Fix responsive | `app/globals.css`, components |
| **feature/ui-ux-improvements** | Cải thiện UI/UX | `components/**/*` |
| **feature/affiliate-link-management** | Quản lý link | `lib/links.ts`, `app/go/` |
| **feature/google-analytics** | GA4 tracking | `components/layout/GoogleAnalytics.tsx` |
| **feature/cms-integration** | CMS Sanity | `lib/sanity.ts`, schemas |
| **feature/seo-optimization** | SEO | `app/sitemap.ts`, `robots.txt` |

---

## ⚠️ Lưu ý

1. **KHÔNG bao giờ** commit trực tiếp lên `main`
2. **LUÔN** pull `develop` trước khi bắt đầu feature mới
3. **KHÔNG commit** file `.env.local` (chứa secrets)
4. **Xóa branch** sau khi merge: `git branch -d feature/abc`
5. Commit message bằng **tiếng Việt không dấu** hoặc **tiếng Anh**

---

## 🎯 Workflow nhanh

```
develop → feature/abc → code → commit → push → PR → merge → delete branch
```

---

📖 **Chi tiết đầy đủ**: Xem [GITFLOW.md](./GITFLOW.md)
