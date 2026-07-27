/* ── Unsplash image helper ────────────────────────────────────────────────── */
export function img(id: string, w = 900, h = 600): string {
  return `https://images.unsplash.com/photo-${id}?w=${w}&h=${h}&fit=crop&auto=format`
}

/* ── Centralised image catalog ───────────────────────────────────────────── */
export const IMAGES = {
  hero:         img('1648201529189-fe70cefd2c73', 1600, 900),
  construction: img('1744965874640-f3d670a7a923'),
  civil:        img('1515674744565-0d7112cd179a'),
  solar:        img('1726866492047-7f9516558c6e'),
  electrical:   img('1635335874521-7987db781153'),
  worker:       img('1614127938540-a1139bee1841'),
  skyscrapers:  img('1741242950211-0a45907918a7'),
  sabah:        img('1593195200151-5fb30336a40d'),
  solarInstall: img('1635424824849-1b09bdcc55b1'),
  hardhat:      img('1622612063021-116cc3407145'),
  about:        img('1768719951887-539ce3752a05', 900, 700),
}