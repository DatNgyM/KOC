# 🚀 Hướng dẫn Chia sẻ Demo KOC Shop

## ⚠️ Lưu ý: VS Code Port Forward có thể bị lỗi

Nếu gặp lỗi `code-tunnel.exe ENOENT`, hãy dùng các cách bên dưới thay thế!

---

## Cách 1: Dùng localtunnel (Dễ nhất - Khuyến nghị) ⭐

### Không cần cài đặt! Dùng npx:

### Chạy:
```bash
# Terminal 1: Chạy Next.js
npm run dev

# Terminal 2: Chạy localtunnel (dùng npx - không cần cài)
npx localtunnel --port 3000
```

**Lưu ý về Password:**
- Localtunnel **KHÔNG cho phép tự set password**
- Password được tự động tạo và chỉ hiển thị khi có người truy cập
- Nếu không thấy password trong terminal → Có thể version mới không hiển thị
- Khi người khác truy cập link lần đầu, họ sẽ thấy màn hình yêu cầu nhập password
- Password sẽ hiển thị trong terminal của bạn khi có request đầu tiên

### Kết quả:
Bạn sẽ có link dạng: `https://xxxx.loca.lt`
- ✅ Miễn phí
- ✅ Không cần đăng ký
- ✅ Dễ sử dụng
- ⚠️ Link thay đổi mỗi lần chạy (nhưng ổn định trong phiên làm việc)

**Ví dụ output:**
```
your url is: https://happy-cat-123.loca.lt
```

---

## Cách 2: Dùng ngrok (Có thể set password tùy chỉnh) 🔐

**Ưu điểm:** Có thể set password tùy chỉnh hoặc tắt password hoàn toàn!

### Bước 1: Cài đặt ngrok
```bash
# Cách 1: Tải từ website (Khuyến nghị)
# Vào: https://ngrok.com/download
# Tải file .exe cho Windows, giải nén và đặt vào PATH

# Cách 2: Dùng chocolatey
choco install ngrok
```

### Bước 2: Đăng ký tài khoản ngrok (MIỄN PHÍ)
1. Vào: https://dashboard.ngrok.com/signup
2. Đăng ký tài khoản (có thể dùng Google/GitHub)
3. Sau khi đăng nhập, vào: https://dashboard.ngrok.com/get-started/your-authtoken
4. Copy **authtoken** của bạn

### Bước 3: Cài đặt authtoken
```bash
ngrok config add-authtoken YOUR_AUTHTOKEN_HERE
```

**Ví dụ:**
```bash
ngrok config add-authtoken 2abc123def456ghi789jkl012mno345pqr678
```

### Bước 4: Chạy ngrok
```bash
# Terminal 1: Chạy Next.js
npm run dev

# Terminal 2: Chạy ngrok
# Không password (dễ chia sẻ)
ngrok http 3000

# Hoặc set password tùy chỉnh
ngrok http 3000 --basic-auth "username:password"
```

### Kết quả:
- Link dạng: `https://xxxx-xxxx.ngrok.io`
- Có thể tùy chỉnh subdomain (nếu có account)
- Có thể set password tùy chỉnh
- Miễn phí và ổn định

**Ví dụ set password:**
```bash
ngrok http 3000 --basic-auth "admin:mysecret123"
# Username: admin
# Password: mysecret123
```

---

## Cách 3: Dùng ngrok (Link đẹp hơn) 🌐

### Cài đặt ngrok:
```bash
# Cài đặt ngrok (Windows)
# Tải từ: https://ngrok.com/download
# Hoặc dùng chocolatey:
choco install ngrok

# Hoặc dùng npm:
npm install -g ngrok
```

### Chạy ngrok:
```bash
# Terminal 1: Chạy Next.js
npm run dev

# Terminal 2: Chạy ngrok
ngrok http 3000
```

### Kết quả:
Bạn sẽ có link dạng: `https://xxxx-xxxx.ngrok.io`
- Link này có thể tùy chỉnh (nếu có account ngrok)
- Miễn phí và ổn định

