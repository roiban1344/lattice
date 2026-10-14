// 112 次元の候補について、頁に載せる事実。どの値にも出どころを付ける。文字列は TeX を含んでよい（tex() で描画する）。
// 「work:」で始まるパスは非公開の作業用リポジトリ（math2-extremal-even-unimodular-lattice）の中のもの。

export type Kind = 'exact' | 'float' | 'hand';

/** 公開リポジトリ README §4 の「論証の 10 ステップ」と同じ番号。 */
export const steps: { no: number; text: string; kind: Kind[]; anchor?: string }[] = [
  { no: 1, text: String.raw`$R$ は $112$ 次元の偶ユニモジュラー格子`, kind: ['exact'], anchor: 'matrices' },
  { no: 2, text: String.raw`$\min L = 6$。よって $L$ のノルム $6$ と $8$ の本数はテータ級数で決まる`, kind: ['float'], anchor: 'theta' },
  { no: 3, text: String.raw`ノルム $10$ 未満のベクトルは $(6,6)$, $(6,10)$, $(10,6)$, $(8,8)$ 型の衝突からのみ来る`, kind: ['hand'], anchor: 'reduce' },
  { no: 4, text: String.raw`$\tau$ は $\mathrm{SL}_2(29)$ と可換なので軌道ごとに代表 $1$ 本で足りる`, kind: ['exact'], anchor: 'group' },
  { no: 5, text: String.raw`最小ベクトル $15\,590\,400$ 本は $656$ 軌道で、一覧に漏れはない`, kind: ['exact'], anchor: 'orbits' },
  { no: 6, text: String.raw`$(6,6)$ 型の衝突はない`, kind: ['exact'], anchor: 'reduce' },
  { no: 7, text: String.raw`$(6,10)$ 型と $(10,6)$ 型の衝突はない。$656$ 個の整数の証明書による`, kind: ['exact'], anchor: 'reduce' },
  { no: 8, text: String.raw`ノルム $8$ の $36\,957\,286\,800$ 本は $1\,517\,130$ 軌道で、一覧に漏れはない`, kind: ['exact'], anchor: 'orbits' },
  { no: 9, text: String.raw`$(8,8)$ 型の衝突はない。全数検査 $3$ 本（整数 $2$ 本、浮動小数点 $1$ 本）による`, kind: ['exact', 'float'], anchor: 'heavy' },
  { no: 10, text: String.raw`以上からノルム $10$ 未満の非零ベクトルはない。ノルム $10$ のベクトルは実在するので $\min R = 10$`, kind: ['hand'] },
];

/** SL2(29) の共役類を元の位数でまとめたもの。GAP 4 で計算（work:site/r112/sl2-29-classes.g、2026-10-14）。 */
export const classes = {
  source: 'work:site/r112/sl2-29-classes.g',
  rows: [
    [1, 1, 1, '56'], [2, 1, 1, '-56'], [3, 1, 812, '-4'], [4, 1, 870, '0'], [5, 2, 1624, '-4'], [6, 1, 812, '4'], [7, 3, 2610, '0'],
    [10, 2, 1624, '4'], [14, 3, 2610, '0'], [15, 4, 3248, '-4'], [28, 6, 5220, '0'], [29, 2, 840, '-2'], [30, 4, 3248, '\\pm 4'], [58, 2, 840, '2'],
  ] as [number, number, number, string][],
};

