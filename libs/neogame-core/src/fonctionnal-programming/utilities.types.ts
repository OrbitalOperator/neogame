export type First<T extends any[]> = T extends [infer L, ...any[]] ? L : never;
export type Last<T extends any[]> = T extends [...any[], infer L] ? L : never;
