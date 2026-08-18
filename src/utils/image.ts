/* ── Generic stock image helper used only where the company profile does not
   provide an approved project photograph for that service/context. ───────── */
export function img(id: string, w = 900, h = 600): string {
  return `https://images.unsplash.com/photo-${id}?w=${w}&h=${h}&fit=crop&auto=format`
}

/* ── Centralised image catalog ───────────────────────────────────────────── */
export const IMAGES = {
  hero:         '/images/project-references/solar-ref-05.jpg',
  construction: img('1744965874640-f3d670a7a923'),
  civil:        img('1515674744565-0d7112cd179a'),
  solar:        '/images/project-references/solar-ref-01.jpg',
  electrical:   img('1635335874521-7987db781153'),
  worker:       img('1614127938540-a1139bee1841'),
  skyscrapers:  img('1741242950211-0a45907918a7'),
  sabah:        '/images/project-references/solar-ref-13.jpg',
  solarInstall: '/images/project-references/solar-ref-14.jpg',
  hardhat:      img('1622612063021-116cc3407145'),
  about:        '/images/project-references/solar-ref-02.jpg',
}
