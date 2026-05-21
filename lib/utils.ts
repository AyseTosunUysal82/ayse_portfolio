export type ClassNameValue = string | false | null | undefined;

/** Minimal class merge (kein tailwind-merge — ausreichend für BGPattern). */
export function cn(...inputs: ClassNameValue[]): string {
  return inputs.filter(Boolean).join(" ");
}
