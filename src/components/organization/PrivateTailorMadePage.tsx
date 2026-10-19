'use client';

// Private Tailor-Made Workshop & Training — เนื้อหาหน้า /organization
// แปลงจาก mockup/index.html เป็น MUI (ใช้ Box / Container / Typography / Button ของเดิม)
// Header / Footer ไม่ได้อยู่ในไฟล์นี้ — ใช้ของเดิมของเว็บ
//
// ใช้งาน (Next.js App Router):
//   // app/organization/page.tsx
//   import PrivateTailorMadePage from '@/components/organization/PrivateTailorMadePage';
//   export default function Page() { return <PrivateTailorMadePage />; }

import * as React from 'react';
import { Box, Button, Container, Typography } from '@mui/material';
import type { SxProps, Theme } from '@mui/material/styles';
import { privateTailorMade, type WorkshopPackage } from '@/content/organizationPrivate';
import { displaySx, labelSx, privateTokens as t } from '@/theme/privateTokens';

const content = privateTailorMade;

/* ---------- shared bits ---------- */

const Rule = ({ width = 48, sx }: { width?: number; sx?: SxProps<Theme> }) => (
  <Box component="hr" sx={{ display: 'block', width, height: '1px', border: 0, m: 0, bgcolor: 'primary.main', ...sx }} />
);

const Arrow = () => (
  <Box component="span" className="arrow" sx={{ display: 'inline-block', transition: 'transform .3s' }}>
    →
  </Box>
);

const arrowHover = { '&:hover .arrow': { transform: 'translateX(4px)' } };

const largeButtonSx = {
  px: 3.5,
  py: 1.75,
  fontSize: 15,
  fontWeight: 500,
  borderRadius: '8px',
  textTransform: 'none',
  gap: 1.25,
  ...arrowHover,
} as const;

const quietLinkSx = {
  display: 'inline-flex',
  alignItems: 'center',
  gap: 1.25,
  fontSize: 15,
  fontWeight: 500,
  pb: 0.5,
  color: 'inherit',
  textDecoration: 'none',
  borderBottom: '1px solid currentColor',
  transition: 'color .3s',
  '&:hover': { color: 'primary.main' },
  ...arrowHover,
} as const;

/* =========================================================
   1) HERO
   ========================================================= */

function Hero() {
  const { hero, packages } = content;
  return (
    <Box component="section" sx={{ position: 'relative', bgcolor: t.ink, color: t.onInk, overflow: 'hidden' }}>
      {/* รูปชิดขวา 48% (desktop) / อยู่ด้านบน (mobile) */}
      <Box
        sx={{
          position: { xs: 'relative', md: 'absolute' },
          zIndex: 1,
          top: 0,
          right: 0,
          bottom: 0,
          width: { xs: '100%', md: '48%' },
          height: { xs: 220, sm: 280, md: 'auto' },
          '&::after': {
            content: '""',
            position: 'absolute',
            inset: 0,
            background: {
              xs: `linear-gradient(0deg, ${t.ink} 0%, ${t.ink} 6%, rgba(15,23,42,.6) 30%, rgba(15,23,42,0) 70%)`,
              md: `linear-gradient(90deg, ${t.ink} 0%, rgba(15,23,42,.55) 22%, rgba(15,23,42,0) 55%), linear-gradient(0deg, rgba(15,23,42,.85) 0%, rgba(15,23,42,0) 35%)`,
            },
          },
        }}
      >
        <Box
          component="img"
          src={hero.image.src}
          alt={hero.image.alt}
          sx={{
            display: 'block',
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            objectPosition: '35% 60%',
            filter: 'saturate(.8) contrast(1.05) brightness(.92)',
          }}
        />
      </Box>

      <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 2 }}>
        <Box sx={{ pt: { xs: 0, md: 7 }, maxWidth: { md: 560 }, mt: { xs: -6, md: 0 } }}>
          <Typography component="h1" sx={{ ...displaySx, fontSize: { xs: 40, sm: 48, md: 56, lg: 60 }, lineHeight: 1.08 }}>
            {hero.titleLine1}
            <Box component="span" sx={{ display: 'block', color: 'primary.main', whiteSpace: 'nowrap' }}>
              {hero.titleLine2}
            </Box>
          </Typography>
          <Typography sx={{ ...labelSx, mt: 1.75, color: t.onInkSubtle }}>{hero.kicker}</Typography>
          <Rule sx={{ mt: 2.5, mb: 2.25 }} />
          <Typography component="h2" sx={{ fontSize: { xs: 18, md: 20 }, fontWeight: 500, lineHeight: 1.55, mb: 0.75 }}>
            {hero.lead}
          </Typography>
          <Typography sx={{ fontSize: 16, lineHeight: 1.7, mb: 3, color: t.onInkMuted }}>{hero.intro}</Typography>
          <Box sx={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: 3 }}>
            <Button variant="contained" disableElevation href={hero.primaryCta.href} sx={largeButtonSx}>
              {hero.primaryCta.label} <Arrow />
            </Button>
            <Box component="a" href={hero.secondaryCta.href} sx={quietLinkSx}>
              {hero.secondaryCta.label} <Arrow />
            </Box>
          </Box>
        </Box>

        {/* index ของ 3 แพ็กเกจ */}
        <Box
          component="nav"
          aria-label="แพ็กเกจ"
          sx={{
            display: 'grid',
            gridTemplateColumns: { xs: '1fr', md: 'repeat(3, 1fr)' },
            mt: { xs: 4, md: 6 },
            borderTop: `1px solid ${t.hairDark}`,
          }}
        >
          {packages.map((p, i) => (
            <Box
              key={p.id}
              component="a"
              href={`#${p.id}`}
              sx={{
                display: 'block',
                color: 'inherit',
                textDecoration: 'none',
                py: { xs: 1.75, md: 0 },
                pt: { md: 2.25 },
                pb: { md: 2.75 },
                pl: { xs: 0, md: i === 0 ? 0 : 3 },
                pr: { xs: 0, md: 3 },
                borderRight: { md: i < packages.length - 1 ? `1px solid ${t.hairDark}` : 0 },
                borderBottom: { xs: i < packages.length - 1 ? `1px solid ${t.hairDark}` : 0, md: 0 },
                '&:hover .name': { color: 'primary.main' },
              }}
            >
              <Typography component="span" sx={{ ...labelSx, letterSpacing: '.24em', color: 'primary.main' }}>
                {p.number}
              </Typography>
              <Typography className="name" component="span" sx={{ display: 'block', fontSize: 18, fontWeight: 700, mt: 0.75, mb: 0.25, transition: 'color .3s' }}>
                {p.name}
              </Typography>
              <Typography component="span" sx={{ display: 'block', fontSize: 15, color: t.onInkMuted }}>
                {p.subtitle}
              </Typography>
            </Box>
          ))}
        </Box>
      </Container>
    </Box>
  );
}

