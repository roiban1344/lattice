import typography from '@tailwindcss/typography';

// 色と本文の書体は src/styles/global.css の CSS 変数から取る。
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
        display: 'var(--font-body)',
        body: 'var(--font-body)',
        mono: ['"IBM Plex Mono"', 'ui-monospace', 'Menlo', 'monospace'],
      },
      maxWidth: { prose: '46rem', wide: '64rem' },
    },
  },
  plugins: [typography],
};
