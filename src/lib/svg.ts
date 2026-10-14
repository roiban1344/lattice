// 図（SVG）の小道具。目盛りの 10^e は上付きの tspan で描く。
export const pow10 = (e: number) => `10<tspan baseline-shift="super" font-size="70%">${e < 0 ? '−' : ''}${Math.abs(e)}</tspan>`;
