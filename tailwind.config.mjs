import typography from '@tailwindcss/typography';

// 色はすべて src/styles/global.css の CSS 変数（明暗の 2 組）から取る。
const v = (name) => `rgb(var(--${name}) / <alpha-value>)`;

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,ts,md}'],
  theme: {
    extend: {
      colors: {
        paper: v('paper'), sheet: v('sheet'), ink: v('ink'), muted: v('muted'), rule: v('rule'),
        accent: v('accent'), 'accent-soft': v('accent-soft'),
        ok: v('ok'), 'ok-bg': v('ok-bg'), warn: v('warn'), 'warn-bg': v('warn-bg'),
      },
      fontFamily: {
        display: ['"Shippori Mincho B1"', '"Hiragino Mincho ProN"', '"Yu Mincho"', 'serif'],
        body: ['"BIZ UDPGothic"', '"Hiragino Sans"', '"Yu Gothic"', '"Noto Sans JP"', 'system-ui', 'sans-serif'],
        mono: ['"IBM Plex Mono"', 'ui-monospace', 'Menlo', 'monospace'],
      },
      maxWidth: { prose: '46rem', wide: '64rem' },
    },
  },
  plugins: [typography],
};