/** 軌道の数。見積もりは「本数 ÷ 群の位数」。 */
export const orbitRows = (S112: number) => [
  { name: String.raw`$L$ のノルム $6$（$\mathrm{SL}_2(29)$）`, est: 15590400 / 24360, act: 656, actText: String.raw`$656$（正則 $632$、大きさ $8\,120$ が $24$）`, src: 'work:data/runs/2026-10-13-112/orbits-N56_1.out' },
  { name: String.raw`$L$ のノルム $8$（$\mathrm{SL}_2(29)$）`, est: 36957286800 / 24360, act: 1517130, actText: String.raw`$1\,517\,130$（すべて正則）`, src: 'work:data/runs/2026-10-13-112/norm8-collisions-N56_1.out' },
  { name: String.raw`$L$ のノルム $8$（$\mathrm{SL}_2(29)\times$ 単数）`, est: 36957286800 / 146160, act: 254664, actText: String.raw`$254\,664$`, src: 'work:data/runs/2026-10-13-112/norm8-orbits-N56_1.out' },
  { name: String.raw`外れの $R$ のノルム $8$（$\mathrm{SL}_2(29)$）`, est: S112 / 24360, act: 12, actText: String.raw`$12$（$292\,320$ 本）`, src: 'work:data/runs/2026-10-13-112/norm8-collisions-N56_1.out' },
  { name: String.raw`当たりの $R$ のノルム $\le 8$（$\mathrm{SL}_2(29)$）`, est: S112 / 24360, act: 0, actText: String.raw`$0$（主張）`, src: '' },
];

