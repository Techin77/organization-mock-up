// Content for rightshift.to/organization — Private Tailor-Made Workshop & Training
// แก้ข้อความ / ราคา / รูปได้ที่ไฟล์นี้ไฟล์เดียว component จะอ่านค่าจากที่นี่

export type PackageImage = {
  src: string;
  alt: string;
  /** "icon" = ภาพไอคอนพื้นพีช (ไม่ใส่ filter, สัดส่วน 4:3) · "photo" = รูปถ่าย */
  variant: 'icon' | 'photo';
};

export type WorkshopPackage = {
  id: string; // ใช้เป็น anchor เช่น /organization#family-office
  number: string;
  name: string;
  subtitle: string;
  description: string;
  bullets: string[];
  priceLabel: string;
  price: string;
  currency: string;
  cta: { label: string; href: string };
  image: PackageImage;
  /** true = แพ็กเกจเด่น (พื้นน้ำเงินเข้ม ราคาสีส้ม ปุ่มส้ม) */
  featured?: boolean;
};

export const privateTailorMade = {
  hero: {
    titleLine1: 'Private',
    titleLine2: 'Tailor-Made',
    kicker: 'Workshop & Training',
    lead: 'เรียนทุกเรื่องที่คุณอยากรู้เกี่ยวกับบิตคอยน์ ในรูปแบบที่คุณต้องการ',
    intro: 'รับจัดอบรมและเวิร์กช็อปบิตคอยน์ที่ออกแบบพิเศษตามความต้องการของคุณ',
    primaryCta: { label: 'ดูแพ็กเกจเวิร์กช็อป', href: '#packages' },
    secondaryCta: { label: 'ปรึกษาเพื่อออกแบบหลักสูตร', href: '#tailor-made' },
    image: {
      src: '/images/organization/private-hero.jpg',
      alt: 'ผู้เรียนกำลังตั้งค่าฮาร์ดแวร์วอลเล็ตระหว่างเวิร์กช็อป Right Shift',
    },
  },

  packagesSection: {
    title: 'Workshop',
    titleAccent: 'Package',
    intro: 'ตัวอย่างแพ็คเกจเวิร์กช็อปสำหรับความต้องการแต่ละรูปแบบ',
  },

  packages: [
    {
      id: 'family-office',
      number: '01',
      name: 'Family Office',
      subtitle: 'ทุนบิตคอยน์สำหรับครอบครัว',
      description:
        'เวิร์กช็อปเรียนรู้บิตคอยน์สำหรับครอบครัว คู่ครอง หรือหุ้นส่วนที่ต้องการถือครองบิตคอยน์ร่วมกัน',
      bullets: [
        'ปูพื้นฐาน ไขข้อสงสัยเรื่องเงินและบิตคอยน์',
        'ออกแบบแนวทางการเก็บรักษาบิตคอยน์ที่สอดคล้องกับความต้องการของแต่ละครอบครัว',
        'เวิร์กช็อปจับมือสอนใช้งานวอลเล็ตบิตคอยน์อย่างปลอดภัย ไม่ว่าจะเป็นรูปแบบ singlesig หรือ multisig',
        'ออกแบบแผนส่งมอบมรดกบิตคอยน์ แนวทางด้านกฎหมาย ภาษี และการกระจายความเสี่ยงด้วยการกระจายการเก็บคีย์เข้าถึงบิตคอยน์ในหลายขอบเขตภูมิรัฐศาสตร์',
      ],
      priceLabel: 'เริ่มต้นที่',
      price: '24,500',
      currency: 'บาท',
      cta: { label: 'สอบถามเพิ่มเติม', href: '#' },
      image: { src: '/images/organization/family-office.png', alt: 'Family Office', variant: 'icon' },
    },
    {
      id: 'bitcoin-accepted-business',
      number: '02',
      name: 'Bitcoin Accepted Merchant',
      subtitle: 'ธุรกิจที่รับชำระเป็นบิตคอยน์',
      description:
        'เวิร์กช็อปเรียนรู้บิตคอยน์สำหรับธุรกิจร้านค้าที่ต้องการรับชำระค่าสินค้าและบริการด้วยบิตคอยน์',
      bullets: [
        'ปูพื้นฐานความรู้ความเข้าใจเบื้องต้นสำหรับพนักงาน',
        'แนวทางเชิงกฎหมาย บัญชี และภาษี',
        'การเลือกใช้ช่องทางรับชำระด้วยบิตคอยน์ในรูปแบบที่ตอบโจทย์ธุรกิจของคุณ',
        'อบรมเชิงปฏิบัติการและคู่มือสำหรับพนักงาน',
      ],
      priceLabel: 'เริ่มต้นที่',
      price: '29,000',
      currency: 'บาท',
      cta: { label: 'สอบถามเพิ่มเติม', href: '#' },
      image: { src: '/images/organization/merchant.png', alt: 'Bitcoin Accepted Merchant', variant: 'icon' },
    },
    {
      id: 'bitcoin-company',
      number: '03',
      name: 'Bitcoin Company',
      subtitle: 'คลังบิตคอยน์ระดับองค์กร',
      description: 'เวิร์กช็อปเรียนรู้บิตคอยน์สำหรับธุรกิจที่ต้องการเข้าสู่มาตรฐานบิตคอยน์',
      bullets: [
        'ปูพื้นฐาน ไขข้อสงสัยเรื่องบิตคอยน์สำหรับผู้บริหารและเจ้าของกิจการ',
        'แนวทางเชิงกฎหมาย บัญชี และภาษี',
        'แนวทางการเก็บรักษาบิตคอยน์สำหรับบริษัท และแนวทางการสะสมบิตคอยน์เข้าคลัง',
        'เวิร์กช็อปจับมือสอนใช้งานวอลเล็ตบิตคอยน์อย่างปลอดภัย',
      ],
      priceLabel: 'เริ่มต้นที่',
      price: '155,000',
      currency: 'บาท',
      cta: { label: 'สอบถามเพิ่มเติม', href: '#' },
      image: {
        src: '/images/organization/company.png', // ต้นฉบับ vector: company.svg
        alt: 'Bitcoin Company — องค์กรเติบโตไปกับบิตคอยน์',
        variant: 'icon',
      },
      featured: true,
    },
  ] satisfies WorkshopPackage[],

  tailorMade: {
    label: 'Tailor-Made',
    title: 'ด้านบนยังไม่ตรงใจ? ลองเล่าให้เราฟัง',
    body: 'ถ้าคุณอยากเรียนรู้เรื่องบิตคอยน์ในแบบที่ไม่เหมือนใคร เรายินดีให้คำปรึกษาเบื้องต้นและส่งมอบประสบการณ์การเรียนรู้บิตคอยน์ที่ออกแบบมาเพื่อคุณโดยเฉพาะ',
    cta: { label: 'ติดต่อเรา', href: '#' },
    email: 'admin@rightshift.to',
  },
};
