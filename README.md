# Private Tailor-Made Workshop & Training — rightshift.to/organization

ชุดไฟล์สำหรับนำหน้า **/organization** เวอร์ชันใหม่ (Private Tailor-Made Workshop & Training) ขึ้นเว็บ rightshift.to
หน้านี้ออกแบบให้ใช้ CI และ component ของ MUI ที่เว็บใช้อยู่แล้ว (Next.js + MUI)

- ตัวอย่างออนไลน์: https://claude.ai/artifact/5kH3fKpZs9dJTmBRpBB2n7
- ตัวอย่างแบบไฟล์: เปิด `mockup/index.html` ในเบราว์เซอร์ได้เลย

---

## สิ่งที่อยู่ในชุดนี้

```
export/
├── README.md                                   ← ไฟล์นี้
├── mockup/
│   └── index.html                              ← mock-up ต้นฉบับ (HTML/CSS) ใช้เทียบหน้าตา + กดปุ่ม "Dev notes" ดู mapping
├── public/
│   └── images/organization/
│       ├── family-office.png                   ← ไอคอน 01 (ไฟล์เดิมบนเว็บ, 720×360)
│       ├── merchant.png                        ← ไอคอน 02 (เวอร์ชันใหม่ สัญลักษณ์ ₿, 720×360)
│       ├── company.png                         ← ไอคอน 03 Bitcoin Company (ใหม่, 1600×1600)
│       ├── company.svg                         ← ต้นฉบับ vector ของ company.png
│       └── private-hero.jpg                    ← รูป Hero
└── src/
    ├── content/organizationPrivate.ts          ← ข้อความ ราคา รูป ทั้งหมดของหน้า (แก้ที่นี่ที่เดียว)
    ├── theme/privateTokens.ts                  ← ค่าสี/ขนาดเฉพาะหน้านี้ (เสริม theme หลัก)
    └── components/organization/
        └── PrivateTailorMadePage.tsx           ← หน้าเพจเวอร์ชัน MUI พร้อมใช้
```

## วิธีนำไปใช้ (Next.js App Router)

1. **คัดลอกรูป** — `public/images/organization/*` ไปไว้ที่ `public/images/organization/` ของโปรเจกต์
   - `family-office.png` มีอยู่บนเว็บแล้ว (ไฟล์เดียวกัน)
   - `merchant.png` **ต้องทับไฟล์เดิม** — เวอร์ชันนี้เปลี่ยนสัญลักษณ์เป็น ₿
   - `company.png`, `private-hero.jpg` เป็นไฟล์ใหม่ ต้องอัปโหลดเพิ่ม
2. **คัดลอกโค้ด** — `src/content`, `src/theme`, `src/components/organization` ไปไว้ใน `src/` ของโปรเจกต์
   - ไฟล์ใช้ import alias `@/` (เช่น `@/content/organizationPrivate`) ถ้าโปรเจกต์ใช้ alias อื่นให้แก้บรรทัด import ใน `PrivateTailorMadePage.tsx`
   - ถ้า `privateTokens.ts` ชนกับโฟลเดอร์ `theme` เดิม ย้ายไปไว้ที่ไหนก็ได้ แล้วแก้ path import
3. **ใช้ในหน้า /organization** — แทนที่ section "Course Package" เดิม

   ```tsx
   // app/organization/page.tsx
   import PrivateTailorMadePage from '@/components/organization/PrivateTailorMadePage';

   export default function Page() {
     return <PrivateTailorMadePage />;
   }
   ```

   Header และ Footer ใช้ของเดิมของเว็บ (component นี้มีแค่เนื้อหาตรงกลาง)

ไม่ต้องติดตั้ง package เพิ่ม — ใช้แค่ `@mui/material` ที่เว็บมีอยู่แล้ว

## ต้องเติมก่อนขึ้นจริง

| จุด | ไฟล์ | ตอนนี้ |
|---|---|---|
| ลิงก์ปุ่ม "สอบถามเพิ่มเติม" ของแต่ละแพ็กเกจ | `organizationPrivate.ts` → `packages[].cta.href` | `#` |
| ลิงก์ปุ่ม "ติดต่อเรา" (Tailor-Made) | `organizationPrivate.ts` → `tailorMade.cta.href` | `#` |

ปุ่มเหล่านี้อาจผูกกับ dialog "Private Meeting" / "Send Message" ที่มีอยู่แล้วในเว็บแทนลิงก์ได้

---

## โครงหน้า

| ส่วน | รายละเอียด |
|---|---|
| **1. Hero** (พื้นน้ำเงินเข้ม) | หัวข้อ Private / Tailor-Made, คำโปรย, ปุ่ม 2 ปุ่ม, รูปชิดขวา 48% + gradient, สารบัญ 3 แพ็กเกจ (anchor link) |
| **2. Workshop Package** (พื้น ivory) | 01 Family Office และ 02 Bitcoin Accepted Merchant เป็นแถวแบบนิตยสาร สลับซ้าย-ขวา · 03 Bitcoin Company เป็นกล่องเด่น |
| **3. Tailor-Made** (พื้นน้ำเงินเข้ม) | หัวข้อ, ย่อหน้า, ปุ่ม "ติดต่อเรา" + อีเมล |

