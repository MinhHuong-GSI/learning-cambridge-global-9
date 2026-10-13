# 🐰 Learning Cambridge Global 9

Web app học tiếng Anh theo sách **Cambridge Global English 9** (Learner's Book & Workbook, 2nd ed.), Unit 1–8.
Chạy trên máy tính và điện thoại, không cần cài đặt gì thêm.

## Cách mở

**Cách 1 — nhanh nhất:** bấm đúp `index.html` (mở bằng Chrome hoặc Edge).

**Cách 2 — chạy server nhỏ** (cần cho micro/nhận giọng nói):

```
powershell -ExecutionPolicy Bypass -File tools\serve.ps1
```
rồi mở http://localhost:8090/

**Dùng trên điện thoại:** chép cả thư mục `Learning-CG9-App` lên một host web tĩnh (GitHub Pages, Netlify Drop…)
rồi mở link trên điện thoại. Giao diện tự co giãn theo màn hình.

## Có gì trong app

| Mục | Nội dung |
|---|---|
| 📖 Bài học | 80 bài (Unit 1.1 → 8.8, Tổng ôn tập, Kết nối & Nâng cao) lấy từ các file *Thỏ Quest*; mỗi bài có nhiều màn: nối từ, trắc nghiệm, điền từ, sắp xếp chữ, phân loại, chọn 1 trong 2, nghe/đọc, viết, nói, Boss |
| 🃏 Từ vựng | 7 cách luyện: thẻ ghi nhớ (lặp lại ngắt quãng), chọn nghĩa, tìm từ tiếng Anh, điền từ vào câu, nghe & chọn, chính tả, lật hình ghép cặp |
| 🎯 Kỹ năng | Mỗi unit: phát âm (âm + trọng âm, có đọc mẫu), word form (bảng họ từ + bài tập), cấu trúc câu (sắp xếp câu, viết lại câu), 2 bài đọc hiểu cùng chủ đề, viết đoạn văn |
| 🏁 Ôn tập | Bài kiểm tra tổng hợp từng unit (chuyển từ đề Word + đáp án, có hẹn giờ), Quiz nhanh 20 câu ngẫu nhiên, **Ôn tập mix sau mỗi 2 unit** (1–2, 3–4, 5–6, 7–8), Sổ lỗi sai |
| 📕 Truyện AI | Nhập nhân vật + bối cảnh → AI viết cảnh mở đầu **có tranh minh hoạ**, dùng từ vựng/ngữ pháp của unit, kèm câu hỏi đọc hiểu và 3 lựa chọn đi tiếp (hoặc tự viết bằng tiếng Anh để AI sửa lỗi) |
| 🤖 AI khác | Chấm & sửa bài viết, tạo bài đọc mới cùng chủ đề |
| 📈 Tiến độ | Biểu đồ XP 14 ngày, % hoàn thành từng unit, tỉ lệ đúng theo kỹ năng, lịch sử làm bài, sao lưu/khôi phục |
| 🏆 Khen thưởng | ⭐ sao từng màn, 🥕 cà rốt, XP & 7 cấp bậc, chuỗi ngày học 🔥, mục tiêu ngày, 25 huy hiệu, cửa hàng (nhân vật, màu giao diện), **giấy khen in được** khi đạt ≥ 80% bài kiểm tra/ôn tập mix |

## Tính năng AI (OpenAI Responses API)

Vào **⚙️ Cài đặt → OpenAI**, nhập API key (tạo tại platform.openai.com → API keys), bấm *Kiểm tra kết nối*.
Mặc định dùng model văn bản `gpt-5.4-mini` và model vẽ `gpt-image-1-mini` (chất lượng thấp, rẻ) — có thể đổi.

- Key chỉ lưu trong trình duyệt và được gửi thẳng tới `api.openai.com`. Không nhập trên máy dùng chung; file sao lưu tiến độ cũng chứa key.
- Truyện dùng `previous_response_id` để AI nhớ mạch truyện (OpenAI lưu hội thoại phía server theo chính sách của họ).
- Mọi bài tập khác hoạt động không cần AI.

## Tiến độ được lưu ở đâu?

Trong trình duyệt (localStorage + IndexedDB cho tranh truyện). Mỗi trình duyệt/máy có tiến độ riêng —
dùng **Tiến độ → Sao lưu** để chuyển sang máy khác. Lần đầu mở bằng cách bấm đúp `index.html`,
app tự nhập số sao các màn đã làm trong các file Thỏ Quest cũ (nếu mở cùng trình duyệt).

## Cập nhật nội dung

- Thêm/sửa file *Thỏ Quest* `.html` ở thư mục cha rồi chạy:
  `powershell -ExecutionPolicy Bypass -File tools\build-content.ps1`
- Đề kiểm tra: `data/exams/u1.js … u8.js`; gói kỹ năng: `data/skills/u1.js … u8.js`.
- Định dạng dữ liệu: xem `docs/DATA-FORMAT.md`.