/* =========================================================
   2) PACKAGES
   ========================================================= */

function PackageNumber({ value, sx }: { value: string; sx?: SxProps<Theme> }) {
  return (
    <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, color: 'primary.main', ...sx }}>
      <Typography component="span" sx={labelSx}>
        {value}
      </Typography>
      <Rule width={32} />
    </Box>
  );
}

function BulletList({ items, dark = false }: { items: string[]; dark?: boolean }) {
  const line = dark ? t.hairDark : t.hair;
  return (
    <Box component="ul" sx={{ listStyle: 'none', p: 0, m: 0, mb: dark ? 2.5 : 3, borderTop: `1px solid ${line}` }}>
      {items.map((item) => (
        <Box
          component="li"
          key={item}
          sx={{
            position: 'relative',
            py: dark ? 1 : 1.25,
            pl: 3.5,
            borderBottom: `1px solid ${line}`,
            fontSize: 15,
            lineHeight: 1.6,
            color: dark ? t.onInk : 'text.primary',
            '&::before': {
              content: '""',
              position: 'absolute',
              left: 0,
              top: dark ? 20 : 22,
              width: 14,
              height: '1px',
              bgcolor: 'primary.main',
            },
          }}
        >
          {item}
        </Box>
      ))}
    </Box>
  );
}

function Price({ pkg, dark = false }: { pkg: WorkshopPackage; dark?: boolean }) {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', gap: '2px' }}>
      <Typography sx={{ fontSize: 14, fontWeight: 500, lineHeight: 1.4, color: dark ? t.onInkSubtle : 'text.secondary' }}>
        {pkg.priceLabel}
      </Typography>
      <Typography
        sx={{
          fontWeight: 800,
          letterSpacing: '-.01em',
          lineHeight: 1.1,
          whiteSpace: 'nowrap',
          fontVariantNumeric: 'tabular-nums',
          fontSize: dark ? { xs: 34, md: 38 } : 32,
          color: dark ? 'primary.main' : 'text.primary',
        }}
      >
        {pkg.price}
        <Box component="small" sx={{ fontSize: 16, fontWeight: 400, ml: 0.75, letterSpacing: 0, color: dark ? t.onInkSubtle : 'text.secondary' }}>
          {pkg.currency}
        </Box>
      </Typography>
    </Box>
  );
}

const footSx = {
  display: 'flex',
  flexWrap: 'wrap',
  alignItems: 'center',
  justifyContent: 'space-between',
  gap: 2.5,
  '& .MuiButton-root': { width: { xs: '100%', sm: 'auto' } },
} as const;

