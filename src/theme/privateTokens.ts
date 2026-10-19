// Page-level tokens สำหรับหน้า /organization (Private Tailor-Made)
// ใช้ร่วมกับ theme หลักของเว็บ — primary.main (#F7931A), text.primary (#0F172A),
// text.secondary (#64748B) และฟอนต์ Inter มาจาก theme เดิมทั้งหมด ไฟล์นี้เพิ่มเฉพาะค่าที่หน้านี้ใช้เพิ่ม

export const privateTokens = {
  ink: '#0F172A', // = text.primary · พื้นหลัง section มืด (Hero, Company, Tailor-Made)
  ivory: '#FAF8F5', // พื้นหลัง section แพ็กเกจ
  iconBg: '#FEF5EA', // พื้นหลังหลังภาพไอคอน (ตรงกับสีพีชในไฟล์ PNG)
  hair: 'rgba(15,23,42,.10)', // เส้นคั่นบนพื้นสว่าง
  hairDark: 'rgba(255,255,255,.14)', // เส้นคั่นบนพื้นมืด
  onInk: '#F8FAFC', // ตัวอักษรหลักบนพื้นมืด
  onInkMuted: '#CBD5E1', // ตัวอักษรรองบนพื้นมืด
  onInkSubtle: '#94A3B8', // label บนพื้นมืด
  radiusImg: '6px',
  radiusFeature: '12px',
} as const;

/** ป้ายตัวพิมพ์ใหญ่ภาษาอังกฤษ (เช่น "01", "WORKSHOP & TRAINING") — ห้ามใช้กับข้อความไทย */
export const labelSx = {
  fontSize: 12,
  fontWeight: 700,
  letterSpacing: '.16em',
  textTransform: 'uppercase',
  lineHeight: 1.6,
} as const;

/** หัวข้อใหญ่ — ตรงกับ h1/h2 เดิมของเว็บ (weight 800, letter-spacing -0.02em) */
export const displaySx = {
  fontWeight: 800,
  letterSpacing: '-.02em',
  lineHeight: 1.2,
} as const;