/** ブラウザでは無理な計算。時間は作業用マシン（WSL2、8 コア、15 GB）での実測。 */
export const heavy: { what: string; step: string; how: string; time: string; result: string; code: string[]; kind: Kind | 'todo' }[] = [
  { what: String.raw`$\min L = 6$`, step: '2', how: String.raw`ノルム $4.5$ 以下の全列挙（fplll、$2$ つの基底）`, time: '246 秒と 1362 秒', result: String.raw`ノルム $2$ と $4$ は $0$ 本`, code: ['experiments/2026-10-13-112-verify-candidate.py svp', 'data/runs/2026-10-13-112/verify-svp-N56_1.out'], kind: 'float' },
  { what: '同じ検査の別の実装', step: '2', how: String.raw`PARI の qfminim（$3$ つ目の基底）`, time: '—', result: String.raw`$0$ 本`, code: ['experiments/2026-10-13-112-init-base-min.py'], kind: 'float' },
  { what: '最小ベクトルの軌道', step: '5', how: String.raw`幅優先探索で $656$ 軌道を作る`, time: '約 3 分', result: String.raw`和 $15\,590\,400$`, code: ['data/runs/2026-10-13-112/orbits-N56_1.out'], kind: 'exact' },
  { what: String.raw`ノルム $8$ の軌道`, step: '8', how: String.raw`$\mathrm{SL}_2(29)\times$ 単数（位数 $146\,160$）の軌道代表を集める`, time: '約 27 分、上限 8 GB', result: String.raw`$254\,664$ 軌道、和 $36\,957\,286\,800$`, code: ['experiments/2026-10-13-112-norm8-orbits.py', 'data/runs/2026-10-13-112/norm8-orbits-N56_1.out'], kind: 'exact' },
  { what: '球面デザインの恒等式', step: '5, 8', how: String.raw`軌道の一覧の上で次数 $2, 4, 6$ の恒等式を確かめる`, time: '—', result: 'すべて整数として一致', code: ['experiments/2026-10-13-112-init-design-check.py', 'data/runs/2026-10-13-ledger/init-112-design-N56_1.out'], kind: 'exact' },
  { what: String.raw`$L/2L$ の標準形と $(8,8)$ 判定`, step: '8, 9', how: String.raw`ノルム $8$ の類の標準形 $1\,517\,130$ 個と（代表, 単数）$1\,527\,984$ 組の類を照合`, time: '341 秒と 411 秒', result: String.raw`当たり $0$ 組、外れ $10$ 組（$6$ 軌道）`, code: ['experiments/2026-10-13-112-norm8-collisions.py', 'data/runs/2026-10-13-112/norm8-collisions-N56_1.out'], kind: 'exact' },
  { what: String.raw`$(8,8)$ の別実装`, step: '9', how: String.raw`標準形の方法を別のコードで書く。$\tau$ と $\tau^{-1}$ の両向き`, time: '5645 秒と 7994 秒', result: String.raw`両向きとも $0$`, code: ['experiments/2026-10-13-112-init-88-canonical.py', 'data/runs/2026-10-13-ledger/init-112-88canonical-N56_1.out'], kind: 'exact' },
  { what: String.raw`$(8,8)$ の CVP 全数`, step: '9', how: String.raw`標準形を使わない最近ベクトル列挙（半径の $2$ 乗 $2.05$）`, time: '4 本 × 約 9 時間', result: String.raw`$1\,527\,984$ 組で $0$。外れの衝突はすべて検出`, code: ['experiments/2026-10-13-112-verify-candidate.py cvp88', 'data/runs/2026-10-13-112/verify-cvp88-N56_1-class1-part{0..3}.out'], kind: 'float' },
  { what: String.raw`$(6,10)$ の証明書`, step: '7', how: String.raw`$656$ 類それぞれでノルム $14$ か $18$ の $w_0$ を降下で探す`, time: '349 秒', result: String.raw`$656$ 類すべてで成立`, code: ['experiments/2026-10-13-112-exact-610.py', 'data/runs/2026-10-13-112/exact610-N56_1-class1.out'], kind: 'exact' },
  { what: '証明書の検算', step: '7', how: String.raw`別のコードで $w_0$ と全最小ベクトルの内積を取り直す`, time: '—', result: 'すべて有効', code: ['experiments/2026-10-13-112-init-verify-610-certificate.py', 'data/runs/2026-10-13-ledger/init-112-610cert-N56_1-class1.out'], kind: 'exact' },
  { what: '3 つ目のセッション', step: '1–9', how: String.raw`公開した $4$ ファイルからコードを一から書く（PARI/GP, fpylll, GAP, C）`, time: '2 コアで約 2 時間', result: 'すべての数値を再現', code: [], kind: 'float' },
  { what: '未実施: 影の全数検索', step: '—', how: String.raw`外れを生む階数 $2$ の部分加群が当たりにないことを直接確かめる`, time: '約 1300 CPU 時間', result: String.raw`標本 $40$ 本では見つからない`, code: ['experiments/2026-10-14-112-shadow-trial.py'], kind: 'todo' },
  { what: String.raw`未実施: ノルム $10$ の本数`, step: '—', how: String.raw`$R$ のノルム $10$ のベクトルが $10\,888\,335\,360$ 本あるか数える`, time: String.raw`$L$ のノルム $10$ の軌道が約 $6.3\times10^{8}$ 個`, result: '—', code: [], kind: 'todo' },
];

/** 誰が何を確かめたか。 */
export const checks = {
  cols: ['retro-1013', 'init', '3 つ目のセッション'],
  rows: [
    ['1 偶ユニモジュラー', '整数演算', '整数演算', '整数演算'],
    [String.raw`2 $\min L = 6$`, String.raw`fplll、$2$ 基底`, String.raw`PARI qfminim、$3$ つ目の基底`, String.raw`自作の列挙（半径 $4.5$）`],
    ['5 最小ベクトルの軌道', '大きさの和', '和と球面デザイン', String.raw`和、$632 + 24$ の内訳`],
    [String.raw`6 $(6,6)$ 型`, '標準形', '別コードの標準形', 'CVP'],
    [String.raw`7 $(6,10)$ 型`, '証明書を作成', '証明書を別コードで検算', String.raw`CVP（上限を広げるとノルム $14$ を検出）`],
    [String.raw`8 ノルム $8$ の軌道`, '大きさの和', '和と球面デザイン', String.raw`和（$1\,517\,130$ 軌道すべて正則）`],
    [String.raw`9 $(8,8)$ 型`, '標準形と CVP 全数', '標準形、両向き', String.raw`標準形の照合。外れで $6$ 軌道を再現`],
  ],
};