/** แพ็กเกจ 01, 02 — แถวนิตยสาร สลับซ้าย-ขวา (โทนเงียบ ปุ่ม outlined) */
function PackageRow({ pkg, reverse }: { pkg: WorkshopPackage; reverse: boolean }) {
  const isIcon = pkg.image.variant === 'icon';
  return (
    <Box
      component="article"
      id={pkg.id}
      sx={{
        scrollMarginTop: '96px',
        display: 'grid',
        gridTemplateColumns: { xs: '1fr', md: reverse ? '7fr 5fr' : '5fr 7fr' },
        gap: { xs: 2.5, md: 8 },
        alignItems: 'center',
        py: { xs: 4, md: 6 },
        borderTop: `1px solid ${t.hair}`,
        '&:hover img': { transform: 'scale(1.03)' },
      }}
    >
      <Box
        sx={{
          order: { xs: 0, md: reverse ? 2 : 0 },
          position: 'relative',
          overflow: 'hidden',
          borderRadius: t.radiusImg,
          bgcolor: isIcon ? t.iconBg : '#E9E5DF',
          aspectRatio: { xs: '16 / 9', md: isIcon ? '4 / 3' : '1 / 1' },
        }}
      >
        <Box
          component="img"
          src={pkg.image.src}
          alt={pkg.image.alt}
          sx={{
            display: 'block',
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            filter: isIcon ? 'none' : 'saturate(.82) contrast(1.04)',
            transition: 'transform 1.2s cubic-bezier(.2,.6,.2,1)',
          }}
        />
      </Box>

      <Box sx={{ minWidth: 0 }}>
        <PackageNumber value={pkg.number} sx={{ mb: 1.75 }} />
        <Typography component="h3" sx={{ ...displaySx, fontSize: { xs: 28, md: 34 } }}>
          {pkg.name}
        </Typography>
        <Typography sx={{ fontSize: 19, fontWeight: 500, mt: 0.75 }}>{pkg.subtitle}</Typography>
        <Typography sx={{ fontSize: 16, lineHeight: 1.8, color: 'text.secondary', mt: 1.5, mb: 2.5, maxWidth: 560 }}>
          {pkg.description}
        </Typography>
        <BulletList items={pkg.bullets} />
        <Box sx={footSx}>
          <Price pkg={pkg} />
          <Button
            variant="outlined"
            href={pkg.cta.href}
            sx={{
              ...largeButtonSx,
              color: t.ink,
              borderColor: 'rgba(15,23,42,.35)',
              '&:hover': { bgcolor: t.ink, color: '#fff', borderColor: t.ink },
            }}
          >
            {pkg.cta.label} <Arrow />
          </Button>
        </Box>
      </Box>
    </Box>
  );
}

/** แพ็กเกจ 03 — Bitcoin Company (เด่นสุด: พื้นมืด, ราคาสีส้ม, ปุ่มส้ม) */
function PackageFeature({ pkg }: { pkg: WorkshopPackage }) {
  const isIcon = pkg.image.variant === 'icon';
  return (
    <Box
      component="article"
      id={pkg.id}
      sx={{
        scrollMarginTop: '96px',
        display: 'grid',
        gridTemplateColumns: { xs: '1fr', md: '1fr 1fr' },
        bgcolor: t.ink,
        color: t.onInk,
        borderRadius: t.radiusFeature,
        overflow: 'hidden',
        mt: { xs: 1, md: 2 },
        mb: { xs: 6, md: 8 },
        boxShadow: '0 40px 80px -40px rgba(15,23,42,.55)',
        '&:hover img': { transform: 'scale(1.03)' },
      }}
    >
      <Box
        sx={{
          position: 'relative',
          overflow: 'hidden',
          bgcolor: isIcon ? t.iconBg : '#1E293B',
          aspectRatio: { xs: isIcon ? '4 / 3' : '16 / 9', md: 'auto' },
          minHeight: { md: '100%' },
          // gradient กลืนรูปเข้ากับพื้นมืด — ใช้กับรูปถ่ายเท่านั้น ภาพไอคอนไม่ต้องมี
          '&::after': isIcon ? undefined : {
            content: '""',
            position: 'absolute',
            inset: 0,
            background: {
              xs: `linear-gradient(0deg, ${t.ink} 0%, rgba(15,23,42,0) 45%)`,
              md: `linear-gradient(90deg, rgba(15,23,42,0) 55%, ${t.ink} 100%)`,
            },
          },
        }}
      >
        <Box
          component="img"
          src={pkg.image.src}
          alt={pkg.image.alt}
          sx={{
            position: { md: 'absolute' },
            inset: { md: 0 },
            display: 'block',
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            filter: isIcon ? 'none' : 'saturate(.82) contrast(1.04)',
            transition: 'transform 1.2s cubic-bezier(.2,.6,.2,1)',
          }}
        />
      </Box>

      <Box
        sx={{
          position: 'relative',
          minWidth: 0,
          px: { xs: 2.5, md: 5 },
          py: { xs: 3.5, md: 4.5 },
          '&::before': {
            content: '""',
            position: 'absolute',
            top: 0,
            left: { xs: 20, md: 40 },
            width: 64,
            height: 3,
            bgcolor: 'primary.main',
          },
        }}
      >
        <PackageNumber value={pkg.number} sx={{ mb: 1.25 }} />
        <Typography component="h3" sx={{ ...displaySx, fontSize: { xs: 34, md: 40 }, lineHeight: 1.1, color: '#fff' }}>
          {pkg.name}
        </Typography>
        <Typography sx={{ fontSize: 19, fontWeight: 500, mt: 0.5, color: 'primary.main' }}>{pkg.subtitle}</Typography>
        <Typography sx={{ fontSize: 15, lineHeight: 1.7, color: t.onInkMuted, mt: 1.25, mb: 2 }}>{pkg.description}</Typography>
        <BulletList items={pkg.bullets} dark />
        <Box sx={{ ...footSx, gap: 2 }}>
          <Price pkg={pkg} dark />
          <Button variant="contained" disableElevation href={pkg.cta.href} sx={largeButtonSx}>
            {pkg.cta.label} <Arrow />
          </Button>
        </Box>
      </Box>
    </Box>
  );
}

