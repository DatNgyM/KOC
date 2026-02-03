# KOC Shop 🛍️

Trang web KOC Shop - Nơi mua sắm thông minh với giá tốt nhất và nhận hoa hồng hấp dẫn.

## 🚀 Tech Stack

- **Framework:** Next.js 14 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Icons:** Lucide React

## 🎨 Design

- **Màu sắc:** Xanh lá cây + Trắng + Đen
- **Style:** Modern, Clean, Transparent với backdrop blur
- **UI/UX:** Responsive, Smooth animations, User-friendly

## 📦 Cài đặt

```bash
# Cài đặt dependencies
npm install

# Chạy development server
npm run dev

# Build production
npm run build

# Start production server
npm start
```

Mở [http://localhost:3000](http://localhost:3000) để xem kết quả.

## 📁 Cấu trúc Project

```
koc-shop/
├── app/
│   ├── globals.css      # Global styles
│   ├── layout.tsx       # Root layout
│   └── page.tsx         # Home page
├── components/
│   ├── Header.tsx       # Navigation header
│   ├── Hero.tsx         # Hero section
│   ├── Features.tsx     # Features section
│   └── CTA.tsx          # Call to action section
└── public/              # Static files
```

## ✨ Tính năng

- ✅ Responsive design (Mobile, Tablet, Desktop)
- ✅ Modern UI với gradient và glassmorphism
- ✅ Smooth animations
- ✅ SEO friendly
- ✅ Fast loading

## 🚀 Chia sẻ Demo

### ⚡ Cách nhanh nhất: Forward Port trong VS Code/Cursor

1. Chạy dev server: `npm run dev`
2. Mở tab **"Ports"** ở bottom panel
3. Click **"Forward a Port"** → Nhập `3000` → Chọn **"Public"**
4. Copy link public và chia sẻ!

📖 Xem chi tiết trong file [DEPLOY.md](./DEPLOY.md)

### 🌐 Deploy lên Vercel (Link cố định - Khuyến nghị)

**Bước 1:** Push code lên GitHub
```bash
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin <your-github-repo-url>
git push -u origin main
```

**Bước 2:** Deploy trên Vercel
1. Truy cập [vercel.com](https://vercel.com)
2. Đăng nhập bằng GitHub
3. Click "Add New Project"
4. Import repository từ GitHub
5. Vercel tự động detect Next.js và deploy
6. Chờ vài phút → Done! 🎉

**Lưu ý:** Vercel sẽ tự động:
- Build project
- Tạo domain miễn phí (vd: `koc-shop.vercel.app`)
- Auto deploy mỗi khi push code mới

### Cách 2: Deploy lên Netlify

1. Truy cập [netlify.com](https://netlify.com)
2. Đăng nhập và chọn "Add new site"
3. Connect với GitHub repository
4. Build settings:
   - Build command: `npm run build`
   - Publish directory: `.next`
5. Deploy!

### Cách 3: Deploy lên Railway/Render

Tương tự, connect GitHub repo và deploy tự động.

## 🎯 Roadmap

- [ ] Trang sản phẩm
- [ ] Tích hợp Shopee Affiliate API
- [ ] User authentication
- [ ] Dashboard tracking commission
- [ ] Admin panel

## 📝 License

MIT