---

---

## Cách 4: Deploy lên Vercel (Link cố định, ổn định nhất) 🎯

### Bước 1: Push lên GitHub
```bash
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin <your-github-repo-url>
git push -u origin main
```

### Bước 2: Deploy trên Vercel
1. Vào [vercel.com](https://vercel.com)
2. Đăng nhập bằng GitHub
3. Click **"Add New Project"**
4. Chọn repository
5. Click **"Deploy"**

### Kết quả:
- Link cố định: `koc-shop.vercel.app`
- Tự động deploy khi push code mới
- Miễn phí và ổn định 24/7

---

## So sánh các cách:

| Cách | Ưu điểm | Nhược điểm |
|------|---------|------------|
| **localtunnel** | Dễ nhất, không cần đăng ký | Không thể set password tùy chỉnh |
| **ngrok** | Link đẹp, **có thể set password**, tùy chỉnh | Cần cài đặt, có giới hạn free |
| **Vercel** | Link cố định, ổn định 24/7 | Cần push code lên GitHub |

---

## 💡 Khuyến nghị:

- **Demo nhanh:** Dùng **localtunnel** (Cách 1) - Dễ nhất!
- **Muốn set password:** Dùng **ngrok** (Cách 2) - Có thể set password tùy chỉnh!
- **Demo cho client:** Dùng **ngrok** (Cách 2) hoặc **Vercel** (Cách 4)
- **Production:** Deploy lên **Vercel** (Cách 4)

---

## 🚀 Quick Start (Làm ngay!)

### Bước 1: Chạy 2 terminal

**Terminal 1:** Chạy Next.js
```bash
npm run dev
```

**Terminal 2:** Chạy localtunnel (KHÔNG cần cài đặt!)
```bash
npx localtunnel --port 3000
```

**Lưu ý về password:**
- Localtunnel tự động tạo password
- Password sẽ hiển thị trong terminal khi có người truy cập lần đầu
- Gửi cả link VÀ password cho người khác
- **Muốn tự set password?** → Dùng ngrok (Cách 2) thay thế!

### Bước 2: Copy link và chia sẻ!
Link sẽ hiện ra dạng: `https://xxxx.loca.lt` - Copy và gửi cho người khác ngay! 🎉

**Về password (QUAN TRỌNG):**
- Localtunnel tự động tạo password
- **Password sẽ hiển thị trong terminal khi có người truy cập lần đầu**
- Gửi cả link VÀ password cho người khác
- Họ chỉ cần nhập password 1 lần, sau đó truy cập bình thường

**Ví dụ:**
```
Terminal hiển thị:
your url is: https://great-jokes-brake.loca.lt
password: abc123xyz  <-- Copy cái này!

Gửi cho người khác:
- Link: https://great-jokes-brake.loca.lt  
- Password: abc123xyz
```

✅ **Không cần đăng ký, không cần cài đặt gì thêm!**

---

## ⚙️ CI/CD Pipeline (GitHub Actions)

Project này đã được tích hợp CI/CD với GitHub Actions để tự động kiểm tra code trước khi deploy.

### Quy trình CI/CD:
1. **CI (Continuous Integration):**
   - Mỗi khi bạn push code lên branch `main` hoặc tạo Pull Request, GitHub Actions sẽ tự động chạy:
     - Cài đặt dependencies
     - Chạy Lint (kiểm tra lỗi cú pháp và style)
     - Chạy Build (kiểm tra lỗi build production)
   - Xem file cấu hình tại `.github/workflows/ci.yml`

2. **CD (Continuous Deployment) với Vercel:**
   - Khi kết nối repository với Vercel, Vercel sẽ tự động detect framework (Next.js) và deploy mỗi khi có code mới trên `main`.
   - Vercel cũng sẽ tạo Preview Deployment cho mỗi Pull Request.

### Kiểm tra trạng thái CI:
- Vào tab **Actions** trên GitHub repository của bạn để xem trạng thái build và lint.