Anchor ที่ใช้ได้: `/organization#packages` · `#family-office` · `#bitcoin-accepted-business` · `#bitcoin-company` · `#tailor-made`

**การจัดลำดับความเด่นของแพ็กเกจ** — Bitcoin Company เป็นแพ็กเกจเดียวที่ใช้ พื้นมืด, เส้นส้มด้านบน, ราคาสีส้ม และปุ่ม contained สีส้ม
แพ็กเกจ 01–02 ใช้ราคาสีน้ำเงินเข้มและปุ่ม outlined เพื่อไม่แย่งความเด่น

**เป้าหมายความสูง** — บนจอ 1280×800 แต่ละส่วน (Hero, แต่ละแพ็กเกจ, Tailor-Made) จบในจอเดียวโดยไม่ต้อง scroll ถ้าปรับ spacing ให้คงเงื่อนไขนี้ไว้

## Design tokens

CI เดิมของเว็บ (มาจาก theme หลัก ไม่ต้องตั้งใหม่):

| Token | ค่า |
|---|---|
| `primary.main` | `#F7931A` |
| `text.primary` | `#0F172A` |
| `text.secondary` | `#64748B` |
| Font | `Inter, "Inter Fallback"` (ภาษาไทยใช้ฟอนต์ระบบเหมือนหน้าอื่น) |
| Button radius | 8px |
| Container | `maxWidth="lg"` (1200) |

เฉพาะหน้านี้ (`src/theme/privateTokens.ts`):

| Token | ค่า | ใช้ที่ |
|---|---|---|
| `ink` | `#0F172A` | พื้นหลัง Hero, Bitcoin Company, Tailor-Made |
| `ivory` | `#FAF8F5` | พื้นหลัง section แพ็กเกจ |
| `iconBg` | `#FEF5EA` | พื้นหลังหลังไอคอนทั้ง 3 แพ็กเกจ |
| `hair` / `hairDark` | `rgba(15,23,42,.10)` / `rgba(255,255,255,.14)` | เส้นคั่นบนพื้นสว่าง / มืด |
| `onInk` / `onInkMuted` / `onInkSubtle` | `#F8FAFC` / `#CBD5E1` / `#94A3B8` | ตัวอักษรบนพื้นมืด |
| Display type | weight 800, letter-spacing −0.02em | หัวข้อทุกระดับ (= h1/h2 เดิม) |
| Label | 12px / 700 / uppercase / letter-spacing .16em | ตัวเลข 01–03, "Workshop & Training", "Tailor-Made" — ใช้กับภาษาอังกฤษเท่านั้น |
| Body ภาษาไทย | weight ≥ 400 | ห้ามใช้ weight บางกว่านี้ อ่านยาก |

### ขนาดตัวอักษรหลัก (desktop / mobile)

| องค์ประกอบ | Desktop | Mobile |
|---|---|---|
| Hero หัวข้อ | 60px | 40px |
| หัว section "Workshop Package" | 48px | 36px |
| ชื่อแพ็กเกจ 01–02 | 34px | 28px |
| ชื่อแพ็กเกจ 03 (Company) | 40px | 34px |
| ราคา 01–02 / 03 | 32px / 38px | 32px / 34px |
| หัวข้อ Tailor-Made | 44px | 32px |

## Responsive

- **md ขึ้นไป (≥ 900px)** — Hero รูปชิดขวา, แพ็กเกจรูป-เนื้อหาแบ่ง 5:7 สลับซ้ายขวา, Company แบ่งครึ่ง
- **ต่ำกว่า md** — ทุกอย่างเรียงเป็นคอลัมน์เดียว รูปอยู่บนสุดแต่ละแพ็กเกจ (16:9), สารบัญ Hero เป็นรายการแนวตั้ง
- **ต่ำกว่า sm (< 600px)** — ปุ่มในแพ็กเกจเต็มความกว้าง

## หมายเหตุ

- `PrivateTailorMadePage.tsx` เขียนจาก mock-up โดยตรงแต่**ยังไม่ได้ build/รันในโปรเจกต์จริง** — ให้เทียบหน้าตากับ `mockup/index.html` อีกครั้งหลังใส่
- ใช้ `<Box component="img">` แทน `next/image` เพื่อไม่ต้องตั้งค่าเพิ่ม เปลี่ยนเป็น `next/image` ได้ถ้าต้องการ optimize
- ใน mock-up โลโก้ header/footer ดึงจาก `https://rightshift.to/Rightshift.png` (ของจริงบนเว็บ)
- หน้าตัวอย่างออนไลน์มีแถบ "Design mock-up" และโลโก้แบบตัวอักษร — **ไม่ต้องใส่** ในเว็บจริง