function Packages() {
  const { packagesSection, packages } = content;
  const regular = packages.filter((p) => !p.featured);
  const featured = packages.filter((p) => p.featured);
  return (
    <Box component="section" id="packages" sx={{ bgcolor: t.ivory, pt: { xs: 6, md: 8 } }}>
      <Container maxWidth="lg">
        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: { xs: '1fr', md: '7fr 5fr' },
            gap: { xs: 1, md: 4 },
            alignItems: 'end',
            mb: { xs: 2, md: 4 },
          }}
        >
          <Typography component="h2" sx={{ ...displaySx, fontSize: { xs: 36, md: 48 } }}>
            {packagesSection.title}{' '}
            <Box component="span" sx={{ color: 'primary.main' }}>
              {packagesSection.titleAccent}
            </Box>
          </Typography>
          <Typography sx={{ fontSize: 17, fontWeight: 500, lineHeight: 1.7, color: 'text.secondary' }}>
            {packagesSection.intro}
          </Typography>
        </Box>

        {regular.map((p, i) => (
          <PackageRow key={p.id} pkg={p} reverse={i % 2 === 1} />
        ))}
        {featured.map((p) => (
          <PackageFeature key={p.id} pkg={p} />
        ))}
      </Container>
    </Box>
  );
}

/* =========================================================
   3) TAILOR-MADE
   ========================================================= */

function TailorMade() {
  const { tailorMade } = content;
  return (
    <Box
      component="section"
      id="tailor-made"
      sx={{
        position: 'relative',
        overflow: 'hidden',
        bgcolor: t.ink,
        color: t.onInk,
        textAlign: 'center',
        py: { xs: 7, md: 10 },
        '&::before': {
          content: '""',
          position: 'absolute',
          left: '50%',
          top: 0,
          width: '1px',
          height: 48,
          bgcolor: 'primary.main',
        },
      }}
    >
      <Container maxWidth="lg">
        <Box sx={{ maxWidth: 760, mx: 'auto' }}>
          <Typography sx={{ ...labelSx, color: 'primary.main' }}>{tailorMade.label}</Typography>
          <Typography component="h2" sx={{ ...displaySx, fontSize: { xs: 32, md: 44 }, mt: 1.5, mb: 2 }}>
            {tailorMade.title}
          </Typography>
          <Typography sx={{ fontSize: { xs: 16, md: 17 }, lineHeight: 1.75, color: t.onInkMuted, maxWidth: 620, mx: 'auto', mb: 4 }}>
            {tailorMade.body}
          </Typography>
          <Box sx={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', alignItems: 'center', gap: 3 }}>
            <Button variant="contained" disableElevation href={tailorMade.cta.href} sx={largeButtonSx}>
              {tailorMade.cta.label} <Arrow />
            </Button>
            <Box component="a" href={`mailto:${tailorMade.email}`} sx={quietLinkSx}>
              {tailorMade.email}
            </Box>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}

/* ========================================================= */

export default function PrivateTailorMadePage() {
  return (
    <>
      <Hero />
      <Packages />
      <TailorMade />
    </>
  );
}
