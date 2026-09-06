export type Mode = 'VI' | 'EN'

export type DemoOp = {
  text: string
  mode: Mode
  key?: string
  chord?: string[]
  snap?: boolean
  hold: number
}

const k = (hold: number, text: string, extra: Partial<DemoOp> = {}): DemoOp => ({
  text,
  mode: 'VI',
  hold,
  ...extra,
})

const D = '\u0111' // đ
const O_CIRC = '\u00f4' // ô
const O_TILDE = '\u00f5' // õ
const E_CIRC = '\u00ea' // ê
const E_ACUTE_CIRC = '\u1ebf' // ế
const E_DOT_CIRC = '\u1ec7' // ệ

export const HERO_FINAL_VI = `T${O_CIRC}i ${D}ang g${O_TILDE} ti${E_ACUTE_CIRC}ng Vi${E_DOT_CIRC}t`
export const HERO_SOURCE = 'Tooi ddang gox tieengs Vieetj'
export const HERO_EN = 'The quick brown fox'

/** Telex composition of "Tôi đang gõ tiếng Việt", then EN sample, then back. */
export const HERO_SCRIPT: DemoOp[] = [
  k(420, ''),
  k(120, 'T', { key: 'T' }),
  k(110, 'To', { key: 'o' }),
  k(180, `T${O_CIRC}`, { key: 'o', snap: true }),
  k(130, `T${O_CIRC}i`, { key: 'i' }),
  k(240, `T${O_CIRC}i `, { key: 'space' }),
  k(110, `T${O_CIRC}i d`, { key: 'd' }),
  k(180, `T${O_CIRC}i ${D}`, { key: 'd', snap: true }),
  k(110, `T${O_CIRC}i ${D}a`, { key: 'a' }),
  k(110, `T${O_CIRC}i ${D}an`, { key: 'n' }),
  k(110, `T${O_CIRC}i ${D}ang`, { key: 'g' }),
  k(240, `T${O_CIRC}i ${D}ang `, { key: 'space' }),
  k(110, `T${O_CIRC}i ${D}ang g`, { key: 'g' }),
  k(110, `T${O_CIRC}i ${D}ang go`, { key: 'o' }),
  k(200, `T${O_CIRC}i ${D}ang g${O_TILDE}`, { key: 'x', snap: true }),
  k(240, `T${O_CIRC}i ${D}ang g${O_TILDE} `, { key: 'space' }),
  k(100, `T${O_CIRC}i ${D}ang g${O_TILDE} t`, { key: 't' }),
  k(100, `T${O_CIRC}i ${D}ang g${O_TILDE} ti`, { key: 'i' }),
  k(100, `T${O_CIRC}i ${D}ang g${O_TILDE} tie`, { key: 'e' }),
  k(180, `T${O_CIRC}i ${D}ang g${O_TILDE} ti${E_CIRC}`, { key: 'e', snap: true }),
  k(100, `T${O_CIRC}i ${D}ang g${O_TILDE} ti${E_CIRC}n`, { key: 'n' }),
  k(100, `T${O_CIRC}i ${D}ang g${O_TILDE} ti${E_CIRC}ng`, { key: 'g' }),
  k(200, `T${O_CIRC}i ${D}ang g${O_TILDE} ti${E_ACUTE_CIRC}ng`, { key: 's', snap: true }),
  k(240, `T${O_CIRC}i ${D}ang g${O_TILDE} ti${E_ACUTE_CIRC}ng `, { key: 'space' }),
  k(110, `T${O_CIRC}i ${D}ang g${O_TILDE} ti${E_ACUTE_CIRC}ng V`, { key: 'V' }),
  k(100, `T${O_CIRC}i ${D}ang g${O_TILDE} ti${E_ACUTE_CIRC}ng Vi`, { key: 'i' }),
  k(100, `T${O_CIRC}i ${D}ang g${O_TILDE} ti${E_ACUTE_CIRC}ng Vie`, { key: 'e' }),
  k(180, `T${O_CIRC}i ${D}ang g${O_TILDE} ti${E_ACUTE_CIRC}ng Vi${E_CIRC}`, { key: 'e', snap: true }),
  k(110, `T${O_CIRC}i ${D}ang g${O_TILDE} ti${E_ACUTE_CIRC}ng Vi${E_CIRC}t`, { key: 't' }),
  k(220, HERO_FINAL_VI, { key: 'j', snap: true }),
  k(1100, HERO_FINAL_VI),
  k(700, HERO_FINAL_VI, { chord: ['⌃', '⇧'] }),
  { text: HERO_FINAL_VI, mode: 'EN', hold: 500, chord: ['⌃', '⇧'] },
  { text: '', mode: 'EN', hold: 280 },
  { text: 'T', mode: 'EN', key: 'T', hold: 70 },
  { text: 'Th', mode: 'EN', key: 'h', hold: 70 },
  { text: 'The', mode: 'EN', key: 'e', hold: 70 },
  { text: 'The ', mode: 'EN', key: 'space', hold: 80 },
  { text: 'The q', mode: 'EN', key: 'q', hold: 65 },
  { text: 'The qu', mode: 'EN', key: 'u', hold: 65 },
  { text: 'The qui', mode: 'EN', key: 'i', hold: 65 },
  { text: 'The quic', mode: 'EN', key: 'c', hold: 65 },
  { text: 'The quick', mode: 'EN', key: 'k', hold: 65 },
  { text: 'The quick ', mode: 'EN', key: 'space', hold: 80 },
  { text: 'The quick b', mode: 'EN', key: 'b', hold: 65 },
  { text: 'The quick br', mode: 'EN', key: 'r', hold: 65 },
  { text: 'The quick bro', mode: 'EN', key: 'o', hold: 65 },
  { text: 'The quick brow', mode: 'EN', key: 'w', hold: 65 },
  { text: 'The quick brown', mode: 'EN', key: 'n', hold: 65 },
  { text: 'The quick brown ', mode: 'EN', key: 'space', hold: 80 },
  { text: 'The quick brown f', mode: 'EN', key: 'f', hold: 65 },
  { text: 'The quick brown fo', mode: 'EN', key: 'o', hold: 65 },
  { text: 'The quick brown fox', mode: 'EN', key: 'x', hold: 900 },
  { text: 'The quick brown fox', mode: 'EN', chord: ['⌃', '⇧'], hold: 600 },
  { text: 'The quick brown fox', mode: 'VI', chord: ['⌃', '⇧'], hold: 1400 },
]

export type MethodId = 'telex' | 'vni' | 'simple_telex'

export const METHOD_SAMPLES: Record<MethodId, { keys: string; out: string }> = {
  telex: { keys: 'tieengs Vieetj', out: `ti${E_ACUTE_CIRC}ng Vi${E_DOT_CIRC}t` },
  vni: { keys: 'tie6ng1 Vie6t5', out: `ti${E_ACUTE_CIRC}ng Vi${E_DOT_CIRC}t` },
  simple_telex: { keys: 'tieengs Vieetj', out: `ti${E_ACUTE_CIRC}ng Vi${E_DOT_CIRC}t` },
}

export const ENGLISH_CASES = [
  { raw: 'text', wrong: 't\u1ebdt', right: 'text' },
  { raw: 'add', wrong: 'a\u0111', right: 'add' },
  { raw: 'request', wrong: 'requ\u1ebft', right: 'request' },
] as const
